/*------------------------------------*\
    $%WEB SERVER
\*------------------------------------*/
/* jslint node: true */

/**
 * Inform CLI when the server is up.
 * @private
 * @function cliServerUp
 * @memberOf NA~
 * @param {NA}     NA        NodeAtlas instance.
 * @param {string} urlOutput URL default access for website.
 * @param {string} message   Details provide with URL.
 */
function cliServerUp(NA, urlOutput, message) {
    var limit = Math.max(message.length + 2, urlOutput.length + 7),
        separator = "",
        i;

    for (i = 0; i < limit; i++) {
        separator += "=";
    }

    NA.log("");
    NA.log("\u001B[32m", separator);
    NA.log(" " + message);
    NA.log("\u001B[32m", " URL: \u001B[35m" + urlOutput);
    NA.log("\u001B[32m", separator);
    NA.log("");
}

/**
 * Run project folder with targeted directory (without webconfig) as a « public » directory.
 * @private
 * @function simpleWebServer
 * @memberOf NA#
 * @this NA
 */
exports.simpleWebServer = function () {
    var NA = this,
        fs = NA.modules.fs,
        http = NA.modules.http,
        https = NA.modules.https,
        path = NA.modules.path,
        url = NA.modules.url,
        open = NA.modules.open,
        express = NA.modules.express,
        compress = NA.modules.compress,
        httpHostname = NA.configuration.httpHostname || "localhost",
        httpPort = NA.configuration.httpPort || (NA.configuration.httpSecure ? 443 : 80),
        staticOptions = { maxAge: 86400000 * 30 },
        urlOutput = url.resolve("http" + (NA.configuration.httpSecure ? "s" : "") + '://' + httpHostname + ((httpPort === 80 && !NA.configuration.httpSecure) || (httpPort === 443 && NA.configuration.httpSecure) ? "" : ":" + httpPort) + "/", (typeof NA.configuration.browse === "string") ? NA.configuration.browse : "");
    
    /* Configure the server. */
    NA.httpServer = express();
    NA.httpServer.set("strict routing", true);
    NA.httpServer.set("x-powered-by", false);

    /* Use gzip and others client-server data compression. */
    NA.httpServer.use(compress());

    /* Create server. */
    if (NA.configuration.httpSecure && typeof NA.configuration.httpSecure === "string") {
        NA.server = https.createServer({
            key: fs.readFileSync(path.join(NA.serverPath, NA.configuration.httpSecure + ".key"), "utf-8"),
            cert: fs.readFileSync(path.join(NA.serverPath, NA.configuration.httpSecure + ".crt"), "utf-8")
        }, NA.httpServer);
    } else {
        NA.server = http.createServer(NA.httpServer);
    }

    /* No Cache */
    if (!NA.configuration.cache) {
        NA.httpServer.set("etag", false);
        NA.httpServer.get("/*", function(request, response, next) {
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Pragma", "no-cache");
            response.setHeader("Expires", 0);
            next(); 
        });
        staticOptions.maxAge = 0;
        staticOptions.etag = false;
        staticOptions.lastModified = false;
    }

    /* Provide all files behind possible HTTP Response in the current directory. */
    NA.httpServer.use(express.static(NA.serverPath, staticOptions));

    /* Open url provided at the default page in a tab of default system browser. */
    if (NA.configuration.browse) {
        open(urlOutput);
    }

    /* Listen HTTP(s) request. */
    NA.server.listen(httpPort, function () {
        var data = {
                path: path.join(NA.serverPath, NA.webconfigName)
            },
            message = NA.cliLabels.running.publicMode.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; });

        /* Inform CLI the server is running. */
        cliServerUp(NA, urlOutput, message);

        /* After website was started. */
        if (NA.afterRunning) {
            NA.afterRunning.call(NA);
        }
    });

    /* Catch error. */
    NA.server.on("error", function (error) {
        if (error && error.code === "EADDRINUSE") {
            NA.log(NA.cliLabels.running.portAlreadyListened.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return error[matches]; }));
        } else {
            NA.log(error);
        }

        /* In case of error, kill current process. */
        process.kill(process.pid);
    });
};

/**
 * Start a real NodeAtlas Server.
 * @public
 * @function nodeAtlasWebServer
 * @memberOf NA#
 * @this NA
 */
exports.nodeAtlasWebServer = function () {
    var NA = this,
        express = NA.modules.express,
        fs = NA.modules.fs,
        path = NA.modules.path,
        http = NA.modules.http,
        https = NA.modules.https;

    if (!NA.configuration.generate) {

        /**
         * A simple HTTP server.
         * @function httpServer
         * @memberOf NA#
         */
        NA.httpServer = express();

        /* Configure the server. */
        NA.httpServer.set('strict routing', true);
        NA.httpServer.set("x-powered-by", false);

        /* No Cache */
        if (!NA.webconfig.cache) {
            NA.httpServer.set('etag', false);
            NA.httpServer.get('/*', function(request, response, next) { 
                response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
                response.setHeader("Pragma", "no-cache");
                response.setHeader("Expires", 0);
                next(); 
            });
        }

        if (typeof NA.webconfig.httpSecure !== "boolean" && NA.webconfig.httpSecureKeyRelativePath && NA.webconfig.httpSecureCertificateRelativePath) {

            /* HTTPs version for a website. */
            NA.server = https.createServer({
                key: fs.readFileSync(path.join(NA.serverPath, NA.webconfig.httpSecureKeyRelativePath), 'utf-8'),
                cert: fs.readFileSync(path.join(NA.serverPath, NA.webconfig.httpSecureCertificateRelativePath), 'utf-8')
            }, NA.httpServer);
        } else {

            /**
             * The global HTTP server.
             * @function server
             * @memberOf NA#
             */
            NA.server = http.createServer(NA.httpServer);
        }

        /* Allow you to parse request and response. */
        NA.initMiddlewares();

        /* Allow you to parse the Less files. */
        NA.enableLessProcess();

        /* Allow you to parse the Styl files. */
        NA.enableStylusProcess();

        /* Allow you to use Session variables. */
        NA.initSessions();
    }
};

/**
 * Add middleware for parse request and response.
 * @private
 * @function initMiddlewares
 * @memberOf NA#
 * @this NA
 */
exports.initMiddlewares = function () {
    var NA = this,
        compress = NA.modules.compress,
        bodyParser = NA.modules.bodyParser,
        cookieParser = NA.modules.cookieParser,
        forceDomain = NA.modules.forceDomain,

    /**
     * Force address and port if extra 'www' or 'port' is enter in browser url bar.
     * @public
     * @alias enableForceDomain
     * @type {boolean}
     * @memberOf NA#webconfig
     * @default false
     */
    enableForceDomain = NA.webconfig.enableForceDomain,
    httpSecure = NA.webconfig.httpSecure;

    /* Use gzip and others client-server data compression. */
    NA.httpServer.use(compress());

    /* Force utilisation of www and avoid using the original port in address. Necessary without reverse proxy. */
    if (enableForceDomain) {
        NA.httpServer.use(forceDomain({
            hostname: NA.webconfig.urlHostname,
            port: NA.webconfig.urlPort,
            type: 'permanent',
            protocol: 'http' + ((httpSecure) ? 's' : '')
        }));
    }

    /* Allow you to parse the GET/POST data format. */
    NA.httpServer.use(bodyParser.urlencoded({ extended: true }));

    /* Allow you to parse the JSON data format. */
    NA.httpServer.use(bodyParser.json());

    /* Allow you to parse the Cookie data format. */
    NA.httpServer.use(cookieParser());
};

/**
 * Set the Sessions variables possibility.
 * @private
 * @function initSessions
 * @memberOf NA#
 * @this NA
 */
exports.initSessions = function () {
    var NA = this,
        optionSession = {},
        session = NA.modules.session;

    /**
     * Name for Session cookie of connected user.
     * @public
     * @alias sessionKey
     * @type {string}
     * @memberOf NA#webconfig
     * @default "nodeatlas.sid".
     */
    optionSession.key = NA.webconfig.sessionKey || "nodeatlas.sid";

    /**
     * Secret for Session cookie of connected user.
     * @public
     * @alias sessionSecret
     * @type {string}
     * @memberOf NA#webconfig
     * @default '1234567890bépo'.
     */
    optionSession.secret = NA.webconfig.sessionSecret || "1234567890bépo";
    optionSession.saveUninitialized = true;
    optionSession.resave = true;

    if (NA.webconfig.session) {

        /**
         * Use a more complexe session cookie options.
         * Replace `NA#webconfig.sessionKey` and `NA#webconfig.sessionSecret` if set.
         * @public
         * @alias session
         * @type {Object}
         * @memberOf NA#webconfig
         * @see {@link https://github.com/expressjs/session Session Middleware}
         */
        optionSession = NA.webconfig.session;
    }

    /**
     * A default session loaded with `NA#webconfig.sessionKey` and `NA#webconfig.sessionSecret` or `NA.webconfig#sessionKey` and `NA#webconfig.session`.
     * @public
     * @alias sessionStore
     * @type {Object}
     * @memberOf NA#
     * @see {@link https://github.com/expressjs/session Session Middleware}
     */
    NA.sessionStore = new session.MemoryStore();

    /* Use the `NA.controllers[<commonController>].setSessions(...)` function if set... */
    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].setSessions !== 'undefined') {

            /**
             * Define this function for configure sessions of application. Only for `common` controller file.
             * @function setSessions
             * @memberOf NA#controllers[]
             * @param {setSessions~callback} callback Next steps after configuration is done.
             */
            NA.controllers[NA.webconfig.commonController].setSessions.call(NA,

            /**
             * Next steps after set session is done.
             * @callback setSessions~callback
             */
            function () {
                NA.initConfigurations(session, optionSession);
            });
    /* ...else, just continue. */
    } else {
        NA.initConfigurations(session, optionSession);
    }
};

/**
 * Allow you to configure your own modules configuration.
 * @private
 * @function initConfigurations
 * @memberOf NA#
 * @this NA
 * @param {Object} session       Session Object.
 * @param {Object} optionSession Property for Object Session.
 */
exports.initConfigurations = function (session, optionSession) {
    var NA = this,
        path = NA.modules.path,
        url = NA.modules.url,
        fs = NA.modules.fs,
        socketio = NA.modules.socketio,
        optionIo = (NA.webconfig.urlRelativeSubPath) ? { 
            path: NA.webconfig.urlRelativeSubPath + '/socket.io', secure: ((NA.webconfig.httpSecure) ? true : false) 
        } : { 
            secure: ((NA.webconfig.httpSecure) ? true : false) 
        },
        io = socketio(NA.server, optionIo);

    optionSession.store = NA.sessionStore;
    NA.webconfig.session = optionSession;

    /* Create a cookie Session. */
    NA.httpServer.use(session(optionSession));

    /* Sync cookie Session with socket.io. */
    io.use(function (socket, next) {
        session(optionSession)(socket.request, socket.request.res, next);
    });

    // Deliver the `NA.io` object to client-side.
    if (NA.webconfig.urlSocketsFile) {
        NA.httpServer.get(url.format(path.join("/", NA.webconfig.urlRelativeSubPath, NA.webconfig.urlSocketsFile)), function (request, response) {
            response.setHeader("Content-type", "text/javascript; charset=utf-8");
            fs.readFile(path.join(NA.nodeatlasPath, "src", "socket.io.js"), "utf-8", function (err, content) {
                if (err) {
                    throw err;
                }

                response.write(content
                    .replace(/%urlRelativeSubPath%/g, NA.webconfig.urlRelativeSubPath.slice(1))
                    .replace(/%urlRoot%/g, NA.webconfig.urlRoot));
                response.end();
            });
        });
    }

    // Deliver the `NA.io` object to server-side.
    NA.io = io;

    /* Use the `NA.controllers[<commonController>].setSockets(...)` function if set... */
    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].setSockets !== 'undefined') {

            /**
             * Define this function for set WebSockets from both `common` and `specific` controller.
             * @function setSockets
             * @memberOf NA#controllers[]
             */
            NA.controllers[NA.webconfig.commonController].setSockets.call(NA);
    }

    // Global sockets
    NA.forEach(NA.webconfig.routes, function (route) {
        var controller;
        if (typeof route === "string") {
            route = NA.webconfig.routes[route];
        }
        if (route.controller) {
            /* Use the `NA.controllers[<controller>].setSockets(...)` function if set... */
            controller = require(path.join(NA.serverPath, NA.webconfig.controllersRelativePath, route.controller));
            if (controller.setSockets) {
                controller.setSockets.call(NA);
            }
        }
    });

    /* Use the `NA.controllers[<commonController>].setConfigurations(...)` function if set... */
    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].setConfigurations !== 'undefined') {

            /**
             * Define this function for configure all modules of your application. Only for `common` controller file.
             * @function setConfigurations
             * @memberOf NA#controllers[]
             * @param {setConfigurations~callback} callback Next steps after configuration is done.
             */
            NA.controllers[NA.webconfig.commonController].setConfigurations.call(NA,

            /**
             * Next steps after configuration is done.
             * @callback setConfigurations~callback
             */
            function () {
                NA.atlasServer();
            });
    /* ...else, just continue. */
    } else {
        NA.atlasServer();
    }
};

/**
 * Run the Server of NodeAtlas.
 * @private
 * @function atlasServer
 * @memberOf NA#
 */
exports.atlasServer = function () {
    var NA = this,
        commander = NA.modules.commander,
        open = NA.modules.open,
        path = NA.modules.path,
        url = NA.modules.url,
        httpPort = ((NA.webconfig.httpSecure) ? 443 : 80),
        urlOutput;

    if (NA.webconfig.httpPort) {
        httpPort = NA.webconfig.httpPort;
    }

    if (NA.configuration.httpPort) {
        httpPort = NA.configuration.httpPort;
    }

    if (commander.httpPort) {
        httpPort = commander.httpPort;
    }

    urlOutput = url.resolve(NA.webconfig.urlRoot, path.join(NA.webconfig.urlRelativeSubPath, ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));

    /* Listen HTTP(s) request... */
    NA.server.listen(httpPort, function () {
        var data = {
                httpPort: NA.webconfig.httpPort
            },
            message = NA.cliLabels.running.isRunning.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; });

        /* Inform CLI the server is running. */
        cliServerUp(NA, urlOutput, message);

        if (NA.afterRunning) {
            NA.afterRunning.call(NA);
        }
    });

    /* Catch error. */
    NA.server.on("error", function (error) {
        if (error && error.code === "EADDRINUSE") {
            NA.log(NA.cliLabels.running.portAlreadyListened.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return error[matches]; }));
        } else {
            NA.log(error);
        }

        /* In case of error, kill current process. */
        process.kill(process.pid);
    });

    /* If enableIndex index exist, we go to url later. */
    if (NA.configuration.browse && !NA.webconfig.enableIndex) {
        open(urlOutput);
    }
};

/**
 * Set the public directory for asset like CSS/JS and media.
 * @private
 * @function httpServerPublicFiles
 * @memberOf NA#
 */
exports.httpServerPublicFiles = function () {
    var NA = this,
        express = NA.modules.express,
        path = NA.modules.path,
        staticOptions = { maxAge: 86400000 * 30 };

    /* No Cache */
    if (!NA.webconfig.cache) {
        staticOptions.etag = false;
        staticOptions.maxAge = 0;
        staticOptions.lastModified = false;
    }

    /**
     * Set information for static file from `assetsRelativePath`.
     * @public
     * @see http://expressjs.com/api.html#express.static for options.
     * @alias staticOptions
     * @type {string}
     * @memberOf NA#webconfig
     */
    staticOptions = NA.extend(staticOptions, NA.webconfig.staticOptions);

    if (!NA.configuration.generate) {
        NA.httpServer.use(NA.webconfig.urlRelativeSubPath, express.static(path.join(NA.serverPath, NA.webconfig.assetsRelativePath), staticOptions));
    }
};

/**
 * Set the all public directory from `NA#webconfig.statics`.
 * @private
 * @function httpServerStaticsFiles
 * @memberOf NA#
 */
exports.httpServerStaticsFiles = function () {
    var NA = this,
        express = NA.modules.express,
        path = NA.modules.path,
        staticOptions = { maxAge: 86400000 * 30 };

    /* No Cache */
    if (!NA.webconfig.cache) {
        staticOptions.etag = false;
        staticOptions.maxAge = 0;
        staticOptions.lastModified = false;
    }

    /**
     * Set information for static file from `assetsRelativePath`.
     * @public
     * @see http://expressjs.com/api.html#express.static for options.
     * @alias staticOptions
     * @type {string}
     * @memberOf NA#webconfig
     */
    staticOptions = NA.extend(staticOptions, NA.webconfig.staticOptions);

    if (!NA.configuration.generate) {
        NA.httpServer.use(NA.webconfig.urlRelativeSubPath, express.static(path.join(NA.serverPath, NA.webconfig.assetsRelativePath), staticOptions));
    }
};

/**
 * Send HTML result to the client.
 * @private
 * @function response
 * @memberOf NA#
 * @param {Object} request         Initial request.
 * @param {Object} response        Initial response.
 * @param {string} data            HTML DOM ready for sending.
 * @param {Object} routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {Object} locals          Local variables for the current page.
 */
exports.response = function (request, response, data, routeParameters, locals) {
    var NA = this,
        header,

        /**
         * Charset used for render of this page.
         * @public
         * @alias charset
         * @type {string}
         * @memberOf NA#routeParameters
         * @default "utf-8"
         */
        charset = locals.routeParameters.charset || routeParameters.charset || NA.webconfig.charset,

        /**
         * Status Code used for respond with this page.
         * @public
         * @alias statusCode
         * @type {number}
         * @memberOf NA#routeParameters
         * @default 200
         */
        statusCode = locals.routeParameters.statusCode || routeParameters.statusCode || 200,

        /**
         * Content Type used for respond with this page.
         * @public
         * @alias mimeType
         * @type {string}
         * @memberOf NA#routeParameters
         * @default "text/html"
         */
        mimeType = locals.routeParameters.mimeType || routeParameters.mimeType || NA.webconfig.mimeType,

        /**
         * Headers value used for respond with this page.
         * @public
         * @alias mimeType
         * @type {string}
         * @memberOf NA#routeParameters
         * @default "text/html"
         */
        headers = locals.routeParameters.headers || routeParameters.headers || {};

    /* Set charset and  */
    response.statusCode = statusCode;

    /* Set headers into response */
    response.setHeader("Content-Type", mimeType + ";" + " charset=" + charset);
    for (header in NA.webconfig.headers) {
        if (!NA.webconfig.headers.hasOwnProperty(header)) {
            continue;
        }
        if (NA.webconfig.headers[header] === false) {
            response.removeHeader(header);
        } else {
            response.setHeader(header, NA.webconfig.headers[header]);
        }
    }
    for (header in headers) {
        if (!headers.hasOwnProperty(header)) {
            continue;
        }
        if (headers[header] === false) {
            response.removeHeader(header);
        } else {
            response.setHeader(header, headers[header]);
        }
    }

    /* Set/Send body */
    response.write(data);
    response.end();
};

/**
 * Redirect a page to an other page if option page is set for that.
 * @private
 * @function redirect
 * @memberOf NA#
 * @param {Object} routeParameters All information associate with the redirection.
 * @param {Object} request                Initial request.
 * @param {Object} response               Initial response.
 */
exports.redirect = function (routeParameters, request, response) {
    var NA = this,
        location,
        path = NA.modules.path;

    /* Re-inject param into redirected url if is replaced by regex. */
    if (routeParameters.regExp) {

        /**
         * Represent route to redirect if current route matched.
         * @public
         * @alias redirect
         * @type {string}
         * @memberOf NA#routeParameters
         */
        location = routeParameters.redirect.replace(/\$([0-9]+)/g, function (regex, matches) { return request.params[matches]; });
    /* Or by standard selector. */
    } else {
        location = routeParameters.redirect.replace(/\:([a-z0-9]+)/g, function (regex, matches) { return request.params[matches]; });
    }

    /* Set status and new location. */
    response.writeHead(routeParameters.statusCode, {
        Location: path.join(NA.webconfig.urlRelativeSubPath, location)
    });

    /* No more data. */
    response.end();
};

/**
 * Affect support of GET/POST to a route.
 * @private
 * @function setSupport
 * @memberOf NA#
 * @param {boolean} support Type of support GET or POST.
 * @param {boolean} path    Instruction support for all page.
 * @param {boolean} options Instruction support for current page.
 */
exports.setSupport = function (support, common, specific) {

    /* Manage GET / POST / PUT / DELETE support for an url. */
    if (common === false) {
        support = false;
    }

    if (specific === false) {
        support = false;
    }

    if (specific === true) {
        support = true;
    }

    return support;
};

/**
 * Ask for a page in GET, POST, UPDATE or DELETE.
 * @private
 * @function executeRequest
 * @memberOf NA#
 * @param {boolean} getSupport  This page can be requested by GET ?
 * @param {boolean} postSupport This page can be requested by POST ?
 * @param {boolean} putSupport  This page can be requested by PUT ?
 * @param {boolean} deleteSupport This page can be requested by DELETE ?
 * @param {string} objectPath   The list of Url match for obtain response.
 * @param {Object} options      Option associate to this url.
 * @param {string} path         The Url in routes' webconfig.
 */
exports.executeRequest = function (getSupport, postSupport, putSupport, deleteSupport, objectPath, options, path) {
    var NA = this,
        routeParameters;

    /* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
    if (typeof path === "object") {
        routeParameters = path;
    } else {
        routeParameters = options[path];
    }

    /** Execute Get Request */
    if (getSupport) {
        NA.httpServer.get(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.render(path, options, request, response);
            }
        });
    }

    /** Execute Post Request */
    if (postSupport) {
        NA.httpServer.post(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                 /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.render(path, options, request, response);
            }
        });
    }

    /** Execute Put Request */
    if (putSupport) {
        NA.httpServer.put(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.render(path, options, request, response);
            }
        });
    }

    /** Execute Delete Request */
    if (deleteSupport) {
        NA.httpServer.delete(objectPath, function (request, response) {
            /* Verify if route is a redirection... */
            if (routeParameters.redirect && routeParameters.statusCode) {
                 /* ...and if is it, redirect... */
                NA.redirect(routeParameters, request, response);
            } else {
                /* ...else execute render... */
                NA.render(path, options, request, response);
            }
        });
    }
};

/**
 * Listen a specific request.
 * @private
 * @function request
 * @memberOf NA#
 * @param {string} path    The url listening.
 * @param {Object} options Option associate to this url.
 */
exports.request = function (path, options) {
    var NA = this,
        routeParameters,
        getSupport = true,
        postSupport = true,
        putSupport = false,
        deleteSupport = false,
        currentPath = path,
        objectPath;

    /* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
    if (typeof path === "object") {
        routeParameters = path;
    } else {
        routeParameters = options[path];
    }

    /* Case of `routeParameters.url` replace `path` because `path` is used like a key. */
    if (routeParameters.url) {

        /**
         * If setted, replace « The url listening ». « The url listening. » become a « key » value.
         * @public
         * @alias url
         * @type {string}
         * @memberOf NA#routeParameters
         */
        currentPath = routeParameters.url;
    }

    /* Adding of subfolder before url listening. */
    objectPath = NA.webconfig.urlRelativeSubPath + currentPath;

    /* Manage GET / POST / PUT / DELETE support for an url. */
    getSupport = NA.setSupport(getSupport,

        /**
         * Allow you to avoid or authorize GET response for all page.
         * @public
         * @alias getSupport
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        NA.webconfig.getSupport,

        /**
         * Allow you to avoid or authorize GET response for current page.
         * @public
         * @alias getSupport
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default true
         */
        routeParameters.getSupport
    );
    postSupport = NA.setSupport(postSupport,

        /**
         * Allow you to avoid or authorize POST response for all page.
         * @public
         * @alias postSupport
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default true
         */
        NA.webconfig.postSupport,

        /**
         * Allow you to avoid or authorize POST response for current page.
         * @public
         * @alias postSupport
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default true
         */
        routeParameters.postSupport
    );
    putSupport = NA.setSupport(putSupport,

        /**
         * Allow you to avoid or authorize PUT response for all page.
         * @public
         * @alias putSupport
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.putSupport,

        /**
         * Allow you to avoid or authorize PUT response for current page.
         * @public
         * @alias putSupport
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default false
         */
        routeParameters.putSupport
    );
    deleteSupport = NA.setSupport(deleteSupport,

        /**
         * Allow you to avoid or authorize DELETE response for all page.
         * @public
         * @alias deleteSupport
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.deleteSupport,

        /**
         * Allow you to avoid or authorize DELETE response for current page.
         * @public
         * @alias deleteSupport
         * @type {boolean}
         * @memberOf NA#routeParameters
         * @default false
         */
        routeParameters.deleteSupport
    );

    /* Ask for a page in GET, POST, PUT or DELETE. */
    NA.requestRegex(getSupport, postSupport, putSupport, deleteSupport, objectPath, options, path, routeParameters);
};

/**
 * Listen a specific request (Regex Part).
 * @private
 * @function requestRegex
 * @memberOf NA#
 * @param {boolean} getSupport             This page can be requested by GET ?
 * @param {boolean} postSupport            This page can be requested by POST ?
 * @param {boolean} putSupport             This page can be requested by PUT ?
 * @param {boolean} deleteSupport          This page can be requested by DELETE ?
 * @param {string}  objectPath             The list of Url match for obtain response.
 * @param {Object}  options                Option associate to this url.
 * @param {string}  path                   The Url in routes' webconfig.
 * @param {Object}  routeParameters Parameters for this route.
 */
exports.requestRegex = function (getSupport, postSupport, putSupport, deleteSupport, objectPath, options, path, routeParameters) {
    var NA = this;

    /* Allow you to use regex into your url route... */
    if (
        /**
         * Use RegExp expression as selector for route url If setted to true.
         * Same if is a string but string represent option like "g".
         * @public
         * @alias regExp
         * @type {string|boolean}
         * @default false
         * @memberOf NA#routeParameters
         */
        routeParameters.regExp
    ) {

        /* ...with options... */
        if (typeof routeParameters.regExp === 'string') {
            objectPath = new RegExp(objectPath, routeParameters.regExp);
        /* ...or not... */
        } else {
            objectPath = new RegExp(objectPath);
        }
    }

    /* Ask for a page in GET and in POST. */
    NA.executeRequest(getSupport, postSupport, putSupport, deleteSupport, objectPath, options, path);
};

/**
 * Define a page to display when no url match in route or in `NA#httpServerPublicFiles` directory.
 * @private
 * @function pageNotFound
 * @memberOf NA#
 */
exports.pageNotFound = function () {
    var NA = this,
        pageNotFound,
        key,
        route,

        /**
         * Represent route to use if no route match in all route.
         * @public
         * @alias pageNotFound
         * @type {string}
         * @memberOf NA#webconfig
         */
        pageNotFoundUrl = NA.webconfig.pageNotFound;

    if (NA.webconfig.routes instanceof Array) {
        for (route of NA.webconfig.routes) {
            key = route.key || route.url;
            if (NA.webconfig.pageNotFound && key === NA.webconfig.pageNotFound) {
                pageNotFound = route;
                pageNotFoundUrl = route;
            }
        }
    } else if (NA.webconfig.pageNotFound && NA.webconfig.routes[NA.webconfig.pageNotFound]) {
        pageNotFound = NA.webconfig.routes[NA.webconfig.pageNotFound];
    }

    if (pageNotFound) {
        /* Match all Get Request */
        NA.httpServer.get("*", function (request, response) {
            /* Verify if route for `pageNotFound` is a redirection... */
            if (pageNotFound.redirect && pageNotFound.statusCode) {
                /* ...and if is it, redirect... */
                NA.redirect(pageNotFound, request, response);
            } else {
                /* ...else execute render... */
                NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
            }
        });
        /* Match all Post Request */
        NA.httpServer.post("*", function (request, response) {
            /* Verify if route for `pageNotFound` is a redirection... */
            if (pageNotFound.redirect && pageNotFound.statusCode) {
                /* ...and if is it, redirect... */
                NA.redirect(pageNotFound, request, response);
            } else {
                /* ...else execute render... */
                NA.render(pageNotFoundUrl, NA.webconfig.routes, request, response);
            }
        });
    }
};

/**
 * Run the Server Routes.
 * @private
 * @function atlasRoutes
 * @memberOf NA#
 * @param {atlasRoutes~callback} callback Calling next processus after route was loaded.
 */
exports.atlasRoutes = function (callback) {
    var NA = this;

    if (!NA.configuration.generate) {
        /* For each `webconfig.routes`. */
        NA.forEach(NA.webconfig.routes, function (currentUrl) {
            NA.request(currentUrl, NA.webconfig.routes);
        });
    }

    /**
     * Next step !
     * @callback atlasRoutes~callback
     */
    callback();
};

/**
 * Crawl all routes and execute each file with a request that it emit by client.
 * @private
 * @function routesPages
 * @memberOf NA#
 * @param {routesPages~callback} callback Calling next processus after route was loaded.
 */
exports.routesPages = function (callback) {
    var NA = this;

    if (typeof NA.controllers[NA.webconfig.commonController] !== 'undefined' &&
        typeof NA.controllers[NA.webconfig.commonController].setRoutes !== 'undefined') {

            /**
             * Define this function for configure all modules of your application. Only for `common` controller file.
             * @function setRoutes
             * @memberOf NA#controllers[]
             * @param {setConfigurations~callback} callback Next steps after routes is done.
             */
            NA.controllers[NA.webconfig.commonController].setRoutes.call(NA,

            /**
             * Next steps after routes is done.
             * @callback setRoutes~callback
             */
            function () {
                NA.atlasRoutes(callback);
            });
    /* ...else, just continue. */
    } else {
        NA.atlasRoutes(callback);
    }
};
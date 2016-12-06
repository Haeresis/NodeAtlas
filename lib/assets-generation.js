/*------------------------------------*\
    $%ASSETS GENERATION
\*------------------------------------*/
/* jslint node: true */

/**
 * Open all pages for generate render into `serverlessRelativePath`.
 * @private
 * @function urlGeneratingPages
 * @memberOf NA#
 */
exports.urlGeneratingPages = function () {
    var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        data = {},
        htmlGenerateEnable = true;

    /* Avoid copy of `assetsRelativePath` into `serverlessRelativePath` even if serverlessRelativePath directory exist. */
    if (typeof NA.webconfig.htmlGenerateEnable === 'boolean') {

        /**
         * Disable HTML generate mechanism.
         * @public
         * @alias htmlGenerateEnable
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false.
         */
        htmlGenerateEnable = NA.webconfig.htmlGenerateEnable;
    }

    /* Generation only if is configured to « true » in `generate` or set co command line. */
    if (NA.configuration.generate) {

        /* Generate all HTML files. */
        if (htmlGenerateEnable) {
            fs.exists(path.join(NA.serverPath, NA.webconfig.serverlessRelativePath), function (exists) {
                if (exists) {
                    NA.forEach(NA.webconfig.routes, function (currentUrl) {
                        NA.render(currentUrl, NA.webconfig.routes);
                    });
                } else {
                    data.templatePath = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath);
                    NA.log(NA.appLabels.templateDirectoryNotExist.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                }
            });
        }

        NA.urlGeneratingAssets();
    }
};

/**
 * Compress all assets for generate render into `serverlessRelativePath`.
 * @private
 * @function urlGeneratingAssets
 * @memberOf NA#
 */
exports.urlGeneratingAssets = function () {
    var NA = this,
        fs = NA.modules.fs,
        async = NA.modules.async,
        path = NA.modules.path,
        traverseDirectory = NA.modules.traverseDirectory,
        sourcePath = path.join(NA.serverPath, NA.webconfig.assetsRelativePath),
        destinationPath = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath),
        traverse,
        htmlGenerateEnable = true;

    /* Generate all minified CSS, JS and Images files. */
    async.parallel([
        NA.cssCompilation.bind(NA),
        NA.jsObfuscation.bind(NA),
        NA.imgOptimization.bind(NA)
    ], function () {

        /* Copy all content of `assetsRelativePath` into `serverlessRelativePath` */
        if (sourcePath !== destinationPath && htmlGenerateEnable && fs.existsSync(destinationPath)) {
            traverse = new traverseDirectory(
              sourcePath,
              destinationPath
            );

            traverse.directory(function (source, target, next) {
                next(traverseDirectory.copydir, source, target);
            });

            traverse.file(function (source, target, next) {
                next(traverseDirectory.copyfile, source, target);
            });

            traverse.on('complete', function () {        
                NA.log(NA.appLabels.assetsCopy);
                if (NA.afterGeneration) {
                    NA.afterGeneration();
                }
            });

            traverse.run();
        } else {
            if (NA.afterGeneration) {
                NA.afterGeneration();
            }
        }
    });
};

/**
 * Create a « Overview » page to « / » url with all of page accessible via links.
 * @private
 * @function emulatedIndexPage
 * @memberOf NA#
 */
exports.emulatedIndexPage = function () {
    var NA = this,
        url = NA.modules.url,
        path = NA.modules.path,
        open = NA.modules.open,
        urlOutput = url.resolve(NA.webconfig.urlRoot, path.join(NA.webconfig.urlRelativeSubPath, ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));

    /* Only if server was started and `enableIndex` is set to « true ». */
    if (!NA.configuration.generate &&

        /**
         * Allow NodeAtlas to create a root page with link to all routes for development if set to true.
         * @public
         * @alias enableIndex
         * @type {boolean}
         * @memberOf NA#webconfig
         * @default false
         */
        NA.webconfig.enableIndex
    ) {

        /* Create a new path to « / ». Erase the route to « / » defined into `routes`. */
        NA.httpServer.get(NA.webconfig.urlRelativeSubPath + "/", function (request, response) {
            var data = {},
                matches = function (regex, matches) { return data[matches]; };

                data.render = '';

            /* List all routes... */
            NA.forEach(NA.webconfig.routes, function (page) {
                data.page = page;

                if (NA.webconfig.routes[page].url) {
                    data.page = NA.webconfig.routes[page].url;
                }

                data.page = decodeURIComponent(data.page);

                data.render += NA.appLabels.emulatedIndexPage.line.replace(/%([\-a-zA-Z0-9_]+)%/g, matches);
            });

            /* ...and provide a page. */
            response.writeHead(200, NA.appLabels.emulatedIndexPage.charsetAndType);
            response.write(NA.appLabels.emulatedIndexPage.data.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
            response.end();
        });

        /* Display index after all routes are setted. */
        if (NA.configuration.browse) {
            open(urlOutput);
        }
    }
};

/**
 * Generate a template into an HTML file in folder `serverlessRelativePath`.
 * @private
 * @function saveTemplateRender
 * @memberOf NA#
 * @param {string} data               Content of file generated.
 * @param {string} templateRenderName The filename of file generated.
 */
exports.saveTemplateRender = function (data, templateRenderName) {
    var NA = this,
        fs = NA.modules.fs,
        cheerio = NA.modules.cheerio,
        mkpath = NA.modules.mkpath,
        path = NA.modules.path,
        pathToSaveFileComplete = path.join(
            NA.serverPath,
            NA.webconfig.serverlessRelativePath,
            (templateRenderName) ? templateRenderName : ''
        ),
        pathToSaveFile = path.dirname(pathToSaveFileComplete),
        $ = cheerio.load(data, { decodeEntities: false }),
        deeper,
        newBase = "";

    /*
     * If false, no generate for this line.
     */
    if (templateRenderName !== false) {

        /*
         * If templateRenderName ending with '/', remove it.
         */
        templateRenderName = templateRenderName.replace(/\/$/g, '');

        /*
         * If a <base> markup exist, calculation of
         * relative placement of page under root folder...
         */
        deeper = templateRenderName.split('/').length - 1;
        if (templateRenderName[0] === '/') {
            deeper = templateRenderName.split('/').length - 2;
        }

        /* ...and creation of path for all resources */
        for (var i = 0; i < deeper; i++) {
            newBase += '../';
        }

        /* ...and set new base */
        $("base").attr("href", newBase);

        /* Create file render. */
        mkpath(pathToSaveFile, function () {
            var dataError = {},
                innerHTML = $.html();

            /* If source is not a HTML format, keep initial data format. */
            if (data.trim().match(/<\/html>$/g) === null) {
                innerHTML = data;
            }

            dataError.pathName = path.join(NA.serverPath, NA.webconfig.serverlessRelativePath, templateRenderName);

            /* Write file */
            fs.writeFile(pathToSaveFileComplete, innerHTML, function (error) {
                if (error) {
                    if (error.code === 'EISDIR' || error.code === 'ENOENT') {
                        NA.log(NA.appLabels.templateNotGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                    } else {
                        throw error;
                    }
                } else {
                    NA.log(NA.appLabels.templateGenerate.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return dataError[matches]; }));
                }
            });

        });
    }
};

/**
 * Copy content of a project from `node-atlas/templates` into current directory.
 * @private
 * @function generateStartingProject
 * @memberOf NA#
 * @param {generateStartingProject~fallback} fallback The next steps if no init command exist.
 */
exports.generateStartingProject = function (fallback) {
     var NA = this,
        fs = NA.modules.fs,
        path = NA.modules.path,
        source = (typeof NA.configuration.create === "string") ? NA.configuration.create : "hello-world",
        traverseDirectory = NA.modules.traverseDirectory,
        sourcePath = path.join(NA.nodeatlasPath, "templates", source),
        destinationPath = path.join(NA.serverPath),
        data = {},
        traverse;

    if (NA.configuration.create) {

        /* Copy starting project from templates directory. By default its "hello-world". */
        if (sourcePath !== destinationPath && fs.existsSync(sourcePath)) {
            traverse = new traverseDirectory(
              sourcePath,
              destinationPath
            );

            traverse.directory(function (source, target, next) {
                next(traverseDirectory.copydir, source, target);
            });

            traverse.file(function (source, target, next) {
                next(traverseDirectory.copyfile, source, target);
            });

            traverse.on('complete', function () {   
                data.pathName = sourcePath;
                NA.log(NA.appLabels.initCopy.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
                if (NA.afterNewProject) {
                    NA.afterNewProject();
                }
            });

            traverse.run();
        } else {
            data.initPath = source;
            NA.log(NA.appLabels.initNotFound.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
        }
    } else {

        /**
         * Next step if no starting project !
         * @callback atlasRoutes~callback
         */
        fallback();
    }
};
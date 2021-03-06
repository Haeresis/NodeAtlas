/*------------------------------------*\
	ROUTES
\*------------------------------------*/
/* jslint node: true */

/**
 * Add route to express.
 * @private
 * @function loadRoutes
 * @memberOf NA~
 * @param {NA} NA NodeAtlas instance.
 */
function loadRoutes(NA) {
	/* For each `webconfig.routes`. */
	NA.forEach(NA.webconfig.routes, function (currentUrl) {
		NA.request(currentUrl, NA.webconfig.routes);
	});
}

/**
 * Crawl all routes and execute each file with response requested by client after passed into `NA#controllers[].setRoutes` hook.
 * @private
 * @function initRoutes
 * @memberOf NA#
 * @this NA
 */
exports.initRoutes = function () {
	var NA = this,
		runIndexPage = function () {
			/* Only if server was started and `index` is set to « true ». */
			if (

				/**
				 * Allow NodeAtlas to create a root page with a link for each routes if set to true.
				 * @public
				 * @alias index
				 * @type {boolean}
				 * @memberOf NA#webconfig
				 * @default false
				 */
				NA.webconfig.index) {
					NA.indexPage();
			}
		};

	if (typeof NA.controllers[NA.webconfig.controller] !== 'undefined' &&
		typeof NA.controllers[NA.webconfig.controller].setRoutes !== 'undefined') {

			/**
			 * Set all routes before the index was started.
			 * @function setRoutes
			 * @memberOf NA#controllers[]
			 * @this NA
			 * @param {NA~callback} next Next steps after routes are setted.
			 */
			NA.controllers[NA.webconfig.controller].setRoutes.call(NA, function () {
				runIndexPage();
				loadRoutes(NA);
				NA.pageNotFound();
			});

	/* ...else, just continue. */
	} else {
		runIndexPage();
		loadRoutes(NA);
		NA.pageNotFound();
	}
};

/**
 * Create a « Overview » page to « / » url with all of page accessible via links.
 * @private
 * @function indexPage
 * @memberOf NA#
 * @this NA
 */
exports.indexPage = function () {
	var NA = this,
		url = NA.modules.url,
		path = NA.modules.path,
		opn = NA.modules.opn,
		urlOutput = url.resolve(NA.webconfig.urlRoot, path.join(NA.webconfig.urlRelativeSubPath, ((typeof NA.configuration.browse === 'string') ? NA.configuration.browse : "")));

	/* Create a new path to « / ». Erase the route to « / » defined into `routes`. */
	NA.express.get(url.format(path.join("/", NA.webconfig.urlRelativeSubPath, "/")), function (request, response) {
		var data = {},
			matches = function (regex, matches) { return data[matches]; };

		data.render = "";

		/* List all routes... */
		NA.forEach(NA.webconfig.routes, function (page) {
			var routeParameters;

			if (typeof page !== "string") {
				routeParameters = page;
			} else {
				routeParameters = NA.webconfig.routes[page];
			}

			data.page = page;
			if (routeParameters.url) {
				data.page = routeParameters.url;
			}

			if (routeParameters.output !== false) {
				data.page = decodeURIComponent(data.page);
				data.render += NA.cliLabels.indexPage.line.replace(/%([\-a-zA-Z0-9_]+)%/g, matches);
			}
		});

		/* ...and provide a page. */
		response.writeHead(200, NA.cliLabels.indexPage.charsetAndType);
		response.end(NA.cliLabels.indexPage.data.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return data[matches]; }));
	});

	/* Display index after all routes are setted. */
	if (NA.configuration.browse) {
		opn(urlOutput);
	}
};

/**
 * Set the public directory for asset like CSS/JS and media.
 * @private
 * @function initStatics
 * @memberOf NA#
 * @this NA
 */
exports.initStatics = function () {
	var NA = this,
		express = NA.modules.express,
		path = NA.modules.path,
		url = NA.modules.url,
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

	NA.express.use(NA.webconfig.urlRelativeSubPath, express.static(path.join(NA.serverPath, NA.webconfig.assetsRelativePath), staticOptions));

	NA.forEach(NA.webconfig.statics, function (directory, directories) {
		var virtual = directory,
			real = directories[directory],
			options;

		if (NA.webconfig.statics instanceof Array) {
			virtual = directory.virtual;
			real = directory;
		}

		if (typeof real === "object") {
			options = real.staticOptions || staticOptions;
			real = real.path;
		}

		NA.express.use(url.format(path.join(NA.webconfig.urlRelativeSubPath, virtual)), express.static(path.join(NA.serverPath, real), options));
	});
};

/**
 * Affect support of GET, POST, UPDATE, DELETE and OPTIONS to a route.
 * @private
 * @function setSupport
 * @memberOf NA~
 * @param {boolean} support Type of support GET, POST, PUT, DELETE or OPTIONS.
 * @param {boolean} path    Instruction support for all page.
 * @param {boolean} options Instruction support for current page.
 * @return {boolean} if support is effective;
 */
function setSupport(support, common, specific) {

	/* Manage GET / POST / PUT / DELETE / OPTIONS support for an url. */
	if (common === false || common === "false") {
		support = false;
	}

	if (common === true || common === "true") {
		support = true;
	}

	if (specific === false || specific === "false") {
		support = false;
	}

	if (specific === true || specific === "true") {
		support = true;
	}

	return support;
}

/**
 * Set parameters authorization.
 * @private
 * @function supportGet
 * @memberOf NA~
 * @param {NA}      NA              NodeAtlas instance.
 * @param {Object}  routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {boolean} getSupport      Represent initial state of support.
 * @return {boolean} if support is effective;
 */
function supportGet(NA, routeParameters, getSupport) {
	return setSupport(getSupport,

		/**
		 * Allow you to avoid or authorize GET response for all page.
		 * @public
		 * @alias get
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default true
		 */
		NA.webconfig.get,

		/**
		 * Allow you to avoid or authorize GET response for current page.
		 * @public
		 * @alias get
		 * @type {boolean}
		 * @memberOf NA#locals.routeParameters
		 * @default true
		 */
		routeParameters.get
	);
}

/**
 * Set parameters authorization.
 * @private
 * @function supportPost
 * @memberOf NA~
 * @param {NA}      NA              NodeAtlas instance.
 * @param {Object}  routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {boolean} postSupport     Represent initial state of support.
 * @return {boolean} if support is effective;
 */
function supportPost(NA, routeParameters, postSupport) {
	return setSupport(postSupport,

		/**
		 * Allow you to avoid or authorize POST response for all page.
		 * @public
		 * @alias post
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default true
		 */
		NA.webconfig.post,

		/**
		 * Allow you to avoid or authorize POST response for current page.
		 * @public
		 * @alias post
		 * @type {boolean}
		 * @memberOf NA#locals.routeParameters
		 * @default true
		 */
		routeParameters.post
	);
}

/**
 * Set parameters authorization.
 * @private
 * @function supportPut
 * @memberOf NA~
 * @param {NA}      NA              NodeAtlas instance.
 * @param {Object}  routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {boolean} putSupport      Represent initial state of support.
 * @return {boolean} if support is effective;
 */
function supportPut(NA, routeParameters, putSupport) {
	return setSupport(putSupport,

		/**
		 * Allow you to avoid or authorize PUT response for all page.
		 * @public
		 * @alias put
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default false
		 */
		NA.webconfig.put,

		/**
		 * Allow you to avoid or authorize PUT response for current page.
		 * @public
		 * @alias put
		 * @type {boolean}
		 * @memberOf NA#locals.routeParameters
		 * @default false
		 */
		routeParameters.put
	);
}

/**
 * Set parameters authorization.
 * @private
 * @function supportDelete
 * @memberOf NA~
 * @param {NA}      NA              NodeAtlas instance.
 * @param {Object}  routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {boolean} deleteSupport   Represent initial state of support.
 * @return {boolean} if support is effective;
 */
function supportDelete(NA, routeParameters, deleteSupport) {
	return setSupport(deleteSupport,

		/**
		 * Allow you to avoid or authorize DELETE response for all page.
		 * @public
		 * @alias delete
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default false
		 */
		NA.webconfig.delete,

		/**
		 * Allow you to avoid or authorize DELETE response for current page.
		 * @public
		 * @alias delete
		 * @type {boolean}
		 * @memberOf NA#locals.routeParameters
		 * @default false
		 */
		routeParameters.delete
	);
}

/**
 * Set parameters authorization.
 * @private
 * @function supportOptions
 * @memberOf NA~
 * @param {NA}      NA              NodeAtlas instance.
 * @param {Object}  routeParameters Parameters set into `routes[<currentRoute>]`.
 * @param {boolean} optionsSupport  Represent initial state of support.
 * @return {boolean} if support is effective;
 */
function supportOptions(NA, routeParameters, optionsSupport) {
	return setSupport(optionsSupport,

		/**
		 * Allow you to avoid or authorize OPTIONS response for all page.
		 * @public
		 * @alias options
		 * @type {boolean}
		 * @memberOf NA#webconfig
		 * @default false
		 */
		NA.webconfig.options,

		/**
		 * Allow you to avoid or authorize OPTIONS response for current page.
		 * @public
		 * @alias options
		 * @type {boolean}
		 * @memberOf NA#locals.routeParameters
		 * @default false
		 */
		routeParameters.options
	);
}

/**
 * Listen a specific request.
 * @private
 * @function request
 * @memberOf NA#
 * @this NA
 * @param {string} path    The url listening.
 * @param {Object} options Options associate to this url.
 */
exports.request = function (path, options) {
	var NA = this,
		routeParameters,
		getSupport = true,
		postSupport = true,
		putSupport = false,
		deleteSupport = false,
		optionsSupport = false,
		objectPath;

	/* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
	if (typeof path === "object") {
		routeParameters = path;
	} else {
		routeParameters = options[path];
	}

	/* Adding of subfolder before url listening. */
	objectPath = NA.webconfig.urlRelativeSubPath + ((

		/**
		 * If setted, replace « The url listening ». « The url listening. » become a « key » value.
		 * @public
		 * @alias url
		 * @type {string}
		 * @memberOf NA#locals.routeParameters
		 */
		routeParameters.url) ? routeParameters.url : path);

	/* Manage GET / POST / PUT / DELETE / OPTIONS support for an url. */
	getSupport = supportGet(NA, routeParameters, getSupport);
	postSupport = supportPost(NA, routeParameters, postSupport);
	putSupport = supportPut(NA, routeParameters, putSupport);
	deleteSupport = supportDelete(NA, routeParameters, deleteSupport);
	optionsSupport = supportOptions(NA, routeParameters, optionsSupport);

	/* Ask for a page in GET, POST, PUT or DELETE. */
	NA.requestRegex({
		getSupport: getSupport,
		postSupport: postSupport,
		putSupport: putSupport,
		deleteSupport: deleteSupport,
		optionsSupport: optionsSupport
	}, objectPath, options, path, routeParameters);
};

/**
 * Listen a specific request (Regex Part).
 * @private
 * @function requestRegex
 * @memberOf NA#
 * @param {Object}  support                Contain all GET, POST, PUT, DELETE or OPTIONS capability.
 * @param {boolean} support.getSupport     This page can be requested by GET ?
 * @param {boolean} support.postSupport    This page can be requested by POST ?
 * @param {boolean} support.putSupport     This page can be requested by PUT ?
 * @param {boolean} support.deleteSupport  This page can be requested by DELETE ?
 * @param {boolean} support.optionsSupport This page can be requested by OPTIONS ?
 * @param {string}  objectPath             The list of Url match for obtain response.
 * @param {Object}  options                Option associate to this url.
 * @param {string}  path                   The Url in routes' webconfig.
 * @param {Object}  routeParameters Parameters for this route.
 */
exports.requestRegex = function (support, objectPath, options, path, routeParameters) {
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
		 * @memberOf NA#locals.routeParameters
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

	/* Ask for a page in GET / POST / PUT / DELETE / OPTIONS. */
	NA.executeRequest(support, objectPath, options, path);
};

/**
 * Prepare locals and headers.
 * @private
 * @function prepare
 * @memberOf NA~
 * @param {NA}      NA      NodeAtlas instance.
 * @param {Object}  path    Key/Path for routes.
 * @param {boolean} options Value(s) for routes.
 * @return {function} Preparation middleware.
 */
function prepare(NA, path, options) {
	return function (request, response, next) {
		/* ...else execute render... */
		NA.prepareResponse(path, options, request, response, function () {
			next();
		});
	};
}

/**
 * If page must be redirected.
 * @private
 * @function redirect
 * @memberOf NA~
 * @param {NA}     NA              NodeAtlas instance.
 * @param {Object} routeParameters Parameters for route.
 * @return {function} Preparation redirect.
 */
function redirect(NA, routeParameters) {
	return function (request, response, next) {
		/* Verify if route is a redirection... */
		if (routeParameters.redirect && routeParameters.statusCode) {
			/* ...and if is it, redirect... */
			return NA.redirect(routeParameters, request, response);
		}
		next();
	};
}

/**
 * If page must be redirected.
 * @private
 * @function redirect
 * @memberOf NA~
 * @param  {NA}       NA NodeAtlas instance.
 * @return {function} Preparation middleware.
 */
function response(NA) {
	return function (request, response, next) {
		/* ...else execute render... */
		NA.changeVariationsCommon(response.locals, request, response, function () {
			next();
		});
	};
}

/**
 * Create Middleware function.
 * @private
 * @function getMiddlewares
 * @memberOf NA~
 * @param  {NA}       NA NodeAtlas instance.
 * @param {Object} routeParameters Parameters for route.
 * @return {function} Preparation middleware.
 */
function getMiddlewares(NA, routeParameters) {
	var path = NA.modules.path,
		middlewares = [];

	function hasMiddlewaresFile(callback) {
		if (

		/**
		 * Allow you to set Express middleware for a specific route.
		 * @public
		 * @alias middlewares
		 * @type {string}
		 * @memberOf NA#locals.routeParameters
		 */
		routeParameters.middlewares) {
			middlewares = [];
			if (routeParameters.middlewares instanceof Array) {
				routeParameters.middlewares.forEach(function (middleware) {
					callback(require(path.join(NA.serverPath, NA.webconfig.middlewaresRelativePath, middleware)).bind(NA));
				});
			} else {
				callback(require(path.join(NA.serverPath, NA.webconfig.middlewaresRelativePath, routeParameters.middlewares)).bind(NA));
			}
		}
	}

	hasMiddlewaresFile(function (file) {
		var content;
		try {
			content = file();
		} catch (e) {
			content = "";
		}

		if (content instanceof Array) {
			middlewares = middlewares.concat(content);
		} else {
			middlewares.push(file);
		}
	});

	return function() { return middlewares; };
}

/**
 * Ask for a page in GET, POST, UPDATE, DELETE or OPTIONS.
 * @private
 * @function executeRequest
 * @memberOf NA#
 * @param {Object}  support                Contain all GET, POST, PUT and DELETE capability.
 * @param {boolean} support.getSupport     This page can be requested by GET ?
 * @param {boolean} support.postSupport    This page can be requested by POST ?
 * @param {boolean} support.putSupport     This page can be requested by PUT ?
 * @param {boolean} support.deleteSupport  This page can be requested by DELETE ?
 * @param {boolean} support.optionsSupport This page can be requested by OPTIONS ?
 * @param {string}  objectPath             The list of Url match for obtain response.
 * @param {Object}  options                Option associate to this url.
 * @param {string}  path                   The Url in routes' webconfig.
 */
exports.executeRequest = function (support, objectPath, options, path) {
	var NA = this,
		routeParameters,
		middlewares;

	/* Case of `path` is an object because `NA.webconfig.routes` is an array and not an object. */
	if (typeof path === "object") {
		routeParameters = path;
	} else {
		routeParameters = options[path];
	}

	middlewares = getMiddlewares(NA, routeParameters)();

	/** Execute Get Request */
	if (support.getSupport) {
		NA.express.get(objectPath, prepare(NA, path, options), middlewares, redirect(NA, routeParameters), response(NA));
	}

	/** Execute Post Request */
	if (support.postSupport) {
		NA.express.post(objectPath, prepare(NA, path, options), middlewares, redirect(NA, routeParameters), response(NA));
	}

	/** Execute Put Request */
	if (support.putSupport) {
		NA.express.put(objectPath, prepare(NA, path, options), middlewares, redirect(NA, routeParameters), response(NA));
	}

	/** Execute Delete Request */
	if (support.deleteSupport) {
		NA.express.delete(objectPath, prepare(NA, path, options), middlewares, redirect(NA, routeParameters), response(NA));
	}

	/** Execute Options Request */
	if (support.optionsSupport) {
		NA.express.options(objectPath, prepare(NA, path, options), middlewares, redirect(NA, routeParameters), function (request, response) {
			response.sendStatus(200);
		});
	}
};

/**
 * Send HTML result to the client.
 * @private
 * @function sendResponse
 * @memberOf NA#
 * @param {Object} request         Initial request.
 * @param {Object} response        Initial response.
 * @param {string} data            HTML DOM ready for sending.
 * @param {NA~callback} next       Next step after.
 */
exports.sendResponse = function (request, response, data) {

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
 * @param {Object} request         Initial request.
 * @param {Object} response        Initial response.
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
		 * @memberOf NA#locals.routeParameters
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
 * Define a page to display when no url match in route or in directories provided by `NA#initStatics`.
 * @private
 * @function pageNotFound
 * @memberOf NA#
 * @this NA
 */
exports.pageNotFound = function () {
	var NA = this,
		pageNotFound,
		key,
		i,

		/**
		 * Represent route to use if no route match in all route.
		 * @public
		 * @alias pageNotFound
		 * @type {string}
		 * @memberOf NA#webconfig
		 */
		pageNotFoundUrl = NA.webconfig.pageNotFound,
		middlewares;

	if (NA.webconfig.routes instanceof Array) {
		for (i = 0; i < NA.webconfig.routes.length; i++) {
			key = NA.webconfig.routes[i].key || NA.webconfig.routes[i].url;
			if (NA.webconfig.pageNotFound && key === NA.webconfig.pageNotFound) {
				pageNotFound = NA.webconfig.routes[i];
				pageNotFoundUrl = NA.webconfig.routes[i];
			}
		}
	} else if (NA.webconfig.pageNotFound && NA.webconfig.routes[NA.webconfig.pageNotFound]) {
		pageNotFound = NA.webconfig.routes[NA.webconfig.pageNotFound];
	}

	if (pageNotFound) {
		middlewares = getMiddlewares(NA, pageNotFound)();

		/* Match all Get Request */
		NA.express.all("*", prepare(NA, pageNotFoundUrl, NA.webconfig.routes), middlewares, redirect(NA, pageNotFound), response(NA));
	}
};
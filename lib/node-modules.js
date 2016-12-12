/*------------------------------------*\
    $%NODE MODULES
\*------------------------------------*/
/* jslint node: true */

/**
 * Require each set of native modules from Node.js API to `NA#modules`.
 * @private
 * @function loadListOfNativeModules
 * @memberOf NA#
 */
exports.loadListOfNativeModules = function () {
    var NA = this;

    /**
     * List of modules callable into NodeAtlas and website NodeAtlas-based.
     * @namespace modules
     * @type {Object}
     * @alias modules
     * @memberOf NA#
     */
    NA.modules = {};

    /**
     * Allow you to create children process.
     * @alias child_process
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/child_process.html Child Process}
     */
    NA.modules.child_process = require('child_process');

    /**
     * Allow you to manage read/write on files.
     * @alias fs
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/fs.html File System}
     */
    NA.modules.fs = require('fs');

    /**
     * Allow you to handle and to transform file paths.
     * @alias path
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/path.html Path}
     */
    NA.modules.path = require('path');

    /**
     * Allow you to use many features of the HTTP protocol.
     * @alias http
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/http.html HTTP}
     */
    NA.modules.http = require('http');

    /**
     * Allow you to handle and to transform url paths.
     * @alias url
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/url.html URL}
     */
    NA.modules.url = require('url');

    /**
     * Allow you to use many features of the HTTPs protocol.
     * @alias https
     * @type {Object}
     * @memberOf NA#modules
     * @see {@link http://nodejs.org/api/https.html HTTPs}
     */
    NA.modules.https = require('https');
};

/**
 * Add npm modules to run a Server web.
 * @private
 * @function loadServerModules
 * @memberOf NA#
 */
exports.loadServerModules = function () {
    var NA = this;

    /**
     * An advanced web server.
     * @function express
     * @memberOf NA#modules
     * @external express
     * @see {@link http://expressjs.com/ Express.js}
     */
    NA.modules.express = require('express');

    /**
     * Manage session of the server.
     * @function express-session
     * @memberOf NA#modules
     * @external express-session
     * @see {@link https://github.com/expressjs/session express-session}
     */
    NA.modules.session = require('express-session');

    /**
     * Parse HTML for POST methods.
     * @function bodyParser
     * @memberOf NA#modules
     * @external body-parser
     * @see {@link https://github.com/expressjs/body-parser body-parser}
     */
    NA.modules.bodyParser = require('body-parser');

    /**
     * Parse Cookies for keep connection.
     * @function cookieParser
     * @memberOf NA#modules
     * @external cookie-parser
     * @see {@link https://github.com/expressjs/cookie-parser cookie-parser}
     */
    NA.modules.cookieParser = require('cookie-parser');

    /**
     * A command tool for run NodeAtlas as CLI.
     * @alias commander
     * @type {Object}
     * @memberOf NA#modules
     * @external commander
     * @see {@link https://github.com/tj/commander.js commander.js}
     */
    NA.modules.commander = require('commander');

    /**
     * Redirects any requests to a default domain.
     * @function forceDomain
     * @memberOf NA#modules
     * @external forcedomain
     * @see {@link https://www.npmjs.org/package/forcedomain forcedomain}
     */
    NA.modules.forceDomain = require('forcedomain');
};

/**
 * Add npm modules to manipulate HTML render.
 * @private
 * @function loadTemplatingModules
 * @memberOf NA#
 */
exports.loadTemplatingModules = function () {
    var NA = this;

    /**
     * EJS cleans the HTML out of your JavaScript with client side templates.
     * @alias ejs
     * @type {Object}
     * @memberOf NA#modules
     * @external ejs
     * @see {@link http://www.embeddedjs.com/ EJS}
     */
    NA.modules.ejs = require('ejs');

    /**
     * A clean, whitespace-sensitive template language for writing HTML.
     * @alias pug
     * @type {Object}
     * @memberOf NA#modules
     * @external pug
     * @see {@link https://pugjs.org/ PUG}
     */
    NA.modules.pug = require('pug');

    /**
     * Tiny, fast, and elegant implementation of core jQuery designed specifically for the server.
     * @function cheerio
     * @memberOf NA#modules
     * @external cheerio
     * @see {@link https://www.npmjs.org/package/cheerio cheerio}
     */
    NA.modules.cheerio = require('cheerio');
};

/**
 * Add npm modules to enhance NodeAtlas.
 * @private
 * @function loadUtilsModules
 * @memberOf NA#
 */
exports.loadUtilsModules = function () {
    var NA = this;

    /**
     * Higher-order functions and common patterns for asynchronous code.
     * @alias async
     * @type {Object}
     * @memberOf NA#modules
     * @external async
     * @see {@link https://www.npmjs.com/package/async async}
     */
    NA.modules.async = require('async');

    /**
     * An implementation of heritage.
     * @function extend
     * @memberOf NA#modules
     * @external extend
     * @see {@link https://www.npmjs.org/package/extend extend}
     */
    NA.modules.extend = require('extend');

    /**
     * Open a file or url in the user's preferred application.
     * @function open
     * @memberOf NA#modules
     * @external open
     * @see {@link https://www.npmjs.org/package/open open}
     */
    NA.modules.open = require('open');

    /**
     * Make all directories in a path, like mkdir -p.
     * @function mkpath
     * @memberOf NA#modules
     * @external mkpath
     * @see {@link https://www.npmjs.org/package/mkpath mkpath}
     */
    NA.modules.mkpath = require('mkpath');

    /**
     * Clone directories using copy/symlink.
     * @function traverseDirectory
     * @memberOf NA#modules
     * @external traverse-directory
     * @see {@link https://www.npmjs.com/package/traverse-directory}
     */
    NA.modules.traverseDirectory = require('traverse-directory');
};

/**
 * Add npm modules for minification, obfuscation, compression, optimization and transformation.
 * @private
 * @function loadProcessModules
 * @memberOf NA#
 */
exports.loadProcessModules = function () {
    var NA = this;

    /**
     * Minify GIF, JPEG and PNG images.
     * @function imagemin
     * @memberOf NA#modules
     * @external imagemin
     * @see {@link https://www.npmjs.com/package/imagemin imagemin}
     */
    NA.modules.imagemin = require('imagemin');
    NA.modules.jpegtran = require('imagemin-jpegtran');
    NA.modules.optipng = require('imagemin-optipng');
    NA.modules.gifsicle = require('imagemin-gifsicle');
    NA.modules.svgo = require('imagemin-svgo');

    /**
     * Compress code before send it to the client.
     * @function compress
     * @memberOf NA#modules
     * @external compression
     * @see {@link https://github.com/expressjs/compression compression}
     */
    NA.modules.compress = require('compression');

    /**
     * CSS parser.
     * @function cssParse
     * @memberOf NA#modules
     * @external css-parse
     * @see {@link https://www.npmjs.com/package/css-parse css-parse}
     */
    NA.modules.cssParse = require('css-parse');

    /**
     * UglifyJS is a JavaScript parser, minifier, compressor or beautifier toolkit.
     * @alias uglifyJs
     * @type {Object}
     * @memberOf NA#modules
     * @external uglify-js
     * @see {@link https://github.com/mishoo/UglifyJS2 UglifyJS2}
     */
    NA.modules.uglifyJs = require('uglify-js');

    /**
     * A fast, efficient, and well tested CSS minifier for node.js.
     * @function cleanCss
     * @memberOf NA#modules
     * @external clean-css
     * @see {@link https://github.com/jakubpawlowicz/clean-css clean-css}
     */
    NA.modules.cleanCss = require('clean-css');

    /**
     * The dynamic stylesheet language. http://lesscss.org.
     * @alias less
     * @type {Object}
     * @memberOf NA#modules
     * @external less
     * @see {@link https://www.npmjs.com/package/less less}
     */
    NA.modules.less = require('less');

    /**
     * Robust, expressive, and feature-rich CSS superset
     * @function stylus
     * @memberOf NA#modules
     * @external stylus
     * @see {@link https://www.npmjs.com/package/stylus stylus}
     */
    NA.modules.stylus = require('stylus');

    /**
     * LESS.js middleware for connect.
     * @alias lessMiddleware
     * @type {Object}
     * @memberOf NA#modules
     * @external less-middleware
     * @see {@link https://www.npmjs.com/package/less-middleware less-middleware}
     */
    NA.modules.lessMiddleware = require('less-middleware');
    NA.modules.lessMiddlewareUtilities = require('less-middleware/lib/utilities');
};

/**
 * Add all modules loaded from npm to `NA#modules`.
 * @private
 * @function loadListOfRequiredNpmModules
 * @memberOf NA#
 */
exports.loadListOfRequiredNpmModules = function (callback) {
    var NA = this;

    /* Load all modules. */
    try {
        NA.loadServerModules();
        NA.loadTemplatingModules();
        NA.loadUtilsModules();
        NA.loadProcessModules();

        return callback(null);
    } catch (exception) {
        return callback(exception);
    }
};

/**
 * Download all module with `npm install` based on package.json dependencies if a module is not found.
 * @private
 * @function downloadAllModules
 * @memberOf NA#
 * @param {Object} err Allow to know what module was not found.
 */
exports.downloadAllModules = function (err) {
    var NA = this,
        execute = NA.modules.child_process.exec;

    /* Test if package.json is present for obtain list of module and version. */
    NA.ifFileExist(NA.nodeatlasPath, 'package.json', function (errPackage) {
        if (errPackage && errPackage.code === 'ENOENT') {
            return NA.log(NA.appLabels.ifFileExist.replace(/%([\-a-zA-Z0-9_]+)%/g, function (regex, matches) { return errPackage[matches]; }));
        }

        NA.log(NA.appLabels.downloadAllModules.moduleNotExist + " " + NA.appLabels.downloadAllModules.downloadStarting + "(" + err + ")");

        /* Execute an npm command to install all modules not founded. */
        execute('npm install ' + NA.nodeatlasPath, function (err) {
            if (err) {
                /** It's not ok explain the error. */
                return NA.log(err);
            }

            NA.log(NA.appLabels.downloadAllModules.installationDone + " " + NA.appLabels.downloadAllModules.restartRequired);

            /** It's ok, killing process and restarting manually now. */
            process.kill(process.pid);
        });
    });
};

/**
 * Load modules or install modules.
 * @private
 * @function moduleRequired
 * @memberOf NA#
 * @param {moduleRequired~callback} callback Run next steps if all module are correctly loaded.
 */
exports.moduleRequired = function (callback) {
    var NA = this;

    NA.loadListOfRequiredNpmModules(function (err) {
        if (err && err.code === 'MODULE_NOT_FOUND') {
            /** If a module is not found, download it */
            NA.downloadAllModules(err);
        } else if (err) {
            NA.log(err);
        } else {

            /**
             * Next step after loading of modules.
             * @callback moduleRequired~callback
             */
            callback();
        }
    });
};
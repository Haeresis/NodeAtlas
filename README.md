# node-atlas #

[![Donate](https://img.shields.io/badge/donate-%3C3-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/NodeAtlas.svg)](https://travis-ci.org/Haeresis/NodeAtlas/) [![Version 1.0 Beta](https://img.shields.io/badge/version-1.0-brightgreen.svg)](https://github.com/Haeresis/NodeAtlas) [![Package NPM](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-0.10%2C_4.2-brightgreen.svg)](https://nodejs.org/en/) [![Technical Debt Ratio](https://img.shields.io/badge/debt_ratio-0%25-brightgreen.svg)](http://docs.sonarqube.org/display/PLUG/JavaScript+Plugin) [![Dependency Status](https://gemnasium.com/Haeresis/NodeAtlas.svg)](https://gemnasium.com/Haeresis/NodeAtlas)

**Vous êtes français ? Le README [derrière ce lien](https://haeresis.github.com/NodeAtlas/) vous sera peut-être plus agréable.**





## Overview ##

NodeAtlas is an application developed in JavaScript and running with [Node.js](http://nodejs.org/). It provides three things:

- Create and maintain a set of assets HTML / CSS / JavaScript to provide them to back-end developers.
- Create and maintain multilingual sites with no Back-end.
- Develop websites or multilingual Node.js applications of all sizes.



### Examples of websites with NodeAtlas ###

The tool is still in development and I experience it slowly with my own websites.

- [Generation and HTML template maintenance](https://github.com/Haeresis/ResumeAtlas/).
- [HTML website maintenance (no Back-end)](https://github.com/Haeresis/ResumeAtlas/).
- [Node.js website with Websocket and PopState](https://github.com/Haeresis/BookAtlas/).
- [Node.js website with MongoDB database and Redis](https://github.com/Haeresis/BlogAtlas/).
- [Node.js example of content filling in real time without Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple web server for a file](https://github.com/Haeresis/SimpleAtlas/).
- [CSS-driven usage with Less preprocessor with CSS Framework](https://github.com/Haeresis/LessAtlas/).
- [Plugin to boost standard capabilities](https://github.com/Haeresis/ComponentAtlas/).



### Table of Contents ###

- [Overview](#overview)
 - [Examples of websites with NodeAtlas](#examples-of-websites-with-nodeatlas)
 - [Table of Contents](#table-of-contents)
 - [Documentation](#documentation)
 - [Contributing](#contributing)
- [Installation](#installation)
- [Start with NodeAtlas](#start-with-nodeatlas)
 - [Fileset](#fileset)
 - [Minimum Requirements](#minimum-requirements)
 - [Run the site with NodeAtlas](#run-the-site-with-nodeatlas)
- [Different configurations of webconfig.json](#different-configurations-of-webconfig.json)
 - [More one page](#more-one-page)
 - [Template shortcut](#template-shortcut)
 - [Host images, fonts, CSS, JS, etc.](#host-images-fonts-css-js-etc)
 - [Manage inclusions to avoid redundancy code](#manage-inclusions-to-avoid-redundancy-code)
 - [Manage variations within the same template](#manage-variations-within-the-same-template)
 - [Manage Multilingual](#manage-multilingual)
 - [NodeAtlas use to generate HTML assets](#nodeatlas-use-to-generate-html-assets)
 - [Use NodeAtlas to run a website (Back-end Part)](#use-nodeatlas-to-run-a-website-back-end-part)
 - [Generate partial page with AJAX/Websocket](#generate-partial-page-with-ajaxwebsocket)
 - [Change the url parameters](#change-the-url-parameters)
 - [Create your own webconfig variables](#create-your-own-webconfig-variables)
 - [Manage routing (URL Rewriting)](#manage-routing-url-rewriting)
 - [Manage a page not found](#manage-a-page-not-found)
 - [Manage redirects](#manage-redirects)
 - [Run Website with HTTPs](#run-website-with-https)
 - [Minify CSS/JS](#minify-cssjs)
 - [CSS generation with Less](#css-generation-with-less)
 - [Optimize Images files](#optimize-images-files)
 - [CSS Inline Injection for Manage Email Assets](#css-inline-injection-for-manage-email-assets)
 - [Allow/Disallow GET/POST requests](#allowdisallow-getpost-requests)
 - [Change settings of Sessions](#change-settings-of-sessions)
 - [External Storage Sessions](#external-storage-sessions)
 - [Changing the template engine brackets <% %>](#Changing-the-template-engine-brackets--)
 - [Change the url hostname and listening port](#change-the-url-hostname-and-listening-port)
 - [Generate urls dynamically](#generate-urls-dynamically)
- [CLI / Running commands](#cli--running-commands)
 - [--directory](#--directory-)
 - [--webconfig](#--webconfig-)
 - [--browse](#--browse-subpath)
 - [--httpPort](#--httpport-)
 - [--generate](#--generate)
- [API / NodeAtlas as npm module](#api--nodeatlas-as-npm-module)
- [NodeAtlas as a simple web server](#nodeatlas-as-a-simple-web-server)
- [Running NodeAtlas on online server](#running-nodeatlas-on-online-server)
 - [In a Windows Server environment with iisnode](#in-a-windows-server-environment-with-iisnode)
 - [In a Unix environment with forever](#in-a-unix-environment-with-forever)
 - [Proxy](#proxy)
- [About architecture NodeAtlas](#a-propos-de-l-architecture-de-nodeatlas)



### Documentation ###

In addition to this README, you also have access to,
- [tl;dr](https://www.npmjs.com/package/node-atlas) and,
- [details of functions in the NA object](http://haeresis.github.io/NodeAtlas/doc/namespaces.list.html).



### Contributing ###

If you would like to contribute with:

 - Code enhancements and fixes,
 - French correct spelling mistake or
 - Decent english translation

Please do the following:

 1. Fork the NodeAtlas repository.
 2. Hack on a separate topic branch created from the latest master.
 3. Commit and push the topic branch.
 4. Make a pull request.
 5. Be patient. ;-)

Please note that modications should follow these coding guidelines:

- Pass Sonarqube JS with 0% Technical Debt Ratio.

Thank you for helping out!





## Installation ##

*Before install NodeAtlas, install [Node.js](https://nodejs.org/en/) and [Python 2.7](https://www.python.org/download/releases/2.7/) as pre-require.*

There are several ways to install NodeAtlas:

- Download NodeAtlas from the official repository [NodeAtlas](https://haeresis.github.com/NodeAtlas).

   _Once downloaded, unzip **NodeAtlas** in the folder that will suit you._

   **Start at least once NodeAtlas with the command line `\> node </path/to/>node-atlas/node-atlas.js`, to install the _node_modules_.**

- `npm install node-atlas` (recommended for [use as a module](#api--nodeatlas-as-npm-module) in a project).

   _This will install **NodeAtlas** in the `node_modules/node-atlas` directory of the execution of the command._

- `npm install -g node-atlas` (recommended for [use as a module](#api--nodeatlas-as-npm-module) in large amount of project or for [a command line utilisation](#cli--running-commands)).

   _This will install **NodeAtlas** in the global `node_modules/node-atlas`._

- Clone the directory from [GitHub](https://github.com/Haeresis/NodeAtlas/) (recommended for).

   _This will install **NodeAtlas** in cloning home folder._

   **Start at least once NodeAtlas the with the command line `\> node </path/to/>node-atlas/node-atlas.js`, to install the _node_modules_.**





## Start with NodeAtlas ##

### Fileset ###

After installing NodeAtlas somewhere on your machine, you create a set of files representing a site anywhere else like structure below.

```
site-hello-world/
— templates/
—— index.htm
— webconfig.json
```

Here is the "/site-hello-world/templates/index.htm" file:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
    </head>
    <body>
        <div>This is a Hello World!</div>
    </body>
</html>
```

and following, the "/site-hello-world/webconfig.json" file.

### Minimum Requirements ###

You can turn a simple page with minimal configuration "webconfig.json" below

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

equivalent to

```js
{ "routes": { "/": "index.htm" } }
```



### Run the site with NodeAtlas ###

#### With a command line ####

Position yourself with the prompt console in the folder "/Site-hello-world/" and run the following command.

```
\> node </path/to/>node-atlas/node-atlas.js
```

In your first run, NodeAtlas install all the "node_modules" necessary for running (if you downloaded out of npm).

Rerun.

```
\> node </path/to/>node-atlas/node-atlas.js
```

You will have access to your "Hello World" to the page: *http://localhost/* in a browser.


#### With an executable on your OS ####

**If you have installed NodeAtlas with `npm install -g node-atlas`** you can also use the `nodeatlas` command. `nodeatlas` is a shortcut for `node </path/to/>node-atlas/node-atlas.js`.

Position yourself with the prompt console in the folder « /site-hello-world/ » and run the following command.

```
\> nodeatlas
```

*Note : *if the `nodeatlas` command do not work on unix OS after installation, it's probably because of right problem. If you are root, the command `chown -R root:root /usr/local/bin/` before re-execuse `npm install -g node-atlas` command will fix issue, else, use the command `sudo npm install -g node-atlas`.*


#### Via a JavaScript file ####

You can also use NodeAtlas as a npm module.

*server.js*

```javascript
var nodeAtlas = require("node-atlas");

nodeAtlas().run();
```

```
\> node server.js
```





## Different configurations of webconfig.json ##

### More one page ###

Below is a sample configuration.

```js
{
    "templatesRelativePath": "templates",
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/member.html": {
            "template": "member.htm",
            "postSupport": false
        },
        "/member-without-extension/": {
            "template": "member.htm",
            "getSupport": false
        },
        "about.html": {
            "template": "about.htm"
        },
        "/error.html": {
            "template": "error.htm",
            "statusCode": 404,
            "mimeType": "text/plain"
        }
    }
}
```

To run this set of file:

```
templates/
— index.htm
— member.htm
— error.htm
webconfig.json
```

with the addresses:

- *http://localhost/* (responds to the root)
- *http://localhost/member.html* (will not respond if is POST requested)
- *http://localhost/member-without-extension/* (will not respond if is GET requested)
- *http://localhost/error.html* (return of the plain-text content (without markup) with a 404)

*Note : If* ***templatesRelativePath*** *is not present in "webconfig.js", template folder is* ***templates***. ***templatesRelativePath*** *is useful only to change the name/path of directory.*



### Template shortcut ###

The configuration below is equivalent to the configuration section just above

```js
{
    "templatesRelativePath": "templates",
    "routes": {
        "/": "index.htm",
        "/member.html": {
            "template": "member.htm",
            "postSupport": false
        },
        "/member-without-extension/": {
            "template": "member.htm",
            "getSupport": false
        },
        "about.html": "about.htm",
        "/error.html": {
            "template": "error.htm",
            "statusCode": 404,
            "mimeType": "text/plain"
        }
    }
}
```

because

```js
"about.html": "about.htm",
```

is a shortcut for

```js
"about.html": {
    "template": "about.htm"
}
```

Obviously this shortcut is used only if `template` is the only parameter to declare in the route.



### Host images, fonts, CSS, JS, etc. ###

You can also host any file on your site in a public folder. For example, with this configuration:

```js
{
    "assetsRelativePath": "assets",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and this set of files:

```
assets/
— stylesheets/
—— common.css
— javascript/
—— common.js
— media/
—— images/
——— logo.png
templates/
— index.htm
webconfig.json
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/stylesheets/common.css*
- *http://localhost/javascript/common.js*
- *http://localhost/media/images/logo.png*

*Note : If* ***assetsRelativePath*** *is not present in "webconfig.js", default public folder is* ***assets***. ***assetsRelativePath*** *is useful only to change the name/path of directory.*

#### maxAge, Etag, etc. ####

It's possible to manage informations provided by NodeAtlas when a ressource is requested (like `maxAge`, `etag`, etc.) via the `staticOptions` property in webconfig. For more informations, see the [Express](http://expressjs.com/api.html#express.static) documentation about static files.

For exemple, for a devlopment webconfig, it's interresting to put the `maxAge` to 0 in order to always get the last modifications into a file and avoid frenetic browser reload.

```
{
    "staticOptions": {
        "maxAge": 0
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Manage inclusions to avoid redundancy code ###

You can segment your HTML codes to not repeat the redundant code such "head" part and "foot" part or any other code fragment:

```js
{
    "componentsRelativePath": "components",
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/list-of-members/": {
            "template": "members.htm"
        }
    }
}
```

with the following files:

```
assets/
— stylesheets/
—— common.css
— javascript/
—— common.js
components/
— head.htm
— foot.htm
templates/
— index.htm
— members.htm
webconfig.json
```

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>

        <link type="text/css" rel="stylesheet" href="stylesheets/common.css" media="all" />
    </head>
    <body>
```

*components/foot.htm*

```html
        <script async type="text/javascript" src="javascript/common.js"></script>
    </body>
</html>
```

*templates/index.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1>Welcome</h1>
        <p>This is the home page.</p>
    </div>

    <%- include('foot.htm') %>
```

*templates/members.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1>List of members</h1>
        <p>It is the Members page.</p>
    </div>

    <%- include('foot.htm') %>
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/list-of-members/*

*Note : If* ***componentsRelativePath*** *is not present in "webconfig.js", default include folder is* ***components***. ***componentsRelativePath*** *is useful only to change the name/path of directory.*



### Manage variations within the same template ###

It is possible with the same template and the same includes, generating pages with different content (useful in generation HTML assets mode). Activate the variations with the following configuration:

```js
{
    "commonVariation": "common.json",
    "variationsRelativePath": "variations",
    "routes": {
        "/": {
            "template": "template.htm",
            "variation": "index.json",
        },
        "/list-of-members/": {
            "template": "template.htm",
            "variation": "members.json",
        }
    }
}
```

with the following files:

```
assets/
— stylesheets/
—— common.css
—— home.css
—— members.css
— javascript/
—— common.js
—— home.js
—— members.js
components/
— head.htm
— foot.htm
variations/
— common.json
— index.json
— members.json
templates/
— template.htm
webconfig.json
```

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title><%= specific.titlePage %></title>

        <link type="text/css" rel="stylesheet" href="stylesheets/<%= common.classCssCommon %>.css" media="all" />
        <link type="text/css" rel="stylesheet" href="stylesheets/<%= specific.classPage %>.css" media="all" />
    </head>
    <body class="<%= specific.classPage %>">
```

*components/foot.htm*

```html
        <script async type="text/javascript" src="javascript/<%= common.classJsCommon %>.js"></script>
    </body>
</html>
```

*templates/template.htm*

```html
    <%- include('head.htm') %>

    <div class="title"><%= common.titleWebsite %></div>

    <div>
        <h1><%= specific.titlePage %></h1>
        <%- specific.content %>
    </div>

    <%- include('foot.htm') %>
```

*variations/common.json*

```js
{
    "titleWebsite": "Website title",
    "classCssCommon": "common",
    "classJsCommon": "common"
}
```

*variations/index.json*

```js
{
    "titlePage": "Welcome",
    "classPage": "index",
    "content": "<p>This is the home page.</p>"
}
```

*variations/members.json*

```js
{
    "titlePage": "List of members",
    "classPage": "members",
    "content": "<p>It is the Members page.</p>"
}
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/list-of-members/*

*Note : If* ***variationsRelativePath*** *is not present in "webconfig.js", default variations folder is* ***variations***. ***variationsRelativePath*** *is useful only to change the name/path of directory.*



### Manage Multilingual ###

#### All languages on the same site ####

On the same principle, the variations can be used to create the same page, but in different languages:

```js
{
    "languageCode": "en-gb",
    "variationsRelativePath": "languages",
    "routes": {
        "/": {
            "template": "landing.htm",
            "variation": "landing.json"
        },
        "/home/": {
            "template": "home.htm",
            "variation": "home.json"
        },
        "/accueil/": {
            "template": "home.htm",
            "variation": "home.json",
            "languageCode": "fr-fr"
        }
    }
}
```

*Note : In this example I decided to do without a common variation file, because I did not specify* ***commonVariation***. *I also completely arbitrarily decided to rename my folder* ***variations*** *to* ***languages***.

with the following files:

```
components/
— head.htm
— foot.htm
languages/
— landing.json
— en-gb
—— home.json
— fr-fr
—— home.json
templates/
— landing.htm
— home.htm
webconfig.json
```

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="<%= languageCode %>">
    <head>
        <meta charset="utf-8" />
        <title><%= specific.titlePage %></title>
    </head>
    <body class="<%= specific.classPage %>">
```

*components/foot.htm*

```html
    </body>
</html>
```

*templates/landing.htm*

```html
    <%- include('head.htm') %>

    <select>
        <% for (var i = 0; i < specific.selectLabel.length; i++) { %>
        <option><%= specific.selectLabel[i] %></option>
        <% } %>
    </select>

    <%- include('foot.htm') %>
```

*templates/home.htm*

```html
    <%- include('head.htm') %>

    <div>
        <h1><%= specific.titlePage %></h1>
        <%- specific.content %>
    </div>

    <%- include('foot.htm') %>
```

*languages/landing.json*

```js
{
    "titlePage": "Landing",
    "classPage": "landing",
    "selectLabel": [
        "English",
        "Français"
    ]
}
```

*languages/en-gb/home.json*

```js
{
    "titlePage": "Welcome",
    "classPage": "home",
    "content": "<p>This is a home page.</p>"
}
```

*languages/fr-fr/home.json*

```js
{
    "titlePage": "Bienvenue",
    "classPage": "home",
    "content": "<p>C'est la page d'accueil.</p>"
}
```

you will have access to the addresses:

- *http://localhost/*
- *http://localhost/home/*
- *http://localhost/accueil/*

*Note : By default is the* ***languageCode*** *root that determines the display language of the wesite. However, specifically by page language, we can be changed also the* ***languageCode****. *You should also know that once the site or page has a* ***languageCode*** *in the configuration, variations files must be placed in a subdirectory named with the* ***languageCode***.


#### Use only changes with the active multilingual ####

You may have noticed in the previous example that the `landing.json` file was not in the `en-gb/` or `fr-fr/`. This is quite possible and means that will be used in languages that do not have it in their file.

Also, when a `languageCode` is specified, NodeAtlas seek first hand the value in the corresponding folder file. If it was not there, so he went to fetch the parent folder (the one used as standard for variations without multilingual).

This will allow you, for example, to manage master language directly in the variation folder. So with the following example:

```
...
variations/
— common.json
— home.json
— fr-fr
—— common.json
—— home.json
...
```

you can

- manage the version `en-gb` directly to the root of `variations/` (as NodeAtlas find nothing in` en-gb` then it uses the values of the root files) and
- manage the `fr-fr` release in the` fr-fr / `,

thus, if a sentence has not yet translated into a file `fr-fr`, instead of returning an error, NodeAtlas return the root version or the version` en-gb`.


#### Each language has its configuration ####

You can also choose to configure each language in a "webconfig.json" different. With the following set of file:

```
components/
— head.htm
— foot.htm
variations/
— landing.json
— en-gb
—— home.json
—— members.json
— fr-fr
—— home.json
—— members.json
templates/
— landing.htm
— home.htm
— members.htm
webconfig.json
webconfig.en-gb.json
webconfig.fr-fr.json
```

you could have "webconfig.json» next:

*webconfig.json*

```js
{
    "routes": {
        "/": {
            "template": "landing.htm",
            "variation": "landing.json"
        }
    }
}
```

*webconfig.en-gb.json*

```js
{
    "httpPort": 81,
    "urlRelativeSubPath": "english",
    "languageCode": "en-gb",
    "routes": {
        "/": {
            "template": "home.htm",
            "variation": "home.json"
        },
        "/members-list/": {
            "template": "members.htm",
            "variation": "members.json"
        }
    }
}
```

*webconfig.fr-fr.json*

```js
{
    "httpPort": 82,
    "urlRelativeSubPath": "francais",
    "languageCode": "fr-fr",
    "routes": {
        "/": {
            "template": "home.htm",
            "variation": "home.json"
        },
        "/list-of-members/": {
            "template": "members.htm",
            "variation": "members.json"
        }
    }
}
```

and have access to addresses:

- *http://localhost/*
- *http://localhost:81/english/*
- *http://localhost:81/english/*
- *http://localhost:81/english/members-list/*
- *http://localhost:82/francais/*
- *http://localhost:82/francais/list-of-members/*

It is then possible to reverse proxy with [Bouncy](#proxy) (for example) to bring all urls on port 80 to obtain:

- *http://www.website.ext/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/*
- *http://www.website.ext/english/members-list/*
- *http://www.website.ext/francais/*
- *http://www.website.ext/francais/list-of-members/*



### NodeAtlas use to generate HTML assets ###

#### Generate HTML assets ####

With the following configuration it is possible to generate HTML rendering assets of each page in a linked file. The file will be (re)created every display of page in your browser.

```js
{
    "htmlGenerateBeforeResponse": true,
    "generatesRelativePath": "generates",
    "routes": {
        "/": {
            "template": "index.htm",
            "generate": "/index.html"
        },
        "/list-of-members/": {
            "template": "members.htm",
            "generate": "/members/list.html"
        },
        "/list-of-members/?foo=bar": {
            "template": "members.htm",
            "generate": false
        },
        "/no/generate/property/": {
            "template": "members.htm"
        }
    }
}
```

and the following set of files:

```
{
assets/
— stylesheets/
—— common.css
— javascript/
—— common.js
generates/
templates/
— index.htm
— members.htm
webconfig.json
}
```

can physically create assets:

```
{
generates/
— index.html
— members/
—— list.html
— no/
—— generates/
——— property <== Ceci est un fichier
templates/
— index.htm
— members.htm
webconfig.json
}
```

by going to the address:

- *http://localhost/*
- *http://localhost/list-of-members/*
- *http://localhost/no/generate/property/*

*Note : No generate page are generated for "/list-of-members/?foo=bar" because `generate` is set to `false`. Use this value to ignore a route generation.*

The generation starts when displaying the page if ***htmlGenerateBeforeResponse*** exist and if it is ***true***. If it is passed ***false*** (or removed) the only way to generate all the pages of the website will be via the command `node </path/to/>node-atlas/server.js --generate` will generate all pages once if `generatesRelativePath` exist. Of course in all cases this command work and allow you to regenerate all pages after a change into all page (a change in a component called on all pages e.g.).

Also with `--generate` , the entire ` assetsRelativePath` folder (public folder files) will be copied in the `generatesRelativePath` if both folder does not have the same path, and if `generatesRelativePath` exist. It really allows you to get the stand-alone pages you want in output folder with all files which they call (CSS / JS / Images, etc.).

You could desactivate the HTML generation, even if a directory `generatesRelativePath` exist in the système file, with `htmlGenerateEnable` à `false`.

*Note : If* ***generatesRelativePath*** *is not present in "webconfig.js", default generates folder is* ***generates/***. ***generatesRelativePath*** *is useful only to change the name/path of directory.*


#### Generate website without server side ####

You can also manager a simple HTML website page with the following configuration:

```js
{
    "languageCode": "fr-fr",
    "enableIndex": true,
    "htmlGenerateBeforeResponse": true,
    "generatesRelativePath": "../HTML/",
    "assetsRelativePath": "../HTML/",
    "routes": {
        "/cv.html": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/en/cv.html": {
            "template": "index.htm",
            "variation": "index.json",
            "languageCode": "en"
        }
    }
}
```

and the following set of files:

```
HTML/
— stylesheets/
—— common.css
— javascript/
—— common.js
engine/
— variations/
—— fr-fr/
——— index.json
—— en/
——— index.json
— templates/
—— index.htm
— webconfig.json
```

To address *http://localhost/* will show a list of pages your site components (with **enableIndex** set to **true**).

It will do more than, once your work is done, enjoy your HTML site in the folder:

```
HTML/
— stylesheets/
—— common.css
— javascript/
—— common.js
— cv.html
— en/
—— cv.html
```



### Use NodeAtlas to run a website (Back-end Part) ###

You can either use a single controller for the whole site and/or also by controllers template and variation.

For the master controller, use this configuration example:

```js
{
    "commonController": "common.js",
    "controllersRelativePath": "controllers",
    "routes": {
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/categories/": {
            "template": "categories.htm",
            "variation": "categories.json"
        }
    }
}
```

with this set of files

```
variations/
— index.json
— categories.json
controllers/
— common.js
models/
— Article.js
— Category.js
templates/
— index.htm
— categories.htm
webconfig.json
```

And "common.js" file containing e.g.:

- Things for load additional modules NodeAtlas.
- Things for configure additional modules.

```js
// Creating a global object for file.
var website = {};



/*******************/
/* Loading modules */
/*******************/

(function (publics) {
    "use strict";

    // Load modules for this site in the NodeAtlas object.
    publics.loadModules = function () {
        // Find instance of « NodeAtlas » engine.
        var NA = this;

        // Associations of each module to access it anywhere.
        NA.modules.cookie = require('cookie');
        NA.modules.mongoose = require('mongoose');
    };

}(website));



/***********************/
/* Configuring Modules */
/***********************/

(function (publics) {
    "use strict";

    var privates = {};

    // Example of using MongoDB and Mongoose.
    privates.mongooseInitialization = function (mongoose, callback) {
        // "blog" database connection.
        mongoose.connect('mongodb://127.0.0.1:27017/blog', function (error) {
            if (error) {
                console.log("Database 'mongodb://127.0.0.1:27017/blog' is not accessible.");
                process.kill(process.pid);
            }

            // Next.
            callback(mongoose);
        });

        // Connection Management.
        mongoose.connection.on('error', function (error) {
            console.log('Error to connect by default Mongoose: ' + error);
        });

        // Disconnection Management.
        mongoose.connection.on('disconnected', function () {
            console.log('Disconnection of Mongoose.');
        });
        process.on('SIGINT', function (error) {
            mongoose.connection.close(function () {
                console.log('Disconnection of Mongoose because of app termination');
                process.exit(0);
            });
        });
    };

    // Mongoose Schemas Management.
    privates.mongooseSchemas = function (mongoose) {
        publics.schema = {};

        // Load Schemas.
        publics.schema.article = require('../models/Article');
        publics.schema.category = require('../models/Category');

        // Expose Schemas.
        mongoose.model('article', website.schema.article, 'article');
        mongoose.model('category', website.schema.category, 'category');
    };

    // Example using Socket.IO.
    privates.socketIoInitialisation = function (socketio, NA, callback) {
        var optionIo = (NA.webconfig.urlRelativeSubPath) ? { path: NA.webconfig.urlRelativeSubPath + '/socket.io', secure: ((NA.webconfig.httpSecure) ? true : false) } : undefined,
            io = socketio(NA.server, optionIo),
            cookie = NA.modules.cookie,
            cookieParser = NA.modules.cookieParser;

        // Synchronizing sessions with Socket.IO.
        io.use(function(socket, next) {
            var handshakeData = socket.request;

            // Fallback if cookies are not supported.
            if (!handshakeData.headers.cookie) {
                return next(new Error('Session cookie required.'));
            }

            // Transformation of the cookie String to JSON object.
            handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);

            // Verification of the signature of the cookie.
            handshakeData.cookie = cookieParser.signedCookies(handshakeData.cookie, NA.webconfig.session.secret);

            // Keep worn the Session ID.
            handshakeData.sessionID = handshakeData.cookie[NA.webconfig.session.key];

            // Accept the cookie.
            NA.sessionStore.load(handshakeData.sessionID, function (error, session) {
                if (error || !session) {
                    return next(new Error('No recovered session.'));
                } else {
                    handshakeData.session = session;
                    next();
                }
            });
        });

        // Next.
        callback(io);
    };

    // Adding listener for a specific controller "index.js" (see example in the next file).
    privates.socketIoEvents = function (io, NA) {
        var params = {};

        params.io = io;

        // Event for the index page (see example in the next file).
        require('./index').asynchrone.call(NA, params);
    };

    // Configuration of all modules.
    publics.setConfigurations = function (callback) {
        var NA = this,
            mongoose = NA.modules.mongoose,
            socketio = NA.modules.socketio;

        // Initialize Mongoose.
        privates.mongooseInitialization(mongoose, function (mongoose) {

            // Schemas injection into Mongoose.
            privates.mongooseSchemas(mongoose);

            // Initialize Socket IO.
            privates.socketIoInitialisation(socketio, NA, function (io) {

                // Socket IO listening.
                privates.socketIoEvents(io, NA);

                // Next steps of engine.
                callback();
            });
        });

    };

}(website));



/****************************/
/* Variations interception. */
/****************************/

(function (publics) {
    "use strict";

    // It occurs just before the complete assembly EJS.
    publics.changeVariation = function (params, mainCallback) {
        var variation = params.variation;

        // Here variations variables are modified.
        // see example in the file after.

        // We re-injects the changes.
        mainCallback(variation);
    };

}(website));



/**********************************************************/
/* Interception of the HTML output for server-side jQuery */
/**********************************************************/

(function (publics) {
    "use strict";

    // It comes just before the HTML response to the client.
    publics.changeDom = function (params, mainCallback) {
        var dom = params.dom;

        // Here one can manipulate the DOM before response to the client.
        // see example in the file after.

        // We re-injects the changes.
        mainCallback(dom);
    };

}(website));



/********************************************/
/* Expose function for the NodeAtlas engine */
/********************************************/

exports.loadModules = website.loadModules;
exports.setConfigurations = website.setConfigurations;
exports.changeVariation = website.changeVariation;
exports.changeDom = website.changeDom;
```

Instead of using `changeVariation` and `changeDom` in the file `common.js` effective for the whole website page, you can use specific controllers page. The previous configuration becomes:

```js
{
    "commonController": "common.js",
    "controllersRelativePath": "controllers/",
    "routes": {
        "/": {
            "template": "index.htm",
            "controller": "index.js",
            "variation": "index.json"
        },
        "/categories/": {
            "template": "categories.htm",
            "controller": "categories.js",
            "variation": "categories.json"
        }
    }
}
```

with this set of files:

```
variations/
— index.json
— categories.json
controllers/
— modules/
—— list-of-article.js/
— common.js
- index.js
- categories.js
models/
— Article.js
— Category.js
templates/
— index.htm
— categories.htm
webconfig.json
```

with a "index.js" file containing, for example:

- Things for dynamically change the front display.
- Things for changes on the server side with jQuery.
- Things for asynchronous exchanges with Socket.IO.

```js
var website = {};



/***************************/
/* Variations Interception */
/***************************/

(function (publics) {
    "use strict";

    var privates = {};

    // Charging a function or set of functions.
    privates.listOfArticles = require('./modules/list-of-articles');

    // It occurs just before the complete assembly EJS.
    publics.changeVariation = function (params, mainCallback) {
        var NA = this,
            variation = params.variation,
            mongoose = params.NA.modules.mongoose,
            Article = mongoose.model('article');


        // Can intercept all the variables of "variations/common.js".
        console.log(variation.common.title); // Return title stored in « variations/common.js ».
        variation.common.title = "New Title"; // Set title.
        console.log(variation.common.title); // Return "New Title" and is accessible in template side via `<%= common.title %>`.

        // Can intercept all the variables of "variations/index.js" (because this file correspond to specific "index.js").
        variation.specific.title = "New Title"; // Return "New Title" and is accessible in template side via `<%= specific.title %>`.
        variation.specific.newProperty = "New Property"; // Defined a property does not exist in the original variation file that is accessible in template side via « <%= specific.newProperty ».

        // Can intercept the configuration of the current page
        console.log(variation.currentRoute); // Return « / » for « index.js », « /categories/ » for categories.js, « /categories/:category/ » for « category-detail.js », etc.

        // A test is made on a variable created in the webconfig.
        if (variation.webconfig._websiteIsClosed) {
            // The page is a 404.
            variation.currentRouteParameters.statusCode = 404;
        } else {
            // The page is a 200.
            variation.currentRouteParameters.statusCode = 200;
        }

        // Creating a new set of dynamic variation for templates.
        variation.backend = {}; // Properties available through « <%= backend.<properties> %> ».

        privates.listOfArticles(Article, function (listOfArticles) {

            // Availability of data items for client-side.
            variation.backend.articles = listOfArticles; // « <%= backend.articles.<properties> %> ».

            // We re-injects the changes.
            mainCallback(variation);
        });
    };

}(website));



/**********************************************************/
/* Interception of the HTML output for server-side jQuery */
/**********************************************************/

(function (publics) {
    "use strict";

    // It comes just before the HTML response to the client.
    publics.changeDom = function (params, mainCallback) {
        var NA = this,
            dom = params.dom,
            cheerio = NA.modules.cheerio, // Recovery cheerio to browse the DOM with jQuery.
            $ = cheerio.load(dom); // It loads dom to manipulate as a DOM.

        // After all HTML h2 output "dom".
        $("h2").each(function () {
            var $this = $(this);

            // ...we created a div,
            $this.after(
                // ... on injecte le contenu du h2 dans la div,
                $("<div>").html($this.html())
            );
            // ...and deletes the h2.
            $this.remove();
        });

        // We re-create a new HTML output with our changes.
        dom = $.html();

        // We re-injects the changes.
        mainCallback(dom);
    };

}(website));



/********************************************/
/* Asynchronous Events Management Socket.IO */
/********************************************/

(function (publics) {
    "use strict";

    // All Websocket action possible for this template.
    publics.asynchrone = function (params) {
        var NA = this,
            io = params.io,
            mongoose = params.NA.modules.mongoose,
            marked = params.NA.modules.marked,
            Article = mongoose.model('article');

        // Once we have a valid connection between the client and our back-end...
        io.sockets.on('connection', function (socket) {
            var sessionID = socket.request.sessionID,
                session = socket.request.session;

            // ...stay tuned on the "create-item-button" demand...
            socket.on('create-article-button', function (data) {

                // ...and respond to this demand by creating a new item if it comes
                // with the information sent via "data".
                var article = new Article({
                    _id: mongoose.Types.ObjectId(),
                    title: data.title,
                    urn: data.urn,
                });

                // If the user is connected.
                if (session.account) {

                    // ...we save the article into database.
                    article.save(function (error) {
                        if (error) {
                            throw error;
                        }

                        // And responds to all customers with a set of data in data.
                        io.sockets.emit('create-article-button', data);
                    });
                }
            });
        });
    };

}(website));



/********************************************/
/* Expose function for the NodeAtlas engine */
/********************************************/

exports.changeVariation = website.changeVariation;
exports.changeDom = website.changeDom;
exports.asynchrone = website.asynchrone; // Used not by "NodeAtlas" but with "common.js" (see previous file).
```

*Note : If* ***controllersRelativePath*** *is not present in "webconfig.js", default controller folder is* ***controllers***. ***controllersRelativePath*** *is useful only to change the name/path of directory.*



### Generate partial page with AJAX/Websocket ###

When a page is generate and send to client, the server doesn't know, if an AJAX request come, what is the route associated. And so it not capable to response with an HTML that used the correct variations or correct language.

The first step is to set value into client code. For example :

```html
...
<html lang="<%= languageCode %>">
...
<body data-variation="<%= currentRouteParameters.variation %>">
...
```

and the generate code will be :

```html
...
<html lang="fr-fr">
...
<body data-variation="index">
...
```

after, the JavaScript part send this value with an AJAX call with jQuery for example or, a socket.io request :

```js
...
publics.socket.emit("load-section-a", {
    lang: $("html").attr('lang'),
    variation: $("body").data('variation')
});
...
```

and so, the server know this parameters,

```js
...
socket.on('load-section-a', function (data) {
    var result = {},
        currentVariation = {};

    // Specific variations in the good language.
    currentVariation = NA.addSpecificVariation(data.variation, data.lang, currentVariation);

    // Common variations in the good language.
    currentVariation = NA.addCommonVariation(data.lang, currentVariation);

    // HTML part from `componentsRelativePath` directory and render with variations.
    result = NA.newRender("section-a.htm", currentVariation);

    // Send the result to client.
    socket.emit('load-sections', result);
});
...
```

and this thanks to `NA.addSpecificVariation`, `NA.addCommonVariation` and `NA.newRender`.

If `data.lang` in this example is type of `undefined`, files will be search in rood directory. If `currentVariation` is type of `undefined` an empty object will be created.



### Change the url parameters ###

By default, if you use the following configuration:

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

This is the same to using it:

```js
{
    "httpHostname": "localhost",
    "httpPort": 80,
    "httpSecure": false,
    "urlRelativeSubPath": "",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and you will be access to the url: *http://localhost/*.

Then change the configuration to this:

```js
{
    "httpHostname": "127.0.0.1",
    "httpPort": 7777,
    "httpSecure": true,
    "urlRelativeSubPath": "sub/folder",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

for access to : *https://127.0.0.1:7777/sub/folder/*



### Create your own webconfig variables ###

Imagine two webconfigs in which we create our own variables as follows:

1. "webconfig.json"

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    },
    "_minified": ""
}
```

2. "webconfig.prod.json"

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    },
    "_minified": ".min"
}
```

with this set of files

```
assets/
— stylesheets/
—— common.css
—— common.min.css
— javascript/
—— common.js
—— common.min.js
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

and "index.htm" containing:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common<%= webconfig._minified %>.css" />
    </head>
    <body>
        <div>This is a test to get a file minify/unminify.</div>
        <script type="text/javascript" src="javascript/common<%= webconfig._minified %>.js"></script>
    </body>
</html>
```

To run (since the site folder) the the command:

```
\> node </path/to/>node-atlas/node-atlas.js
```

We will have to address "http://localhost/" the following output with non-minified files:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
    </head>
    <body>
        <div>This is a test to get a file minify/unminify.</div>
        <script type="text/javascript" src="javascript/common.js"></script>
    </body>
</html>
```

However, running the command:

```
\> node </path/to/>node-atlas/server.js --webconfig webconfig.prod.json
```

We will have to address "http://localhost/" the following output with minified files:

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title>Hello world</title>
        <link rel="stylesheet" type="text/css" href="stylesheets/common.min.css" />
    </head>
    <body>
        <div>This is a test to get a file minify/unminify.</div>
        <script type="text/javascript" src="javascript/common.min.js"></script>
    </body>
</html>
```

*Note : It is better to prefix his personal variables with "_" to avoid conflicts with existing or future configuration variables.*



### Manage routing (URL Rewriting) ###

Although you can configure static urls, you can also set of dynamic url!

#### Standard ###

With the following configuration:

```js
{
    "routes": {
        "/list-of-members/:member/": {
            "template": "members.htm"
        },
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

you can access:

- *http://localhost/*
- *http://localhost/list-of-members/*
- *http://localhost/list-of-members/toto/*
- *http://localhost/list-of-members/bob-eponge99/*
- *http://localhost/list-of-members/node-atlas/*
- *http://localhost/list-of-members/etc/*

and retrieve the `:member` value in` changeVariation` (common and specific).

```js
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation;

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

    mainCallback(variation);
}
```

Dynamic url creation rules are those of [Express.js](http://expressjs.com/4x/api.html#req.params).

#### Regular Expressions ###

You can also enable regular expressions to a specific path with `regExp`. If it is `true`, the previous profile no longer works and you pass in Regular Expression mode. If `regExp` is a string, it acts as a flag (g, i, m or y).

See the following configuration:

```js
{
    "routes": {
        "/list-of-members/([-a-z0-9]+)/?": {
            "template": "members.htm",
            "regExp": "g"
        },
        "/list-of-members/?": {
            "template": "members.htm",
            "regExp": true
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

you can access:

- *http://localhost/*
- *http://localhost/list-of-members/* _(ou *https://localhost/list-of-members*)_
- *http://localhost/list-of-members/toto/* _(ou *https://localhost/list-of-members/toto*)_
- *http://localhost/list-of-members/bob-eponge99/* _(ou *https://localhost/list-of-members/bob-eponge99*)_
- *http://localhost/list-of-members/node-atlas/* _(ou *https://localhost/list-of-members/node-atlas*)_
- *http://localhost/list-of-members/etc/* _(ou *https://localhost/list-of-members/etc*)_

and retrieve the `([-a-z0-9] +) value in the` `changeVariation` (common and specific).

```js
exports.changeVariation = function (params, mainCallback) {
    var variation = params.variation;

    if (variation.params && variation.params[0]) { variation.params.member = variation.params[0]; }
    // variation.params[1] for second match, etc...

    console.log(variation.params.member);
    // \> 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

    mainCallback(variation);
}
```

The rules for creating dynamic url with `regExp` are those of [RegExpJavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

#### Routing in a shared file ####

In order to not rewrite a long route list in `webconfig.json` file to your development environment and` webconfig.prod.json` to your production environment, you can group route in a file of your choice. By convention, the name is `routes.json` file.

For example:

The following set of file

```
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

with `webconfig.json`

```json
{
    "httpPort": 7777,
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and with `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

could be the following set of file

```
templates/
— index.htm
routes.json
webconfig.json
webconfig.prod.json
```

with `webconfig.json`

```json
{
    "httpPort": 7777,
    "routes": "routes.json"
}
```

with `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "routes": "routes.json"
}
```

and `routes.json`

```json
{
    "/": {
        "template": "index.htm"
    }
}
```

*Note : You can create multiple route file as `routes.en.json` and `routes.fr.json` and associate each of them in a set of webconfig parameterize to run a website in various languages.*



### Manage a page not found ###

#### Listen all urls, and also file provide by `assetsRelativePath` ####

To display a custom page when a resource is not found you must:

1. Prepare a 404 page.
2. Fill the parameter with `pageNotFound` with the following `value` : `key` of the prepared 404 page.

See the example below:

```js
{
    "pageNotFound": "/not-found-page/",
    "routes": {
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        },
        "/not-found-page/": {
            "template": "error.htm",
            "statusCode": 404
        }
    }
}
```

you can access to:

- *http://localhost/this-page-do-not-exist.html*
- *http://localhost/this/page/either/*
- *http://localhost/etc*

#### Multilingual Error Page ####

For this, just create a new route with `*` at the end with the languageCode.

See below :

```js
{
    "pageNotFound": "/not-found-page/",
    "languageCode": "en-gb",
    "routes": {
        "/list-of-members/": {
            "template": "members.htm",
            "variation": "members.json"
        },
        "/": {
            "template": "index.htm",
            "variation": "index.json"
        },
        "/not-found-page/": {
            "template": "error.htm",
            "variation": "error.json",
            "statusCode": 404
        },
        "/francais/liste-des-membres/": {
            "template": "members.htm",
            "languageCode": "fr-fr",
            "variation": "members.json"
        },
        "/francais/": {
            "template": "index.htm",
            "languageCode": "fr-fr",
            "variation": "index.json"
        },
        "/francais/*": {
            "template": "error.htm",
            "languageCode": "fr-fr",
            "variation": "error.json",
            "statusCode": 404
        }
    }
}
```



### Manage redirects ###

To go to a different address (redirect 301 or 302) when you get to a url you must use the `redirect` parameter.

*Note : if you don't set `statusCode`, no redirect will be executed. The `statusCode` is mandatory for redirection.*

#### Static ####

See the example below:

```js
{
    "routes": {
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/list-of-members": {
            "redirect": "/list-of-members/",
            "statusCode": 301
        },
        "/go-to-node-atlas/": {
            "redirect": "http://haeresis.github.io/NodeAtlas/",
            "statusCode": 302
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

You will be redirected:

- to `http://localhost/list-of-members/` when you access `http://localhost/list-of-members` with a header _permanent redirect_.
- to `http://haeresis.github.io/NodeAtlas/` when you access `http://localhost/go-to-node-atlas/` with a header _temporary redirect_.

#### Dynamic ####

See the example below:

```js
{
    "routes": {
        "/list-of-members/:member/": {
            "template": "members.htm"
        },
        "/list-of-members/:member": {
            "redirect": "/membres/:member/",
            "statusCode": 301
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

You will be redirected to `http://localhost/list-of-members/haeresis/` when you access to `http://localhost/list-of-members/haeresis` with a header _permanent redirect_.

#### With regular expressions ####

See the example below:

```js
{
    "routes": {
        "/membres/([-a-z0-9]+)/": {
            "template": "members.htm",
            "regExp": true
        },
        "/list-of-members/([-a-z0-9]+)/": {
            "redirect": "/membres/$0/",
            "statusCode": 301,
            "regExp": true
        },
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/": {
            "template": "index.htm"
        }
    }
}
```

You will be redirected to `http://localhost/list-of-members/haeresis/` when you access to `http://localhost/list-of-members/haeresis` with a header _permanent redirect_.

For the second *match* use $1, the third $2, etc.



### Run Website with HTTPs ###

It is very simple to run an instance of NodeAtlas with HTTPs protocol. You just have to create such a `security` folder in which to place your `server.key` and `server.crt` file to supply the protocol. 

Just use the following configuration:

```js
{
    "httpSecure": true,
    "httpSecureRelativeKeyPath": "security/server.key"
    "httpSecureRelativeCertificatePath": "security/server.crt"
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

Alternatively , if your two Key and Certificate files have the same name, use this configuration:

```js
{
    "httpSecure": "security/server",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Minify CSS/JS ###

You can automatically generate CSS and JS files minified and obfuscated by creating Bundles by referencing the file by input and output path. Of course you can do as much as you want. The gereration files is execute every time you start NodeAtlas either as a server or via the `--generate` command if a Bundle exists in the Webconfig.

#### Creating Bundles ####

With the following configuration:

```js
{
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and the following set of file:

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
templates/
— index.htm
webconfig.json
```

you will get the following new files:

```
assets/
— stylesheets
—— common.css
—— common-min780.css
—— common-min1160.css
—— common.min.css               <= new file
— javascript
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
—— javascript/boot.min.js       <= new file
—— javascript/framework.min.js  <= new file
—— javascript/common.min.js     <= new file
templates/
— index.htm
webconfig.json
```

#### Bundles in a shared file ####

In order to not re-write a long Bundles configuration list in `webconfig.json` file to your development environment and` webconfig.prod.json` to your production environment, you can group routes in a file of your choice. By convention, the name is `bundles.json` file.

For example:

The following set of file

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

with `webconfig.json`

```json
{
    "httpPort": 7777,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and with `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

could be the following set of file

```
assets/
— stylesheets/
—— common.css
—— common-min780.css
—— common-min1160.css
— javascript/
—— modernizr.js
—— yepnot.js
—— html5Shiv.js
—— jquery.js
—— jquery-ui.js
—— prettify.js
—— prettify/run_prettify.js
—— components/extended-format-date.js
—— common.js
templates/
— index.htm
bundles.json
webconfig.json
webconfig.prod.json
```

with `webconfig.json`

```json
{
    "httpPort": 7777,
    "bundles": "bundles.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

with `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "bundles": "bundles.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and `bundles.json`

```json
{
    "javascript": {
        "javascript/boot.min.js": [
            "javascript/modernizr.js",
            "javascript/yepnot.js",
            "javascript/html5Shiv.js"
        ],
        "javascript/framework.min.js": [
            "javascript/jquery.js",
            "javascript/jquery-ui.js",
            "javascript/prettify.js",
            "javascript/prettify/run_prettify.js"
        ],
        "javascript/common.min.js": [
            "javascript/components/extended-format-date.js",
            "javascript/common.js"
        ]
    },
    "stylesheets": {
        "stylesheets/common.min.css": [
            "stylesheets/common.css",
            "stylesheets/common-min780.css",
            "stylesheets/common-min1160.css"
        ]
    }
}
```

*Note : it is possible to disable Bundles by not including them in the `webconfig`.*

#### Disable Bundles ####

It is also possible to not execute the minification when run a website with NodeAtlas with `"stylesheetsBundlesEnable": false` et `"javascriptBundlesEnable": false`` for each type of Bundle.

```js
{
    "stylesheetsBundlesEnable": false,
    "javascriptBundlesEnable": false,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : if your bundle is in shared file, you could desactivated it also without the `"bundles": "bundles.json"`. Just remove it.*

#### Re-generate Bundles before each Page Response ####

For test your page with minified files, you can ask it to be regenerated before each page response with `"stylesheetsBundlesBeforeResponse": false` et `"javascriptBundlesBeforeResponse": false`` for each type of Bundle.

```js
{
    "stylesheetsBundlesBeforeResponse": false,
    "javascriptBundlesBeforeResponse": false,
    "bundles": {
        "javascript": {
            "javascript/boot.min.js": [
                "javascript/modernizr.js",
                "javascript/yepnot.js",
                "javascript/html5Shiv.js"
            ],
            "javascript/framework.min.js": [
                "javascript/jquery.js",
                "javascript/jquery-ui.js",
                "javascript/prettify.js",
                "javascript/prettify/run_prettify.js"
            ],
            "javascript/common.min.js": [
                "javascript/components/extended-format-date.js",
                "javascript/common.js"
            ]
        },
        "stylesheets": {
            "stylesheets/common.min.css": [
                "stylesheets/common.css",
                "stylesheets/common-min780.css",
                "stylesheets/common-min1160.css"
            ]
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : this is not recommanded for production environment because it's slowed responses pages.*



### CSS generation with Less ###

You can use the preprocessor Less to create your CSS. The operation is as follows: whenever a CSS request is made, if a Less equivalent exists it is read and it generates the CSS. Once done, the new CSS is responded.

With the following structure:

```
assets/
— stylesheets
—— common.less
templates/
— index.htm
webconfig.json
```

and the following webconfig:

```js
{
    "enableLess": true,
    "routes": {
        "/": "index.htm"
    }
}
```

and the following content in:

*templates/index.htm*

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Less Test</title>
        <link rel="stylesheet" href="stylesheets/common.css">
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

*assets/stylesheets/common.less*

```css
p {
    color: #f00;
}
```

you will build the `assets/stylesheets/common.css` by calling the url `http://localhost/` or `http://localhost/stylesheets/common.css`.

#### Source Map and Minification ####

By default, in the above example, a `common.css.map` file will be generated. This allows your browser to indicated you that line in `.less`  file has generated the CSS property of the item you have selected in your debugger.

Disable this with `enableLess.sourceMap` to `false`:

```
    "enableLess": {
        "sourceMap": false
    },
    "routes": {
        "/": "index.htm"
    }
```

You can also generate CSS files already minify with:

```
    "enableLess": {
        "compress": true
    },
    "routes": {
        "/": "index.htm"
    }
```

#### Compile Less files with `--generate` ####

Because of Less are compilated on the fly, when a file is requested in http(s), modification needed running website for generate CSS output. Then you can use CSS. It's possible to skip running step and directly complated Less before minify CSS with `enableLess.less`.

With the following `webconfig.json`:

```js
{
    "enableLess": {
        "less": [
            "stylesheets/common.less",
            "stylesheets/component-1.less",
            "stylesheets/component-2.less",
            "stylesheets/component-3.less"
        ]
    },
    "routes": {
        "/": "index.htm"
    }
}
```

or with the following `webconfig.json`:

```js
{
    "enableLess": {
        "less": "less.json"
    },
    "routes": {
        "/": "index.htm"
    }
}
```

with `less.json` containing :

```js
[
    "stylesheets/common.less",
    "stylesheets/component-1.less",
    "stylesheets/component-2.less",
    "stylesheets/component-3.less"
]
```

The `@import` used by Less will be capable to walk into subdirectories : `styles`, `stylesheets` or `css`. It's possible to change that with :

```js
{
    "enableLess": {
        "paths": [
            "subdirectory/styles-files",
        ],
        "less": "less.json"
    },
    "routes": {
        "/": "index.htm"
    }
}
```



### Optimize Images files ###

You can automatically generate optimized images files by creating Optimizations by referencing the file by input and output path. Of course you can do as much as you want. The optimization files is execute every time you start NodeAtlas either as a server or via the `--generate` command if an Optimization exists in the Webconfig.

#### Creating Optimizations ####

With the following configuration:

```js
{
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and the following set of file:

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
templates/
— index.htm
webconfig.json
```

you will get the following new files:

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
——— optimized/      <= new folder
———— example.png    <= new file
———— example.jpg    <= new file
———— example.gif    <= new file
———— example.svg    <= new file
templates/
— index.htm
webconfig.json
```


#### Create Optimizations by group of file ####

For example, not define file one by one, but in group:

```js
{
    "optimizations": {
        "images": {
            "media/images/*.{gif,jpg,png,svg}": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

#### Optimizations in a shared file ####

In order to not re-write a long Bundles configuration list in `webconfig.json` file to your development environment and` webconfig.prod.json` to your production environment, you can group files in a file of your choice. By convention, the name is `optimizations.json` file.

For example:

The following set of file

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
templates/
— index.htm
webconfig.json
webconfig.prod.json
```

with `webconfig.json`

```json
{
    "httpPort": 7777,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and with `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

could be the following set of file

```
assets/
— media/
—— images/
——— example.png
——— example.jpg
——— example.gif
——— example.svg
templates/
— index.htm
bundles.json
webconfig.json
webconfig.prod.json
```

with `webconfig.json`

```json
{
    "httpPort": 7777,
    "optimizations": "optimizations.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

with `webconfig.prod.json`

```json
{
    "httpPort": 7776,
    "httpHostname": "blog.lesieur.name",
    "urlPort": 80,
    "optimizations": "optimizations.json",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

and `optimizations.json`

```json
{
    "images": {
        "media/images/example.png": "media/images/optimized/",
        "media/images/example.jpg": "media/images/optimized/",
        "media/images/example.gif": "media/images/optimized/",
        "media/images/example.svg": "media/images/optimized/"
    }
}
```

*Note : it is possible to disable Optimizations by not including them in the `webconfig`.*

#### Disable Optimizations ####

It is also possible to not execute the optimization when run a website with NodeAtlas with `"imagesOptimizationsEnable": false`.

```js
{
    "imagesOptimizationsEnable": false,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : if your optimizations is in shared file, you could desactivated it also without the `"optimizations": "optimizations.json"`. Just remove it.*

#### Re-generate Optimizations before each Page Response ####

You can ask files to be regenerated before each page response with `"stylesheetsBundlesBeforeResponse": false` et `"javascriptBundlesBeforeResponse": false`` for each type of Bundle.

```js
{
    "imagesOptimizationsBeforeResponse": false,
    "optimizations": {
        "images": {
            "media/images/example.png": "media/images/optimized/",
            "media/images/example.jpg": "media/images/optimized/",
            "media/images/example.gif": "media/images/optimized/",
            "media/images/example.svg": "media/images/optimized/"
        }
    },
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

*Note : this is not recommanded for production environment because it's slowed responses pages.*



### CSS Inline Injection for Manage Email Assets ###

When you create templates for sending email newsletters, or even simple message, you can not attach stylesheet. The only way is to write the CSS instructions in the template within the `style` markup attribute.

#### Specific Injection ####

With `injectCss`, simply design your template as usual via a stylesheet and NodeAtlas inject each rendering styles in the attribute `style`. It will do more than generate templates.

With for example the following configuration:

```json
{
    "routes": {
        "/": {
            "template": "email.htm",
            "generate": "welcome.html",
            "injectCss": "stylesheets/email.css"
        }
    }
}
```

and the following set of files:

```
generates/
assets/
— stylesheets/
—— email.css
templates/
— email.htm
```

whose contents are :

**stylesheets/common.css**

```css
body {
    color: #f00;
}
```

**templates/email.htm***

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Email</title>
    </head>
    <body>
        <p>This is a template email.</p>
    </body>
</html>
```

output will be, with the command `node </path/to/>node-atlas/node-atlas.js --generate`, all following file:

```
generates/
— welcome.html    <= template email generate !
assets/
— stylesheets/
—— email.css
templates/
— email.htm
```

with as content for `generates/welcome.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Email</title>
    </head>
    <body style="color: #f00;">
        <p>This is a template email.</p>
    </body>
</html>
```

This mechanism also works if you do not intend to generate anything but a site that is running. Convenient to change your live models before generating.

> Test : From `./tests/examples/css-injection` run `node "../../../node-atlas.js" --generate`. Result are into `generates`.

#### Global Injection ####

It is possible to use `injectCss` as global mechanism for all pages.

```json
{
    "injectCss": "stylesheets/email.css",
    "routes": {
        "/welcome/": {
            "template": "email-a.htm",
            "generate": "welcome.html"
        },
        "/good-bye/": {
            "template": "email-b.htm",
            "generate": "good-bye.html"
        }
    }
}
```

ainsi les deux pages `welcome` et `good-bye` contiendront chacune `<body style="color: #f00;">`.

#### Multiple Injection ####

It's possible to :
- Attach global and specific files in same time.
- Attach more one CSS file by `injectCss` property.

```json
{
    "injectCss": ["stylesheets/reset.css", "stylesheets/email.css"],
    "routes": {
        "/welcome/": {
            "template": "email-a.htm",
            "generate": "welcome.html",
            "injectCss": "/stylesheets/welcome.css"
        },
        "/good-bye/": {
            "template": "email-b.htm",
            "generate": "good-bye.html",
            "injectCss": ["stylesheets/good-bye.css", "/stylesheets/others.css"]
        }
    }
}
```

> Test : From `./tests/examples/css-injection` run `node "../../../node-atlas.js" --generate --webconfig webconfig.multiple.json`. Result are into `generates`.



### Allow/Disallow GET/POST requests ###

You can also manager how the server will respond to requests GET/POST to a given page. For example, we will allow access to pages only GET for the whole site and allow a POST to one page only (and prohibited him GET).

```js
{
    "getSupport": true,
    "postSupport": false,
    "routes": {
        "/": {
            "template": "index.htm"
        },
        "/list-of-members/": {
            "template": "members.htm"
        },
        "/write-comment/": {
            "template": "write-com.htm"
        },
        "/save-comment/": {
            "template": "save-com.htm",
            "getSupport": false,
            "postSupport": true
        }
    }
}
```

*Note : If nothing is set,* ***getSupport*** *and* ***postSupport*** *are set to* ***true*** *in  global webconfig and by route.*



### Change settings of Sessions ###

#### Key and Secret ####

NodeAtlas itself manages sessions stored on the server as initial settings:

- Key : `nodeatlas.sid`
- Secret : `1234567890bépo`

that allow customers to stay connected through the pages to a single set of personal server side variable.

It is possible to change the default settings (and even compulsory for productions sites) with the parameters of `webconfig.json` following:

```js
{
    sessionKey: "personal key",
    sessionSecret: "personal secret"
}
```

NodeAtlas also employs a memory storage object (MemoryStore) stoques that the information in the RAM of the server.

#### Other Parameters ####

It is possible to change all the parameters of the sessions (except MemoryStore) using the configuration of next `webconfig.json`:

```js
{
    "session": {
        "key": "personal key",
        "secret": "personal secret",
        "cookie": {
            "path": '/',
            "httpOnly": true,
            "secure": false,
            "maxAge": null
        },
        ...,
        ...,
        ...
    }
}
```

The entirety of the possible configuration is located on the module documentation [express-session](https://github.com/expressjs/session).



### External Storage Sessions ###

By default, this is NodeAtlas server that stores sessions in the RAM of the server application. This does not allow users to share sessions across multiple applications NodeAtlas (or other) and erases all current sessions for an application if you restart it.

To address this concern, it should support the recording sessions via a base No SQL such as `Redis` or `MongoBD`.

You just have to use the `setSessions` function in` controllers/common.js` of [partie Back-end](#use-nodeatlas-to-run-a-website-back-end-part).

#### Session managed with Redis ####

Implement the following code in `controllers/common.js` to store your sessions in a local Redis.

```
var website = {};

(function (publics) {
    "use strict";

    publics.loadModules = function (NA) {
        var NA = this;

        NA.modules.RedisStore = require('connect-redis');
    };

    publics.setSessions = function (callback) {
        var NA = this,
            session = NA.modules.session,
            RedisStore = NA.modules.RedisStore(session);

        NA.sessionStore = new RedisStore();

        callback();
    };

}(website));

exports.loadModules = website.loadModules;
exports.setSessions = website.setSessions;
```

More information to [connect-redis](https://www.npmjs.org/package/connect-redis) page.


#### Session managed with MongoDB ####

Implement the following code in `controllers/common.js` to store sessions in the database `sessions` of a local MongoDB.

```
var website = {};

(function (publics) {
    "use strict";

    publics.loadModules = function () {
        var NA = this;

        NA.modules.MongoStore = require('connect-mongo');
    };

    publics.setSessions = function (callback) {
        var NA = this,
            session = NA.modules.session,
            MongoStore = NA.modules.MongoStore(session);

        NA.sessionStore = new MongoStore({
            db: 'sessions'
        });

        callback();
    };

}(website));

exports.loadModules = website.loadModules;
exports.setSessions = website.setSessions;
```

More information to [connect-redis](https://www.npmjs.org/package/connect-mongo) page.



### Changing the template engine brackets <% %> ###

For example, to include part of a file instruction is used ***<%- include('head.htm') %>***. It would be possible to do it with ***<?- include('head.htm') ?>*** with the configuration below:

```js
{
    "templateEngineDelimiter": "?",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

See the exemple in files below:

*components/head.htm*

```html
<!DOCTYPE html>
<html lang="fr-fr">
    <head>
        <meta charset="utf-8" />
        <title><?= specific.titlePage ?></title>

        <link type="text/css" rel="stylesheet" href="stylesheets/<?= common.classCssCommon ?>.css" media="all" />
        <link type="text/css" rel="stylesheet" href="stylesheets/<?= specific.classPage ?>.css" media="all" />
    </head>
    <body class="<?= specific.classPage ?>">
```

*components/foot.htm*

```html
        <script async type="text/javascript" src="javascript/<?= common.classJsCommon ?>.js"></script>
    </body>
</html>
```

*templates/template.htm*

```html
    <? include('head.htm') ?>

    <div class="title"><?= common.titleWebsite ?></div>

    <div>
        <h1><?= specific.titlePage ?></h1>
        <?- specific.content ?>
    </div>

    <? include('foot.htm') ?>
```

Learn all about the possibilities of the template engine consult the documentation [ejs](https://github.com/mde/ejs)

*Note : If nothing is set,* ***templateEngineDelimiter*** *is set to* ***%***.



### Change the url hostname and listening port ###

It is possible to generate a different url listening other port with ***urlHostname*** *** and ***urlPort***. For example, the local loop listens on port 80 for a script makes the Reverse Proxy from the port 7777 on the 80 with the "http-proxy" module as below:

```js
{
    "httpPort": 7777,
    "httpHostname": "127.0.0.1",
    "urlPort": 80,
    "urlHostname": "localhost",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

It's also possible to avoid other enter url. Also if `www.localhost` or `localhost:7777` are enter into url area, it's `localhost` for the user :

```js
{
    "enableForceDomain": true,
    "httpPort": 7777,
    "httpHostname": "127.0.0.1",
    "urlPort": 80,
    "urlHostname": "localhost",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```



### Generate urls dynamically ###

#### Relative paths in absolute ####

It is possible that the paths created from your url to be interpreted as subfolders that have actually no real existence. This has the effect the address `media/images/example.jpg` initially accessible from template displayed to address **http://localhost**` impossible to reach when the template is displayed to address **http://localhost/sub-directory/** (because the path should be `../media/images/example.jpg`).

To no longer have to worry about access to resources regardless of the URL that is requested, simply turn on all the urls such as:

```
<link rel="stylesheet" type="text/css" href="stylesheets/common.css" />
<!-- ... -->
<img src="media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="javascript/common.js"></script>
```

in absolute urls with variable `urlBasePath` as below:

```
<link rel="stylesheet" type="text/css" href="<%= urlBasePath %>stylesheets/common.css" />
<!-- ... -->
<img src="<%= urlBasePath %>media/images/example.jpg" />
<!-- ... -->
<script type="text/javascript" src="<%= urlBasePath %>javascript/common.js"></script>
```

Note that in the case of the following configuration:

```js
{
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

`urlBasePath` return `http://localhost/` while in this configuration:

```js
{
    "httpPort": 7777,
    "urlRelativeSubPath": "sub/folder",
    "routes": {
        "/": {
            "template": "index.htm"
        }
    }
}
```

`urlBasePath` return `http://localhost:7777/sub/folder/`.

#### The paths of templates ####

Using the following webconfig:

```js
{
    "routes": {
        "/index.html": {
            "template": "index.htm"
        },
        "/contact.html": {
            "template": "contact.htm"
        }
    }
}
```

and the corresponding template

```html
<!-- ... -->
<a href="http://localhost/index.html">Link to home</a>
<a href="http://localhost/contact.html">Link to contact</a>
<!-- ... -->
```

I'd have to change my link in the template if I change the listening port or if I change the path of the url. The following configuration changes:

```js
{
    "httpPort": 7777,
    "routes": {
        "/home.html": {
            "template": "index.htm"
        },
        "/contact-us.html": {
            "template": "contact.htm"
        }
    }
}
```

me contraindrait à modifier le template précédent comme suit :

```html
<!-- ... -->
<a href="http://localhost:7777/home.html">Link to home</a>
<a href="http://localhost:7777/contact-us.html">Link to contact</a>
<!-- ... -->
```

You can solve this problem by giving a key to a specific path and deporting are way in the `url` property.

With the followinh webconfig:

```js
{
    "routes": {
        "index": {
            "url": "/index.html",
            "template": "index.htm"
        },
        "contact": {
            "url": "/contact.html",
            "template": "contact.htm"
        }
    }
}
```

I can now write the link in the dynamic template:

1. as follows

   ```html
<!-- ... -->
<a href="<%= urlBasePath %><%= webconfig.routes.home.url.slice(1) %>">Link to home</a>
<a href="<%= urlBasePath %><%= webconfig.routes.contact.url.slice(1) %>">Link to contact</a>
<!-- ... -->
```

   *Note : `.slice(1)` makes it easy to remove the dual `/` for standard url.*

2. or as follows

   ```html
<!-- ... -->
<a href="<%= urlBasePath %>.<%= webconfig.routes.home.url %>">Link to home</a>
<a href="<%= urlBasePath %>.<%= webconfig.routes.contact.url %>">Link to contact</a>
<!-- ... -->
```

   *Note : This would, for example `http://localhost/./home.html`, which is a standard url.*

3. ou comme suit

   ```html
<!-- ... -->
<a href="<%= urlBasePathSlice + webconfig.routes.home.url %>">Link to home</a>
<a href="<%= urlBasePathSlice + webconfig.routes.contact.url %>">Link to contact</a>
<!-- ... -->
```

   *Note : `urlBasePathSlice` return `http://localhost` in place of `http://localhost/` or `http://localhost:7777/sub/folder` in place of `http://localhost:7777/sub/folder/`.*

#### Utilisation de la clé pour mapper les pages ####

It's maybe useful to know the key used for the current page displayed for find the equivalent page in an other language.

With the following webconfig :

```js
{
    "languageCode": "en-us",
    "routes": {
        "index_en-us": {
            "url": "/",
            "template": "/index.htm"
        },
        "index_fr-fr": {
            "url": "/francais/",
            "template": "index.htm",
            "languageCode": "fr-fr"
        },
        "cv_en-us": {
            "url": "/resume/",
            "template": "cv.htm"
        },
        "cv_fr-fr": {
            "url": "/francais/cv/",
            "template": "index.htm",
            "languageCode": "fr-fr"
        }
    }
}
```

and the common variation following :

```js
{
    "language": [{
        "name": "English",
        "code": "en-us"
    }, {
        "name": "French",
        "code": "fr-fr"
    }]
}
```

in fr :

```js
{
    "language": [{
        "name": "Anglais",
        "code": "en-us"
    }, {
        "name": "Français",
        "code": "fr-fr"
    }]
}
```

we could create link between each page as following :

```html
<ul>
    <% for (var i = 0; i < common.language.length; i++) { %>
    <li><a href="<%= urlBasePathSlice + webconfig.routes[currentRouteName.split('_')[0] + '_' + common.language[i].code].url %>"><%- common.language[i].name %></a></li>
    <% } %>
</ul>
```



## CLI / Running commands ##

The easiest way to start is to position NodeAtlas in the directory hosting your site and run the command `\> node </path/to/>node-atlas/node-atlas.js`. However there are options to launch more than launch the site.

Each of the commands that follow can be coupled with other like this:

```
\> node </path/to/>node-atlas/node-atlas.js --directory /hello-world/ --webconfig config.fr-fr.js --httpPort 80 --browse
```


### --directory ###

It is possible to launch NodeAtlas from another location where the website folder is placed. The `--directory` command will be very useful.

```
\> node </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```


### --webconfig ###

By default, NodeAtlas will read your `webconfig.json` file. It is possible that in addition to the file you created another `webconfig.prod.json` file whose domain name is different. Or a `webconfig.fr-fr.json` with urls changes for another language. Instead of renaming your files in `webconfig.json` before launching the site, simply enter your other configuration name. In the following example, this file will be `webconfig.alternatif.json`.

```
\> node </path/to/>node-atlas/node-atlas.js --webconfig webconfig.alternatif.json
```



### --browse ###

This command opens your browser to the address on which the site will run. Very handy when you do not remember the port for your development version. This command is useless if it is coupled with `--generate` (see below).

```
\> node </path/to/>node-atlas/node-atlas.js --browse
```

You could also targeted a specific page with the end of url.


```
\> node </path/to/>node-atlas/node-atlas.js --browse index.html
```



### --httpPort ###

You will not be bored to change your listening port on your projects and sometimes you'll have to work on two different websites simultaneously. With this command you will not need to cut your sites turn to release the listener, simply pick one at launch.

```
\> node </path/to/>node-atlas/node-atlas.js --httpPort 7778
```



### --generate ###

If you change an item in your common variation file or even your template components called in multiple pages, you will not reload each page to update your output files. If so, simply use `--generate`. This command will copy the entire contents of the folder `assetsRelativePath` into `generatesRelativePath` if their path is different.

```
\> node </path/to/>node-atlas/node-atlas.js --generate
```





## API / NodeAtlas as npm module ##

If you start NodeAtlas via JavaScript code, you can also configure the launch:

*server.js*

```javascript
require("node-atlas")().run({
    directory: "</path/to/your/website/directory/>",
    webconfig: "webconfig.alternatif.json",
    browse: true,
    httpPort: 7778,
    generate: true
});
```

```
\> server server.js
```

You can run multiple website in same time. Each webconfig must listen a different port.

*servers.js*

```javascript
var nodeAtlas = require("node-atlas"),
    websiteEn = new nodeAtlas(),
    websiteFr = new nodeAtlas();

websiteEn.run({
    "browse": true,
    "webconfig": "webconfig.english.json"
});
websiteFr.run({
    "browse": true,
    "webconfig": "webconfig.french.json"
});
```





## NodeAtlas as a simple web server ##

If NodeAtlas can not find the "webconfig.json" or `--webconfig` you have specify, it will run in either "Simple Web Server" or "Public" mode.

**This mode is useful for testing very quickly that NodeAtlas is installed properly or to create small HTML examples that need to run a web server (AJAX returns, embedded iframe, etc.).**

To understand what this means: if there is any file in the directory where NodeAtlas was launched, it will be returned by HTTP request so have the demands via its path.

For example, by launching NodeAtlas in the `site-hello-world` folder

```
site-hello-world/
— templates/
—— index.htm
— webconfig.json
```

by running the command

```
\> node </path/to/>node-atlas/node-atlas.js
```

or even the command

```
\> node </path/to/>node-atlas/node-atlas.js --webconfig webconfig.not-exist.json
```

the server will run in "Simple Web Server" mode and file "http://localhost/webconfig.json" or "http://localhost/templates/webconfig.htm" will be available as the browser could refer as a simple web server.

*Note : only commands `--webconfig`, `--browse`, `--directory` and `--httpPort` work in this mode.*





## Running NodeAtlas on online server ##

### In a Windows Server environment with iisnode ###

In a Windows Server 2013 environment with IIS8 the requirements are:

1. Install [the node.exe executable](http://nodejs.org/download/) able to run JavaScript code.
2. Install [the IIS8 UrlRewrite module](http://www.iis.net/downloads/microsoft/url-rewrite) to map pages executed to an output URL.
3. Install [the IIS8 issnode module](https://github.com/tjanczuk/iisnode/downloads) to read web.config and to manage the website (IIS Application Pool Management, start/stop website, etc...).

#### Create application ####

In IIS8, create a web site and create an Application.

The content of your application will be the site mixed with that of NodeAtlas. So that means this:

```
node-atlas/
— node_modules/
— languages/
—— default.json
— node-atlas.js
site-hello-world/
— assets/
— templates/
—— index.htm
— webconfig.json
```

becomes this:

```
site-hello-world/
— node_modules/
— languages/
—— default.json
— assets/
— templates/
—— index.htm
— node-atlas.js
— webconfig.json
```

You will add to this set of files, additional file named `web.config` whose content is:

```xml
<configuration>
    <system.webServer>
        <handlers>
            <add name="iisnode" path="node-atlas.js" verb="*" modules="iisnode" />
        </handlers>
        <rewrite>
            <rules>
                <rule name="LogFile" patternSyntax="ECMAScript" stopProcessing="true">
                     <match url="^[a-zA-Z0-9_\-]+\.js\.logs\/\d+\.txt$"/>
                </rule>
                <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
                    <match url="^node-atlas.js\/debug[\/]?" />
                </rule>
                <rule name="StaticContent">
                     <action type="Rewrite" url="assets{REQUEST_URI}"/>
                </rule>
                <rule name="DynamicContent">
                     <conditions>
                          <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true"/>
                     </conditions>
                     <action type="Rewrite" url="node-atlas.js"/>
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

to obtain:

```
site-hello-world/
— node_modules/
— languages/
—— default.json
— assets/
— templates/
—— index.htm
— node-atlas.js
— webconfig.json
— web.config
```

It will just have to click on "Browse <url-of-Site>" in your IIS8 action panel. You can now manage your website (start / stop / Pool Recycling) like any other IIS8 application.

#### webconfig example ####

An example for a production webconfig:

```js
{
    "urlPort": 80,
    "httpPort": 7777,
    "httpHostname": "www.example.com",
    "routes": {
        ...
    }
}
```



### In a Unix environment with forever ###

This requires:

1. Install [the node.exe executable](http://nodejs.org/download/) able to run JavaScript code.
2. Install [the CLI tool forever](https://github.com/nodejitsu/forever) manager for your websites continuously (start, stop, restart, etc.).
3. Running in addition of your websites a reverse-proxy running on port 80 for all applications.


#### Some forever commands ####

To manage a new website in continues to be used the command:

```
\> forever start </path/to/>node-atlas/node-atlas.js --directory </path/to/your/website/directory/>
```

To stop it, localise the **uid** with the `list` forever command

```
\> forever list
```

and then use the command:

```
\> forever stop <uid>
```

or `<uid>` is the **uid** of running website.


#### webconfig example ####

An example for a production webconfig:

```js
{
    "urlPort": 80,
    "httpPort": 7777,
    "httpHostname": "www.example.com",
    "routes": {
        ...
    }
}

```

You will then use a reverse proxy to make your site accessible on port 80.




### Proxy ###

#### Bouncy ####

Bouncy is an example of reverse-proxy that you can use to run various NodeAtlas websites (with other types of websites) together on the same port (80).

You can for example:

- run 3 Node.js apps on ports 7777, 7778 and 7779 with forever,
- and besides launching a apache server on port 81

and make all your websites accessible behind domain names on port 80 with Bouncy example.

Here is a sample configuration with Bouncy:

**global-server.js**

```javascript
var bouncy = require('bouncy');

var server = bouncy(function (request, response, bounce) {
    if (request.headers.host === 'beep.example.com') {
        bounce(7777);
    }
    else if (request.headers.host === 'blup.example.com') {
        bounce(7776);
    }
    else if (request.headers.host === 'boop.example.com') {
        bounce(81);
    }
    else {
        response.statusCode = 404;
        response.end('no such host');
    }
});

server.listen(80);
```

and you can start with:

```
\> forever start </path/to/>global-server.js
```

[More information about Bouncy](https://github.com/substack/bouncy)





## About NodeAtlas API ##

NodeAtlas is made of such a way that the `NA` object contains all the functions allowing it to function. NodeAtlas delivers itself it's object into controllers via the methods used in the Back-end mode with Node.js for you to occasionally change his behavior.

All error messages are in `/languages/default.json`. If you want to change language, simply replace content of `default.json` file (currently the same of `en-gb`) with the content of `fr-fr.json` or others file translated by you.

Finally [the public/privates architecture is explained in this article](http://blog.lesieur.name/structurer-le-javascript-de-son-site-avec-ou-sans-framework/) (Fr).
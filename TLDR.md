> *NodeAtlas* is a MVC2 Javascript Framework Front-end-oriented, SEO and W3C compliant. This means it makes running multilingual websites and create HTML mockups referenceable with only the View and Url Rewriting part activated and real time modification. Of course, by activating the Controller and Model part, you can create great websites with standards compliance!

**Vous êtes français ? Le document [derrière ce lien](http://blog.lesieur.name/nodeatlas-le-framework-nodejs-mvc2-oriente-front-end/) vous sera peut-être plus agréable.**

[![Donate](https://img.shields.io/badge/donate-%E2%9D%A4-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://travis-ci.org/Haeresis/NodeAtlas.svg)](https://travis-ci.org/Haeresis/NodeAtlas/) [![Version 1.0 Beta](https://img.shields.io/badge/version-1.0.0--beta-brightgreen.svg)](https://github.com/Haeresis/NodeAtlas) [![Package NPM](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-0.10.0_--_4.0.0-brightgreen.svg)](https://nodejs.org/en/)




## Usage ##

For a complete documentation, you could refer to [README.md](http://haeresis.github.io/NodeAtlas/doc/).



### Step 1 - Install ###

Install *NodeAtlas* with one of two existing way:

 - `npm install node-atlas` prefered for an API usage.
 - `npm install -g node-atlas` prefered for a CLI usage.



### Step 2 - Configure ###

Create a `webconfig.json` file and dependencies files for configured your website.

**website.json** example for development:

```js
{
    "languageCode": "en-gb",                /* Set the principal language. */
    "pageNotFound": "/page-404/",           /* Assign the 404 dedicated view. */
    "commonVariation": "common.json",       /* Assign the common variation files for localisation. */
    "commonController": "common.js",        /* Assign the common controller files for all pages called. */
    "postSupport": false,                   /* By default, avoid POST request on pages. */
    "bundles": "bundles.json",              /* Set CSS and JS files bundled together and minifies with an external file. */
    "optimizations": "optimizations.json",  /* Set images to optimize for the web with an external file. */
    "htmlGenerateBeforeResponse": true,     /* Generate page currently displayed into "generates" directory. */
    "stylesheetsBundlesEnable": true,       /* Minify CSS into ".min" files before response pages. */
    "javascriptBundlesEnable": true,        /* Obfuscate JS into ".min" files before response pages. */
    "enableLess": true,                     /* Use Less files with ".map" for development phase. */
    "routes": "route.json"                  /* Set all urls provided by website with an external file. */
}
```

**website.prod.json** example for production:

```js
{
    "httpPort": 7777,                       /* Set the real application HTTP port if port 80 is already listened. */
    "urlHttp": 80,                          /* Set the frontal port for application on the world wide web (proxy). */
    "httpSecure": "security/server",        /* Set the directory for find "server.key" and "server.crt" file for HTTPs. */
    "urlHostname": "www.my-website.com",    /* Set the hostname for the application on the world wide web. */
    "urlRelativeSubPath": "example",       /* Set a subdirectory for the application url. i.e.: "https://www.my-website.com/example/". */
    "languageCode": "en-gb",
    "pageNotFound": "/page-404/",
    "commonVariation": "common.json",
    "commonController": "common.js",
    "postSupport": false,
    "routes": "route.json",
}
```

**routes.json** example:

```js
{
    "home": {                               /* Set a key to use parameters defined or from url into code. */
        "url": "/",                         /* Set the url to request for a page. */
        "generate": "home.html",            /* Set the pathname for save an HTML file represent the output in static. */
        "template": "home.htm",             /* Assign the view file used to render content information. */
        "variation": "home.json",           /* Assign the specific variation file used for localize page. */
        "controller": "home.js"             /* Assign the specific controller file used for the home page (get last articles, number of suscribers, etc.). */
    },
    "presentation": {
        "url": "/presentation/",
        "generate": "presentation.html",
        "template": "default.htm",          /* A same template with... */
        "variation": "presentation.json"    /* ...different variation can generate different content page (see "error"). */
    },
    "members": {
        "url": "/members/",
        "generate": "members.html",
        "template": "members.htm",
        "variation": "members.json",
        "controller": "members.js"
    },
    "memberV2": {                           /* A new version of "member" render for pages. */
        "url": "/members/:member/",         /* The ":member" part represent the current member requested... */
        "generate": "members/bob.html",     /* ...and a fake user is used for a static render into generated files. */
        "template": "member.htm",
        "variation": "member.json",
        "controller": "member.js"
    },
    "member": {                             /* The old version of "memberV2" page... */
        "url": "/members-profile/:member/", /* ...with old route... */
        "redirect": "/members/:member/",    /* ...kept to redirect to the new page... */
        "statusCode": 301                   /* ...in permanent. */
    },
    "contact-us": {
        "url": "/contact-us/",
        "generate": "contact-us.html",
        "template": "contact-us.htm",
        "variation": "contact-us.json",
        "controller": "contact-us.js",
        "postSupport": true                 /* Allow POST support for send an email with custom form. */
    },
    "home-fr-fr": {
        "url": "/francais/",
        "generate": "francais/bienvenue.html",
        "template": "home.htm",
        "variation": "home.json",
        "controller": "home.js",
        "languageCode": "fr-fr"             /* A language code specifc for this page. */
    },
    "presentation-fr-fr": {
        "url": "/francais/presentation/",
        "generate": "francais/presentation.html",
        "template": "default.htm",
        "variation": "presentation.json",
        "languageCode": "fr-fr"
    },
    "members-fr-fr": {
        "url": "/francais/membres/",
        "generate": "francais/members.html",
        "template": "members.htm",
        "variation": "members.json",
        "controller": "members.js",
        "languageCode": "fr-fr"
    },
    "memberV2-fr-fr": {
        "url": "/francais/membres/:member/",
        "generate": "francais/members/bob.html",
        "template": "member.htm",
        "variation": "member.json",
        "controller": "member.js",
        "languageCode": "fr-fr"
    },
    "member-fr-fr": {
        "url": "/profile-de-membres/:member/",
        "redirect": "/membres/:member/",
        "statusCode": 301
    },
    "contact-us-fr-fr": {
        "url": "/francais/contactez-nous/",
        "generate": "francais/contactez-nous.html",
        "template": "contact-us.htm",
        "variation": "contact-us.json",
        "languageCode": "fr-fr",
        "controller": "contact-us.js",
        "postSupport": true
    },
    "error-fr-fr": {
        "url": "/francais/*",               /* All pages begining with "/francais/" for french error page. */
        "generate": "francais/page-404.html",
        "template": "default.htm",          /* Shared template into different routes (see "presentation"). */
        "variation": "page-404.json",
        "languageCode": "fr-fr",
        "statusCode": 404                   /* An appropriate 404 status code for error pages. */
    },
    "error": {
        "url": "/page-404/",                /* Default error page setted into "pageNotFound". */
        "generate": "page-404.html",
        "template": "default.htm",
        "variation": "page-404.json",
        "statusCode": 404
    }
}
```

other files...



### Step 3 - Create ###

Create files to develop your website !

*NodeAtlas* default file hierarchy:

```
my-website/
    — node_modules/               <= All node.js module for your application.
        — node-atlas/
        — ...
    — assets/                     <= All public files could be acceded in HTTP(s) without a specific route setted.
        — javascript/
            ...
        — stylesheets/
            ...
        — media/
            ...
        — ...
    — templates/                  <= The View part with each type of template for render.
        home.htm
        default.htm
        ...
    — variations/                 <= All files for content filling with "en-gb" in default...
        common.json
        home.json
        ...
        — fr-fr/                  <= ...and "fr-fr" too.
            common.json
            home.json
            ...
    — controller/                 <= The Controller part for manipulate template, variation and models with database and url parameters.
        common.js
        home.js
        ...
    — components/                 <= All re-usable part for...
        — templates/              <= ...templates...
            head.htm
            foot.htm
            ...
        — controllers/            <= ...and controllers.
            form-contact-us.js
            ...
    — models/                     <= The Model part with model files used into controllers for filled templates.
        — ...
    — generates/                  <= All HTML mockups generated and usable for Back-end not in Node.js.
    ...
    server.js                     <= File used to run and configure NodeAtlas for API usage.
    webconfig.json                <= File used to run website on localhost for development.
    webconfig.prod.json           <= File used to run website on world wide web for production.
    routes.json                   <= File used by "webconfig.json" and "webconfig.prod.json" to address route.
    ...
    webconfig.prod.en-gb.json     <= Example file used to run only "en-gb" part on a port...
    routes.en-gb.json             <= ...with english routes defined in this file...
    webconfig.prod.fr-fr.json     <= ...and run only "fr-fr" part on an other port...
    routes.fr-fr.json             <= ...with french routes defined in this file.
    ...
```

### Step 4 - Run ! ###

Run *NodeAtlas* into the "my-website" folder in your development environment:

- with your `server.js` file:

```
node server.js
```

- with CLI:

```
nodeatlas
```

- for generate mockups:

```
nodeatlas --generate
```

Run *NodeAtlas* on your production server:

- in standard:

```
nodeatlas --directory /var/www/my-website/ --webconfig webconfig.prod.json
```

- with *Forever*:

```
forever start /usr/local/lib/node_modules/node-atlas/node-atlas.js --directory /var/www/my-website/ --webconfig webconfig.prod.json
```





## Documentation ##



### About NodeAtlas ##

- [Complete and detailed README.md on GitHub](https://github.com/Haeresis/NodeAtlas)
- [node-atlas.js documentation for maintainers](http://haeresis.github.io/NodeAtlas/doc/namespaces.list.html)



### Websites Example ##

- [Generation and HTML template maintenance](https://github.com/Haeresis/ResumeAtlas/).
- [HTML website maintenance (no Back-end)](https://github.com/Haeresis/ResumeAtlas/).
- [Node.js website with Websocket and PopState](https://github.com/Haeresis/BookAtlas/).
- [Node.js website with MongoDB database and Redis](https://github.com/Haeresis/BlogAtlas/).
- [Node.js example of content filling in real time without Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple web server for a file](https://github.com/Haeresis/SimpleAtlas/).
- [CSS-driven usage with Less preprocessor with CSS Framework](https://github.com/Haeresis/LessAtlas/).
- [Plugin to boost standard capabilities](https://github.com/Haeresis/SublimeAtlas/).
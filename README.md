# node-atlas #

Framework Javascript Serveur Évolutif par configuration ou APIs pour créer facilement des maquettes, sites ou applications web temps réel orientés composants et services.

> *NodeAtlas* est un Framework Web MVC(2) côté serveur vous permettant de créer des sites évolutifs, conformes au W3C et bonnes pratiques SEO. Il permet de faire tourner des pages localisables et indexables ou de créer des maquettes HTML uniquement avec des vues. Mais activer les contrôleurs permet de développer de puissantes applications web orientées données et composants ou orienté service avec des fonctionalités modernes et temps réel !

**For an international version of this document, [follow this link](https://www.npmjs.com/package/node-atlas).**

[![Faites un don](https://img.shields.io/badge/don-%E2%9D%A4-ddddff.svg)](https://www.paypal.me/BrunoLesieur/5) [![Travis CI](https://api.travis-ci.org/Haeresis/NodeAtlas.svg)](https://travis-ci.org/Haeresis/NodeAtlas/) [![Version 2.0.0-beta](https://img.shields.io/badge/version-2.0.0_beta-brightgreen.svg)](https://node-atlas.js.org/) [![Package NPM](https://badge.fury.io/js/node-atlas.svg)](https://www.npmjs.com/package/node-atlas) [![Node.js](https://img.shields.io/badge/nodejs-4.0%2C_7.2-brightgreen.svg)](https://nodejs.org/en/) [![Technical Debt Ratio](https://img.shields.io/badge/quality_code-A-brightgreen.svg)](http://docs.sonarqube.org/display/PLUG/JavaScript+Plugin) [![Dependency Status](https://gemnasium.com/Haeresis/NodeAtlas.svg)](https://gemnasium.com/Haeresis/NodeAtlas) [![Chat pour de l'Aide](https://img.shields.io/badge/gitter-rejoindre%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/NodeAtlas/Aide)



## NodeAtlas c'est : ##

- La porte d'entrée aux Développeurs Front-end dans le monde de Node.js.
- Du tout JavaScript ; pour les débutants venant du monde PHP, .NET, Ruby... ou pour les experts JS.
- De l'Évolutivité avec
   - des vues sans se préoccuper des contrôlleurs,
   - ou la prise en main progressive de contrôleurs et points d'ancrage,
   - avec de l'internationalisation (i18n) et de la localisations (l10n) rapide.
   - La puissance d'Express.js (serveur web) et Socket.io (échange client-serveur temps réel) pré-configuré, simple et ajustable,
   - les préprocesseurs Ejs, Pug (Jade), Less et Stylus embarqués et prêt à l'emploi,
   - des outils interne de générations HTML serverless ou de bundles, minifications, offuscations, optimizations de CSS, JS et Images,
   - et bien plus comme de la manipulation de DOM côté serveur jQuery-like, du debug serveur dans navigateur, de l'HTTPs facile à mettre en place, ...
   - ...
- De la combinaison d'instance NodeAtlas pour des architectures basés sur le service comme l'utilisation sous forme d'API Rest,
- Tous les modules NPM, middleware Express.js/Socket.io, plugins Atlas utilisables (sessions, bases de données SQL/NoSQL, répartition de charge, proxy, développement à chaud...).
- [Un guide pas à pas Français et International](https://node-atlas.js.org/), avec un support communautaire sur [Gitter](https://gitter.im/NodeAtlas) (Chat) [FR](https://gitter.im/NodeAtlas/Aide)/[EN](https://gitter.im/NodeAtlas/Help).
- Des passionnés de web et de JavaScript <3 !
- Et peut-être bientôt vous ?



## Site Officiel de NodeAtlas ##

> **[Pour une documentation complète, vous pouvez vous rendre sur le Site Officiel de NodeAtlas](https://node-atlas.js.org/)** ([README.md mirroir ici](https://github.com/Haeresis/NodeAtlas/blob/gh-pages/README.fr.md)).

- [README de la v1.x](https://github.com/Haeresis/NodeAtlas/blob/gh-pages/v1.x/README.fr.md).

- [v1.x -> v2.x see CHANGELOG](https://github.com/Haeresis/NodeAtlas/blob/master/CHANGELOG.md).



## Utilisation ##

### Étape 1 - Installation ###

Installer *NodeAtlas* avec l'une des deux méthodes suivantes :

- `npm install node-atlas` recommandée pour une utilisation en tant qu'API.
- `npm install -g node-atlas` recommandée pour une utilisation à la ligne de commande.



### Étape 2 - Configuration ###

Créer un fichier `webconfig.json` et ses fichiers de dépendances pour configurer votre site.

**website.json** exemple pour le développement :

   ```js
{
    "languageCode": "en-gb",                /* Définir la langue principale. */
    "pageNotFound": "/page-404/",           /* Assigner une vue dédiée à la page 404. */
    "commonView": "common.htm",             /* Assigner le layout global aux vues. */
    "commonVariation": "common.json",       /* Assigner les fichiers de variations communes pour la localisation. */
    "commonController": "common.js",        /* Assigner les fonctions du contrôleur appelé sur toutes les pages. */
    "postSupport": false,                   /* Par défaut, empêcher les requêtes de page en POST. */
    "bundles": "bundles.json",              /* Définir les fichiers CSS et JS concaténés ensemble et minifiés dans un fichier exterieur. */
    "optimizations": "optimizations.json",  /* Définir les images à optimiser pour le web dans un fichier extérieur. */
    "htmlGenerationBeforeResponse": true,   /* Générer la page couramment affichée dans le dossier "serverless". */
    "stylesheetsBundlesEnable": true,       /* Minifier les CSS dans des fichiers ".min" avant de renvoyer la page. */
    "javascriptBundlesEnable": true,        /* Offusquer les JS dans des fichiers ".min" avant de renvoyer la page. */
    "enableLess": true,                     /* Utiliser des fichiers Less avec des fichiers ".map" pour la partie développement. */
    "routes": "route.json"                  /* Définir toutes les urls fournis par le site dans un fichier extérieur. */
}
```

**website.prod.json** exemple pour la production :

```js
{
    "httpPort": 7777,                       /* Définir le vrai port HTTP pour l'application si le port 80 est déjà écouté. */
    "urlPort": 80,                          /* Définir le port d'accès pour l'application depuis le net (proxy). */
    "httpSecure": "security/server",        /* Définir le répertoire où trouver les fichiers "server.key" et "server.crt" pour le HTTPs. */
    "urlHostname": "www.my-website.com",    /* Définir le hostname pour l'application sur le net. */
    "urlRelativeSubPath": "example",        /* Définir un sous dossier d'exécution pour l'url de l'application. Par exemple : "https://www.my-website.com/example/". */
    "languageCode": "en-gb",
    "pageNotFound": "/page-404/",
    "commonView": "common.htm",
    "commonVariation": "common.json",
    "commonController": "common.js",
    "postSupport": false,
    "routes": "route.json",
}
```

**routes.json** example:

```js
{
    "home": {                               /* Définir une clé à utiliser comme référence pour manipuler les paramètres définis ou d'url dans le code. */
        "url": "/",                         /* Définir l'url d'accès à la page derrière cette route. */
        "output": "home.html",              /* Définir le chemin d'accès pour enregistrer le rendu au format HTML de manière statique. */
        "view": "home.htm",                 /* Assigner une vue utilisée pour présenter l'information. */
        "variation": "home.json",           /* Assigner une variation spécifique utilisée pour localiser la page. */
        "controller": "home.js"             /* Assigner un contrôleur spécifique utilisé pour la page d'accueil (afficher les derniers articles, le nombre d'inscrit, etc.). */
    },
    "presentation": {
        "url": "/presentation/",
        "output": "presentation.html",
        "view": "default.htm",              /* Même vue utilisée avec... */
        "variation": "presentation.json"    /* ...une variation différente pour générer du contenu de page différent (voir "error"). */
    },
    "members": {
        "url": "/members/",
        "output": "members.html",
        "view": "members.htm",
        "variation": "members.json",
        "controller": "members.js"
    },
    "memberV2": {                           /* Une nouvelle version de rendu pour les pages "member". */
        "url": "/members/:member/",         /* La partie ":member" représente le membre courrament demandé... */
        "output": "members/bob.html",       /* ...et un faux utilisateur est utilisé pour un rendu statique dans le dossier des fichier générés. */
        "view": "member.htm",
        "variation": "member.json",
        "controller": "member.js"
    },
    "member": {                             /* La vieille version de des pages "memberV2"... */
        "url": "/members-profile/:member/", /* ...avec une vieille route... */
        "redirect": "/members/:member/",    /* ...conservée pour rediriger sur la nouvelle page... */
        "statusCode": 301                   /* ...de manière permanente. */
    },
    "contact-us": {
        "url": "/contact-us/",
        "output": "contact-us.html",
        "view": "contact-us.htm",
        "variation": "contact-us.json",
        "controller": "contact-us.js",
        "postSupport": true                 /* Permettre d'accéder à la page par demande en POST pour envoyer un email avec un formulaire. */
    },
    "home-fr-fr": {
        "url": "/francais/",
        "output": "francais/bienvenue.html",
        "view": "home.htm",
        "variation": "home.json",
        "controller": "home.js",
        "languageCode": "fr-fr"             /* Un code de langue spécifique pour cette page. */
    },
    "presentation-fr-fr": {
        "url": "/francais/presentation/",
        "output": "francais/presentation.html",
        "view": "default.htm",
        "variation": "presentation.json",
        "languageCode": "fr-fr"
    },
    "members-fr-fr": {
        "url": "/francais/membres/",
        "output": "francais/members.html",
        "view": "members.htm",
        "variation": "members.json",
        "controller": "members.js",
        "languageCode": "fr-fr"
    },
    "memberV2-fr-fr": {
        "url": "/francais/membres/:member/",
        "output": "francais/members/bob.html",
        "view": "member.htm",
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
        "output": "francais/contactez-nous.html",
        "view": "contact-us.htm",
        "variation": "contact-us.json",
        "languageCode": "fr-fr",
        "controller": "contact-us.js",
        "postSupport": true
    },
    "error-fr-fr": {
        "url": "/francais/*",               /* Toutes les pages commençant par "/francais/" pour la page d'erreur française. */
        "output": "francais/page-404.html",
        "view": "default.htm",              /* Vue partagée par différentes routes (voir "presentation"). */
        "variation": "page-404.json",
        "languageCode": "fr-fr",
        "statusCode": 404                   /* Un status 404 approprié pour les pages d'erreur. */
    },
    "error": {
        "url": "/page-404/",                /* Page d'erreur par défaut défini avec "pageNotFound". */
        "output": "page-404.html",
        "view": "default.htm",
        "variation": "page-404.json",
        "statusCode": 404
    }
}
```

autres fichiers...



### Étape 3 - Création ###

Créer des fichiers pour développer votre site !

Structure de dossier *NodeAtlas* par défaut:

```
my-website/
├─ node_modules/             ⤆ Tous les modules node.js pour votre application.
│  └─ node-atlas/
│     ┊┉
│
├─ assets/                   ⤆ Tous les fichiers publiques peuvent être accédés en HTTP(s) sans route specifique définie.
│  ├─ javascript/
│  │  ┊┉
│  │
│  ├─ stylesheets/
│  │  ┊┉
│  │
│  ├─ media/
│  │  ┊┉
│  │
│  ┊┉
│
├─ views/                    ⤆ La partie vue avec chaque type de vue pour le rendu.
│  ├─ common.htm
│  ├─ home.htm
│  ├─ default.htm
│  ┊┉
│  └─ partials/              ⤆ Toutes les vues réutilisables.
│     ├─ header.htm
│     ├─ footer.htm
│     ┊┉ 
│
├─ variations/               ⤆ Tous les fichiers pour le remplissage de contenu avec "en-gb" par défaut…
│  ├─ common.json
│  ├─ home.json
│  ┊┉
│  │
│  └─ fr-fr/                 ⤆ …et également le "fr-fr".
│     ├─ common.json
│     ├─ home.json
│     ┊┉
│
├─ controllers/              ⤆ La partie contrôleur pour manipuler la vue, la variation et les modèles avec les bases de données ou les paramètres d'url.
│  ├─ common.js
│  ├─ home.js
│  ┊┉
│  ├─ modules/               ⤆ Tous les modules internes.
│     ├─ form-contact-us.js
│     ┊┉
│
├─ models/                   ⤆ La partie modèle avec des fichiers de modèle utilisés par les contrôleurs pour remplir les vues.
│  ┊┉
│
├─ serverless/               ⤆ Toutes les maquettes HTML générées et utilisables par les Back-end avec autre chose que Node.js.
│  ┊┉
│
├─ server.js                 ⤆ Fichier utilisé pour faire tourner et configurer NodeAtlas pour une utilisation sous forme d'API.
├─ webconfig.json            ⤆ Fichier utilisé pour faire tourner le site sur localhost pour le développement.
├─ webconfig.prod.json       ⤆ Fichier utilisé pour faire tourner le site sur le net pour la production.
├─ routes.json               ⤆ Fichier utilisé par "webconfig.json" et "webconfig.prod.json" pour définir les routes.
┊┉
├─ webconfig.prod.en-gb.json ⤆ Fichier exemple utilisé pour faire tourner uniquement les routes "en-gb" sur un port…
├─ routes.en-gb.json         ⤆ …avec le fichier de route anglais…
├─ webconfig.prod.fr-fr.json ⤆ …et faire tourner les routes "fr-fr" sur un autre port…
├─ routes.fr-fr.json         ⤆ …avec le fichier de route français.
┊┉
```

Étape 4 - Lancement ! ###

Lancer *NodeAtlas* depuis le dossier "my-website" dans votre environnement de développement :

- avec un fichier `server.js`:

```
node server.js
```

- with CLI command:

```
nodeatlas
```

- pour générer les assets :

```
nodeatlas --generate
```

Lancer *NodeAtlas* dans votre environnement de production :

- en standard:

```
nodeatlas --directory /var/www/my-website/ --webconfig webconfig.prod.json
```

- avec *Forever*:

```
forever start /usr/local/lib/node_modules/node-atlas/ --directory /var/www/my-website/ --webconfig webconfig.prod.json
```





## Documentation ##

### À propos de NodeAtlas ##

- [Site complet et détaillé](https://node-atlas.js.org/NodeAtlas/)
- [Pour maintenir et développer node-atlas.js](https://node-atlas.js.org/doc/index.html)
- [Discuter sur le chat ou demander de l'aide pour NodeAtlas](https://gitter.im/NodeAtlas/Aide)



### Exemple de sites ##

- [Génération et maintenance de maquette HTML](https://github.com/Haeresis/ResumeAtlas/).
- [Test et Documentation d'Interface Ulilisateur](https://github.com/Haeresis/TestCaseAtlas/).
- [Maintenance de site HTML (sans Back-end)](https://github.com/Haeresis/NodeAtlas/tree/gh-pages/).
- [Site Node.js avec Websocket et PopState](https://github.com/Haeresis/BookAtlas/).
- [Site Node.js avec base MongoDB et Redis](https://github.com/Haeresis/BlogAtlas/).
- [Exemple d'API REST](https://github.com/Haeresis/ApiAtlas/).
- [Exemple Node.js de modification de contenu live sans Back-office](https://github.com/Haeresis/EditAtlas/).
- [Simple Serveur Web pour un dossier](https://github.com/Haeresis/SimpleAtlas/).
- [Utilisation du préprocesseur Less/Stylus pour des Framework non invasif dans le HTML](https://github.com/Haeresis/PreprocessorAtlas/).
- [Site Web Composant orienté SEO et W3C compliant](https://github.com/Haeresis/ComponentAtlas/).





## NodeAtlas vs les autres ##

|                       | **NodeAtlas**                                                                                                    | Express                  | Hapi                   | Sails                                           | Restify                  | LoopBack                                              | Meteor                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------|--------------------------|------------------------|-------------------------------------------------|--------------------------|-------------------------------------------------------|-------------------------------------------------------------|
| Type                  | Framework Web **MVC(2)**                                                                                         | Librairie serveur HTTP   | Framework serveur HTTP | Framework Web MVC                               | Librairie HTTP REST      | Framework d'API                                       | Platforme d'app JavaScript côté client et serveur           |
| Top Features          | Simplicité, **Evolutivité**, Modularité                                                                          | Routage HTTP, middleware | Modularité, securité   | Familier à Rails, MVC                           | Simplicité, Routage REST | Connectivité d'Entreprise                             | Framework Front-end et Back-end                             |
| Adapté pour           | **Sites web**, Apps web, APIs REST, **Maquettage**                                                               | Apps web simple          | Apps web, APIs         | Apps web, APIs                                  | APIs REST Simple         | Apps web, APIs                                        | Apps web                                                    |
| Node Module Package   | Oui                                                                                                              | Oui                      | Oui                    | Oui                                             | Oui                      | Oui                                                   | Non                                                         |
| Extensions            | **Plugin Atlas**, Module Npm, Middleware Express                                                                 | Middleware Express       | Plugins Hapi           |                                                 |                          |                                                       | Package et repository Meteor, Module Npm                    |
| Sources de données    | **Builtin** : En-memoire, fichier (JSON), REST. Avec **module npm externe** : NoSQL (MongoDB...), SQL (MySql...) |                          |                        | En memoire, Fichier, PostgreSQL, MySQL, MongoDB |                          | En mémoire/fichier, SQL NoSQL, ATG, Email, REST, SOAP | MongoDB, MySQL and PostgreSQL via 3rd-party Meteor packages |
| Langue principale     | Français                                                                                                         | Anglais                  | Anglais                | Anglais                                         | Anglais                  | Anglais                                               | Anglais                                                     |
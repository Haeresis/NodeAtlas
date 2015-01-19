## 0.38.8 ##

Documentation:

- Adding of TLTR. Done.



## 0.38.7 ##

Documentation:

- Adding of TLTR. Tests.



## 0.38.6 ##

Documentation:

- Adding of TLTR. Tests.



## 0.38.5 ##

Documentation:

- Adding of TLTR. Tests.



## 0.38.4 ##

Bugfixes:

- Avoid a stopping of generation of HTML pages when a directory was created.



## 0.38.3 ##

Bugfixes:

- Install `nodeatlas` command without problem on Unix system with `postinstall`. It's fixed.

Documentation:

- Add precision for `nodeatlas` command.



## 0.38.2 ##

Bugfixes:

- Install `nodeatlas` command without problem on Unix system with `postinstall`. Tests.




## 0.38.1 ##

Bugfixes:

- In SimpleWebServer, `browse` option with NA.run() do not start browser. It's fixed.




## 0.38.0 ##

Features:

- CSS could be injected inline by referencing some CSS file with `injectCss`. Useful for maintain HTML assets.

Documentation:

- Add precision for  `injectCss` feature.



## 0.37.0 ##

Features:

- forceDomain could be disabled or enabled with `enableForceDomain`. By default, it's disabled.

Documentation:

- Add precision for  `enableForceDomain` feature.



## 0.36.0 ##

Features:

- Allow you to desactivate HTML generation even if a `generatesRelativePath` directory exist.
- `indexPage` property become `enableIndex`.

Documentation:

- Add precision for `htmlGenerateEnable` feature.



## 0.35.2 ##

Bugfixes:

- Bad type for javascriptBundlesEnable, stylesheetsBundlesEnable, javascriptBundlesBeforeResponse, stylesheetsBundlesBeforeResponse and autoGenerate. Setted to boolean, not string.



## 0.35.1 ##

Bugfixes:

- Avoid copy of `assetsRelativePath` into `generatesRelativePath` if `generatesRelativePath` do not exist.

Documentation:

- Add precision for generation of HTML asset.



## 0.35.0 ##

Features:

- Optimization of images.
- `autoGenerate` become `htmlGenerateBeforeResponse`

Bugfixes:

- Conflict with "true" and true in the webconfig for javascriptBundlesEnable, stylesheetsBundlesEnable, javascriptBundlesBeforeResponse, stylesheetsBundlesBeforeResponse and autoGenerate.

Documentation:

- Explain how to activate Optimizations.



## 0.34.18 ##

Bugfixes:

- Allow utilisation of `nodeatlas` command on linux and MacOS. Tests.



## 0.34.5 ##

Bugfixes:

- Because of HTTPs implementation, Simple Server Mode return an error. It's fixed.



## 0.34.4 ##

Bugfixes:

- Because of HTTPs implementation, Simple Server Mode return an error. Tests.



## 0.34.3 ##

Bugfixes:

- Because of HTTPs implementation, Simple Server Mode return an error. Tests.



## 0.34.2 ##

Bugfixes:

- Insert commands directory.



## 0.34.1 ##

Bugfixes:

- npm debug for install.js.



## 0.34.0 ##

Features:

- Easilly support HTTPs protocol (and WSs prococol) with webconfig.

Documentation:

- Explain how to activate HTTPs.



## 0.33.3 ##

Documentation:

- Change a 404 external link.



## 0.33.2 ##

Documentation:

- New website example.
- Example for multilingual 404 page.



## 0.33.1 ##

Bugfixes:

- The error page of `pageNotFound` was never matched if the `url` property was used. It's fixed.



## 0.33.0 ##

Features:

- With `--generate` command, all `assetsRelativePath` content will be copied into `generatesRelativePath` if this two path are different.

Documentation:

- Update with new information.



## 0.32.0 ##

Features:

- The `preRender` hook become the `changeVariation` hook.
- The `render` hook become the `changeDom` hook.
 - The `params.data` of `render` become `params.dom` of `changeDom`.

Bugfixes:

- If a port is already in used, the error message said the port 80 is used even if the port used is 7777 for example.

Documentation:

- Update with new information.



## 0.31.0 ##

Features:

- The `--run` opition become the `--browse` option and `-r` become `-b`.
- Adding of `--browse [subpath]`.

Documentation:

- Update with new information.



## 0.30.0 ##

Information:

- Creation of CHANGELOG.md file.
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
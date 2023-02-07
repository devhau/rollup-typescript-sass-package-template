# rollup-typescript-sass-package-template
**rollup-typescript-sass-package-template** is a Javascript library for non-blocking notifications and without jQuery. The goal is to create a simple core library that can be customized and extended.


## Demo
- Demo can be found at https://rollup-typescript-sass-package-template.hau.xyz

## Install

#### [npm](https://www.npmjs.com/package/rollup-typescript-sass-package-template)
```
npm install --save rollup-typescript-sass-package-template
```

#### [yarn](https://yarnpkg.com/en/package/rollup-typescript-sass-package-template)
```
yarn add rollup-typescript-sass-package-template
```



## Wiki and Change Log
[Wiki including Change Log](https://github.com/devhau/rollup-typescript-sass-package-template/wiki)

## Breaking Changes

#### Animation Changes
The following animations options have been deprecated and should be replaced:


## Quick Start

### 3 Easy Steps
For other API calls, see the [demo](https://rollup-typescript-sass-package-template.hau.xyz).

1. Link to rollup-typescript-sass-package-template.css `<link href="rollup-typescript-sass-package-template.css" rel="stylesheet"/>`

2. Link to rollup-typescript-sass-package-template.js `<script src="rollup-typescript-sass-package-template.js"></script>`

3. use rollup-typescript-sass-package-template to display a toast for info, success, warning or error
	```js
	// Display an info toast with no title
	rollup-typescript-sass-package-template.info('Are you the 6 fingered man?')
	```

### Other Options

## Building rollup-typescript-sass-package-template

To build the minified and css versions of rollup-typescript-sass-package-template you will need [node](http://nodejs.org) installed. (Use Homebrew or Chocolatey.)

```
npm install -g gulp karma-cli
npm install
```

At this point the dependencies have been installed and you can build rollup-typescript-sass-package-template

- Run the analytics `gulp analyze`
- Run the test `gulp test`
- Run the build `gulp`

## Contributing

For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

Pull requests must pass existing unit tests, CI processes, and add additional tests to indicate successful operation of a new feature, or the resolution of an identified bug.

Requests must be made against the `develop` branch. Pull requests submitted against the `master` branch will not be considered.

All pull requests are subject to approval by the repository owners, who have sole discretion over acceptance or denial.

## License
rollup-typescript-sass-package-template is under MIT license
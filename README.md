# Personal portfolio

![webpack-current](https://img.shields.io/badge/webpack-v5.22.0-green?logo=webpack)

![Hero website](https://portfolioaran.netlify.app/images/content/halo.jpg)

## Frontend UI developer

Site dedicated to web development and multimedia with the aim of showing my portfolio with the works in which I am part.

## Requirements

* `node` : `^10 || ^12 || >=14`
* `npm`

# Setup

## Installation

```sh 
$ npm ci
```

# Development

## Assets Source

* **SASS/PostCSS** files are located under `src/scss/`
* **JavaScript** files with support of latest ECMAScript _ES6 / ECMAScript 2016(ES7)/ etc_ files are located under `src/js/`
* **Image** files are located under `src/images/`
* **Font** files are located under `src/fonts/`
* **HTML** files are located under `src/templates/`
  * It will **automatically** build **all HTML files** placed under `src/templates/` directory, no need to manually configure each template anymore!

## Build Assets

### One time build assets for development

```sh
$ npm run build
```

### Build assets and enable source files watcher

```sh
$ npm run watch
```

This command is suitable if you develop with external web server.

> **Note:** File watching does not work with *NFS* (*Windows*) and virtual machines under *VirtualBox*. Extend the configuration in such cases by:

```js
module.exports = {
  //...
  watchOptions: {
    poll: 1000 // Check for changes every second
  }
};
```

### Start a development server - reloading automatically after each file change.

```sh
$ npm run dev
```

# Production 

## Build Assets

Optimize assets for production by:

```sh
$ npm run production
```

## Get Built Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
  * Images part of the _design_ (_usually referenced in the CSS_) are located under `/dist/images/design/`
  * Images part of the _content_ (_usually referenced via `<img>` tags_) are located under `/dist/images/content/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`

# Run Code Style Linters

## SASS

```sh
$ npm run lint:sass
```
## JavaScript

```sh
$ npm run lint:js
```

# Additional Tools

## Run Assets Bundle Analyzer

```sh
$ npm run stats
```

> This will open the visualisaion on the default configuraiton URL `localhost:8888`, you can change this URL or port following the [package](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-cli) documentation.

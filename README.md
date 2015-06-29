# construx-star

Lead Maintainer: [star](star)

[![Build Status](https://travis-ci.org/krakenjs/construx-star.svg?branch=master)](https://travis-ci.org/krakenjs/construx-star)
[![NPM version](https://badge.fury.io/js/construx-star.png)](http://badge.fury.io/js/construx-star)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling star resources during development of [express](http://expressjs.com/) applications.

## REMOVE THIS SECTION

This repository is meant as a template for `construx` plugins. If you wish to use it:
* create a repository named `construx-<wrapped compiler>`
* use the github import feature to pull in this repository
* If you aren't a PayPal employee, remove the PayPal license text in the source code
* author your plugin functionality into `index.js`

If you want the krakenjs team to promote your plugin:
* edit this `README` to reflect your plugin's requirements, configuration, and purpose
* write unit tests which sufficiently exercise the most likely encountered use cases
* Inform us by filing an issue [here](https://github.com/krakenjs/construx/issues), to add your plugin to the list of `construx` plugins
* The team will process your request as quickly as possible

## Requirements

This plugin requires your project to have `<whatever module>@<whatever semver>`.

## Usage

### Install

```shell
$ npm install --save-dev construx-star
```

### Configure

Where you configure your construx plugins:

```json
{
    "star": {
        "module": "construx-star",
        "files": "/star/**/*.compiled",
    }
}
```

_Note: See [construx README](https://github.com/krakenjs/construx/blob/master/README.md) for general usage of construx_


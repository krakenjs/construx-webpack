# construx-star

Lead Maintainer: [star](star)

[![Build Status](https://travis-ci.org/krakenjs/construx-star.svg?branch=master)](https://travis-ci.org/krakenjs/construx-star)
[![NPM version](https://badge.fury.io/js/construx-star.png)](http://badge.fury.io/js/construx-star)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling star resources during development of [express](http://expressjs.com/) applications.

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


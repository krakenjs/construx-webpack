/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2016 PayPal                                                  │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
'use strict';


//'use strict';
//
var webpack = require('webpack');
var webpackbundler = require('webpack-dev-middleware').direct;


var path = require('path');
var b;

module.exports = function (options) {
    var config = require(options.config.webpack);
    b = b || webpackbundler(webpack(config), options.config.bundler || {});

    options.precompile = function (options, cb) {
        options.skipRead = true;
        cb(null, options);
    };
    /**
     * Middleware that will process the request.
     * See https://github.com/krakenjs/construx#middleware-process-a-matched-request
     * @param raw: Not used for this plugin...
     * @param config: Configuration object provided through Construx initialization (Usually found in Kraken's config files)
     * @returns function (err, result): A callback that will take the compiled file.
     */
    return function compiler(raw, config, callback) {
        var ctx = config.context;
        var src = path.join(ctx.destRoot, ctx.filePath);

        b({src: src}, function (err, content) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, content);
        });

    };
};
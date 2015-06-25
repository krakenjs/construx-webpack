/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2015 eBay Software Foundation                                │
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
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Star = require(path.resolve(__dirname, '..')),
  star = Star({}),
  fs = require('fs');

test('construx-less', function (t) {

    t.test('processes a good star file', function (t) {
        t.plan(1);
        //get good star file
        fs.readFile(path.resolve(__dirname, 'star/good.star'), function (err, data) {
            star(data, {paths: '', context: {name: 'star.compiled'}}, function (err, compiled) {
                t.equal('star', compiled);
                t.end();
            });

        });

    });

    t.test('processes a bad star file', function (t) {
        t.plan(1);
        //get bad star file
        fs.readFile(path.resolve(__dirname, 'star/bad.star'), function (err, data) {
            star(data, {paths: '', context: {name: 'star.compiled'}}, function (err, compiled) {
                t.ok(err.name === 'Error');
                t.end();
            });

        });

    });

});
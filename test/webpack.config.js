'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

    context: path.resolve('public/js'),

    entry: {
        'app': 'app.js'
    },

    devtool: 'source-map',

    output: {
        path: path.resolve('.build/js/apps'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    // check tasks/webpack.js for some build-related plugins
    plugins: [
        // new webpack.IgnorePlugin(/^intl$/), // require for server without affecting web
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    resolve: {

        // same as the previous "alias" config for require.js
        alias: {
            'lap': 'components/TextInput/lap',
            'textField': 'components/TextInput/textField',
            'nativeDropdown': 'components/Dropdown/nativeDropdown',
            'jqueryUI': 'lib/jquery.ui.widget',
            'backboneSubroute': 'lib/backbone-subroute-0.4.1',
            'backboneSyphon': 'lib/backbone.syphon-0.4.1',
            'modernizr': 'lib/modernizr-2.8.3-custom',

            // aliases into NPM
            'BaseView': 'base-view', // base-view from NPM
            'dust': 'dustjs-linkedin', // dustjs-linkedin from NPM
            'bootstrap-dropdown': 'frontend-framework-paypal/dist/twbs-light/js/dropdown',
            'bootstrap-modal': 'frontend-framework-paypal/dist/twbs-light/js/modal'
        },

        modulesDirectories: ['public/js', 'node_modules'],

        // you can now require('file') instead of require('file.es6')
        extensions: ['', '.js', '.jsx', '.json', '.coffee', '.es6']
    }
};


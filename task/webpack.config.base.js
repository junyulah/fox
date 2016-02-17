/* eslint strict: 0 */
'use strict';

const path = require('path');

const srcDir = path.resolve(process.cwd(), 'src');

module.exports = {
    module    : {
        loaders : [{
            test    : /\.jsx?$/,
            loaders : ['babel-loader'],
            exclude : /node_modules/
        },
        {
            test   : /\.json$/,
            loader : 'json-loader'
        }]
    },
    output    : {
        path          : path.join(path.resolve(__dirname, '../'), 'dist'),
        filename      : 'bundle.js',
        libraryTarget : 'commonjs2'
    },
    resolve   : {
        //root       : [srcDir, './node_modules'],
        extensions   : ['', '.js', '.jsx'],
        packageMains : ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    plugins   : [],
    externals : [
        // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
    ]
};

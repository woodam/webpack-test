'use strict';

var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = process.cwd();

module.exports = function(){
    return {
        context: ROOT_DIR,
        entry:
             './resources/js/test.js'
        ,
        output: {
            path: path.resolve(ROOT_DIR, 'dist'),
            filename: 'bundle.[name].js',
            publicPath: '/static/',
            libraryTarget: "umd"
        },
        watch: true,
        devtool: 'cheap-module-eval-source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ["react-hot", "babel-loader"],
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.scss$/,
                    loader: "style!css!sass"
                },
                {
                    test: /\.css$/,
                    loader: "style!css"
                },
                {
                    test: /\.hbs$/,
                    loader: "handlebars-loader"
                }
            ]
        },
        externals: {
            //'jquery': { root: 'jQuery', commonjs: 'jquery', commonjs2: 'jquery', amd: 'jquery' },
            //'handlebars/runtime': { root: 'Handlebars', amd: 'handlebars.runtime', commonjs2: 'handlebars/runtime', commonjs: 'handlebars/runtime' },
            //'handlebars': {root: 'Handlebars', amd: 'Handlebars', commonjs: 'handlebars', commonjs2: 'handlebars' }
        },
        resolve: {
            root : ROOT_DIR,
            extenstions :  [ '', '.js', '.json'],
            modulesDirectories: ['node_modules', 'resources/js/vender', 'resources/js'],
            alias: {
                handlebars: 'path/to/handlebars-runtime'
            }
        },
        plugins: function() {
            var plugins = [];
            plugins.push(
                new webpack.ResolverPlugin([
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
                ], ["normal", "loader"])
            );
            return plugins;
        }()
    };
}

'use strict';

var path = require('path');
var webpack = require('webpack');

function build(_webpackConfig) {
    return function(){
        webpack(_webpackConfig, function(err, stats){
            // console.log(err, stats);
        });
    };
};

module.exports = build;
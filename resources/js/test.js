'use strict';
require('../../css/mian.css');
var $ = require('./jquery');
var hbs = require('../../views/index.hbs');

var hbsString = hbs({
    title: "title입니다.",
    content: "content입니다."
});

$("body").append(hbsString);

'use strict';
require('../../css/mian.css');
var $ = require('./jquery');
var hbs = require('../../views/index.hbs');

var hbsString = hbs({
    title: "title�Դϴ�.",
    content: "content�Դϴ�."
});

$("body").append(hbsString);

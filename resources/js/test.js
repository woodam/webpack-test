'use strict';

require('../../css/main.scss');
var $ = require('./jquery');
var hbs = require('../../views/index.hbs');
var App = require( './react-test' );
var React = require('react');






var hbsString = hbs({
    title: "title 타이틀.",
    content: "content 본문입니다."
});

// reactHello
React.render(<App/>, document.getElementById('react-test'));
$("body").append(hbsString);

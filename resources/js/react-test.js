var React = require('react');
var appString = '동적으로 추가됩니다.';

var App =  React.createClass({
    render: function() {
        return (
            <div className="container">테스트입니다 {appString} 테스트테스트</div>
        );
    }
});



module.exports = App;
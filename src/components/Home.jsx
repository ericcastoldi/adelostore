var React = require('react');
var Featured = require('./Featured.jsx');
var MainCategories = require('./MainCategories.jsx');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Featured/>
        <MainCategories/>
      </div>
    );
  }
});

module.exports = Home;

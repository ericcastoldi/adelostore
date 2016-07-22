var React = require('react');
var Header = require('./Header.jsx');
var Featured = require('./Featured.jsx');
var MainCategories = require('./MainCategories.jsx');
var Footer = require('./Footer.jsx');

var AdeloStore = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },
  render: function() {
      return (
          <div className="adelo-store">
            <Header />
            <Featured />
            <MainCategories />
            <Footer />
          </div>
      );
  }
});

module.exports = AdeloStore;

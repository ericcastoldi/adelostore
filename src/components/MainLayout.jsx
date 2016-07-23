var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var MainLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="adelo-store">
        <Header/> {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = MainLayout;

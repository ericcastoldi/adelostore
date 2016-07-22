var React = require('react');
var Menu = require('./Menu.jsx');
var Social = require('./Social.jsx');
var FeaturedSale = require('./FeaturedSale.jsx');

var Featured = React.createClass({
  render: function(){
    return (
      <div className="destaques">
        <div className="container">
          <div className="row">

            <div className="three columns">
              <Menu />
              <Social />
            </div>

            <div className="eight columns">
              <FeaturedSale />
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Featured;

var React = require('react');
var Menu = require('./Menu.jsx');
var ProductList = require('./ProductList.jsx');

var ProductListLayout = React.createClass({
  render: function () {
    return (
      <div className="lista-produtos">
        <div className="container">
          <div className="row">

            <div className="three columns">
              <Menu/>
            </div>

            <div className="nine columns">
              <ProductList/>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductListLayout;

var React = require('react');
var Menu = require('./Menu.jsx');
var ProductList = require('./ProductList.jsx');

var Products = React.createClass({

  getProducts: function(){
    return [
      {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }, {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }
    ];
  },


  render: function () {
    var products = this.getProducts();
    return (
      <div className="lista-produtos">
        <div className="container">
          <div className="row">

            <div className="three columns">
              <Menu/>
            </div>

            <div className="nine columns">
              <ProductList products={products}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Products;

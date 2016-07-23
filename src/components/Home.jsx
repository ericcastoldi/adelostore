var React = require('react');
var Featured = require('./Featured.jsx');
var MainCategories = require('./MainCategories.jsx');

var Home = React.createClass({

  getCategories: function(){
    return [
      {
        picture: 'img/quadro-categorias-musica.jpg',
        caption: 'Quadros de bandas e artistas da música',
        title: 'Música',
        route: '/categorias/musica'
      }, {
        picture: 'img/quadro-categorias-filmes.jpg',
        caption: 'Quadros de filmes e séries',
        title: 'Cinema',
        route: '/categorias/cinema'
      }, {
        picture: 'img/quadro-categorias-outros.jpg',
        caption: 'Quadros em geral',
        title: 'Outros',
        route: '/categorias/outros'
      }, {
        picture: 'img/quadro-categorias-promocao.png',
        caption: 'Quadros em promoção',
        title: 'Promoções',
        route: '/categorias/promocoes'
      }
    ];
  },

  render: function () {
    var categories = this.getCategories();

    return (
      <div>
        <Featured/>
        <MainCategories categories={categories} />
      </div>
    );
  }
});

module.exports = Home;

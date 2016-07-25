var React = require('react');
var Featured = require('./Featured.jsx');
var MainCategories = require('./MainCategories.jsx');
var ReactRedux = require('react-redux');

//var store = require('../state/store.js');

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

  // propTypes: {
  //   categories: React
  //     .PropTypes
  //     .arrayOf(React.PropTypes.shape({picture: React.PropTypes.string.isRequired, caption: React.PropTypes.string, title: React.PropTypes.string.isRequired, route: React.PropTypes.string.isRequired}))
  //     .isRequired
  // },

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

// const mapStateToProps = function(store) {
//   return {
//     categories: store.categories
//   };
// };


module.exports = Home;

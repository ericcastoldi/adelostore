var React = require('react');
var CategoryCard = require('./CategoryCard.jsx');

var MainCategories = React.createClass({

  propTypes: {
    categories: React
      .PropTypes
      .arrayOf(React.PropTypes.shape({picture: React.PropTypes.string.isRequired, caption: React.PropTypes.string, title: React.PropTypes.string.isRequired, route: React.PropTypes.string.isRequired}))
      .isRequired
  },

  getDefaultProps: function () {
    return {
      categories: [
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
      ]
    };
  },

  renderCategories: function () {

    var categories = this.props.categories;
    var splittedCategories = [];

    while (categories.length) {
      splittedCategories.push(categories.splice(0, 2));
    }

    var renderedCategories = splittedCategories.map(function (doubleTrouble, index) {

      var categoryRowContent = doubleTrouble.map(function (category, rowIndex) {
        return (
          <div key={rowIndex} className="six columns">
            <CategoryCard picture={category.picture} caption={category.caption} title={category.title} route={category.route}/>
          </div>
        );
      });

      return (
        <div key={index} className="row">{categoryRowContent}</div>
      );
    });

    return renderedCategories;
  },

  render: function () {
    var renderedCategories = this.renderCategories();

    return (
      <div className="categorias">
        <div className="container">
          {renderedCategories}
        </div>
      </div>
    );
  }
});

module.exports = MainCategories;

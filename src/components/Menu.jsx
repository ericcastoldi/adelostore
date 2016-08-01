var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({

  propTypes: {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        route: React.PropTypes.string
      })
    ).isRequired
  },

  getDefaultProps: function() {
      return {
        items: [
          {
            text: 'Home',
            route: '/'
          },
          {
            text: 'Filmes',
            route: '/categorias/filmes'
          },
          {
            text: 'Séries',
            route: '/categorias/series'
          },
          {
            text: 'Música',
            route: '/categorias/musica'
          },
          {
            text: 'Vintage',
            route: '/categorias/vintage'
          },
          {
            text: 'Natureza',
            route: '/categorias/natureza'
          },
          {
            text: 'Personalidades',
            route: '/categorias/personalidades'
          },
          {
            text: 'Diversos',
            route: '/categorias/diversos'
          }
        ]
      };
  },

  render: function () {
    var renderedItems = this.renderItems();

    return (
      <div className="menu-horizontal">
        <ul>
          { renderedItems }
        </ul>
      </div>
    );
  },

  renderItems: function () {

    var items = this.props.items;

    var renderedItems = items.map(function (item, index) {

      return (
        <Link to={item.route} key={index} activeClassName="active">
          <li>{item.text}</li>
        </Link>
      );

    });

    return renderedItems;
  }
});

module.exports = Menu;

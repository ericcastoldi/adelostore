var React = require('react');

var Menu = React.createClass({

  propTypes: {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        route: React.PropTypes.string,
        active: React.PropTypes.bool
      })
    ).isRequired
  },

  getDefaultProps: function() {
      return {
        items: [
          {
            text: 'Home',
            route: '/',
            active: true
          },
          {
            text: 'Música',
            route: '/categorias/musica',
            active: false
          },
          {
            text: 'Cinema',
            route: '/categorias/cinema',
            active: false
          },
          {
            text: 'Outros',
            route: '/categorias/outros',
            active: false
          },
          {
            text: 'Promoções',
            route: '/categorias/promocoes',
            active: false
          },
          {
            text: 'Nossa caminhada',
            route: '/sobre',
            active: false
          }
        ]
      };
  },

  render: function () {
    var renderedItems = this.renderItems();

    return (
      <div className="menu">
        <ul>
          { renderedItems }
        </ul>
      </div>
    );
  },

  renderItems: function () {

    var items = this.props.items;

    var renderedItems = items.map(function (item) {

      var cssClass = item.active
        ? 'active'
        : '';

      return (
        <a href={item.route}>
          <li className={cssClass}>{item.text}</li>
        </a>
      );

    });

    return renderedItems;
  }
});

module.exports = Menu;

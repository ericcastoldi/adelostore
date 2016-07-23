var React = require('react');
var Link = require('react-router').Link;

var CategoryCard = React.createClass({

  propTypes: {
    picture: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      picture: 'img/quadro-categorias-musica.jpg',
      caption: 'Quadros de bandas e artistas da música',
      title: 'Música',
      route: '/categorias/musica'
    };
  },

  render: function () {
    return (
      <div className="categoria">
        <Link to={this.props.route} >
          <div className="imagem-categoria">
            <img src={this.props.picture} alt={this.props.caption} />
          </div>
          <div className="nome-categoria">
            {this.props.title}
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = CategoryCard;

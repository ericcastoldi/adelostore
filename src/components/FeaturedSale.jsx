var React = require('react');
var Link = require('react-router').Link;

var FeaturedSale = React.createClass({

  propTypes: {
    picture: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    detailsTitle: React.PropTypes.string,
    detailsRoute: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      picture: 'img/quadro-promocao.png',
      caption: 'Quadro promoção',
      title: 'Promoção',
      description: '20% na primeira compra',
      detailsTitle: 'Compre Agora',
      detailsRoute: '/categorias/promocoes'
    };
  },

  render: function () {
    return (
      <div className="promocoes">
        <div className="promocao-container">
          <div className="promocao-imagem">
            <img src={this.props.picture} alt={this.props.caption} />
          </div>
          <h1 className="promocao-titulo">
            {this.props.title}
          </h1>
          <span className="promocao-descricao">
            {this.props.description}
          </span>
          <span className="promocao-comprar">
            <Link to={this.props.detailsRoute}>
              {this.props.detailsTitle}
            </Link>
          </span>
        </div>
      </div>
    );
  }
});

module.exports = FeaturedSale;

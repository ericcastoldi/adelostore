var React = require('react');
var PolicyCard = require('./PolicyCard.jsx');
var PaymentsCard = require('./PaymentsCard.jsx');

var Footer = React.createClass({
  propTypes: {
    faq: React.PropTypes.shape({
      icon: React.PropTypes.string.isRequired,
      policies: React.PropTypes.arrayOf(
       React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          route: React.PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired,
    contact: React.PropTypes.shape({
      icon: React.PropTypes.string.isRequired,
      policies: React.PropTypes.arrayOf(
       React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          route: React.PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  },

  getDefaultProps: function() {
    return {
      faq: {
        icon: 'question',
        policies: [
          {
            name: 'Entregas',
            route: '/politicas/entregas'
          },
          {
            name: 'Formas de pagamento',
            route: '/politicas/pagamentos'
          },
          {
            name: 'Política de trocas',
            route: '/politicas/trocas'
          }
        ]
      },
      contact: {
        icon: 'comment-o',
        policies: [
          {
            name: 'Dúvidas',
            route: '/politicas/duvidas'
          },
          {
            name: 'Contato',
            route: '/politicas/contato'
          }
        ]
      }
    };
  },

  render: function(){
    var faq = this.props.faq;
    var contact = this.props.contact;

    return (
      <div className="rodape">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <PolicyCard icon={faq.icon} policies={faq.policies} />
            </div>
            <div className="three columns">
              <PolicyCard icon={contact.icon} policies={contact.policies} />
            </div>
            <div className="six columns">
              <PaymentsCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;

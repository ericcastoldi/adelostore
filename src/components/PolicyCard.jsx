var React = require('react');

var PolicyCard = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    policies: React.PropTypes.arrayOf(
     React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
      })
    ).isRequired
  },

  getDefaultProps: function() {
    return {
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
    };
  },

  renderPolicies: function(){
    return this.props.policies.map(function(policy){
      return (
        <li><a href={policy.route}>{policy.title}</a></li>
      );
    });
  },

  render: function(){
    var policies = this.renderPolicies();
    var cssClass = 'fa fa-' + this.props.icon;

    return (
      <div className="politicas">
        <div className="icone-politicas">
          <i className={cssClass} aria-hidden="true"></i>
        </div>
        <div className="itens-politicas">
          <ul>
            {policies}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PolicyCard;

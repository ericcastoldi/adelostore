var React = require('react');

var PaymentsCard = React.createClass({
  render: function(){
    return (
      <div className="cartoes-de-credito">
        <i className="fa fa-cc-visa" aria-hidden="true"></i>
        <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
        <i className="fa fa-cc-diners-club" aria-hidden="true"></i>
        <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
      </div>
    );
  }
});

module.exports = PaymentsCard;

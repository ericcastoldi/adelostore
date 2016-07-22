var React = require('react');

var Social = React.createClass({
  propTypes: {
    facebook: React.PropTypes.string,
    instagram: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      facebook: 'adeloquadros',
      instagram: 'adeloquadros'
    };
  },

    render: function () {

      if(!this.props.facebook && !this.props.instagram){
        return null;
      }

      var facebook = this.renderFacebookLink();
      var instagram = this.renderInstagramLink();

      return (
        <div className="redes-sociais">
          {instagram}
          {facebook}
        </div>
      );
    },

    renderFacebookLink: function () {
      return this.renderLink(this.props.facebook, 'fa fa-facebook');
    },

    renderInstagramLink: function () {
      return this.renderLink(this.props.instagram, 'fa fa-instagram');
    },

    renderLink: function(link, cssClass){
      if(link){
        return (
          <a href={link}>
            <i className={cssClass} aria-hidden="true"></i>
          </a>
        );
      }

      return null;
    }
});

module.exports = Social;

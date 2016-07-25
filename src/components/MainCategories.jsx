var React = require('react');
var CategoryCard = require('./CategoryCard.jsx');

var MainCategories = React.createClass({

  propTypes: {
    categories: React
      .PropTypes
      .arrayOf(React.PropTypes.shape({picture: React.PropTypes.string.isRequired, caption: React.PropTypes.string, title: React.PropTypes.string.isRequired, route: React.PropTypes.string.isRequired}))
      .isRequired
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

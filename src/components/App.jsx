var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var MainLayout = require('./MainLayout.jsx');
var Home = require('./Home.jsx');
var ProductListLayout = require('./ProductListLayout.jsx');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/categorias/:categoria" component={ProductListLayout} />
    </Route>
  </Router>,
  document.getElementById('app'));

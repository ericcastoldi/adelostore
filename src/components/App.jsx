var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var AdeloStore = require('./AdeloStore.jsx');
var Home = require('./Home.jsx');
var Products = require('./Products.jsx');

ReactDOM.render(
  <Router history={ReactRouter.browserHistory}>
    <Route component={AdeloStore}>
      <Route path="/" component={Home} />
      <Route path="/categorias/:categoria" component={Products} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  document.getElementById('app'));

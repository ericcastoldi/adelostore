var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var ReactRouterRedux = require('react-router-redux');
var AdeloStore = require('./AdeloStore.jsx');
var Home = require('./Home.jsx');
var Products = require('./Products.jsx');
var store = require('../state/store.js');

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={AdeloStore}>
        <Route path="/" component={Home} />
        <Route path="/categorias/:categoria" component={Products} />
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));

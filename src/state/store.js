var Redux = require('redux');
var ReactRouterRedux = require('react-router-redux');
var thunkMiddleware = require('redux-thunk')
  .default;
var createLogger = require('redux-logger');
var loggerMiddleware = createLogger();


var initialState = {
  products: [
    {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }, {
      picture: '/img/quadro-exemplo.png',
      caption: 'Quadro de exemplo à venda',
      route: '/produtos/123',
      price: 10
    }
  ],
  featured: [
    {
      picture: '/img/quadro-promocao.png',
      caption: 'Quadro promoção',
      title: 'Promoção',
      description: '20% na primeira compra',
      detailsTitle: 'Compre Agora',
      detailsRoute: '/categorias/promocoes'
    }
  ],
  categories: [
    {
      picture: '/img/quadro-categorias-musica.jpg',
      caption: 'Quadros de bandas e artistas da música',
      title: 'Música',
      route: '/categorias/musica'
    }, {
      picture: '/img/quadro-categorias-filmes.jpg',
      caption: 'Quadros de filmes e séries',
      title: 'Cinema',
      route: '/categorias/cinema'
    }, {
      picture: '/img/quadro-categorias-outros.jpg',
      caption: 'Quadros em geral',
      title: 'Outros',
      route: '/categorias/outros'
    }, {
      picture: '/img/quadro-categorias-promocao.png',
      caption: 'Quadros em promoção',
      title: 'Promoções',
      route: '/categorias/promocoes'
    }
  ]
};

const actionTypes = {
  REQUEST_PRODUCTS: 'REQUEST_PRODUCTS',
  RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
  CANNOT_RECEIVE_PRODUCTS: 'CANNOT_RECEIVE_PRODUCTS',
  REQUEST_CATEGORIES: 'REQUEST_CATEGORIES',
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
  CANNOT_RECEIVE_CATEGORIES: 'CANNOT_RECEIVE_CATEGORIES',
  REQUEST_FEATURED_ITEMS: 'REQUEST_FEATURED_ITEMS',
  RECEIVE_FEATURED_ITEMS: 'RECEIVE_FEATURED_ITEMS',
  CANNOT_RECEIVE_FEATURED_ITEMS: 'CANNOT_RECEIVE_FEATURED_ITEMS'
};

var productsReducer = function (state = initialState.products, action) {
  return state;
};

const featuredReducer = function (state = initialState.featured, action) {
  return state;
};

const categoriesReducer = function (state = initialState.categories, action) {
  return state;
};

// Combine Reducers
const rootReducer = Redux.combineReducers({
  products: productsReducer,
  featured: featuredReducer,
  categories: categoriesReducer,
  routing: ReactRouterRedux.routerReducer
});

var store = Redux.createStore(

  rootReducer,

  initialState,

  Redux.compose(
    Redux.applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
      return f;
    }
  )
);

if (module.onReload) {
  module.onReload(() => {

    store.replaceReducer(rootReducer.default || rootReducer);

    // return true to indicate that this module is accepted and
    // there is no need to reload its parent modules
    return true;
  });
}

module.exports = store;

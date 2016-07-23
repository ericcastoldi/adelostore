var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
      <div className="topo">
        <div className="container">
          <div className="row">
            <div className="two columns">
              <img src="/img/adelo-gato.png" alt="Logotipo Adelo" />
            </div>
            <div className="eight columns topo-titulo">
              <h2 className="titulo-adelo">
              <span>A D E L O</span>
            </h2>
            </div>
            <div className="two columns topo-opcoes">
              <div className="topo-buscar">
                <img src="/img/lupa.png" alt="Lupa de busca" />
                <span>Buscar</span>
              </div>
              <div className="topo-acesso">
                <span>Cadastro | Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;

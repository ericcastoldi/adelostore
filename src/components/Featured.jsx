var React = require('react');
var Menu = require('./Menu.jsx');
var FeaturedSale = require('./FeaturedSale.jsx');
var Carousel = require('react-bootstrap').Carousel;

var Featured = React.createClass({
  render: function () {
    return (
      <div className="destaques">

        <div className="container">
          <div className="row">
            <div className="twelve columns">

              <Menu/>

            </div>
          </div>

          <div className="row">

            <div className="twelve columns">
              <div className="carousel-destaques">
                <Carousel>
                  <Carousel.Item>
                    <img src="/img/quadro-categorias-musica.jpg"/>
                    <Carousel.Caption>
                      <h3>Música</h3>
                      <p>Quadros de bandas e artistas da música.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="/img/quadro-categorias-filmes.jpg"/>
                    <Carousel.Caption>
                      <h3>Filmes</h3>
                      <p>Quadros de clássicos do cinema.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="/img/quadro-categorias-outros.jpg"/>
                    <Carousel.Caption>
                      <h3>Outros</h3>
                      <p>Quadros em geral.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Featured;

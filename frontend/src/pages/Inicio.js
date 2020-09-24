import React from 'react';
import Tabs from '../components/tabs';
import Banner from '../components/imagen';
import Recordatorios from '../components/Recordatorios';
import Noticias from '../components/Noticias';
import Boton from '../components/Bonton_c';
import estilos from '../Styles/Styles_inicio.css';

function Inicio() {
  return (
    <>

      <div className="container">
        <Banner />
        <div class="shadow-lg p-3 mb-5 bg-white rounded">

          <br />
          <div>
            <h4 className="font-weight-bolder">Hola Celeste Tamayo</h4>
            <p className="text-muted">
              <a href="#" class="text-reset font-weight-bolder">tenemos un resumen de tu día </a>
            </p>
            <Boton/>
            <br/>
            <hr class="solid"></hr>
          </div>
          <Tabs />
          <p className="text-muted titulo">
            <a href="#" class="text-reset font-weight-bolder">Recordatorios</a>
          </p>
          <hr class="solid"></hr>

          <Recordatorios />
          <p className="text-muted titulo">
            <a href="#" class="text-reset font-weight-bolder">Y noticias interesantes</a>
          </p>
          <hr class="solid"></hr>
          <Noticias />

        </div>
      </div>

    </>
  );
}

export default Inicio;


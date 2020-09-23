import React from 'react';
import Tabs from '../componets/Inicio/tabs';
import Banner from '../componets/Inicio/imagen';
import Recordatorios from '../componets/Inicio/Recordatorios';
import Noticias from '../componets/Inicio/Noticias';
import Boton from '../componets/Inicio/Bonton_c';
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


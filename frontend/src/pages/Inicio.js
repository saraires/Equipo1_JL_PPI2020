import React from 'react';
import Tabs from '../components/PrinTabs';
import Recordatorios from '../components/PrinRecordatorios';
import Noticias from '../components/PrinNoticias';
import estilos from '../Styles/Styles_inicio.css';

function Inicio() {
  return (
    <>

      <div className="container">
        <img src={banner} class="img-fluid " alt="Responsive image"></img>
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <br />
          <div>
            <h4 className="font-weight-bolder">Hola Celeste Tamayo</h4>
            <p className="text-muted">
              <a href="#" class="text-reset font-weight-bolder">tenemos un resumen de tu día </a>
            </p>
            <button type="button" className="btn btn-secondary float-right ubic ">Contactanos</button>
            <br />
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


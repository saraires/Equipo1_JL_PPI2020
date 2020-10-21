import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '../components/PrinTabs';
import Recordatorios from '../components/PrinRecordatorios';
import Noticias from '../components/PrinNoticias';
import banner from '../images/Fondo.png';
import estilos from '../styles/Styles_inicio.css';
import MenuGlobal from '../components/MenuGlobal';


function Inicio() {
  return (
    <>
      <div className="container pb-5">
        <img src={banner} className="img-fluid " alt="Responsive image"/>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <br />
          <div>
            <h4 className="font-weight-bolder">Hola Celeste Tamayo</h4>
            <p className="text-muted">
              <a href="#" className="text-reset font-weight-bolder">tenemos un resumen de tu día </a>
            </p>
            <Link to="/contactanos">
              <button type="button" className="btn btn-secondary float-right">Contáctanos</button>
            </Link>
            <br />
            <hr className="solid"></hr>
          </div>
          <Tabs />
          <p className="text-muted titulo">
            <a href="#" className="text-reset font-weight-bolder">Recordatorios</a>
          </p>
          <hr className="solid"></hr>

          <Recordatorios/>
          <p className="text-muted titulo">
            <a href="#" className="text-reset font-weight-bolder">Y noticias interesantes</a>
          </p>
          <hr className="solid"></hr>
          <Noticias/>
          <MenuGlobal/>
        </div>
      </div>

    </>
  );
}

export default Inicio;


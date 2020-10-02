import React from "react";
import { Link } from 'react-router-dom';

import Fondo from "../images/Fondo.png";

export default function Formulario() {
  return (
    <>
      <div className="container">
        <form>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <img src={Fondo} className="card-img-top" />
            <br />
            <h1><center>Contáctanos</center></h1>
            <p><center>Aquí puedes mandarnos todas tus preguntas, quejas, surgerencias, reclamos o felicitaciones</center></p>
            <div className="form-group">
              <label for="exampleInputEmail1">¿Cómo te llamas?</label>
              <input type="texto" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">¿Cuál es tu dirección de correo?</label>
              <input type="email" className="form-control" />
              <small id="emailHelp" className="form-text text-muted">Su correo electrónico no será compartido con nadie más.</small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Escribe aquí tu mensaje</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Adjunta un archivo</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch1" />
              <label class="custom-control-label" for="customSwitch1">Estoy de acuerdo con los términos y condiciones</label>
            </div>
            <br />
            <button type="submit" className="btn btn-warning">Enviar</button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
}

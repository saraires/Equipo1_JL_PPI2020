import React from 'react';


import MenuPremios from './PreMenu';
import Exito from '../images/Exito.png';
import Metro from '../images/Metro.png';
import MenuGlobal from './MenuGlobal';


export default function PreCarrito() {
  return (
    <>
      <div>
        <MenuPremios />
      </div>
      <div className="container jumbotron jumbotron-fluid" style={{display: "flex"}}>
        <span className="border border-dark"></span>
        <div className="container">
          <p className="container">Aquí se encuentran todos los bonos que has agregado al carrito, puedes activarlos y usarlos</p>
        </div>
      </div>

      <div>
        <div className="container shadow-lg p-3 mb-5 bg-white">
          <div className="card">
            <div className="card-body" style={{ display: "flex" }}>
              <img src={Metro} className="card-img-top rounded" href="#list-home" style={{ width: "80px" }} alt="Portada" />
              <div style={{ marginLeft: "20px" }}>
                <h5>Metro de Medellín</h5>
                <p style={{ color: "gray" }}>Descuento valido por 7000$ en pasajes del Metro</p>
                <button type="button" className="btn btn-info">Activar</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body" style={{ display: "flex" }}>
              <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "90px", height:"90px", marginTop: '20px' }} alt="Portada" />
              <div style={{ marginLeft: "15px" }}>
                <h5>Exito</h5>
                <p style={{ color: "gray" }}>40% de descuento en compras desde 150.000$</p>
                <button type="button" className="btn btn-info">Activar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuGlobal />
      {/*Esto es un comentario className, className = "container", style = {{backgroundColor: "#000000"}}*/}
    </>
  );
}

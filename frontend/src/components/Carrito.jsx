import React from 'react';
import Celeste from '../images/Celeste.jpg';
import Exito from '../images/Exito.png';
import Metro from '../images/Metro.png';


export default function Carrito() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-5" style={{ background: "#FFBA5C" }}>
          <a className="navbar-brand text-center texto font-weight-bolder" href="#">Carrito</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ background: "#FFBA5C" }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <br />
              <div style={{ display: "flex", marginLeft: "10px" }}>
                <img src={Celeste} alt="foto" className="rounded-circle" width="80px" align="left" />
                <div style={{ marginLeft: "10px" }}>
                  <h4>Celeste Tamayo</h4>
                  <h4>5000 Terras</h4>
                </div>
              </div>
              <br />
              <li className="nav-item active">
                <a className="nav-link opcio" href="#" style={{}}>Carrito y activación de cupones  <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link  opcio" href="#">Historial de terras redimidas <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link  opcio" href="#">Empresas afiliadas <span className="sr-only">(current)</span></a>
              </li>

              <div className="dropdown-divider"></div>

              <li className="nav-item active">
                <a className="nav-link  opcio" href="#">Notificaciones  <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link  opcio" href="#">Calificanos en la app <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container jumbotron jumbotron-fluid" style={{ display: "flex" }}>
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
                <button type="button" className="btn btn-info" style={{ alignContent: "right" }} >Activar</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body" style={{ display: "flex" }}>
              <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "90px", marginTop: '5px' }} alt="Portada" />
              <div style={{ marginLeft: "15px" }}>
                <h5>Exito</h5>
                <p style={{ color: "gray" }}>40% de descuento en compras desde 150.000$</p>
                <button type="button" className="btn btn-info">Activar</button>
              </div>
            </div>
          </div>
        </div>






        {/*Esto es un comentario className, className = "container", style = {{backgroundColor: "#000000"}}*/}


      </div>

    </>


  );


}

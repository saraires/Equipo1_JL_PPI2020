import React from "react";
import Celeste from "../images/Celeste.jpg";
import Exito from "../images/Exito.png";
import Frisby from "../images/Frisby.png";
import Metro from "../images/Metro.png";
import Presto from "../images/Presto.jpg";
import Todoenartes from "../images/Todoenartes.png";


export default function Premios() {
    return (
        <>

<nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-5" style={{ background: "#FFBA5C" }}>
                    <a className="navbar-brand text-center texto font-weight-bolder" href="#">Carrito</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
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
                            <a className="nav-link  opcio" href="#">Carrito y activación de cupones  <span className="sr-only">(current)</span></a>
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

            <div>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card">
                        <div className="card-body">
                            <img src={Frisby} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Frisby</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>45% de descuento en la compra de un pollo.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Metro} className="card-img-top rounded" href="#list-home" style={{ width: "70px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Metro de Medellín</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>25% de descuento en cuatro viajes en el metro.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Todoenartes} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Todo en artes</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>40% de descuento por la compra de cualquier instrumento.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Presto} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Presto</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>30% de descuento en la compra de dos súper hambuerguesas.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Exito</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>40% de descuento en compras desde 150.000$</p>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

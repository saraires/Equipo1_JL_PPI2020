import React from 'react';
import { Link } from 'react-router-dom';

import Celeste from '../images/Celeste.jpg'

export default function PreMenu() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-4" style={{ background: "#FFBA5C" }}>
                    <a className="navbar-brand text-center font-weight-bolder" href="">Premios</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ background: "#FFBA5C" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <br />
                            <div style={{ display: "flex", marginLeft: "10px" }}>
                                <img src={Celeste} alt="foto" className="rounded-circle" width="80px"  />
                                <div style={{ marginLeft: "10px" }}>
                                    <h4>Celeste Tamayo</h4>
                                    <h4>5000 Terras</h4>
                                </div>
                            </div>
                            <br />
                            <li className="nav-item active">
                                <Link to = "/carrito" className="nav-link opcio" href="" style={{}}>Carrito y activación de cupones  <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to = "/historial" className="nav-link  opcio" href="">Historial de terras redimidas <span className="sr-only">(current)</span></Link>
                            </li>
                            {/*Eliminar componente!!!
                            <li className="nav-item active">
                                <Link to = "/convenios" className="nav-link  opcio" href="">Empresas afiliadas <span className="sr-only">(current)</span></Link>
                            </li>
                            */}

                            <div className="dropdown-divider"></div>

                            <li className="nav-item active">
                                <a className="nav-link  opcio" href="">Notificaciones  <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link  opcio" href="">Calificanos en la app <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* 
            <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <a className="navbar-brand" href="#">Historial de compras</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Carrito y Activación de Cupones<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Historial de Terras Redimidas</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Empresas Afiliadas</a>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Notificaciones</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Calificanos en la App</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>*/}
        </div>
    );
}

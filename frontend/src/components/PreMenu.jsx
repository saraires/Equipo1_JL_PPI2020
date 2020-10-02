import React from 'react';
import { Link } from 'react-router-dom';

import Celeste from '../images/Celeste.jpg'

export default function PreMenu() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-5" style={{ background: "#FFBA5C" }}>
                    <a className="navbar-brand text-center texto font-weight-bolder" href="#">Convenios</a>
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

            {/* 
            <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                    <a class="navbar-brand" href="#">Historial de compras</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Carrito y Activación de Cupones<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Historial de Terras Redimidas</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Empresas Afiliadas</a>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Notificaciones</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Calificanos en la App</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>*/}
        </div>
    );
}

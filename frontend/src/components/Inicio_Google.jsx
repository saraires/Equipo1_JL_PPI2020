import React from 'react';
import { Link } from 'react-router-dom';

import LogoBiciPoint from "../images/LogoBiciPoint.png";
import Celeste from "../images/Celeste.jpg";
import OtroUsuario from "../images/OtroUsuario.png";


export default function Inicio_Google() {
    return (
        <div>
            <div className="container card shadow-lg p-3 mb-5 bg-white rounded">
                <img src={LogoBiciPoint} alt="Logo" className="rounded mx-auto d-block" width="70px" />
                <center><h4>Elige una cuenta</h4></center>
                <center><h6>Para que comiences a usar BiciPoint</h6></center>
                <br />
                <div style={{ display: "flex", marginLeft: "55px" }}>
                    <img src={Celeste} alt="foto" className="rounded-circle" style={{ width: "70px" }} align="left" />
                    <Link to="/inicio">
                        <div style={{ marginLeft: "10px" }}>
                            <h4 style={{color:"black"}}>Celeste Tamayo</h4>
                            <h5><small className="text-muted">celes_te10@gmail.com</small></h5>
                        </div>
                    </Link>
                </div>
                <div className="dropdown-divider"></div>
                <br />
                <div style={{ display: "flex", marginLeft: "55px" }}>
                    <img src={OtroUsuario} alt="foto" style={{ width: "70px" }} align="left" />
                    <div style={{ marginLeft: "10px" }}>
                        <h4>Agregar otra cuenta</h4>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <center><h6><small className="text-muted">Para continuar, Google compartirá tu nombre, dirección de correo electrónico y foto de perfil con BiciPoint. Antes de usar esta app, consulta su </small><a href="#" className="text-decoration-none">Política de Privacidad</a></h6></center>
                <br />
            </div>
        </div>
    );
}
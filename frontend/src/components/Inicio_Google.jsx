import React from 'react';
import LogoBiciPoint from "../images/LogoBiciPoint.png";
import Celeste from "../images/Celeste.jpg";
import Raster from "../images/Raster.png";


export default function Inicio_Google() {
    return (
        <div>
            <div className="modal-body">
                <img src={LogoBiciPoint} alt="Logo" className="rounded mx-auto d-block" width="70px" />
                <center><h4>Elige una cuenta</h4></center>
                <center><h6>Para que comiences a usar BiciPoint</h6></center>
                <br />
                <div style={{ display: "flex", marginLeft: "55px" }}>
                    <img src={Celeste} alt="foto" className="rounded-circle" width="40px" height="40px" align="left" />
                    <div style={{ marginLeft: "10px" }}>
                        <h4>Celeste Tamayo</h4>
                        <h5><small className="text-muted">celes_te10@gmail.com</small></h5>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div style={{ display: "flex", marginLeft: "55px" }}>
                    <img src={Raster} alt="foto" width="30px" height="30px" align="left" />
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
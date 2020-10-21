import React from 'react';
import { Link } from 'react-router-dom';

import Rank from '../images/Rank.png';
import Bolita from '../images/Bolita.png';


export default function Record1() {
    return (
        <div>
            {/* Menu e inicio/saludo "Hoy recorriste" */}
            <div className="container" >
                {/*Inicio Menú amarillo | Componente 1*/}
                <nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-5" style={{ background: "#FFBA5C" }}>
                    <center><h1 className="navbar-brand text-center font-weight-bolder">Record Semanal</h1></center>
                    <Link to = "/ranking">
                        <img src={Rank} className="float-right" alt="" style={{width: "2rem"}} />
                    </Link>
                </nav>
                {/*Fin Menú amarillo | Componente 1*/}
            </div>
            <div className="card card-body navbar-light container shadow p-3 mb-3" style={{ color: "#47525E" }}>
                <center>
                    <h3>Hoy recorriste:</h3>
                    <h3>355 Km</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    <div className="dropdown-divider"></div>
                    <br />
                    <h4>Actividad semanal:</h4></center>
                <br />
                <div className="container" style={{ display: "flex", margin: "auto" }}>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>L</p></center>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>M</p></center>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>M</p></center>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>J</p></center>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>V</p></center>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>S</p></center>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img src={Bolita} style={{ width: "30px" }} alt="foto" className="rounded-circle" />
                        <center><p>D</p></center>
                    </div>
                </div>
                {/* Bolitas de colores :) */}
            </div>
        </div>
    );
}
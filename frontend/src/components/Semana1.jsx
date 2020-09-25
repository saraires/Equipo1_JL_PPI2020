import React from 'react';
import Rank from '../images/Rank.png';

export default function Semana() {
    return (
        <div>
            {/* Menu e inicio/saludo "Hoy recorriste" */}
            <div className="container" >
                {/*Inicio Menú amarillo | Componente 1*/}
                <nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-5" style={{ background: "#FFBA5C" }}>
                    <center><h1 className="navbar-brand text-center texto font-weight-bolder">Record Semanal</h1></center>
                    <img src={Rank} className="float-right" style={{ width: "2rem" }} />
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
                {/* Bolitas de colores :) */}
            </div>
        </div>
    );
}
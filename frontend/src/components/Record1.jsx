import React from 'react';
import '../pages/styles/styles.css';

import Bolita from '../images/Bolita.png';

export default function Record1() {
    return (
        <div>
            
            <div className=" navbar-light shadow p-3 mb-3" style={{ color: "#47525E" }}>
                <center>
                    <h3>Hoy recorriste:</h3>
                    <h3>355 Km</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    <div className="dropdown-divider"></div>
                    <br />
                    <h4>Actividad semanal:</h4></center>
                <br />
                <div className="" style={{ display: "flex", margin: "auto" }}>
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
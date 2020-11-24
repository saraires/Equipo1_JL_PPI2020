import React from 'react';

import FondoUser from '../images/FondoUser.jpg'
import Celeste from '../images/Celeste.jpg'
import Bolita from '../images/Bolita.png';

export default function CuentaUser1() {
    return (
        <>
            <div className="container">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <img src={FondoUser} className="card-img-top" alt="Portada" />
                    <div className="card-body">
                        <img src={Celeste} className="card-img-top rounded-circle" href="#list-home" style={{ width: "60px", display: "inline" }} alt="Portada" />
                        <h3 className="card-text" style={{ display: "inline", marginLeft: "15px" }}><strong>Celeste Tamayo</strong></h3>
                        <p style={{ display: "block", marginLeft: "70px" }}>celes_te10@gmail.com</p>{/*Aquí iria la prop.correo */}
                        <div class="dropdown-divider"></div>
                        <br />
                        <h5 className="card-text"><strong>Mis estadísticas</strong></h5>
                        <p style={{ display: "inline" }}>Kms Recorridos: {/*Aquí iria una prop.*/}null</p>
                        <p style={{ display: "inline", marginLeft: "70px" }}>Terras: {/*Aquí iria una prop.*/} null</p>
                        <div className="dropdown-divider"></div>
                        <br />
                        <h5 className="card-text"><strong>Actividad semanal</strong></h5>
                        <br/>
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
                                <center><p>W</p></center>
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
                    </div>
                </div>
            </div>
        </>
    );
}

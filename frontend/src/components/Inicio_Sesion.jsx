import React from "react";
import { Link } from 'react-router-dom';

import LogoBiciPoint from '../images/LogoBiciPoint.png';
import Google_logo from '../images/Google_logo.png';
import Facebook_logo from '../images/Facebook_logo.webp';
import Celeste from "../images/Celeste.jpg";
import Raster from "../images/Raster.png";

export default function Inicio_Sesion() {
    return (
        <div className="App">
            <div className="container">
                <form>
                    <br />
                    <img src={LogoBiciPoint} alt="Logo" className="rounded mx-auto d-block" width="170px" />
                    <center><h2>BiciPoint</h2></center>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <br />
                        <button type="button" className="btn btn-warning btn-lg btn-block">Iniciar sesión</button>
                        <br />
                        <center><h5><small className="text-muted">¿Primera vez en BiciPoint?</small></h5></center>
                        <center><button type="button" className="btn btn-warning btn-lg">¡Regístrate aquí!</button></center>
                        <br />
                        {/*Eliminar componente!!!
                        <center><h5><small className="text-muted">O inicia sesión con tus </small></h5></center>
                        <center><h5><small className="text-muted">redes sociales</small></h5></center>
                        <br />
                        <div className="container" style={{ display: "inline-block" }}>
                            <div className="mx-auto" style={{ width: "200px" }}>
                                <Link to="/inicio-google">
                                    <button type="button1" className="btn btn-dark btn-sm float-right" style={{ display: "flex" }} data-toggle="modal" data-target="#exampleModal"><img src={Google_logo} alt="Logo" className="rounded mx-auto d-block" width="25px" />
                                    Google
                                </button>
                                </Link>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
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
                                    </div>
                                </div>
                                <button type="button" className="btn btn-dark btn-sm float-left" style={{ display: "flex" }} ><img src={Facebook_logo} alt="Logo" className="rounded mx-auto d-block" width="25px" />Facebook</button>
                            </div>
                        </div>
                        */}
                    </div>
                </form>
            </div>

        </div>
    );
}
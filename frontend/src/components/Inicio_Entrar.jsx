import React from "react";
import { Link } from 'react-router-dom';

import LogoBiciPoint from '../images/LogoBiciPoint.png';
import Google_logo from '../images/Google_logo.png';
import Facebook_logo from '../images/Facebook_logo.webp';
import Inicio_Google from './Inicio_Google';

export default function Inicio_Entrar() {
    return (
        <>
            <div className="container">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <form>
                        <br />
                        <img src={LogoBiciPoint} alt="Logo" className="rounded mx-auto d-block" width="97px" />
                        <center><h2>Inicio de sesión</h2></center>
                        <div className="form-group">
                            <label for="exampleDropdownFormEmail1"></label>
                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Correo electrónico o nombre de usuario" />
                            <label for="exampleDropdownFormPassword1"></label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña" />
                            <center><a href="#" className="text-decoration-none">¿Olvidaste la contraseña?</a></center>
                        </div>
                        <Link to = "/inicio">
                        <button type="button" className="btn btn-warning btn-lg btn-block">Entrar</button>
                        </Link>
                        <br />
                        <center><h5><small className="text-muted">¿Eres un usuario nuevo?</small></h5></center>
                        <Link to = "/registro">
                        <center><button type="button" className="btn btn-warning btn-lg">¡Regístrate aquí!</button></center>
                        </Link>
                        <br />
                        <center><h5><small className="text-muted">O inicia sesión con tus</small></h5></center>
                        <center><h5><small className="text-muted">redes sociales</small></h5></center>
                        <br />
                        <div className="container" style={{ display: "inline-block" }}>
                            <div className="mx-auto" style={{ width: "200px" }}>

                                <button type="button1" className="btn btn-dark btn-sm float-right" style={{ display: "flex" }} data-toggle="modal" data-target="#exampleModal"><img src={Google_logo} alt="Logo" className="rounded mx-auto d-block" width="25px" />
                                    Google
                                </button>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <Inicio_Google />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button1" className="btn btn-dark btn-sm float-left" style={{ display: "flex" }} data-toggle="modal" data-target="#exampleModal"><img src={Facebook_logo} alt="Logo" className="rounded mx-auto d-block" width="25px" />Facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
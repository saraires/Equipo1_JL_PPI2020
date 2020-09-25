import React from "react";
import LogoBiciPoint from '../images/LogoBiciPoint.png';
import Google_logo from '../images/Google_logo.png';
import Facebook_logo from '../images/Facebook_logo.webp';
import Celeste from "../images/Celeste.jpg";
import Raster from "../images/Raster.png";

export default function Inicio_sesion() {
    return (
        <>
            <div className="container">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">

                    <form>
                        <br />
                        <img src={LogoBiciPoint} alt="Logo" className="rounded mx-auto d-block" width="97px" />
                        <center><h2>Regístrate</h2></center>

                        <div class="form-group">
                            <label for="exampleDropdownFormName1"></label>
                            <input type="name" class="form-control" id="exampleDropdownFormName1" placeholder="Nombre completo" />
                            <label for="exampleDropdownFormEmail1"></label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Correo electrónico" />
                            <label for="exampleDropdownFormPassword1"></label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña" />
                        </div>

                        <button type="button" className="btn btn-warning btn-lg btn-block">Crear cuenta</button>
                        <br />
                        <div class="form-check"><center>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">No deseo que me contacten por el correo</label></center></div>
                        <br />
                        <center><h6>Al continuar, confirmas que estás de acuerdo con los <a href="#" class="text-decoration-none">Términos de uso</a> de BiciPoint y que has leído la <a href="#" class="text-decoration-none">Política de privacidad</a> de BiciPoint.</h6></center>
                        <br />
                        <center><h5><small className="text-muted">O inicia sesión con tus</small></h5></center>
                        <div className="dropdown-divider float-left"></div>
                        <center><h5><small className="text-muted">redes sociales</small></h5></center>
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
                            </div></div>


                    </form>
                </div>
            </div>
        </>
    );
}
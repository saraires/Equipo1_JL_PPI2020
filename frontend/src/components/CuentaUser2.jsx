import React from 'react';
import { Link } from 'react-router-dom';


export default function CuentaUser2() {
    return (
        <div>
            <div className="container pb-5">
                <div className="accordion shadow-lg p-3 mb-5 bg-white rounded" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Configuración </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Nombre de usuario</li>
                                    <li className="list-group-item">Contraseña</li>
                                    <li className="list-group-item">Mi cuenta</li>
                                    <li className="list-group-item">
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                            <label className="custom-control-label" for="customSwitch1">Modo Oscuro</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">PQRS</li>
                                    <li className="list-group-item">Términos y condiciones</li>
                                    <li className="list-group-item">Políticas de privacidad</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Notificaciones </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Frecuencia</li>
                                    <li className="list-group-item">Recordarte sobre...</li>
                                    <li className="list-group-item">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                            <label className="custom-control-label" for="customSwitch1" style={{ display: 'block' }}>Recordatorios silenciosos</label>
                                            <a href="#" className="text-decoration-none" data-toggle="popover" style={{ fontSize: '10pt' }} data-trigger="focus" title="Son notificaciones que llegan a tu celular sin vibrar o producir sonido" >¿Qué son?</a>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                            <label className="custom-control-label" for="customSwitch1">Modo Oscuro</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Sobre Nosotros
                                </button>
                                </h2>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Calificanos en la app
                                    </button>
                                    </h2>
                                </div>
                                <div className="card-header" id="headingThree">
                                    <Link to = "/entrar">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Cerrar Sesión
                                        </button>
                                    </h2>
                                    </Link>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Ayuda ?
                                        </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
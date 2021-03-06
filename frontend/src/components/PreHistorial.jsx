import React from 'react';

import Exito from '../images/Exito.png';
import Frisby from '../images/Frisby.png';
import Metro from '../images/Metro.png';
import Presto from '../images/Presto.jpg';
import Todoenartes from '../images/Todoenartes.png';
import MenuGlobal from './MenuGlobal';

export default function PreHistorial() {
    return (
        <div>
            <div className="container shadow-lg p-3 mb-5 bg-white pb-5">
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Metro} className="card-img-top rounded" href="#list-home" style={{ width: "80px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Metro de Medellín</h5>
                            <p style={{ color: "gray" }}>Descuento valido por 7000$ en pasajes del Metro</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Presto} className="card-img-top rounded" href="#list-home" style={{ width: "90px", marginTop: '5px' }} alt="Portada" />
                        <div style={{ marginLeft: "15px" }}>
                            <h5>Presto</h5>
                            <p style={{ color: "gray" }}>30% de descuento por compra de dos hambuerguesas</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "90px", marginTop: '5px' }} alt="Portada" />
                        <div style={{ marginLeft: "15px" }}>
                            <h5>Exito</h5>
                            <p style={{ color: "gray" }}>40% de descuento en compras desde 150.000$</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" style={{ display: "flex" }}>
                            <img src={Todoenartes} className="card-img-top rounded" href="#list-home" style={{ width: "90px", marginTop: '5px' }} alt="Portada" />
                            <div style={{ marginLeft: "15px" }}>
                                <h5>Todo en artes</h5>
                                <p style={{ color: "gray" }}>20% de descuento en la compra de cualquier instrumento</p>
                            </div>
                        </div>
                        <div className="card" style={{marginBottom:"30px"}}>
                            <div className="card-body" style={{ display: "flex" }}>
                                <img src={Frisby} className="card-img-top rounded" href="#list-home" style={{ width: "90px", marginTop: '5px' }} alt="Portada" />
                                <div style={{ marginLeft: "15px" }}>
                                    <h5>Frisby</h5>
                                    <p style={{ color: "gray" }}>45% de descuento en la compra de un pollo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MenuGlobal/>
        </div>
    );
}

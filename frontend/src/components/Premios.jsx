import React from "react";


import MenuPremios from './PreMenu';
import Celeste from "../images/Celeste.jpg";
import Exito from "../images/Exito.png";
import Frisby from "../images/Frisby.png";
import Metro from "../images/Metro.png";
import Presto from "../images/Presto.jpg";
import Todoenartes from "../images/Todoenartes.png";
import MenuGlobal from "./MenuGlobal";

export default function Premios() {
    return (
        <>
            <MenuPremios />
            <div>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card">
                        <div className="card-body">
                            <img src={Frisby} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Frisby</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>45% de descuento en la compra de un pollo.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Metro} className="card-img-top rounded" href="#list-home" style={{ width: "70px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Metro de Medellín</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>25% de descuento en cuatro viajes en el metro.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Todoenartes} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Todo en artes</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>40% de descuento por la compra de cualquier instrumento.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Presto} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Presto</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>30% de descuento en la compra de dos súper hambuerguesas.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "80px", display: "inline", marginTop: '5px' }} alt="Portada" />
                            <h5 style={{ display: "inline", marginLeft: "15px" }}>Exito</h5>
                            <br />
                            <p style={{ display: "inline", color: "gray", marginLeft: "95px" }}>40% de descuento en compras desde 150.000$</p>
                        </div>
                    </div>
                </div>
                <MenuGlobal />
            </div>
        </>
    );
}

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
            <div className="container shadow-lg p-3 mb-5 bg-white pb-5">
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Frisby} className="card-img-top rounded" href="#list-home" style={{ width: "90px", height:"90px", marginTop:"10px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Frisby</h5>
                            <p style={{ color: "gray" }}>45% de descuento en la compra de un pollo</p>
                            <button type="button" className="btn btn-warning">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Presto} className="card-img-top rounded" href="#list-home" style={{ width: "90px", height:"90px", marginTop:"10px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Presto</h5>
                            <p style={{ color: "gray" }}>30% de descuento por compra de dos hambuerguesas</p>
                            <button type="button" className="btn btn-warning">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Metro} className="card-img-top rounded" href="#list-home" style={{ width: "80px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Metro de Medellín</h5>
                            <p style={{ color: "gray" }}>Descuento valido por 7000$ en pasajes del Metro</p>
                            <button type="button" className="btn btn-warning">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Todoenartes} className="card-img-top rounded" href="#list-home" style={{ width: "90px", height:"90px", marginTop:"20px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Todo en artes</h5>
                            <p style={{ color: "gray" }}>20% de descuento en la compra de cualquier instrumento</p>
                            <button type="button" className="btn btn-warning">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="card" style={{marginBottom:"30px"}}>
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "90px", height:"90px", marginTop:"10px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Exito</h5>
                            <p style={{ color: "gray" }}>40% de descuento en compras desde 150.000$</p>
                            <button type="button" className="btn btn-warning">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <MenuGlobal />
        </>
    );
}

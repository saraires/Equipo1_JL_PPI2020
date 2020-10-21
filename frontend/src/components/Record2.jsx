import React from 'react';

import Bycicle from '../images/Bycicle.png';
import Green from '../images/Green.png';
import Icecream from '../images/Icecream.png';
import Location from '../images/Location.png';
import Mountain from '../images/Mountain.png';
import Raster from '../images/Raster.png';
import Train from '../images/Train.png';

export default function Record2() {
    return (
        <div>
            <div className="container">
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img alt="" src={Raster} style={{ width: "90px", }} />
                    <div style={{ textAlign: "right" }} className="col clearfix">
                        <h3 className="">Lunes 27, Julio</h3>
                        <h3 className="float-right">245 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <div className="col clearfix">
                        <h3>Martes 28, Julio</h3>
                        <h3>380 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                    <img alt="" src={Train} style={{ width: "90px", marginLeft: "40px" }} className="float-right" />
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img alt="" src={Bycicle} style={{ width: "90px", }} />
                    <div style={{ textAlign: "right" }} className="col clearfix">
                        <h3 className="">Miercoles 29, Julio</h3>
                        <h3 className="float-right">270 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <div className="col clearfix">
                        <h3>Jueves 30, Julio</h3>
                        <h3>380 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                    <img alt="" src={Green} style={{ width: "90px", marginLeft: "40px" }} className="float-right" />
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img alt="" src={Location} style={{ width: "90px", }} />
                    <div style={{ textAlign: "right" }} className="col clearfix">
                        <h3 className="">Viernes 31, Julio</h3>
                        <h3 className="float-right">245 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <div className="col clearfix">
                        <h3>Sábado 01, Agosto</h3>
                        <h3>--- Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                    <img alt="" src={Mountain} style={{ width: "90px", marginLeft: "40px" }} className="float-right" />
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img alt="" src={Icecream} style={{ width: "90px", }} />
                    <div style={{ textAlign: "right" }} className="col clearfix">
                        <h3 className="">Domingo 02, Agosto</h3>
                        <h3 className="float-right">--- Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
            </div>
        </div>
    );
}
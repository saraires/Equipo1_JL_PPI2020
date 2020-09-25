import React from 'react';
import Bycicle from '../images/Bycicle.png';
import Green from '../images/Green.png';
import Icecream from '../images/Icecream.png';
import Location from '../images/Location.png';
import Mountain from '../images/Mountain.png';
import Raster from '../images/Raster.png';
import Train from '../images/Train.png';

export default function Semana1() {
    return (
        <div>
            <div className="container">
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img src={Raster} style={{ width: "90px", marginRight: "180px" }} />
                    <div style={{ textAlign: "right" }}>
                        <h3>Lunes 27, Julio</h3>
                        <h3>245 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <div>
                        <h3>Martes 28, Julio</h3>
                        <h3>380 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                    <img src={Train} style={{ width: "90px", marginLeft: "165px" }} />
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img src={Bycicle} style={{ width: "90px", marginRight: "125px" }} />
                    <div style={{ textAlign: "right" }}>
                        <h3>Miércoles 29, Julio</h3>
                        <h3>270 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <div>
                        <h3>Jueves 30, Julio</h3>
                        <h3>355 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                    <img src={Green} style={{ width: "90px", marginLeft: "165px" }} />
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img src={Location} style={{ width: "90px", marginRight: "160px" }} />
                    <div style={{ textAlign: "right" }}>
                        <h3>Viernes 31, Julio</h3>
                        <h3>100 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <div>
                        <h3>Sábado 01, Agosto</h3>
                        <h3>147 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                    <img src={Mountain} style={{ width: "90px", marginLeft: "120px" }} />

                </div>
                <div className="card-body container shadow p-4 mb-3" style={{ color: "#47525E", display: "flex" }}>
                    <img src={Icecream} style={{ width: "90px", marginRight: "100px" }} />
                    <div style={{ textAlign: "right" }}>
                        <h3>Domingo 03, Agosto</h3>
                        <h3>210 Kms</h3> {/* Aquí iría una prop para determinar los kms recorridos */}
                    </div>
                </div>
            </div>
        </div>
    );
}
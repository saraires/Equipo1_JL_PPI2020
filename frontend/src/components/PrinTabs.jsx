import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div className="entorno_Tabs  ">
            <ul className="nav nav-tabs " id="myTab">
                <li className="nav-item">
                    <a className="nav-link color_tabs" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"><h6 style={{ color: '#633930', display: "flex", alignItems: "center"}}>kms</h6></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color_tabs" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"><h6 style={{ color: '#633930', display: "flex", alignItems: "center"}}>Terras</h6></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color_tabs" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"><h6 style={{ color: '#633930', display: "flex", alignItems: "center"}}>Encicla</h6></a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent" style={{ alignItems: "center"}}>
                <div className="tab-pane fade show active color_contenido" id="home" role="tabpanel" aria-labelledby="home-tab"><h6 className="text-center text-white font-weight-bolder center"> Hoy has recorrido 7.5 Km !Sigue asi¡</h6>
                    <Link to="/record">
                        <p className="text-center text-white  font-weight-bolder center"> Da click aquí para saber más</p>
                    </Link>
                </div>
                <div className="tab-pane fade color_contenido" id="profile" role="tabpanel" aria-labelledby="profile-tab"><h6 className="text-center text-white font-weight-bolder center"> Llevas recaudados 5000 Terras ¿Ya viste que premios podrías reclamar? ¡Hay muchos para escoger!</h6>
                    <Link to="/premios">
                        <p className="text-center text-white  font-weight-bolder center"> Da click aquí para que que los conozcas</p>
                    </Link>
                </div>
                <div className="tab-pane fade color_contenido" id="contact" role="tabpanel" aria-labelledby="contact-tab"><h6 className="text-center text-white font-weight-bolder center">¿No conoces dónde están los puntos de encicla en la ciudad?</h6>
                    <Link to="/mapa">
                        <p className="text-center text-white  font-weight-bolder center"> Da click aquí para visualizarlos</p>
                    </Link>
                </div>
            </div>
        </div>)

    }

}
export default Tabs;
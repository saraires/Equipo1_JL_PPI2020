import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div className="entorno_Tabs  ">
            <ul className="nav nav-tabs " id="myTab" role="tablist ">
                <li className="nav-item color_tabs" role="presentation">
                    <a className="nav-link  text-white active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Km</a>
                </li>
                <li className="nav-item color_tabs" role="presentation">
                    <a className="nav-link text-white" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Terras</a>
                </li>
                <li className="nav-item color_tabs" role="presentation">
                    <a className="nav-link text-white" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">EnCicla</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active color_contenido" id="home" role="tabpanel" aria-labelledby="home-tab"><p className="text-center text-white  font-weight-bolder center"> Hoy has recorrido 7.5 Km !Sigue asi¡</p>
                    <Link to="/record">
                        <p className="text-center text-white  font-weight-bolder center"> Da click aquí para saber más</p>
                    </Link>
                </div>
                <div className="tab-pane fade  color_contenido" id="profile" role="tabpanel" aria-labelledby="profile-tab"><p className="text-center text-white  font-weight-bolder center"> Llevas recaudados 5000 Terras ¿Ya viste que premios podrías reclamar? ¡Hay muchos para escoger!</p>
                    <Link to="/premios">
                        <p className="text-center text-white  font-weight-bolder center"> Da click aquí para que que los conozcas</p>
                    </Link>
                </div>
                <div className="tab-pane fade color_contenido" id="contact" role="tabpanel" aria-labelledby="contact-tab"><p className="text-center text-white font-weight-bolder center">¿No conoces dónde están los puntos de encicla en la ciudad?</p>
                    <Link to="/mapa">
                        <p className="text-center text-white  font-weight-bolder center"> Da click aquí para visualizarlos</p>
                    </Link>
                </div>
            </div>
        </div>)

    }

}
export default Tabs;
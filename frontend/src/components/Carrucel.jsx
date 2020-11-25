import React, { Component } from 'react'
import '../pages/styles/styles.css';
import { Link } from 'react-router-dom';

import imagen1 from '../images/Intro1.jpg';
import imagen2 from '../images/Intro2.jpg';
import imagen3 from '../images/Intro3.jpg';


class Carrucel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <center>
                <div id="carouselExampleIndicators" className="carousel slide container" data-ride="">
                    {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}

                    <div className="shadow p-4 mb-3 carousel-inner ">

                        <div className="carousel-item active">
                            <img src={imagen1} className="d-block" style={{ width: "20rem", text: 'center' }} alt="..." />
                            <p className="text-center texto font-weight-bolder">Puedes andar en bicicleta, caminar o usar cualquier medio de transporte limpio. </p>
                            <Link to ="/entrar" style={{ marginLeft: "80%", color:"#47525E" }}><a>Omitir</a></Link>
                        </div>
                        <div className="carousel-item">
                            <img src={imagen2} className="d-block" style={{ width: "21rem", text: 'center' }} alt="..." />
                            <p className="text-center texto font-weight-bolder">Asi nos ayudas a limpiar el aire que recubre nuestra amada tierra.</p>
                            <Link to ="/entrar" style={{ marginLeft: "80%", color:"#47525E" }}>Omitir</Link>
                        </div>
                        <div className="carousel-item">
                            <img src={imagen3} className="d-block" style={{ width: "20rem", text: 'center' }} alt="..." />
                            <p className="text-center texto font-weight-bolder">Con los puntos que ganes por los Kms que recorras, puedes canjearlos por tópicos geniales.</p>
                            <Link to ="/entrar" style={{ marginLeft: "80%", color:"#47525E" }}>Omitir</Link>
                        </div>
                    </div>
                    <a className="carousel-control" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
            </center>


        </>)
    }
}
export default Carrucel;

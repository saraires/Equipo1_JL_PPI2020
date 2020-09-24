import React, { Component } from 'react'
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
               
                    <div className="carousel-inner ">

                        <div className="carousel-item active">
                            <img src={imagen1} className="d-block  " style={{ width: "15rem", text: 'center' }} alt="..." />
                            <p className="text-center texto font-weight-bolder">Puedes andar en bicicleta, caminar o usar cualquier medio de transporte limpio. </p>
                        </div>
                        <div className="carousel-item">
                            <img src={imagen2} className="d-block  " style={{ width: "15rem", text: 'center' }} alt="..." />
                            <p className="text-center texto font-weight-bolder">Asi nos ayudas a limpiar el aire que recubre nuestra amada tierra.</p>
                        </div>
                        <div className="carousel-item">
                            <img src={imagen3} className="d-block  " style={{ width: "15rem", text: 'center' }} alt="..." />
                            <p className="text-center texto font-weight-bolder">Con los puntos que ganes por los Kms que recorras, puedes canjearlos por tópicos geniales.</p>
                        </div>
                    </div>
                    <a className="carousel-control" href="#carouselExampleIndicators" role="" data-slide="prev">
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

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Recorda extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <center> <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div style={{ backgroundColor: '#F87730' }} className="fondo "><h4 className="font-weight-bolder text-white">Por cada Km que recorras podrás ganar 200 terras</h4></div>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{ backgroundColor: '#F87730' }} className="fondo "><h4 className="font-weight-bolder text-white">¡No olvides tomar agua! Mantenerse hidratado es muy importante</h4></div>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{ backgroundColor: '#F87730' }} className="fondo "><h4 className="font-weight-bolder text-white">¡Todos los dias come una fruta! "Una manzana al dia aleja al médico"</h4></div>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div></center>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>)

    }

}
export default Recorda;
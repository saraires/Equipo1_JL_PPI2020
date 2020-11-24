import React, { Component } from 'react'

class Noticias extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <center><div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active text-wrap" data-interval="10000">
                        <div style={{ backgroundColor: '#2CA6E8', display: "flex", alignItems: "center", padding:"10px" }} className="fondo "><h4 className="font-weight-bolder text-white">¿Sabias que en Colombia puedes ganarte medio dia libre pago? Da click aquí para saber más</h4></div>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <div style={{ backgroundColor: '#2CA6E8', display: "flex", alignItems: "center", padding:"10px" }} className="fondo "><h4 className="font-weight-bolder text-white">Cuando sales a caminar o a pasear en bicicleta, no solo contribuyes con el ambiente sino tambien con tu salud.</h4></div>
                    </div>
                    <div className="carousel-item">
                        <div style={{ backgroundColor: '#2CA6E8', display: "flex", alignItems: "center", padding:"10px" }} className="fondo "><h4 className="font-weight-bolder text-white ">Cuando sales a caminar o a pasear en bicicleta, no solo contribuyes con el ambiente sino tambien con tu salud.</h4></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div></center>

        </>)

    }

}
export default Noticias;
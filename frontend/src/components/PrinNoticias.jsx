import React, { Component } from 'react'

class Noticias extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <center><div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active text-wrap" data-interval="10000">
                        <div style={{ backgroundColor: '#2CA6E8' }} className="fondo "><h4 className="font-weight-bolder text-white">¿Sabias que en Colombia puedes ganarte medio dia libre pago? Da click aquí para saber más</h4></div>
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <div style={{ backgroundColor: '#2CA6E8' }} className="fondo "><h4 className="font-weight-bolder text-white">Cuando sales a caminar o a pasear en bicicleta, no solo contribuyes con el ambiente sino tambien con tu salud.</h4></div>
                    </div>
                    <div class="carousel-item">
                        <div style={{ backgroundColor: '#2CA6E8' }} className="fondo "><h4 className="font-weight-bolder text-white ">Cuando sales a caminar o a pasear en bicicleta, no solo contribuyes con el ambiente sino tambien con tu salud.</h4></div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div></center>

        </>)

    }

}
export default Noticias;
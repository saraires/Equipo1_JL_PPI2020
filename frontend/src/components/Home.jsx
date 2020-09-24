import React, { Component } from 'react'
import perfil from '../images/Perfil.png';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <nav class="navbar navbar-expand-lg navbar-light  color_nav" >
                <a class="navbar-brand text-center texto font-weight-bolder" href="#">Convenios</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <br />
                        <div className="order mar">
                            <img src={perfil}  alt="foto" width="90rem" height="90rem" align="left" />
                            <div className="mar">
                                <h4 >Celeste Tamayo</h4>
                                <h4 >5000 Terras</h4>
                            </div>
                        </div>
                        <br />
                        <li class="nav-item active">
                            <a class="nav-link  opcio" href="#">Carrito y activacion de cupones  <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link  opcio" href="#">Historial de terras redimidas <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link  opcio" href="#">Empresas afiliadas <span class="sr-only">(current)</span></a>
                        </li>
                       <div className="dropdown-divider "></div>

                        <li class="nav-item active">
                            <a class="nav-link  opcio" href="#">Notificaciones  <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link  opcio" href="#">Calificanos en la app <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>)

    }

}
export default Home;
import React, { Component } from 'react'

<<<<<<< HEAD
import Raster from '../images/Raster.png'
import estilos from '../styles/Styles_Buscador.css';


=======
import Styles  from '../Styles/Styles_B.css'
>>>>>>> a29ca1917f717c4bfd604c0d95e5328e28c86cad
class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
<<<<<<< HEAD
        return (
            <>
=======
        return (<>
         <title>Awesome Search Box</title>
>>>>>>> a29ca1917f717c4bfd604c0d95e5328e28c86cad
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
                <div className="container h-100 shadow p-2 mb-5">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="¿A dónde quieres ir?" />
                            <a href="#" className="search_icon"><i class="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            </>
        )
=======
        </>)
>>>>>>> a29ca1917f717c4bfd604c0d95e5328e28c86cad
    }
}
export default Buscador;

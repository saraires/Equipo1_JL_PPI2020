import React from 'react';
import { Link } from 'react-router-dom';

import mapa from '../images/Mapa.png'
import record from '../images/progress.png'
import inicio from '../images/Inicio.png'
import premios from '../images/Premios.png'
import perfil from '../images/PerfilCeleste.png'

export default function MenuGlobal() {
    return (
        <div>
            <footer>
                <section class="wrapper fixed-bottom" style={{ background: "#FFBA5C", padding: "7px" }}>
                    <nav>
                        <ul className= "nav ul li a">
                            <Link to="/mapa">
                                <button type="button" className="btn" style={{marginLeft:"20px"}}><img src={mapa} alt="Logo" width="30px" /></button>
                            </Link>
                            <Link to="/record">
                                <button type="button" className="btn" style={{marginLeft:"20px"}}><img src={record} alt="Logo" width="30px" /></button>
                            </Link>
                            <Link to="/inicio">
                                <button type="button" className="btn" style={{marginLeft:"20px"}}><img src={inicio} alt="Logo" width="30px" /></button>
                            </Link>
                            <Link to="/premios">
                                <button type="button" className="btn" style={{marginLeft:"20px"}}><img src={premios} alt="Logo" width="30px" /></button>
                            </Link>
                            <Link to="/perfil">
                                <button type="button" className="btn" style={{marginLeft:"20px"}}><img src={perfil} alt="Logo" width="30px" /></button>
                            </Link>
                        </ul>
                    </nav>
                </section>
            </footer>
        </div>
    )
}
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function MenuGlobal() {
    return (
        <div>
            <div className="container">
                <nav className="navbar fixed-bottom navbar-expand-lg navbar-light container shadow-lg p-3 " style={{ background: "#FFBA5C" }}>
                    <a className="navbar-brand" href="#">BiciPoint</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                           
                            <li className="nav-item active">
                                <Link to="/mapa" className="nav-link" href="#">Mapa<span className="sr-only">(current)</span></Link>
                            </li>  
                            <li className="nav-item active">
                                <Link to="/record" className="nav-link" href="#">Record<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/inicio" className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></Link>
                            </li>  
                            <li className="nav-item active">
                                <Link to="/premios" className="nav-link" href="#">Premios<span className="sr-only">(current)</span></Link>
                            </li>  
                            <li className="nav-item active">
                                <Link to="perfil" className="nav-link" href="#">Perfil<span className="sr-only">(current)</span></Link>
                            </li>    
                                   
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
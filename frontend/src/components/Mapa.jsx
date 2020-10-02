import React from 'react';
import { Link } from 'react-router-dom';
import MenuGlobal from './MenuGlobal';

export default function Mapa() {
    return (
        <div>
            <center>
                <nav className="navbar navbar-expand-lg navbar-light container shadow-lg p-3 mb-3" style={{ background: "#FFBA5C" }}>
                    <div style={{ display: "inline" }}>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="¿A dónde quieres ir?" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63455.461157628924!2d-75.56529072485357!3d6.268159638155551!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1601077123794!5m2!1ses!2sco"
                    className="container" style={{ width: "20rem", height: "30rem", frameborder: "0", style: "border:0;", allowfullscreen: "", ariaHidden: "false", tabindex: "0" }}></iframe>
            </center>
            <MenuGlobal />
        </div>
    );
}
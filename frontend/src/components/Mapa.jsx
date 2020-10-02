import React from 'react';
import { Link } from 'react-router-dom';

export default function Mapa() {
    return (
        <div>
            <div clasName="container card shadow-lg p-3 mb-5"><center>
                <h2>Hola mundo!</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63455.461157628924!2d-75.56529072485357!3d6.268159638155551!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1601077123794!5m2!1ses!2sco"
                    clasName="card container" style={{ width: "50rem", height: "30rem", frameborder: "0", style: "border:0;", allowfullscreen: "", ariaHidden: "false", tabindex: "0" }}></iframe>
            </center>
            </div>
        </div>
    );
}
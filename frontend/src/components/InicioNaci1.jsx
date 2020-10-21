import React from "react";
import PruebaNaci from "./InicioNaci2";

export default function InicioNaci1() {
    return (
        <>

            <div className="card container shadow-lg p-3 mb-5 bg-white">
                <br />
                <center><h4>¡Solo un paso más!</h4></center>
                <br />
                <center><h6>Dinos, ¿Cuál es tu fecha de nacimiento?</h6></center>
                <center><h6><small className="text-muted">Tu fecha de nacimiento no se mostrará públicamente</small></h6></center>
                <br />
                <PruebaNaci />
                <br />
                <br />
                <button type="button" className="btn btn-warning btn-lg btn-block">Siguiente</button>
            </div>

        </>
    );
}
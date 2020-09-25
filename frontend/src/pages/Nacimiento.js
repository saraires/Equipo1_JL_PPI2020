import React from "react";
import Prueba_Naci from "../components/Prueba_Naci"


export default function Inicio_sesion() {
    return (
        <>

            <div className="card container shadow-lg p-3 mb-5 bg-white">
                <br />
                <center><h4>¡Solo un paso más!</h4></center>
                <br />
                <center><h6>Dinos, ¿Cuál es tu fecha de nacimiento?</h6></center>
                <center><h6><small className="text-muted">Tu fecha de nacimiento no se mostrará públicamente</small></h6></center>
                <br />
                <Prueba_Naci />
                <br />
                <br />
                <button type="button" className="btn btn-warning btn-lg btn-block">Siguiente</button>
            </div>

        </>
    );
}
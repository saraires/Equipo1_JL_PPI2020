import React from "react";
import { Link } from 'react-router-dom';

export default function Inicio_NombreUser() {
    return (

        <>
            <div className="container card shadow p-5 mb-3" style={{ padding: "40px"}}>
                <br />
                <center><h4>Nombre de usuario</h4></center>
                <br />
                <form className="was-validated">
                    <div className="mb-2">
                        <label for="validationTextarea"></label>
                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Ejemplo: Celeste_01" required></textarea>
                        <h6><small className="text-muted font-weight-bold">www.bicipoint.com/Celeste_01</small></h6>
                        <h7><small className="text-muted text-leaft">El nombre de usuario solo puede contener letras, números, guiones bajos y puntos. Si cambias el nombre de usuario, tu enlace de perfil también cambiará.</small></h7>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Link to="/inicio">
                    <button type="button" className="btn btn-warning btn-lg btn-block">Guardar</button>
                    </Link>
                </form>
            </div>

        </>
    );
}
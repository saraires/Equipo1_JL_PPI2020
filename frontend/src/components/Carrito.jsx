import React from 'react';
import Celeste from '../images/Celeste.jpg';
import Exito from '../images/Exito.png';
import Metro from '../images/Metro.png';

export default function Carrito(){
  return (
     <div>
        <div className="container shadow-lg p-3 mb-5 bg-white">
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Metro} className="card-img-top rounded" href="#list-home" style={{ width: "80px" }} alt="Portada" />
                        <div style={{ marginLeft: "20px" }}>
                            <h5>Metro de Medellín</h5>
                            <p style={{ color: "gray" }}>Descuento valido por 7000$ en pasajes del Metro</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                        <img src={Exito} className="card-img-top rounded" href="#list-home" style={{ width: "90px", marginTop: '5px' }} alt="Portada" />
                        <div style={{ marginLeft: "15px" }}>
                            <h5>Exito</h5>
                            <p style={{ color: "gray" }}>40% de descuento en compras desde 150.000$</p>
                        </div>
                    </div>
                </div> 
            </div> 






  {/*Esto es un comentario className, className = "container", style = {{backgroundColor: "#000000"}}*/}    
  </div>


  );


}

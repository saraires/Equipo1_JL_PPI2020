import React from 'react';
import { Link } from 'react-router-dom';
import Carrucel from '../components/Carrucel';
import estilos from '../styles/Styles_intro.css';
// import imagen1 from '../componets/imagenes/Intro1.jpg';
// import imagen2 from '../componets/imagenes/Intro2.jpg';
// import imagen3 from '../componets/imagenes/Intro3.jpg';


function Introduccion() {
  return (
    <div>
      <Carrucel />
      <Link to="/nombre-usuario" className="btn btn-secondary ubic ">Saltar</Link>

      

       {/*
        Imagenes={[

        {
          Img: imagen1,
          NomImg: "imagen_1",
          Mensaje: ""
        },
        {
          Img: imagen2,
          NomImg: "imagen_2",
          Mensaje: ""
        },
        {
          Img: imagen3,
          NomImg: "imagen:_3",
          Mensaje: ""
        }]}
        */}
    </div>
  );
}

export default Introduccion;

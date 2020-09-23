import React from 'react';
import Carrucel from '../componets/Introduccion/Carrucel';
import Boton from '../componets/Introduccion/Boton';
import estilos from '../Styles/Styles_intro.css';
// import imagen1 from '../componets/imagenes/Intro1.jpg';
// import imagen2 from '../componets/imagenes/Intro2.jpg';
// import imagen3 from '../componets/imagenes/Intro3.jpg';

function Introduccion() {
  return (
    <div>
      <Carrucel

//  a       Imagenes={[

//           {
//             Img: imagen1,
//             NomImg: "imagen_1",
//             Mensaje: ""
//           },
//           {
//             Img: imagen2,
//             NomImg: "imagen_2",
//             Mensaje: ""
//           },
//           {
//             Img: imagen3,
//             NomImg: "imagen:_3",
//             Mensaje: ""
//           }]} 
        />

      <Boton />

    </div>
  );
}

export default Introduccion;

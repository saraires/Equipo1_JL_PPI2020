import React from 'react';
import './styles/styles.css';

import Home from '../components/PreMenu';
import Icon_E from '../components/PreEmpresas';
import imag1 from '../images/Frisby.png';
import imag2 from '../images/Todoenartes.png';
import imag3 from '../images/Metro.png';
import imag4 from '../images/Exito.png';
import imag5 from '../images/Presto.jpg';
import imag6 from '../images/Encicla.png';
import MenuGlobal from '../components/MenuGlobal';

function Noticias() {
  return (<>


    <Home />
    <div className="container shadow-lg p-3 mb-5 bg-white rounded pb-5">
      <br />

      <Icon_E Empresas={[

        {
          img: imag1,
          titulo: 'Frisby'
        },
        {
          img: imag2,
          titulo: 'Todo en artes'
        },

        {
          img: imag3,
          titulo: 'Metro de Medellín'
        },


      ]} />
      <Icon_E Empresas={[
        {
          img: imag4,
          titulo: 'Éxito'
        },
        {
          img: imag5,
          titulo: 'Presto'
        },
        {
          img: imag6,
          titulo: 'Encicla'
        }


      ]} />
      <MenuGlobal/>

    </div>
  </>);
}

export default Noticias;
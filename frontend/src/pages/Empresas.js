import React from 'react';
import Home from '../components/Home';
import Icon_E from '../components/Ico_empresas';
import estilos from '../Styles/Styles_Empre.css';
import imag1 from '../images/Frisby.png';
import imag2 from '../images/Todoenartes_2 .png';
import imag3 from '../images/Metro.png';
import imag4 from '../images/Exito.png';
import imag5 from '../images/Presto.jpg';
import imag6 from '../images/Encicla.png';
function Noticias() {
  return (<>


    <Home />
    <div className="container shadow-lg p-3 mb-5 bg-white rounded">
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

    </div>
  </>);
}

export default Noticias;
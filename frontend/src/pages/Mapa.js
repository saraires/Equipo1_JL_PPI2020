import React from 'react';
import Home from '../components/MenuGlobal';
import Mapa from '../components/Mapa';
import Buscador from '../components/Buscador';


function mapa() {
  return (<>
    <div className="container">

    <Buscador />
      <Mapa />
      <Home />
    </div>

  </>);
}

export default mapa;
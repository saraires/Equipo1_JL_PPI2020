import React from 'react';
import Home from '../components/MenuGlobal';
import Mapa from '../components/Mapa';
import Buscador from '../components/Buscador';


function PageMapa() {

  return (<>
    <div className="container">
      <Mapa />
      <Home />
    </div>

  </>);
}



export default PageMapa;

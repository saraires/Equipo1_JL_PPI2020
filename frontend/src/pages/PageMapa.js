import React from 'react';
import Home from '../components/MenuGlobal';
import Mapa from '../components/Mapa';
import Buscador from '../components/Buscador';


function PageMapa() {

  return (<>
    <div className="container">
      <Buscador/>
      <Mapa />
      <Home />
      <p></p>
    </div>
  </>);
}



export default PageMapa;

import React, { Component } from 'react';
import Home from '../components/MenuGlobal';
import Mapa from '../components/Mapa';
import credential from './MapaPruebaCredential';
import Buscador from '../components/Buscador';

{/*const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credential.mapsKey}`*/}

class PageMapa extends Component {
  constructor(){
    super();
    this.state = {
      name: 'React'
    };
  }

  render(){
    return(
      <div className="container">
        <Buscador/>
        <Mapa/>
        {/*<MapaPrueba
          googleMapURL= {mapURL}
          containerElement={<div style={{height: "400px"}} />}
          mapElement= {<div style={{height:'100%'}}/>}
          loadingElement= {<p>Cargando</p>}
        />*/}
        <Home />
      </div>
    )
  }
}

export default PageMapa;

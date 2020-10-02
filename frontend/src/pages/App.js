import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from './Introduccion'
import Inicio_Entrar from '../components/Inicio_Entrar'
import Inicio_Registrate from '../components/Inicio_Registrate'
import Inicio_Google from '../components/Inicio_Google';
import Nacimiento from './Nacimiento';
import Inicio_NombreUser from '../components/Inicio_NombreUser';
import Inicio from './Inicio';
import Formulario from '../components/Formulario';
import CuentaUsuario from './CuentaUsuario';
import Kms_Semanales from './Kms_Semanales';






function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*Intro*/}
          <Route exact path="/" component={Intro}/>

          {/*Proceso de ingreso, cuenta, google, facebook*/}
          <Route exact path="/entrar" component={Inicio_Entrar}/>
          <Route exact path="/registro" component={Inicio_Registrate}/>
          <Route exact path="/inicio" component={Inicio}/>
          <Route exact path="/iniciogoogle" component={Inicio_Google}/>
          <Route exact path="/fecha" component={Nacimiento}/>
          <Route exact path="/nombre-usuario" component={Inicio_NombreUser}/>

          {/*Inicio y contacto*/}
          <Route exact path="/pagina-principal" component={Inicio}/>
          <Route exact path="/contactanos" component={Formulario}/>

          {/*Cuenta de usuario*/}
          <Route exact path="/cuenta-usuario" component={CuentaUsuario}/>

          {/*Premios y lo demás*/}
          <Route exact path="/premios" component={Premios}/>

          {/*Kms semanales y ranking*/}
          <Route exact path="/record" component={Kms_Semanales}/>

          {/*Mapa*/}
          <Route exact path="/mapa" component={Mapa}/>
        </Switch>
      </Router>
    </div >
  );
}

export default App;

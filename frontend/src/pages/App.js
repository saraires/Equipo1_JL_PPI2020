import React from 'react';
import Intro from './Introduccion'
import Inicio_Entrar from '../components/Inicio_Entrar'
import Inicio_Google from '../components/Inicio_Google';
import Nacimiento from './Nacimiento';
import Inicio_NombreUser from '../components/Inicio_NombreUser';
import Inicio from './Inicio';
import Formulario from '../components/Formulario';
import CuentaUsuario from './CuentaUsuario';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Intro}/>
          <Route exact path="/entrar" component={Inicio_Entrar}/>
          <Route exact path="/inicio" component={Inicio}/>
          <Route exact path="/iniciogoogle" component={Inicio_Google}/>
          <Route exact path="/fecha" component={Nacimiento}/>
          <Route exact path="/nombre-usuario" component={Inicio_NombreUser}/>
          <Route exact path="/pagina-principal" component={Inicio}/>
          <Route exact path="/contactanos" component={Formulario}/>
          <Route exact path="/cuenta-usuario" component={CuentaUsuario}/>
        </Switch>
      </Router>
    </div >
  );
}

export default App;

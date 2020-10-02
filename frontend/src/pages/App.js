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
import Mapa from './PageMapa';
import Premios from '../components/Premios';
import PreCarrito from '../components/PreCarrito';
import PreHistorial from '../components/PreHistorial';
import Empresas from './Empresas';
import RecordRanking from '../components/RecordRanking';
import Inicio_Sesion from '../components/Inicio_Sesion';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/*Intro*/}
          <Route exact path="/" component={Intro} />

          {/*Proceso de ingreso, cuenta, google, facebook*/}
          <Route exact path="/inicio-sesion" component={Inicio_Sesion}/>
          <Route exact path="/entrar" component={Inicio_Entrar} />
          <Route exact path="/registro" component={Inicio_Registrate} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/inicio-google" component={Inicio_Google} />
          <Route exact path="/inicio-facebook" component={Inicio_Google} />
          <Route exact path="/fecha" component={Nacimiento} />
          <Route exact path="/nombre-usuario" component={Inicio_NombreUser} />

          {/*Inicio y contacto*/}
          <Route exact path="/pagina-principal" component={Inicio} />
          <Route exact path="/contactanos" component={Formulario} />

          {/*Cuenta de usuario*/}
          <Route exact path="/perfil" component={CuentaUsuario} />

          {/*Premios y lo demás*/}
          <Route exact path="/premios" component={Premios} />
          <Route exact path="/carrito" component={PreCarrito} />
          <Route exact path="/historial" component={PreHistorial} />
          <Route exact path="/convenios" component={Empresas} />

          {/*Kms semanales y ranking*/}
          <Route exact path="/record" component={Kms_Semanales} />
          <Route exact path="/ranking" component={RecordRanking} />

          {/*Mapa*/}
          <Route exact path="/mapa" component={Mapa} />

        </Switch>
      </Router>
    </div >
  );
}

export default App;
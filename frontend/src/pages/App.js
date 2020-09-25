import React from 'react';
import Inicio_sesion from './Inicio_sesion';
import Inicio_sesion2 from './Inicio_sesion2';
import Entrar from './Entrar';
import Registrate from './Registrate';
import Nombre_usuario from './Nombre_usuario';
import Nacimiento from './Nacimiento';
import Kms_Semanales from "./Kms_Semanales";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Ranking from '../components/Ranking';
import Carrito from '../components/Carrito';


function App() {
  return (
    <div className="App">
      <Inicio_sesion />
      <br />
      <Inicio_sesion2 />
      <br />
      <Entrar />
      <br />
      <Registrate />
      <br />
      <Nacimiento />
      <br />
      <Nombre_usuario />
      <br />
      <Carrito />
      <br />
      <Ranking />
      <br />
      <Kms_Semanales />
      <br />

      {/*<BrowserRouter>
        <div>
          <Link to="/google">
            <button>Google</button>
          </Link>
        </div>
        <Switch>
          <Route path="/google">
            <Inicio_sesion2 />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div >
  );
}

export default App;

import React from 'react';
import Inicio_sesion from './Inicio_sesion';
import Entrar from './Entrar';
import Registrate from './Registrate';
import Nombre_usuario from './Nombre_usuario';
import Inicio_sesion2 from './Inicio_sesion2';
import Nacimiento from './Nacimiento';
import Kms_Semanales from "./Kms_Semanales";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Semana1 from '../components/Semana1';
import Semana2 from '../components/Semana2';
import Mapa from '../components/Mapa';




import Ranking from '../components/Ranking';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
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
      </BrowserRouter>
    </div >
  );
}

export default App;

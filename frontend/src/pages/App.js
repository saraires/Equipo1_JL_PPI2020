import React from 'react';
import Mapa2 from '../components/Mapa';
import Semana1 from '../components/Semana1';
import Semana2 from '../components/Semana1';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nacimiento from '../components/Nacimiento1';


function App() {
  return (
    <div className="App">
      <Nacimiento/>
      <br />

      <Router>
        <div>
          <Link to="/record">
            <button>Kms</button>
          </Link>
        </div>
        <Switch>
          <Route path="/record">
          <Semana1/>
          <Semana2/>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;

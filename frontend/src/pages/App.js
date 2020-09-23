import React from 'react';
import InfoUser from '../components/CuentaUser';
import Config from '../components/Config';
import Historial from '../components/Historial';
import MenuPremios from '../components/MenuPremios';
import styles from '../components/styles.css';


function App() {
  return (
    <div className="App">
      <MenuPremios/>
      <Historial/>
      </div>
  );
}

export default App;

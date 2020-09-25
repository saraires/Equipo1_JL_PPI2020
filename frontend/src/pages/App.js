import React from 'react';
import InfoUser from '../components/CuentaUser';
import Config from '../components/Config';
import Historial from '../components/Historial';
import MenuPremios from '../components/MenuPremios';
import styles from '../components/styles.css';
import Formulario from './Pages/Formulario';
import Inicio_sesion from './Pages/Inicio_sesion';
import Premios from './Pages/Premios';
import Entrar from './Pages/Entrar';
import Registrate from './Pages/Registrate';

function App() {
  return (
    <div className="App">
      <MenuPremios />
      <Historial />
    </div>
  );
}

export default App;

import React from 'react';
import Historial from '../components/Historial';
import MenuGlobal from '../components/MenuGlobal';
import MenuPremios from '../components/MenuPremios';


export default function Historial() {
    return (
        <div>
            <MenuPremios />
            <Historial />
            <MenuGlobal/>
        </div>
    );
}
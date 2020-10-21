import React from 'react';

import Historial from '../components/PreHistorial';
import MenuGlobal from '../components/MenuGlobal';
import MenuPremios from '../components/PreMenu';


export default function PHistorial() {
    return (
        <div>
            <MenuPremios />
            <Historial />
            <MenuGlobal/>
        </div>
    );
}
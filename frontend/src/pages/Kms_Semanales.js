import React from 'react';
import MenuGlobal from '../components/MenuGlobal';
import Record1 from '../components/Record1';
import Record2 from '../components/Record2';


export default function Kms_Semanales() {
    return (
        <div className = "container">
            <Record1 />
            <Record2 />
            <MenuGlobal/>
        </div>
    );
}
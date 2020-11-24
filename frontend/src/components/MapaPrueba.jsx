import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const MapaPrueba = (props) => {
    return (
        <GoogleMap defaultZoom={10}
        defaultCenter={{lat: 6.248747892199225, lng: -75.56000343054609}} />
    )
}

export default withScriptjs(
    withGoogleMap(
        MapaPrueba
    )
)
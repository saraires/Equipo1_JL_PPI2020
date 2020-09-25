import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = (props) => {
    return (
        <GoogleMap defaultZoom={10}
            defaultCenter={{ lat: 23.752538, lng: -99.141926, }} />
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
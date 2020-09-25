import React, { Component } from 'react'
import banner from '../images/imagen-Bicipoint.png';
class imagen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <img src={banner} class="img-fluid " alt="Responsive image"></img>
        </>)
    }
}
export default imagen;
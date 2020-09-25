import React, { Component } from "react";

class Boton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <button type="button" className="btn btn-secondary float-right ubic ">
                    Contactanos
        </button>
            </>
        );
    }
}
export default Boton;

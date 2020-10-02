import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<>
            <form action="../../form-result.php" method="post" target="_blank">

                <input type="search" name="" placeholder="Buscar" />

                    <input type="submit" value="Buscar" />

                    
            </form>
        </>)
    }
}
export default Buscador;

import React, { Component } from 'react'
import '../pages/styles/styles.css';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
                <div className="container h-100 shadow p-1">
                    <div className="d-flex justify-content-center h-70">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="¿A dónde quieres ir?" />
                            <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Buscador;

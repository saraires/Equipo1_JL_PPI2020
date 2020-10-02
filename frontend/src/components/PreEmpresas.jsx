import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class IconE extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                <div class="container order">
                    <br />
                    {this.props.Empresas.map((item, index) => {
                        return (
                            <div key={`item-IconE ${index}`} class="card Empre" style={{ width: '10rem' }}>
                                <img height="150rem" src={item.img} class="card-img-top" alt="Imagen" />
                                <div class="card-body">
                                    <center> <a href="pago.html" class="card-link text-info">{item.titulo}</a></center>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>);
    }
}
export default IconE;
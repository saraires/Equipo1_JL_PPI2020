import React, { Component } from 'react'

class IconE extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                <div className="container order pb-5">
                    <br />
                    {this.props.Empresas.map((item, index) => {
                        return (
                            <div key={`item-IconE ${index}`} className="card Empre" style={{ width: '10rem' }}>
                                <img height="150rem" src={item.img} className="card-img-top" alt="Imagen" />
                                <div className="card-body">
                                    <center> <a href="pago.html" className="card-link text-info">{item.titulo}</a></center>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>);
    }
}
export default IconE;
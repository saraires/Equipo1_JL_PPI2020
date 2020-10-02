import React from 'react';
import { Link } from 'react-router-dom';

import Celeste from '../images/Celeste.jpg';
import MenuGlobal from './MenuGlobal';



export default function Ranking() {
    return (
        <div>
            <div className="container">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-3 mb-5" style={{ background: "#FFBA5C" }}>
                        <a className="navbar-brand text-center texto font-weight-bolder" href="#">Ranking Semanal</a>
                    </nav>
                </div>
                
                <div align="center"><Link to ="/ranking"><img src={Celeste} alt="foto" className="rounded-circle" width="120px"></img></Link></div>
                <h1 align="center">Celeste  Tamayo</h1>

                <table className="table table-striped">
                    <thead style={{ backgroundColor: "#FFBA5C" }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Km recorridos</th>
                            <th scope="col">N° de terras</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Celeste</td>
                            <td>2750 km</td>
                            <td>900 T</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>ValeDuess</td>
                            <td>2600 km</td>
                            <td>880 T</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Sarai R</td>
                            <td>2570 km</td>
                            <td>850 T</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>AlejoLG</td>
                            <td>2540 km</td>
                            <td>845 T</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Mármol</td>
                            <td>2470 km</td>
                            <td>830 T</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Izzy</td>
                            <td>2432 km</td>
                            <td>815 T</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>MMelo</td>
                            <td>2250 km</td>
                            <td>720 T</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Sophia</td>
                            <td>2085 km</td>
                            <td>650 T</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Lucas</td>
                            <td>1976 km</td>
                            <td>535 T</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Emma</td>
                            <td>1750 km</td>
                            <td>490 T</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <MenuGlobal/>
        </div>
    );
}







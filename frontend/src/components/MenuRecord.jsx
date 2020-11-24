import React from 'react';
import { Link } from 'react-router-dom';
import Rank from '../images/Rank.png';

export default function menurecord() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-4 " style={{ background: "#FFBA5C" }}>
                <center><h1 className="navbar-brand text-center font-weight-bolder">Record Semanal</h1></center>
                <Link to="/ranking">
                    <img src={Rank} className="float-right" alt="" style={{ width: "3rem" }} />
                </Link>
            </nav>
        </div>
    )
}
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to = "/">Dog Finder</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.props.dogs.map(d=>{ return (
                            <li className="nav-item active">
                            <NavLink className="nav-link" to = {"/"+d.name}>{d.name} <span className="sr-only">(current)</span></NavLink>
                            </li>)
                        })}
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

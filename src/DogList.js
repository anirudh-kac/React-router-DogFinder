import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./Doglist.css"

export default class DogList extends Component {
    render() {
        return (
            <div class = "Doglist">
                <div className = "container">
                    <div className = "row">
                        {
                            this.props.dogs.map(d=>{
                                return (
                                    <div className = "Doglist-dog col-xs-12 col-sm-12 col-md-6 col-lg-4" >
                                        <NavLink className="nav-link" to = {"/"+d.name} >
                                        <img className = "Doglist-img" src = {d.src}  alt = {d.name}></img>
                                        </NavLink>
                                        <h3>{d.name}</h3>
                                     </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

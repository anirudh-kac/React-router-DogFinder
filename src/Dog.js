import React, { Component } from 'react'
import "./Dog.css"
export default class Dog extends Component {
    render() {
        return (
            <div className = "Dog">
                <div className="card" style={{width: "18rem"}}>
                <img class="card-img-top" src= {this.props.dog.src} alt= {this.props.dog.name} />
                <div class="card-body">
                    <h5 class="card-title">{this.props.dog.name + "years old"}</h5>
                    <p class="card-text">{this.props.dog.age}</p>
                </div>
                <ul class="list-group list-group-flush">
                    {
                        this.props.dog.facts.map(fact=> (
                            <li class="list-group-item">{fact}</li>
                        ))
                    }
                    
                </ul>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Switch , Route} from "react-router-dom";
import whiskey from "./imgs/whiskey.jpg"
import hazel from "./imgs/hazel.jpg"
import tubby from "./imgs/tubby.jpg"
import Navbar from './Navbar'
import DogList from './DogList'
import Dog from "./Dog"

import "./Dogfinder.css"


export default class DogFinder extends Component {
    static defaultProps = {
        dogs: [
            {
              name: "Whiskey",
              age: 5,
              src: whiskey,
              facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
              ]
            },
            {
              name: "Hazel",
              age: 3,
              src: hazel,
              facts: [
                "Hazel has soooo much energy!",
                "Hazel is highly intelligent.",
                "Hazel loves people more than dogs."
              ]
            },
            {
              name: "Tubby",
              age: 4,
              src: tubby,
              facts: [
                "Tubby is not the brightest dog",
                "Tubby does not like walks or exercise.",
                "Tubby loves eating food."
              ]
            }
          ]
    }
    render() {
        return (
            <div className = "DogFinder">
                <Navbar dogs = {this.props.dogs}/>
                <Switch>
                  <Route exact path = "/" render = {()=> <DogList dogs = {this.props.dogs}/>} />
                  {
                    this.props.dogs.map(d=>{
                      return <Route path = {"/"+d.name} render = {()=> <Dog dog = {d}/>}/>
                    })
                  }
                </Switch>
                
                
            </div>
        )
    }
}

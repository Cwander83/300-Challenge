import React from "react";
import Marquee from "react-smooth-marquee";
import "./style.css"
//import axios from "axios";

export default class Ticker extends React.Component {
    render(){
    return ( 
        <Marquee><div><h1>Content goes here</h1></div> </Marquee>
    )
  }
}


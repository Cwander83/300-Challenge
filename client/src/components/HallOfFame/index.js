import React from "react";
import "./style.css";
import {Jumbotron} from "react-bootstrap";

// The ...props means, spread all of the passed props onto this element That way
// we don't have to define them all individually
const HallOfFame = ({props, children}) => (
    <Jumbotron style={{
        width: 100 + "%"
    }}></Jumbotron>
);

export default HallOfFame;

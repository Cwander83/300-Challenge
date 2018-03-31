import React from 'react';
import {Jumbotron} from "react-bootstrap";
import "./style.css";
import StopWatch from "../StopWatch";

const Home = (props) => {

  return (

    <Jumbotron>
      <StopWatch {...props}/>
      <h1>hello world</h1>
    </Jumbotron>

  );
}

export default Home;
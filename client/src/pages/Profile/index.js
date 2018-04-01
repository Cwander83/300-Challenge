import React from 'react';
import {Jumbotron} from "react-bootstrap";
import "./style.css";
import StopWatch from "../../components/StopWatch";

import Profilecomponent from "../../components/Profilecomponent";

const Profile = (props) => {

  return (

    <Jumbotron>
      
      <Profilecomponent {...props}/>
      <StopWatch {...props}/>
      <h1>hello world</h1>
    </Jumbotron>

  );
}

export default Profile;
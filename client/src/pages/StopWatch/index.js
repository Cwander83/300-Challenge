import React from "react";
import "./style.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {Jumbotron} from "react-bootstrap";
import HallofFame from "../../components/HallofFame";

import StopWatch from "../../components/StopWatch";

export default class Stopwatch extends React.Component {

render(){
    return (
        <Jumbotron className="jumboHome">
    <div>
       <ScrollAnimation animateIn='fadeIn' delay={50} animateOut='fadeOut'>
          <h1 className="stopwatchH1">
            STOPWATCH
          </h1>

        </ScrollAnimation>
    <StopWatch auth = {this.props.auth} />
    <Jumbotron className="jumboHome jumboHoF">
        <HallofFame/>
      </Jumbotron>
    </div>
    </Jumbotron>
)
}


}
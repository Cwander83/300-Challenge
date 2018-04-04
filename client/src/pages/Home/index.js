import React from 'react';
import {Jumbotron} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";

const Home = (props) => {

  return (
<div>
    <Jumbotron className="jumboHome">
      <ScrollAnimation delay={200}animateIn='fadeIn' animateOut='fadeOut'>
        <h1>
          Welcome To
        </h1>

      </ScrollAnimation>
      <ScrollAnimation delay={300} animateIn='bounceInLeft' animateOut='bounceOutLeft'>
        <h1>
          300 Challenge

        </h1>
      </ScrollAnimation>
      <br/>
      <Jumbotron className="jumboHome">
      <ScrollAnimation delay={300} animateIn='bounceInRight' animateOut='bounceOutLeft'>
        <h3>
          Now you're all signed in lets start to go over why you're here!
        </h3>
        <p>the profile is where you will find all your time records
          and be able to update your email if you need to.</p>
          <p>the videos page is a small collection of videos collected from 
            youtube. These videos will help you with any part of the workout 
            you're not really sure how to do.</p>
      </ScrollAnimation>
</Jumbotron>
    </Jumbotron>
</div>
  );
}

export default Home;
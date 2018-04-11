import React from 'react';
import {Jumbotron, Image} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import transformation from "../../components/images/300transformation.jpg";
import "./style.css";

const Home = (props) => {

  return (
    <div className="homeDiv">
      <Jumbotron className="jumboHome">
        <ScrollAnimation
          className="homeH1"
          animateIn='fadeIn'
          delay={50}
          animateOut='fadeOut'>
          <h1>
            THIS IS THE
          </h1>

        </ScrollAnimation>
        <ScrollAnimation
          className="homeH1"
          delay={50}
          animateIn='bounceInLeft'
          animateOut='bounceOutLeft'>
          <h1>
            300 CHALLENGE

          </h1>
        </ScrollAnimation>
        <br/>
        <Jumbotron className="jumboHome">
          <ScrollAnimation
            delay={50}
            animateIn='bounceInRight'
            animateOut='bounceOutLeft'>
            <div className="homeDesc">
              <h2 className="homeH2">
                Now you're all signed in lets start to go over why you're here!
              </h2>

              <h3 className="homeH3">Workout Description</h3>
              <p>This is the original workout used the the cast of the movie
                <strong>300</strong>, created by fitness trainer
                <strong>Mark Twight</strong>. It is an intense training system and is not meant
                to be performed every day. The 300 Spartan workout is best approached like a
                fullbody training system, using it 3 times per week on alternating days.</p>
              <ul>
                <li>
                  <strong>Monday</strong>
                  - 300 Spartan Workout
                </li>
                <li>
                  <strong>Tuesday</strong>
                  - Off day or cardio
                </li>
                <li>
                  <strong>Wednesday</strong>
                  - 300 Spartan Workout
                </li>
                <li>
                  <strong>Thursday</strong>
                  - Off day

                </li>
                <li>
                  <strong>Friday</strong>
                  - 300 Spartan Workout
                </li>
                <li>
                  <strong>Saturday</strong>
                  - Off day or cardio
                </li>
                <li>
                  <strong>Sunday</strong>
                  - Off</li>
              </ul>
              <h3 className="homeH3">
                300 Spartan Workout Notes</h3>
              <p>
                <strong>Rest Periods</strong>. Do not rest between exercises and movements. If
                you can't complete the required number of reps for an exercise you may rest for
                a brief period until you are able to continue.</p>
              <p>
                <strong>Training Level</strong>. This is an intense workout system and should
                not be attempted by beginners. Make sure you take time to learn
                <em>proper</em>
                deadlift form and build up your overall conditioning before attempting the 300
                Spartan workout. Jumping into any intense workout system without a solid level
                of conditioning and exercise form puts you at risk for injury.</p>
              <p>
                <strong>Box Jumps</strong>. If you do not have access to a box, try using a
                stable bench or or stacking several aerobic steps.</p>
              <p>
                <strong>Floor Wipers</strong>. Lie on a bench press (or the floor). Unrack 135
                pounds as if you were about to bench press, but instead of performing reps you
                hold the weight at arms length away from the body. Next, begin to perform leg
                raises, the first rep lifting the legs up and slightly towards the left and the
                next rep up and slightly towards the right.</p>
              <p>
                <strong>Diet</strong>. It goes without saying that the 300 Spartan workout
                should be combined with a sensible eating plan based on goals and current
                bodyfat levels. Some of the cast members lost up to 40 pounds of fat while using
                this routine, rapidly transforming from flabby to ripped.</p>
              <br/>
              <Image src={transformation} responsive/>
              <p>This Info was collected from Muscle and Strength.com
                <a href="https://www.muscleandstrength.com/workouts/300-spartan-workout">here for full story</a>
              </p>

            </div>

          </ScrollAnimation>
        </Jumbotron>
      </Jumbotron>

    </div>
  )
}

export default Home;
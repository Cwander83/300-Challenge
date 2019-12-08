import React from "react";
import "./style.css";
import moment from "moment";
//import Moment from "react-moment";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import stopwatchAPI from "../../utils/stopwatchAPI";
import StopWatchChallenge from "../../components/StopWatchChallenge";
import ChallengeTitle from "../../components/ChallengeTitle";
import HallofFame from "../../components/HallofFame";
import WorkoutInfo from "../../components/WorkoutInfo";
import { Jumbotron, Button, Grid, Row, Col } from "react-bootstrap";

export default class Challenge extends React.Component {
   state = {
      challengeStart: "",
      challengeEnd: "",
      date: "",
      challengeregistered: false
   };
   
   componentDidMount() {
      this.setState({
         challengeStart: "04 14 18, 9:30:05 am",
         challengeEnd: "04 14 18, 9:32:05 am",
         challengeregistered: this.state.challengeregistered,
         date: Date.now()
      });
   }

   registerDb = ({ userId }) => {
      const data = {
         challengeregistered: true
      };
      stopwatchAPI
         .updateUser(userId, data)
         .then(res => this.setState({ challengeregistered: true }));
   };

   render() {
      return (
         <div>
            <Jumbotron className="jumboHome">
               <div>
                  {moment(this.state.challengeStart).format() <=
                  moment(this.state.date).format() ? (
                     <ChallengeTitle />
                  ) : !this.state.challengeregistered ||
                  !this.props.auth.challengeregistered ? (
                     <ScrollAnimation
                        animateIn="fadeInLeft"
                        delay={50}
                        animateOut="fadeOutDown"
                     >
                        <Jumbotron className="jumboHome">
                           <h1 className="welcomeChalH1">
                              REGISTRATION FOR CHALLENGE
                           </h1>
                           <h3>REGISTRATION ENDS 04 14 18, 9:30:05 pm</h3>
                           <Button
                              className="registerBtn"
                              onClick={() => this.registerDb(this.props.auth)}
                           >
                              Register
                           </Button>
                        </Jumbotron>
                     </ScrollAnimation>
                  ) : (
                     <ScrollAnimation
                        animateIn="fadeInRight"
                        delay={50}
                        animateOut="fadeOutDown"
                     >
                        <Jumbotron className="jumboHome">
                           <h1>CONGRADS ON JOINING</h1>
                           <h1>THE 300 CHALLENGE!</h1>
                           <h3>THE CONTEST BEGINS</h3>
                           <h3 className="registerDateH3">
                              04 07 18, 7:58:05 pm
                           </h3>
                        </Jumbotron>
                     </ScrollAnimation>
                  )}

                  {moment(this.state.challengeEnd).format() >=
                  moment(this.state.date).format() ? (
                     <Grid>
                        <Row className="show-grid">
                           <Col xs={12} md={6}>
                              <ScrollAnimation
                                 animateIn="fadeInRight"
                                 delay={50}
                                 animateOut="fadeOutDown"
                              >
                                 <StopWatchChallenge auth={this.props.auth} />
                              </ScrollAnimation>
                           </Col>
                           <Col xs={12} md={6}>
                              <ScrollAnimation
                                 animateIn="fadeInLeft"
                                 delay={50}
                                 animateOut="fadeOutDown"
                              >
                                 <WorkoutInfo />
                              </ScrollAnimation>
                           </Col>
                        </Row>
                     </Grid>
                  ) : (
                     <Jumbotron className="jumboHome">
                        <HallofFame />
                     </Jumbotron>
                  )}
               </div>
            </Jumbotron>
         </div>
      );
   }
}

import React from "react";
import "./style.css";
import moment from "moment";
//import Moment from "react-moment";
import stopwatchAPI from "../../utils/stopwatchAPI";
import StopWatchChallenge from "../../components/StopWatchChallenge";
import ChallengeTitle from "../../components/ChallengeTitle";
import HallofFame from "../../components/HallofFame"
import WorkoutInfo from "../../components/WorkoutInfo";
import {Jumbotron, Button, Grid, Row, Col} from "react-bootstrap";

export default class Challenge extends React.Component {

    state = {
        challengeStart: "",
        challengeEnd: "",
        date: "",
        challengeregistered: false
    }
    componentWillMount() {
        this.setState({
            challengeStart: "04 13 18, 1:43:05 pm",
            challengeEnd: "04 13 18, 1:44:05 pm",
            date: Date.now(),
            challengeregistered: this.state.challengeregistered
        })

    }
    componentDidMount() {
        this.setState({
            challengeStart: "04 13 18, 1:43:05 pm",
            challengeEnd: "04 13 18, 1:44:05 pm",
            challengeregistered: this.state.challengeregistered,
            date: Date.now()
        })

    }

    registerDb = ({userId}) => {

        const data = {
            challengeregistered: true
        };
        stopwatchAPI
            .updateUser(userId, data)
            .then(res => this.setState({challengeregistered: true}));

    }

    render() {

        return (
            <div>
                <Jumbotron className="jumboHome">
                    <div>

                        {moment(this.state.challengeStart).format() <= moment(this.state.date).format()
                            ? <ChallengeTitle/>

                            : !this.state.challengeregistered || !this.props.auth.challengeregistered
                                ? <Jumbotron className="jumboHome">
                                        <h1>REGISTRATION FOR CHALLENGE</h1>
                                        <h3>REGISTRATION ENDS 04 07 18, 7:58:05 pm</h3>
                                        <Button
                                            className="registerBtn"
                                            onClick={() => this.registerDb(this.props.auth)}>Register</Button>
                                    </Jumbotron>
                                : <Jumbotron className="jumboHome">
                                    <h1>CONGRADS ON JOINING</h1>
                                    <h1>
                                        THE 300 CHALLENGE!</h1>
                                    <h3>THE CONTEST BEGINS</h3>
                                    <h3 className="registerDateH3">04 07 18, 7:58:05 pm</h3>
                                </Jumbotron>}

                        {moment(this.state.challengeEnd).format() >= moment(this.state.date).format()
                            ? <Grid>
                                    <Row className="show-grid">
                                        <Col xs={12} md={6}>

                                            <StopWatchChallenge auth={this.props.auth}/>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <WorkoutInfo/>
                                        </Col>
                                    </Row>
                                </Grid>
                            : <HallofFame />
}
                    </div>
                </Jumbotron>
            </div>
        )
    }

}

import React from "react";
import "./style.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap";
import Fame from "../../components/Fame";
import StopWatch from "../../components/StopWatch";
import WorkoutInfo from "../../components/WorkoutInfo";

export default class Stopwatch extends React.Component {

    render() {
        return (
            <Jumbotron className="jumboHome">
                <div>
                    <ScrollAnimation
                        className="stopwatchH1"
                        animateIn='fadeIn'
                        delay={50}
                        animateOut='fadeOut'>
                        <h1>
                            STOPWATCH
                        </h1>

                    </ScrollAnimation>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>

                                <StopWatch auth={this.props.auth}/>
                            </Col>
                            <Col xs={12} md={6}>
                                    <WorkoutInfo />
                            </Col>
                        </Row>
                    </Grid>
                    <Jumbotron className="jumboHome">

                        <Fame/>
                    </Jumbotron>
                </div>
            </Jumbotron>
        )
    }

}
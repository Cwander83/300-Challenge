import React from "react";
import "./style.css";
import {Button, Jumbotron} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatchAPI";

export default class Register extends React.Component {
    state = {
        challengeregistered: false,
        isRegistered: false
    }
    componentDidMount() {
        stopwatchAPI
            .findUserRecords(this.props.auth.userId)
            .then(res => this.setState({}))
            console.log(`regiester child componentdidmount`);
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
                {!this.isRegistered
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
            </div>

        )
    }
}
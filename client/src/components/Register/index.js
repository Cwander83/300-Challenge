import React from "react";
import "./style.css";
import {Button, Jumbotron} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatchAPI";

export default class Register extends React.Component {
    state = {
        challengeregistered: true
    }
    refreshPage(){
        window.location.reload();
    }
    registerDb = ({userId}) => {

        const data = {
            challengeregistered: true
        };
        stopwatchAPI.updateUser(userId, data);
        this.refreshPage()

    }

    render() {

        return (
            <div>
                {this.props.auth.challengeregistered === true && this.props.auth.challengeregistered
                    ? <Jumbotron className="jumboHome">
                            <h1>CONGRADS ON JOINING</h1>
                            <h1>
                                THE 300 CHALLENGE!</h1>
                            <h3>THE CONTEST BEGINS</h3>
                            <h3 className="registerDateH3">04 07 18, 7:58:05 pm</h3>
                        </Jumbotron>
                    : <Jumbotron className="jumboHome">
                        <h1>REGISTRATION FOR CHALLENGE</h1>
                        <h3>REGISTRATION ENDS 04 07 18, 7:58:05 pm</h3>
                        <Button
                            className="registerBtn"
                            onClick={() => this.registerDb(this.props.auth)}>Register</Button>
                    </Jumbotron>}
            </div>

        )
    }
}
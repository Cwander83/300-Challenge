import React from "react";
import {Button} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatchAPI";

export default class Register extends React.Component {
    state = {
        challengeregistered: true
    }

    registerDb = ({userId}) => {

        const data = {
            challengeregistered: true
        };
        stopwatchAPI.updateUser(userId, data)

    }

    render() {

        return (
            <div>
                <h1>THE 300 CHALLENGE</h1>
                <Button onClick={() => this.registerDb(this.props.auth)}>Register</Button>
            </div>
        )
    }
}
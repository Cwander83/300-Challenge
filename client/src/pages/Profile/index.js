import React from "react";
import {Jumbotron} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatchAPI";

export default class Profile extends React.Component {
    state = {

        times: null,
        recoredtime: "",
        date: "",
        challenge: false
    }

    componentDidMount() {
        this.findAllUserRecords(this.props.auth.userId);
    }

    findAllUserRecords = (userId) => {

        console.log(`userId findUserRecords: ${userId}`);
        stopwatchAPI
            .populateUser(userId)
            .then(res => {

                return this.setState({times: res.data.times, recordedtime: "", date: ""})
            })
            .catch(err => console.log(err));

    }

    renderTimes = () => {
        return this.state.times && this
            .state
            .times
            .map(time => (
                <ul>
                    <li>_id={time._id}</li>
                    <li>key={time._id}</li>
                    <li>recordedtime={time.recordedtime}</li>
                    <li>date={time.date}</li>
                </ul>

            ))

    }
    render() {
   
        return (

            <div>
                <Jumbotron className="profileJumbotron">

                    <h1>Welcome back, {this.props.auth.firstname}</h1>

                    <h2>Username</h2>
                    <h3>{this.props.auth.username}</h3>
                    <h2>First Name</h2>
                    <h3>{this.props.auth.firstname}</h3>

                    <h2>Last Name</h2>
                    <h3>{this.props.auth.lastname}</h3>

                    <h2>Email</h2>
                    <h3>{this.props.auth.email}</h3>

                    <h2>Location</h2>
                    <h3>{this.props.auth.state}, {this.props.auth.country}</h3>
                    <div>{this.state.times && this
                            .state
                            .times
                            .map(time => (
                                <ul>
                                    <li>_id={time._id}</li>
                                    <li>key={time._id}</li>
                                    <li>recordedtime={time.recordedtime}</li>
                                    <li>date={time.date}</li>
                                </ul>

                            ))}</div>

                </Jumbotron>
            </div>
        )
    }
}
import React from "react";
import {Jumbotron} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatchAPI";
import Moment from "react-moment";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";

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

                return this.setState({
                    times: res.data.times,
                    recordedtime: "",
                    date: ""
                })
            })
            .catch(err => console.log(err));

    }
    formatSeconds = (seconds) => {
        let minutes = Math.floor(seconds / 60);
        seconds = ('0' + seconds % 60).slice(-2);

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        };

        return minutes + ":" + seconds;

    };

    render() {
console.log(this.props);
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

                                <ul key={time._id}>

                                    <li>recordedtime= {this.formatSeconds(time.recordedtime)}
                                        date:
                                        <Moment format='ll'>{time.date}</Moment><DeleteBtn id ={time._id}/></li>
                                </ul>

                            ))}</div>

                </Jumbotron>
            </div>
        )
    }
}
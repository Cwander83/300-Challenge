import React from "react";
import {Jumbotron, Table} from "react-bootstrap";
import "./style.css";
import stopwatchAPI from "../../utils/stopwatchAPI";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Moment from "react-moment";


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

        stopwatchAPI
            .populateUser(userId)
            .then(res => {

                return this.setState({times: res.data.times, recordedtime: "", date: ""})
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
    deleteRecordBtn = (id) => {
        stopwatchAPI
            .deleteRecord(id)
            .then(res => this.findAllUserRecords(this.props.auth.userId))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <Jumbotron className="jumboHome">
                <div className="container profileContainer">
                    <ScrollAnimation
                        className="profileH1"
                        animateIn='fadeIn'
                        delay={50}
                        animateOut='fadeOut'>
                        <h1>
                            PROFILE
                        </h1>
                    </ScrollAnimation>

                    <Jumbotron className="profileJumbotron">
                        <ScrollAnimation
                            delay={50}
                            animateIn='bounceInRight'
                            animateOut='bounceOutLeft'>
                            <h2 className="profileH2">Username</h2>
                            <h3>{this.props.auth.username}</h3>
                            <h2 className="profileH2">First Name</h2>
                            <h3>{this.props.auth.firstname}</h3>

                            <h2 className="profileH2">Last Name</h2>
                            <h3>{this.props.auth.lastname}</h3>

                            <h2 className="profileH2">Email</h2>
                            <h3>{this.props.auth.email}</h3>

                            <h2 className="profileH2">Location</h2>
                            <h3>{this.props.auth.state}, {this.props.auth.country}</h3>
                        </ScrollAnimation>
                        <ScrollAnimation
                            delay={50}
                            animateIn='bounceInRight'
                            animateOut='bounceOutLeft'>
                            <Jumbotron className="profileJumbotron">
                                <div className="tableBox">{this.state.times && this
                                        .state
                                        .times
                                        .map((time,i) => (

                                            <Table key={time._id}>
                                                <thead className="profileThead">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Time:</th>
                                                        <th>Recorded Date:</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="profileTbody">
                                                    <tr>
                                                        <td>{i+1}</td>
                                                        <td>{this.formatSeconds(time.recordedtime)}
                                                            (Mins:Secs)</td>

                                                        <td>
                                                            <Moment format='ll'>{time.date}</Moment>    <span className="delete-btn" onClick={() => this.deleteRecordBtn(time._id)}>✗</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        ))}</div>
                            </Jumbotron>
                        </ScrollAnimation>

                    </Jumbotron>

                </div>
            </Jumbotron>
        )
    }
}
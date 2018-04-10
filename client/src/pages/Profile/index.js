import React from "react";
import {Jumbotron, Table} from "react-bootstrap";
import "./style.css";
import stopwatchAPI from "../../utils/stopwatchAPI";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
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

    render() {
        console.log(this.props);
        return (
<Jumbotron className="jumboHome">
            <div className="container profileContainer">
                <ScrollAnimation animateIn='fadeIn' delay={50} animateOut='fadeOut'>
                    <h1 className="profileH1">
                        PROFILE
                    </h1>
                </ScrollAnimation>
                <Jumbotron className="profileJumbotron">
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
                    <Jumbotron className="profileJumbotron">
                    <div className="tableBox">{this.state.times && this
                            .state
                            .times
                            .map(time => (

                                <Table key={time._id}>
                                    <thead className="profileThead">
                                        <tr>

                                            <th>Time:</th>
                                            <th>Recorded Date:</th>
                                        </tr>
                                    </thead>
                                    <tbody className="profileTbody">
                                        <tr>

                                            <td>{this.formatSeconds(time.recordedtime)}
                                                (Mins:Secs)</td>

                                            <td>
                                                <Moment format='ll'>{time.date}</Moment><DeleteBtn id ={time._id}/></td>
                                        </tr>
                                    </tbody>
                                </Table>

                            ))}</div>
 </Jumbotron>
                </Jumbotron>
            </div>
            </Jumbotron>
        )
    }
}
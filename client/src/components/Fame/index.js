import React from "react";

import "./style.css";
import Moment from 'react-moment';

import stopwatchAPI from "../../utils/stopwatchAPI"

export default class HallofFame extends React.Component {
    state = {
        stopwatchtimes: null,
        username: "",
        recordedtime: "",
        date: ""
    };

    componentDidMount() {
        this.loadTopRecords();
    }
    loadTopRecords = () => {
        stopwatchAPI
            .findAllRecords()
            .then(res => this.setState({stopwatchtimes: res.data, username: "", recordedtime: "", date: ""}))
            .catch(err => console.log(err));
    };

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
    renderVideos = () => {
        return this
            .state
            .stopwatchtimes
            .map((times, i) => (
                <li key={times._id} className="listLi">
                    <h4>
                        #{i+1} <strong>{times.username}</strong> posted a record time of {this.formatSeconds(times.recordedtime)} on <Moment format='ll'>
                            {times.date}
                        </Moment>
                    </h4>
                </li>

            ))
    }

    render() {
        return (
            <div>
                <h1 className="fameH1">TOP CHALLENGE RECORDS ALL-TIME</h1>
                <h5>...Can you beat them??</h5>
                <div>
                    <ol className="mapper">{this.state.stopwatchtimes && this.renderVideos()}</ol>
                </div>
            </div>
        )
    }
}

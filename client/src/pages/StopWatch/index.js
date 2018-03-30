import React, {Component} from "react";
import {Button} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatch";

class Stopwatch extends Component {
    userId = this.props.auth.userId;

    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            recordTime: [],
            lastClearedIncrementer: null
        };
        this.incrementer = null;
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

    handleStartClick() {
        this.incrementer = setInterval(() => this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        }), 1000);
    };

    handleStopClick() {
        clearInterval(this.incrementer);
        this.setState({
            lastClearedIncrementer: this.incrementer,
            secondsElapsed: 0,
            recordTime: this
                .state
                .recordTime
                .concat([this.state.secondsElapsed])
        })
        this.saveRecord();
    };

    saveRecord = (userId, time) => {

        userId = this.userId
        time = this.formatSeconds(this.state.secondsElapsed)

        console.log(userId)
        console.log(this.formatSeconds(this.state.secondsElapsed));
        console.log(time);

        const newRecord = {
            _id: userId,
            recordedtime: time,
            challenge: false
        }
        stopwatchAPI.updateUserRecord(newRecord);
        
    };

    render() {
        return (
            <div className="stopwatch">
                <h1 className="stopwatch-timer">{this.formatSeconds(this.state.secondsElapsed)}</h1>
                <p>{this.props.auth.userId}</p>
                {(this.state.secondsElapsed === 0 || this.incrementer === this.state.lastClearedIncrementer
                    ? <Button
                            className="start-btn"
                            onClick={this
                            .handleStartClick
                            .bind(this)}>start</Button>
                    : <Button
                        className="stop-btn"
                        onClick={this
                        .handleStopClick
                        .bind(this)}>stop</Button>)}

                <ul className="stopwatch-times">
                    {this
                        .state
                        .recordTime
                        .map((time) => <li className="stopwatch-record">
                            <strong>Recorded Time</strong>: {this.formatSeconds(time)}</li>)
}
                </ul>
            </div>
        );
    }
}

export default Stopwatch;
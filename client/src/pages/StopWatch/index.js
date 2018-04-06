import React, {Component} from "react";
import {Button} from "react-bootstrap";
import stopwatchAPI from "../../utils/stopwatchAPI";

export default class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            recordTime: [],
            lastClearedIncrementer: 0
        };

        this.incrementer = 0;
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
        this.setState({userId: this.props.auth.userId, lastClearedIncrementer: this.incrementer, secondsElapsed: 0, recordTime: this.state.recordTime})
        
        const userId = this.props.auth.userId;
        this.saveRecord(userId);
    };

    saveRecord = (userId, time) => {

        time = this.formatSeconds(this.state.secondsElapsed);

        const newRecord = {

            recordedtime: time,
            challenge: false
        }
        stopwatchAPI.updateUserRecord(userId, newRecord);

    };

    render() {
        //console.log(this.props);
        const userId = this.props.auth.userId;
        return (
            <div className="stopwatch">
                <h1 className="stopwatch-timer">{this.formatSeconds(this.state.secondsElapsed)}</h1>
                <p>{userId}</p>
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

            </div>
        );
    }
}

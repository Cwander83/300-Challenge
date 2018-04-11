import React from "react";
import {Jumbotron} from "react-bootstrap";
import "./style.css";

const WorkoutInfo = () => (

    <Jumbotron className="jumboStop jumboInfo">
        <h2>The “Original” 300 Workout</h2>
        <ul>
            <li>Pullups - 25 reps.</li>
            <li>Barbell Deadlift with 135 lbs. - 50 reps.</li>
            <li>Pushups - 50 reps.</li>
            <li>24-inch Box Jumps - 50 reps.</li>
            <li>Floor Wipers - 50 reps.</li>
            <li>Single-Arm Clean-and-Press with 36 lbs Kettlebell - 50 reps.</li>
            <li>Pullups - 25 reps.</li>

        </ul>
    </Jumbotron>
)
export default WorkoutInfo;
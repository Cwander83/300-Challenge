import React from "react";
import {Jumbotron} from "react-bootstrap";

const Profile = (props) => (

    <div>
        <Jumbotron className="profileJumbotron">

            <h1>Welcome back, {props.auth.username}</h1>
            <h2>Email</h2>
            <h3>{props.auth.email}</h3>


            <h2>Location</h2>
            <h3>{props.auth.state}, {props.auth.country}</h3>
            

        </Jumbotron>
    </div>

)
export default Profile;
import React from "react";
import {Jumbotron} from "react-bootstrap";
//import Table from "../../components/Table"

const Profile = (props) => (

    <div>
        <Jumbotron className="profileJumbotron">

            <h1>Welcome back, {props.auth.firstname}</h1>

            <h2>Username</h2>
            <h3>{props.auth.username}</h3>
            <h2>First Name</h2>
            <h3>{props.auth.firstname}</h3>

            <h2>Last Name</h2>
            <h3>{props.auth.lastname}</h3>

            <h2>Email</h2>
            <h3>{props.auth.email}</h3>


            <h2>Location</h2>
            <h3>{props.auth.state}, {props.auth.country}</h3>

            {/* <Table {...props}/> */}
            

        </Jumbotron>
    </div>

)
export default Profile;
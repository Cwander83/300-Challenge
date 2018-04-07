import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {ControlLabel, FormControl, FormGroup, Button} from "react-bootstrap"


const SignIn = (props)=> {

	return (
		<div className="container">
			
			<h1 className="signInUp">SIGN IN</h1>
			<Link className="signLink" to = "/signup" >Go to sign up</Link>
			<FormGroup>
				<ControlLabel>Username</ControlLabel><br/>
			    <FormControl value = {props.username} onChange = {props.handleChange} name='username' type='name' placeholder = 'username'/>
				<br />
				<ControlLabel>Password</ControlLabel><br/>
				<FormControl name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<Button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</Button>
			</FormGroup>
			</div>
	
	);

}

export default SignIn;
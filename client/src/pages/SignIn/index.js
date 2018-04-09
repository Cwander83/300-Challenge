import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {ControlLabel, FormControl, FormGroup, Button} from "react-bootstrap";
import Title from "../../components/Title";



const SignIn = (props)=> {

	return (
		<div>
	<Title />
		<div className="container signContainer">

			<h1 className="signInUp">SIGN IN</h1>
			<Link className="signLink" to = "/signup" >Go to sign up</Link>
			<FormGroup className="signInGroup">
				<ControlLabel>Username</ControlLabel><br/>
			    <FormControl className="signInput" value = {props.username} onChange = {props.handleChange} name='username' type='name' placeholder = 'username'/>
				<br />
				<ControlLabel>Password</ControlLabel><br/>
				<FormControl className="signInput" name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<Button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</Button>
			</FormGroup>
			
			</div>
			</div>
			
	
	);

}

export default SignIn;
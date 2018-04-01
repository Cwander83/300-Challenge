import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

const SignUp = (props)=> {


	// getValidationState() {
	// 	const length = this.state.value.length;
	// 	if (length > 10) return 'success';
	// 	else if (length > 5) return 'warning';
	// 	else if (length > 0) return 'error';
	// 	return null;
	//   }

	return (
		<div>
			<h1>SIGN UP</h1>
			<Link to = "/" >Go to sign in</Link>
			<FormGroup >
				
				<ControlLabel>Create Username</ControlLabel><br/>
				<FormControl value = {props.username} onChange = {props.handleChange} name='username' type='name' placeholder = 'username..'/>
				<br />
				<ControlLabel>Password</ControlLabel><br/>
				<FormControl name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</FormGroup>
		</div>
	);
}

export default SignUp;
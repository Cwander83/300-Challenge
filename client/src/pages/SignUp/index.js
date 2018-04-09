import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {ControlLabel, FormControl, FormGroup, Button} from "react-bootstrap";
import Title from "../../components/Title";

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
			<Title />
		<div className="container signContainer">
	
		
			<h1 className="signInUp">SIGN UP</h1>
			
			<Link className="signLink"to = "/" >Go to sign in</Link>
			<FormGroup className="signUpGroup">
				
				<ControlLabel>Create Username</ControlLabel><br/>
				<FormControl className="signInput" value = {props.username} onChange = {props.handleChange} name='username' type='name' placeholder = 'username..'/>
				<br />
				<ControlLabel>Password</ControlLabel><br/>
				<FormControl className="signInput" name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<ControlLabel>Email</ControlLabel><br/>
				<FormControl className="signInput" name='email' type='email' value = {props.email} onChange = {props.handleChange} />
				<br />
				<ControlLabel>First Name</ControlLabel><br/>
				<FormControl className="signInput" name='firstname' type='name' value = {props.firstname} onChange = {props.handleChange} />
				<br />
				<ControlLabel>Last Name</ControlLabel><br/>
				<FormControl className="signInput" name='lastname' type='name' value = {props.lastname} onChange = {props.handleChange} />
				<br />
				<ControlLabel>Location: State</ControlLabel><br/>
				<FormControl className="signInput" name='state' type='name' value = {props.state} onChange = {props.handleChange} />
				<br />
				<ControlLabel>Country</ControlLabel><br/>
				<FormControl className="signInput" name='country' type='name' value = {props.country} onChange = {props.handleChange} />
				<br />
				<Button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</Button>
			</FormGroup>
		</div>
		</div>
	);
}

export default SignUp;
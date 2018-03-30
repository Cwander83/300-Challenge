import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {} from 'react-bootstrap';

const SignIn = (props)=> {

	return (
		<div className="container">
			
			<h1>SIGN IN</h1>
			<Link to = "/signup" >Go to sign up</Link>
			<form>
				<label>Username</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='name' placeholder = 'username'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
			</div>
		
	);

}

export default SignIn;
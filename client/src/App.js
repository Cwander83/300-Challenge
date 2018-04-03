import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import CoverImage from "./components/CoverImage";
import NavBar from "./components/NavBar";
import Ticker from "./components/ticker";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import YouTubePage from "./pages/YouTube";
import Profile from "./pages/Profile";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios
      .get("/auth/isAuthenticated")
      .then((result) => {
        const {
          userId,
          isAuthenticated,
          username,
          email,
          state,
          country
        } = result.data
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username,
            email,

            state,
            country
          }
        });
      });
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    // Set the state for the appropriate input field
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,

      state: this.state.state,
      country: this.state.country
    };
    this.setState({username: "", password: ""});
    const {name} = event.target;
    axios
      .post(name, newUser)
      .then((data) => {
        if (data.data.isAuthenticated) {
          const {userId, isAuthenticated, username} = data.data;
          this.setState({
            auth: {
              userId,
              isAuthenticated,
              username
            }
          });
        }
      });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios
      .get("/auth/logout")
      .then((result) => {
        this.setState({
          auth: {
            userId: "",
            username: "",
            isAuthenticated: false
          }
        });
      })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (

      <Router>
        <div>
          <CoverImage/>
          <Ticker />
          <NavBar isAuthenticated={loggedIn} handleLogout={this.HandleLogout}/>
          <Route
            exact
            path="/"
            render=
            {()=> { if(loggedIn) { return <Redirect to = "/Home" /> } else{ return <SignIn handleChange= {this.handleChange} handleSubmit = {this.handleSubmit} email = {this.state.email} password = {this.state.password} /> } }}/>
          <Route
            exact
            path="/signup"
            render=
            {()=> { if(loggedIn) { return <Redirect to = "/Home" /> } else{ return <SignUp handleChange= {this.handleChange} handleSubmit = {this.handleSubmit} state = {this.state.state} email = {this.state.email} password = {this.state.password} /> } }}/>
          <Route
            exact
            path="/Home"
            render=
            {()=> { if(!loggedIn) { return <Redirect to = "/" /> } else { return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/> } } }/>

          <Route exact path="/Profile" render= {()=><Profile auth = {this.state.auth}/>}/>
          <Route exact path="/YouTubePage" render= {()=><YouTubePage/>}/>
        </div>
      </Router>

    );
  }
}

export default App;
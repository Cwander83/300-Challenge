import React from "react";
import {Jumbotron} from "react-bootstrap";
//import Table from "../../components/Table"

export default class Profile extends React.Component{
render(){
console.log(this.props);
return (
    
     <div>
         <Jumbotron className="profileJumbotron">

             <h1>Welcome back, {this.props.auth.firstname}</h1>

            <h2>Username</h2>
            <h3>{this.props.auth.username}</h3>
         <h2>First Name</h2>
             <h3>{this.props.auth.firstname}</h3>

            <h2>Last Name</h2>
            <h3>{this.props.auth.lastname}</h3>

          <h2>Email</h2>
            <h3>{this.props.auth.email}</h3>


          <h2>Location</h2>
          <h3>{this.props.auth.state}, {this.props.auth.country}</h3>

         
            

       </Jumbotron>
    </div>
)
}
}
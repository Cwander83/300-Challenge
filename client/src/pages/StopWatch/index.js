import React from "react";


import StopWatch from "../../components/StopWatch";

export default class Stopwatch extends React.Component {

render(){
    return (
    <div>
    <StopWatch auth = {this.props.auth} />
    </div>
)
}


}
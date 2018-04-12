import React from "react";
import "./style.css";
//import Moment from 'react-moment';
import moment from "moment";
import Register from '../../components/Register';
import Results from "../../components/Results";
import StopWatchChallenge from "../../components/StopWatchChallenge";
import ChallengeTitle from "../../components/ChallengeTitle";
import { Jumbotron } from "react-bootstrap";

export default class Challenge extends React.Component {
    
    state = {
        challengeStart: "",
        challengeEnd: "",
        date: ""
       

    }
    componentWillMount(){
        this.setState({challengeStart:"04 12 18, 4:43:05 pm", challengeEnd:"04 12 18, 3:44:05 pm", date: Date.now()})
       // console.log(`componentwillmount`);
    }
    componentDidMount(){
        this.setState({challengeStart:"04 12 18, 4:43:05 pm", challengeEnd:"04 12 18, 4:44:05 pm", date: Date.now()})
        // const start = <Moment format='MM DD YY, h:mm:ss a'>this.state.challengeStart</Moment>
    //console.log(`componentdidmount`);
    }
    

    render() {
    //console.log(`start ${<Moment format='MM DD YY, h:mm:ss a'>{this.state.challengeStart}</Moment>}`);
    // console.log(`start ${moment(this.state.challengeStart).format()}`);
    // console.log(`end ${moment(this.state.challengeEnd).format()}`);
    // console.log(`date ${moment(this.state.date).format()}`);
    //     console.log(`render()`);
        return (
            <div>
            <Jumbotron className= "jumboHome">
            <div>
                
                {moment(this.state.challengeStart).format() >= moment(this.state.date).format() ? <Register handleSubmit = {this.props.handleSubmit} auth={this.props.auth}/> : <ChallengeTitle />}
                 
                {moment(this.state.challengeEnd).format() >= moment(this.state.date).format() ? <StopWatchChallenge auth={this.props.auth}/>: <Results/> }
                   
                    </div>
                    </Jumbotron>

</div>
        )
    }
}

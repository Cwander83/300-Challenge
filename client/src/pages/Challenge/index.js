import React from "react";
import "./style.css";
import Moment from 'react-moment';
import Register from '../../components/Register';
import Results from "../../components/Results";
import StopWatchChallenge from "../../components/StopWatchChallenge";
import ChallengeTitle from "../../components/ChallengeTitle";
import { Jumbotron } from "react-bootstrap";

export default class Challenge extends React.Component {
    
    state = {
        challengeStart: "",
        challengeEnd: ""
       

    }
    componentWillMount(){
        this.setState({challengeStart:"04 12 18, 7:58:05 pm", challengeEnd:"04 12 18, 7:58:05 pm"})
    }

    

    render() {
      

        return (
            <div>
            <Jumbotron className= "jumboHome">
            <div>
                
                {this.state.challengeStart <= <Moment format='MM DD YY, h:mm:ss a'>{Date.now()}</Moment>
                   
                   ? <Register handleSubmit = {this.props.handleSubmit} auth={this.props.auth}/>
                  
                  : <ChallengeTitle />}
                 
                   {this.state.challengeEnd <= <Moment format='MM DD YY, h:mm:ss a'>{Date.now()}</Moment>
                   
                   ? <Results/>
                  
                  :<StopWatchChallenge auth={this.props.auth}/>}
                   
                    </div>
                    </Jumbotron>



 <Moment format='MM DD YY, h:mm:ss a'>{this.state.challengeStart}</Moment> <br />
 <Moment format='MM DD YY, h:mm:ss a'>{Date.now()}</Moment> 

</div>
        )
    }
}

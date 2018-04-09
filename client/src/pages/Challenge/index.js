import React from "react";
import Moment from 'react-moment';
import Register from '../../components/Register';
import Results from "../../components/Results";
import StopWatchChallenge from "../../components/StopWatchChallenge";

export default class Challenge extends React.Component {
    
    state = {
        challengeStart: "",
        challengeEnd: ""
       

    }
    componentWillMount(){
        this.setState({challengeStart:"04 07 18, 7:58:05 pm", challengeEnd:"04 09 18, 7:58:05 pm"})
    }

    

    render() {
      

        return (
            <div>
                <div></div>
                {this.state.challengeStart <= <Moment format='MM DD YY, h:mm:ss a'>{Date.now()}</Moment>
                   
                   ? <Register handleSubmit = {this.props.handleSubmit} auth={this.props.auth}/>
                  
                  :<StopWatchChallenge auth={this.props.auth}/>}
                   
                   
                    <div>



 <Moment format='MM DD YY, h:mm:ss a'>{this.state.challengeStart}</Moment> <br />
 <Moment format='MM DD YY, h:mm:ss a'>{Date.now()}</Moment> 

</div>
                
                <Results/>
            </div>
        )
    }
}

import React from "react";
//import Moment from 'react-moment';
import Register from '../../components/Register';
import Results from "../../components/Results";
import StopWatchChallenge from "../../components/StopWatchChallenge";

export default class Challenge extends React.Component {
    state = {
        challengeStart: 1 - 1 - 1,
        challengeEnd: 1 - 1 - 1,
        childVisible: false

    }

    onClick() {
        this.setState(prevState => ({
            childVisible: !prevState.childVisible
        }));
    }

    render() {
        // setTimeout(() => {
        //     this.setState({});

        // }, 1000)

        return (
            <div>
                <div onClick={() => this.onClick()}>
                    Parent - click me to show/hide my childVisible</div>
                {this.state.childVisible
                    ? <Register/>
                    : <Results/>}

                <StopWatchChallenge auth={this.props.auth}/>
                {/* <Results/> */}
            </div>
        )
    }
}

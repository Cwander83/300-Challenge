import React, {Component} from "react";
import "./style.css";
import {Jumbotron} from "react-bootstrap"
import YouTubeAPI from "../../utils/YouTubeAPI";
import MediaBox from "../../components/Media";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";


// The ...props means, spread all of the passed props onto this element That way
// we don't have to define them all individually
class YouTubePage extends Component {
    state = {
        videos: [],
        Title: "",
        url: "",
        text: ""
    };

    componentDidMount() {
        this.loadVideo();
    }
    loadVideo = () => {
        YouTubeAPI
            .getAllVideos()
            .then(res => this.setState({videos: res.data, Title: "", url: "", text: ""}))
            .catch(err => console.log(err));
    }

    renderVideos = () => {
        return this
            .state
            .videos
            .map(video => (<MediaBox
            _id={video._id}
            key={video._id}
                Title={video.Title}
                url={video.url}
                text={video.text}
                loadVideo={this.loadVideo}/>))
    }

    render() {
        return (
             <div>
           <Jumbotron >
               <Jumbotron className="jumboHome">
           <ScrollAnimation duration={8} animateIn='rubberBand' initallyVisible={true}>
        <h1>
          Workout Videos
        </h1>

      </ScrollAnimation>
      </Jumbotron>
                {this.renderVideos()}
                </Jumbotron>
                </div>
            
        )
    }
};

export default YouTubePage;

import React from "react";
import {ResponsiveEmbed, Media} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css"

const MediaBox = props => <Media>

    <ScrollAnimation animateIn='fadeIn' delay={50}>

        <Media.Left>
            <div
                style={{
                width: 375,
                height: 'auto'
            }}>
                <ResponsiveEmbed a16by9>
                    <embed src={props.url}/>
                </ResponsiveEmbed>
            </div>
        </Media.Left>
    </ScrollAnimation>
    <ScrollAnimation animateIn="lightSpeedIn" delay={50}>
    <Media.Body>
        <Media.Heading>{props.Title}</Media.Heading>
        <p className="mediaP">
            {props.text}
        </p>
    </Media.Body>
    </ScrollAnimation>
</Media>

export default MediaBox;
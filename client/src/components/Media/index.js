import React from "react";
import {ResponsiveEmbed, Media} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css"

const MediaBox = props => <Media>

    <ScrollAnimation animateIn='fadeIn' delay={200}>

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
    <ScrollAnimation animateIn="lightSpeedIn" delay={200}>
    <Media.Body>
        <Media.Heading>{props.Title}</Media.Heading>
        <p>
            {props.text}
        </p>
    </Media.Body>
    </ScrollAnimation>
</Media>

export default MediaBox;
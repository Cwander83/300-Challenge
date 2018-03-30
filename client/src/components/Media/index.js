import React from "react";
import {ResponsiveEmbed, Media} from "react-bootstrap";
import "./style.css"

const MediaBox = props => <Media>
    <Media.Left>
        <div style={{
            width: 300,
            height: 'auto'
        }}>
            <ResponsiveEmbed a16by9>
                <embed src={props.url}/>
            </ResponsiveEmbed>
        </div>
    </Media.Left>
    <Media.Body>
        <Media.Heading>{props.Title}</Media.Heading>
        <p>
            {props.text}
        </p>
    </Media.Body>
</Media>

export default MediaBox;
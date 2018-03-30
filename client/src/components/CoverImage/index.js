import React from "react";
import {Image} from "react-bootstrap";
import cover from "../../components/images/300-4-2.jpg";

const CoverImage = () => (<Image
    className="img"
    style={{
    width: 100 + "%"
}}
    src={cover}
    alt="300"
    responsive/>)

export default CoverImage;
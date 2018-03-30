import React from 'react';

import "./style.css";
import {}from 'react-bootstrap';


import YouTubePage from "../YouTube";

 import Stopwatch from '../StopWatch';
import Slider from '../../components/Slider';
import Profile from '../Profile';
import CoverImage from '../../components/CoverImage';
const wallpaper =
  'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-164335.png';

const Home = (props) =>{
	return (
    <div>
    <CoverImage />
      <Slider>
        <Slider.Item style={{ backgroundColor: '#a2d7c7' }}>
          <div className="content"><Profile /></div>
        </Slider.Item>
        <Slider.Item style={{ backgroundColor: '#353330' }}>
          <div className="content">Sup?</div>
        </Slider.Item>
        <Slider.Item
           className="has-overlay"
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: 'cover'
          }}
        >
          <div className="content"><Stopwatch {...props}/></div>
        </Slider.Item>
        <Slider.Item style={{ color: '#333' }}>
          <div className="content love">
            
            <YouTubePage />
          </div>
        </Slider.Item>
      </Slider>

		 </div>
	);
}

export default Home;
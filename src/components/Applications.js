import React from 'react'
import XReactDom from 'react-dom'
import {HashRouter} from 'react-router-dom';
import './Applications.css'
import './HeaderComp.css'
import '../App.css';

function Applications() {
  return (
    <div>
        <Card 
        img='/images/s1.png'/>
    </div>
  )
}

function Card(props){
    return(
        <div>
            <div>
            <video src={"/videos/video-2.mp4"}  autoPlay loop muted />
                <img 
                src={props.img} 
                alt='snakeGame'
                className='app_image'
                />
            </div>
        </div>
    )
}

XReactDom.render((
    <HashRouter>
        <Applications />
    </HashRouter>
    ), document.getElementById('root'));

export default Applications
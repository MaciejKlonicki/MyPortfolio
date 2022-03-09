import React from 'react'
import XReactDom from 'react-dom'
import {HashRouter} from 'react-router-dom';
import './Applications.css'
import './HeaderComp.css'
import '../App.css';
import { Link } from 'react-router-dom';

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
                <Link to={"/applications/snake"}>
                <img
                src={props.img}
                alt='snakeGame'
                className='app_image'
                />
                </Link>
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
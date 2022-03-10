import React  from 'react';
import './Applications.css'
import '../App.css';
import { Link } from 'react-router-dom';


function Applications() {
  return (
    <div>
        <BackVideo />
        <Card 
        img='/images/c1.png'
        path='/applications/chess'/>
        <Card 
        img='/images/s1.png'
        path='/applications/snake'/>
        <Card 
        img='/images/h1.png'
        path='/applications/huffman'/>
        <Card 
        img='/images/k1.jpg'
        path='/applications/library'/>
    </div>
    
  )
}

function BackVideo() {
    return (
        <video src={"/videos/video-2.mp4"}  autoPlay loop muted />
    )
}

function Card(props){
    return(
        <div>
            <div>
                <Link to={props.path}>
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



export default Applications
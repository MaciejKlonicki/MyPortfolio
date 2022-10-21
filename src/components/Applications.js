import React  from 'react';
import './Applications.css'
import '../App.css';
import { Link } from 'react-router-dom';
import './HeaderComp.css'


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
        <Card 
        img='/images/main-page.png'
        path='/applications/diabetes'/>
    </div>
    
  )
}

function BackVideo() {
    return (
        <img style={{position: "fixed", width: "100%", height: "100%", zIndex: "-1"}} src="/images/app.jpg" alt="app" />
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
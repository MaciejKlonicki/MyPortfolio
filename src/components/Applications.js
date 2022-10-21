import React  from 'react';
import './Applications.css'
import '../App.css';
import { Link } from 'react-router-dom';
import './HeaderComp.css'


function Applications() {
  return (
    <div>
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
        img='/images/diabetes.png'
        path='/applications/diabetes'/><br></br><br></br><br></br><br></br>
    </div>
    
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
                /><br></br><br></br>
                </Link>
            </div>
        </div>
    )
}



export default Applications;
import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Body.css';
import '../App.css';
import './HeaderComp.css'

function Body() {
  return (
    <div className='body-container'>
        <img style={{position: "fixed", width: "100%", height: "100%", zIndex: "-1"}} src="/images/europe.jpg"  alt="background"/>
        <h1 style={{position: "fixed", top: "400px"}}>Welcome to my page</h1>
        <p style={{position: "fixed", top: "400px"}}>Maciej Kłonicki</p>
        <div className='body-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >
              <Link className='body-links' to='/applications'>PROJECTS</Link>
            </Button>

            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            > 
              <Link className='body-links' to='/aboutme'>ABOUT ME</Link>
            </Button>
        </div>
    </div>
  )
}

export default Body
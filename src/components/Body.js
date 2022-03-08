import React from 'react';
import { Button } from './Button';
import './Body.css';
import '../App.css';

function Body() {
  return (
    <div className='body-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Welcome to my page</h1>
        <p>Enjoy it!</p>
        <div className='body-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            > 
            HOME PAGE
            </Button>
        </div>
    </div>
  )
}

export default Body
import React from 'react'
import '../App.css';
import './Chess.css'
import './HeaderComp.css'
import { Button } from './Button';
import './Body.css';

function Chess() {
  return (
    <div className='chess_image'>
      <BackVideo />
      <Card />
    </div>
  )
}

function BackVideo() {
  return (
      <video src={"/videos/video-2.mp4"}  autoPlay loop muted />
  )
}

function Card () {
  return (
    <div className='chess-place'>
        <h1>Chess game</h1>
        <div className='body-btns'>
          <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >
              <a className='body-links' href='https://github.com/MaciejKlonicki/Chess'>REPOSITORY</a>
          </Button>
        </div>
        <div className='chess-info-place'>
          <h2>Chess game created in Java</h2>
          <h3>Features</h3>
          <p>• Turns</p>
          <p>• Valid moves for each</p>
          <p>• Possibility of capturing pawns</p>
          <p>• Removing figurates from the board</p>
          <p>• Winning possibility</p> 
          <h1>Screenshots</h1>
          <img className='chess_cards' 
          src='/images/c1.png' 
          alt='chessGame'>
          </img>
          <img className='chess_cards' 
          src='/images/c2.png' 
          alt='chessGame2'>
          </img>
          <img className='chess_cards' 
          src='/images/c3.png' 
          alt='chessGame3'>
          </img>
        </div>
    </div>
  )
}

export default Chess
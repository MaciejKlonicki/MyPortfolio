import React from 'react'
import '../App.css';
import './Chess.css'
import './HeaderComp.css'

function Chess() {
  return (
    <div>
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
    <div>
        <div className='chess-info-place'>
          <h1>Chess game</h1>
          <div className='body-btns'>
            <a href='https://github.com/MaciejKlonicki/Chess'>
          <button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='chess-inside-place'>
          <h2>Chess game created in Java</h2>
          <h3>Features</h3>
          <p>• Turns</p>
          <p>• Valid moves for each</p>
          <p>• Possibility of capturing pawns</p>
          <p>• Removing figurates from the board</p>
          <p>• Winning possibility</p> 
          </div>
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
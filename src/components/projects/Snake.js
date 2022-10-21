import React from 'react'
import '../../App.css';
import './Snake.css'
import '../HeaderComp.css'

function Snake() {
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
        <div className='snake-info-place'>
          <h1>Snake game</h1>
          <div className='body-btns'>
            <a href='https://github.com/MaciejKlonicki/Snake'>
          <button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='snake-inside-place'>
          <h2>A version of the classic game Snake implemented in Java using JAVA SWING. Vision of the game was taken from YT videos - but i wrote the code by myself</h2>
          <h3>Features</h3>
          <p>• Snake</p>
          <p>• Apple</p>
          <p>• Bananas</p>
          <p>• Snake is growing</p>
          <p>• If we hit the wall - game ends</p>
          <p>• Counting points</p> 
          <p>• If we ate apple - 1 point</p> 
          <p>• If we ate banana - 2 points</p> 
          <p>• Banana change position in 1 to 10 second.</p> 
          <p>• Music</p> 
          <p>• Graphics for head and body of our snake</p> 
          <p>• Graphics for apple and banana</p> 
          </div>
          <h1>Screenshots</h1>
          <img className='snake_cards' 
          src='/images/s1.png' 
          alt='snakeGame'>
          </img>
          <img className='snake_cards' 
          src='/images/s2.png' 
          alt='snakeGame2'>
          </img>
          <img className='snake_cards' 
          src='/images/s3.png' 
          alt='snakeGame3'>
          </img>
        </div>
    </div>
  )
}

export default Snake
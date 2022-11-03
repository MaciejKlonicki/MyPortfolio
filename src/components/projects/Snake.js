import React from 'react'
import './Snake.css'

function Snake() {
  return (
    <div>
      <Card />
    </div>
  )
}


function Card () {
  return (
    <div>
        <div className='borderPosSnake'><br></br>
          <h1>Snake game</h1>
          <div>
            <a href='https://github.com/MaciejKlonicki/Snake'>
          <button style={{marginBottom: "30px"}}
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='smallerPosSnake'>
          <h2 style={{
            color: "white",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center"
          }}>A version of the classic game Snake implemented in Java using JAVA SWING.</h2>
          <h3 style={{
            color: "white",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "22px",
            textAlign: "center"
          }}>Features</h3>
          <p className='p-styling'>• Snake</p>
          <p className='p-styling'>• Apple</p>
          <p className='p-styling'>• Bananas</p>
          <p className='p-styling'>• Snake is growing</p>
          <p className='p-styling'>• If we hit the wall - game ends</p>
          <p className='p-styling'>• Counting points</p> 
          <p className='p-styling'>• If we ate apple - 1 point</p> 
          <p className='p-styling'>• If we ate banana - 2 points</p> 
          <p className='p-styling'>• Banana change position in 1 to 10 second.</p> 
          <p className='p-styling'>• Music</p> 
          <p className='p-styling'>• Graphics for head and body of our snake</p> 
          <p className='p-styling'>• Graphics for apple and banana</p> 
          </div><br></br><br></br>
          <h1>Screenshots</h1><br></br>
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
          </img><br></br><br></br>
        </div>
    </div>
  )
}

export default Snake
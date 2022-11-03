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
        <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(5px)",
          fontWeight: "bold",
          border: "4px solid #f1f1f1",
          transform: "translate(33%, 2%)",
          width: "60%",
          height: "12%",
          textAlign: "center",
          lineHeight: "35px",
          color: 'white'
        }}><br></br>
          <h1>Snake game</h1>
          <div className='body-btns'>
            <a href='https://github.com/MaciejKlonicki/Snake'>
          <button style={{marginBottom: "30px"}}
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(5px)",
          fontWeight: "bold",
          border: "4px solid #f1f1f1",
          transform: "translate(20%, 0%)",
          width: "70%",
          height: "10%",
          textAlign: "center",
          lineHeight: "35px"
        }}>
          <h2 style={{
            color: "e6e6e6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center"
          }}>A version of the classic game Snake implemented in Java using JAVA SWING.</h2>
          <h3 style={{
            color: "e6e6e6",
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
          </div><br></br>
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
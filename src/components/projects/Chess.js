import React from 'react'
import './Chess.css'

function Chess() {
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
          lineHeight: "35px"
        }}><br></br>
          <h1>Chess game</h1>
          <div>
            <a href='https://github.com/MaciejKlonicki/Chess'>
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
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center",
            color: 'white'
          }}>Chess game created in Java</h2>
          <h3 style={{
            color: "white",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "22px",
            textAlign: "center"
          }}>Features</h3>
          <p className='p-styling'>• Turns</p>
          <p className='p-styling'>• Valid moves for each</p>
          <p className='p-styling'>• Possibility of capturing pawns</p>
          <p className='p-styling'>• Removing figurates from the board</p>
          <p className='p-styling'>• Winning possibility</p> 
          </div><br></br><br></br>
          <h1>Screenshots</h1>
          <br></br>
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
          </img><br></br><br></br>
        </div>
    </div>
  )
}

export default Chess;
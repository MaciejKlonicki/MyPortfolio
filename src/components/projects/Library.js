import React from 'react'
import './Library.css'

function Library() {
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
          <h1>Library</h1>
          <div>
            <a href='https://github.com/MaciejKlonicki/Library'>
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
          lineHeight: "35px",
          marginBottom: "20px"
        }}><br></br>
          <h2 style={{
            color: "e6e6e6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center"
          }}>Library created in JAVA FX, HTML, JAVASCRIPT</h2>
          <h3 style={{
            color: "e6e6e6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "22px",
            textAlign: "center"
          }}>Features</h3>
          <p className='p-styling'>• Add the book,</p>
          <p className='p-styling'>• Delete the book,</p>
          <p className='p-styling'>• Sell the book,</p>
          <p className='p-styling'>• Find the book,</p>
          <p className='p-styling'>• Full documentation,</p> 
          <p className='p-styling'>• Wallet,</p> 
          <p className='p-styling'>• Connection between server and clients</p> 
          </div>
        </div>
    </div>
  )
}

export default Library
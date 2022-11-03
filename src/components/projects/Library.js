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
        <div className='borderPosLibrary'><br></br>
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
        <div className='smallerPosLibrary'><br></br>
          <h2 style={{
            color: "white",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center"
          }}>Library created in JAVA FX, HTML, JAVASCRIPT</h2>
          <h3 style={{
            color: "white",
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
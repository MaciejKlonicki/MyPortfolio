import React from 'react'
import '../App.css';
import './Library.css'
import './HeaderComp.css'

function Library() {
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
        <div className='library-info-place'>
          <h1>Library</h1>
          <div className='body-btns'>
            <a href='https://github.com/MaciejKlonicki/Library'>
          <button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='library-inside-place'>
          <h2>Library created in JAVA FX, HTML, JAVASCRIPT</h2>
          <h3>Features</h3>
          <p>• Add the book,</p>
          <p>• Delete the book,</p>
          <p>• Sell the book,</p>
          <p>• Find the book,</p>
          <p>• Full documentation,</p> 
          <p>• Wallet,</p> 
          <p>• Connection between server and clients</p> 
          </div>
        </div>
    </div>
  )
}

export default Library
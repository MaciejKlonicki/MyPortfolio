import React from 'react'
import '../App.css';
import './Chess.css'
import './HeaderComp.css'

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
    </div>
  )
}

export default Chess
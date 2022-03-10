import React from 'react'
import '../App.css';
import './Chess.css'
import './HeaderComp.css'

function Chess() {
  return (
    <div>
      <BackVideo />
    </div>
  )
}

function BackVideo() {
  return (
      <video src={"/videos/video-2.mp4"}  autoPlay loop muted />
  )
}

export default Chess
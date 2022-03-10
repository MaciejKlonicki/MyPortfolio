import React from 'react'
import '../App.css';
import './HeaderComp.css'
import './Chess.css'

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
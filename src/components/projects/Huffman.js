import React from 'react'
import '../../App.css';
import './Huffman.css'
import '../HeaderComp.css'

function Huffman() {
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
        <div className='huff-info-place'>
          <h1>Huffman Compression-Decompression</h1>
          <div className='body-btns'>
            <a href='https://github.com/MaciejKlonicki/Huffman-Compression-Decompression'>
          <button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='huff-inside-place'>
          <h2>Project created in C.</h2>
          <h3>Link to the presentation:</h3>
          <a href='https://www.youtube.com/watch?v=mY1yj95Fn-I'>Presentation</a>
          </div>
          <h1>Screenshots</h1>
          <img className='huff_cards' 
          src='/images/h1.png' 
          alt='huff1'>
          </img>
          <img className='huff_cards' 
          src='/images/h2.png' 
          alt='huff3'>
          </img>
          <img className='huff_cards' 
          src='/images/h4.png' 
          alt='huff4'>
          </img>
        </div>
    </div>
  )
}

export default Huffman
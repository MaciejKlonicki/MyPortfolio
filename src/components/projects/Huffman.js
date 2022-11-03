import React from 'react'
import './Huffman.css'

function Huffman() {
  return (
    <div>
      <Card />
    </div>
  )
}

function Card () {
  return (
    <div>
        <div className='borderPosHuffman'><br></br>
          <h1>Huffman Compression-Decompression</h1>
          <div>
            <a href='https://github.com/MaciejKlonicki/Huffman-Compression-Decompression'>
          <button style={{marginBottom: "30px"}}
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='smallerPosHuffman'>
          <h2 style={{
            color: "white",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center"
          }}>Project created in C</h2>
          <h3 style={{
            color: "white",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "22px",
            textAlign: "center"
          }}>Link to the presentation:</h3>
          <a href='https://www.youtube.com/watch?v=mY1yj95Fn-I'>Presentation</a>
          </div><br></br><br></br>
          <h1>Screenshots</h1><br></br>
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
          </img><br></br><br></br>
        </div>
    </div>
  )
}

export default Huffman
import React from 'react'
import '../App.css';
import './Aboutme.css'

function Aboutme() {
  return (
    <div>
      <BackImage />
      <Card />
    </div>
  )
}

function BackImage() {
  return (
      <img className='aboutme-image' src={"/images/z1.jpg"} alt='backgroungimg'/>
  )
}

function Card(props){
  return (
    <div className= 'aboutme-place'>
      <div class='text-on-image'>
             <p> My name is Maciej Kłonickii </p>
          </div>
    </div>
  )
}

export default Aboutme
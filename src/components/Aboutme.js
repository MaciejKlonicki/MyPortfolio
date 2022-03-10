import React from 'react'
import '../App.css';
import './Aboutme.css'
import{ Link } from 'react-router-dom'

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

function Card(){
  return (
    <div className= 'aboutme-place'>
      <div>
        <h1>Maciej Kłonicki</h1>
        <p>I am studying in 3rd year computer science at Kielce University of Technology. I chose to major in computer science because of great
possibility of further development and also because of the array of opportunities it offers.</p>
        <p>Interests: History, Astronomy, Football, MMA, New technologies, Project management, Swimming, Board games</p>
        <p>Skills: Java, Java SWING, Spring BOOT, React, C/C++, GIT, Github, PostgreSQL, SQL, Python </p>
        <p>Education: Computer Science Kielce University of Technology - 10/2019-Present</p>
        <p>Projects:</p>
        <ul>
            <li><Link className='about-links' to="/applications/chess">Chess game</Link></li>
            <p></p>
            <li><Link className='about-links' to="/applications/snake">Snake game</Link></li>
            <p></p>
            <li><Link className='about-links' to="/applications/huffman">Huffman coding</Link></li>
            <p></p>
            <li><Link className='about-links' to="/applications/library">Library</Link></li>
          <p></p>
        </ul>
      </div>
    </div>
  )
}

export default Aboutme
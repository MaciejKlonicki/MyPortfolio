import React from 'react'
import '../../App.css';
import './Aboutme.css'
import{ Link } from 'react-router-dom'

function Aboutme() {
  return (
    <div>
      <Card />
    </div>
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
            <li style={{listStyleType: "none"}}><Link className='about-links' to="/applications/chess">Chess game</Link></li>
            <p></p>
            <li style={{listStyleType: "none"}}><Link className='about-links' to="/applications/snake">Snake game</Link></li>
            <p></p>
            <li style={{listStyleType: "none"}}><Link className='about-links' to="/applications/huffman">Huffman coding</Link></li>
            <p></p>
            <li style={{listStyleType: "none"}}><Link className='about-links' to="/applications/library">Library</Link></li>
          <p></p>
            <li style={{listStyleType: "none"}}><Link className='about-links' to="/applications/diabetes">Diabetes</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Aboutme
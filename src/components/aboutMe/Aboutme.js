import React from 'react'
import '../../App.css';
import './Aboutme.css'

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
        <h1 style={{marginTop: "10px"}}>Maciej Kłonicki</h1>
        <p style={{marginLeft: "12px", marginRight: "12px", lineHeight: "35px"}}>I am studying in 3rd year computer science at Kielce University of Technology. I chose to major in computer science because of great
          possibility of further development and also because of the array of opportunities it offers.</p>
        <p>Interests: History, Astronomy, Football, MMA, New technologies, Project management, Swimming, Board games</p>
        <p>Skills: Java, Spring BOOT, React, GIT, Github, SQL/PostgreSQL, Hibernate, Maven, H2, Redux, REST </p>
        <p>Education: Computer Science Kielce University of Technology - 10/2019-Present</p>
      </div>
    </div>
  )
}

export default Aboutme;
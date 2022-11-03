import React from 'react';
import './Diabetes.css';

function Diabetes() {
  return (
    <div>
      <Card />
    </div>
  )
}

function Card () {
  return (
    <div>
        <div  style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(5px)",
          fontWeight: "bold",
          border: "4px solid #f1f1f1",
          transform: "translate(33%, 2%)",
          width: "60%",
          height: "12%",
          textAlign: "center",
          lineHeight: "35px"
        }}>
          <h1>Diabetes Forum</h1>
          <div>
            <a href='https://github.com/MaciejKlonicki/Diabetes-Forum'>
          <button style={{marginBottom: "30px"}}
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(5px)",
          fontWeight: "bold",
          border: "4px solid #f1f1f1",
          transform: "translate(20%, 0%)",
          width: "70%",
          height: "10%",
          textAlign: "center",
          lineHeight: "35px",
          color: 'white'
        }}>
          <h2 style={{
            color: "e6e6e6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center"
          }}>Forum for diabetes - all about: treatment, daily life, equipment, curiosities, infolines, etc</h2>
          <h3 style={{
            color: "e6e6e6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "22px",
            textAlign: "center"
          }}>Features</h3>
          <p className='p-styling'>• Converters - food converters to calculate boluses for food.</p>
          <p className='p-styling'>• Informations - all needed informations for diabetes like what to eat, how to life.</p>
          <p className='p-styling'>• Calculator - calculator to calculate the eaten food to convert that to [J] for glucometers to input boluses.</p>
          <p className='p-styling'>• Simple interface of the page.</p>
          <p className='p-styling'>• Login and registration system.</p>
          <p className='p-styling'>• Contact form to send an email to the page administration.</p> 
          <p className='p-styling'>• Admin and User role.</p> 
          <p className='p-styling'>• JWT Token applied.</p> 
          <p className='p-styling'>• Spring security applied.</p> 
          <p className='p-styling'>• Security Router URL's,</p> 
          <p className='p-styling'>• Login and register forms,</p> 
          <p className='p-styling'>• You cannot register to the existing email,</p> 
          <p className='p-styling'>• You cannot go to some URL's which are inside of Private Routes,</p>
          <p className='p-styling'>• Tests for backend applied,</p>
          <p className='p-styling'>• Diabetic diary - mobile app (simple mobile app, where we can add and delete some daily messages).</p>
          </div><br></br>
          <h1>Screenshots</h1><br></br>
          <img className='diabetes_cards' 
          src='/images/convert.png' 
          alt='convert'>
          </img>
          <img className='diabetes_cards' 
          src='/images/cursiosities.png' 
          alt='curiosities'>
          </img>
          <img className='diabetes_cards' 
          src='/images/email.png' 
          alt='email'>
          </img>
          <img className='diabetes_cards' 
          src='/images/gluco.png' 
          alt='gluco'>
          </img>
          <img className='diabetes_cards' 
          src='/images/login-registry.png' 
          alt='login-reg'>
          </img>
          <img className='diabetes_cards' 
          src='/images/somePages.png' 
          alt='some'>
          </img><br></br><br></br>
        </div>
    </div>
  )
}

export default Diabetes;
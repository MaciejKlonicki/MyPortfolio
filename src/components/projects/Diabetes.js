import React from 'react';
import '../../App.css';
import '../HeaderComp.css';
import './Huffman.css';
import './Snake.css';

function Diabetes() {
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
          <h1>Diabetes Forum</h1>
          <div className='body-btns'>
            <a href='https://github.com/MaciejKlonicki/Diabetes-Forum'>
          <button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn-large'
            >REPOSITORY
          </button>
          </a>
        </div>
        <div className='snake-inside-place'>
          <h2>Forum for diabetes - all about: treatment, daily life, equipment, curiosities, infolines, etc</h2>
          <h3>Features</h3>
          <p>• Converters - food converters to calculate boluses for food.</p>
          <p>• Informations - all needed informations for diabetes like what to eat, how to life.</p>
          <p>• Calculator - calculator to calculate the eaten food to convert that to [J] for glucometers to input boluses.</p>
          <p>• Simple interface of the page.</p>
          <p>• Login and registration system.</p>
          <p>• Contact form to send an email to the page administration.</p> 
          <p>• Admin and User role.</p> 
          <p>• JWT Token applied.</p> 
          <p>• Spring security applied.</p> 
          <p>• Security Router URL's,</p> 
          <p>• Login and register forms,</p> 
          <p>• You cannot register to the existing email,</p> 
          <p>• You cannot go to some URL's which are inside of Private Routes,</p>
          <p>• Tests for backend applied,</p>
          <p>• Diabetic diary - mobile app (simple mobile app, where we can add and delete some daily messages).</p>
          </div>
          <h1>Screenshots</h1>
          <img className='snake_cards' 
          src='/images/convert.png' 
          alt='convert'>
          </img>
          <img className='snake_cards' 
          src='/images/curiosities.png' 
          alt='curiosities'>
          </img>
          <img className='snake_cards' 
          src='/images/email.png' 
          alt='email'>
          </img>
          <img className='snake_cards' 
          src='/images/gluco.png' 
          alt='gluco'>
          </img>
          <img className='snake_cards' 
          src='/images/login-registry.png' 
          alt='login-reg'>
          </img>
          <img className='snake_cards' 
          src='/images/somePages.png' 
          alt='some'>
          </img>
        </div>
    </div>
  )
}

export default Diabetes;
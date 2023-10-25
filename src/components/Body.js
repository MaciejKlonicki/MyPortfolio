import React from 'react';

function Body() {
  return (
    <div className='body-container'>
        <h1>Maciej Kłonicki</h1>
        <h2>Junior Java Developer</h2>
            <ul class="wrapper">
                <li class="icon github">
                <a href="https://github.com/MaciejKlonicki" target="_blank" rel="noopener noreferrer">
                    <span class="tooltip">Github</span>
                    <span><i class="fab fa-github"></i></span>
                </a>
                </li>
                <li class="icon linkedin">
                <a href="https://pl.linkedin.com/in/maciej-k%C5%82onicki" target="_blank" rel="noopener noreferrer">
                    <span class="tooltip">Linkedin</span>
                    <span><i class="fab fa-linkedin"></i></span>
                </a>
                </li>
            </ul>
    </div>
  )
}

export default Body;
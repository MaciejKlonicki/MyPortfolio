import React from 'react';
import { useHistory } from 'react-router-dom';

function Body() {

  const history = useHistory();

  const handleChangePageToProjects = () => {
    history.push('/projects')
  }

  const handleChangePageToAboutMe = () => {
    history.push('/about-me')
  }

  return (
    <div className='body-container'>
      <h1>Maciej Kłonicki</h1>
      <h2>Junior Java Developer</h2>
      <ul class="wrapper">
        <li class="icon github">
          <a href="https://github.com/MaciejKlonicki" target="_blank" rel="noopener noreferrer">
            <span className="tooltip">Github</span>
            <span><i className="fab fa-github" style={{ fontSize: '30px' }}></i></span>
          </a>
        </li>
        <li class="icon linkedin">
          <a href="https://pl.linkedin.com/in/maciej-k%C5%82onicki" target="_blank" rel="noopener noreferrer">
            <span class="tooltip">LinkedIn</span>
            <span><i class="fab fa-linkedin" style={{ fontSize: '30px' }}></i></span>
          </a>
        </li>
      </ul>
      <button onClick={handleChangePageToProjects}>Projects</button>
      <button onClick={handleChangePageToAboutMe} className='about-me'>About me</button>
    </div>
  )
}

export default Body;
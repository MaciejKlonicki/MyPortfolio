import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeaderComp.css';


function HeaderComp() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                    About me
                    </Link>
                </li>
                <li>
                    <Link to='/applications' className='nav-links' onClick={closeMobileMenu}>
                    Applications
                    </Link>
                </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Home</Button>}
            </div>
        </nav>
    </>
  )
}

export default HeaderComp
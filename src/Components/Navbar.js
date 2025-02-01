import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          RALPH<br></br>EDWARDS.
          <i class='fab fa-react'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu show' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links active' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CV'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CV
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education 
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/Testimonial'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Testimonial
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/Article'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Article
              </Link>
              </li>
          </ul>
         <div className='button'>Contact</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

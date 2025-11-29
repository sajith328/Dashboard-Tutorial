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
    <header className='header'>
            <nav className='navbar'>
               <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <h1>BESTSHOP</h1>
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
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
                to='/Work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/Service'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Service
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              </li>
          </ul>
         <div className='navbar-icon'>
          <form action='#'>
            <div className='input-field'>
             <div className='img-picture'>
               <img src='/Images/search.svg' />
               <img src='/Images/cart.svg' />
             </div>
               {/* <input type='seach' placeholder='Search' /> */}
            </div>
          </form>
         </div>
      </nav>
    </header>
    </>
  );
}

export default Navbar;

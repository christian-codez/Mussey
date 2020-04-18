import React, { Fragment } from 'react';
import './header.styles.css';
const HeaderComponent = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark mussey-nav-header bg-dark'>
        <a className='navbar-brand' href='#'>
          MUSSEY PLAYER
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Sign Out
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                Sign In
              </a>
            </li>
            <img
              src='https://www.w3schools.com/bootstrap4/newyork.jpg'
              class='rounded-circle'
              alt='Cinque Terre'
              style={{ width: '40px', height: '40px' }}
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
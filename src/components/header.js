import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoginModal from './login-modal.js';

const Header = () => (
  <header>
    <div className='navbar-fixed'>
      <nav className='z-depth-0'>
        <div className='nav-wrapper container'>
          <a href='/' className='brand-logo'>
            <img src='assets/img/cmimc-logo-huge.png' height='28px' />
          </a>
          <ul className='right hide-on-med-and-down'>
            <li><Link to='/' className='grey-text text-darken-3'>Home</Link></li>
            <li><Link to='/information' className='grey-text text-darken-3'>Information</Link></li>
            <li><Link to='/archive' className='grey-text text-darken-3'>Archive</Link></li>
            <li><Link to='/staff' className='grey-text text-darken-3'>Staff</Link></li>
            <li><LoginModal /></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='page-footer blue-grey lighten-2'>
    <div className='container'>
      <div className='row'>
        <div className='col l3 s12'>
          <img src='assets/img/cmimc-logo-huge-white.png' className='footer-logo' height='36px' />
        </div>
        <div className='col l3 offset-l1 s12'>
          <h5 className='grey-text text-lighten-4'>Information</h5>
          <ul>
            <li><Link to='/' className='grey-text text-lighten-3'>Rules</Link></li>
            <li><Link to='/faq' className='grey-text text-lighten-3'>FAQ</Link></li>
          </ul>
        </div>
        <div className='col l3 s12'>
          <h5 className='grey-text text-lighten-4'>Contact</h5>
          <ul>
            <li><a href='/' className='grey-text text-lighten-3'>Email</a></li>
            <li><a href='https://www.facebook.com/CMIMC' target='_blank' className='grey-text text-lighten-3'>Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer-copyright blue-grey lighten-1'>
      <div className='container'>
        <ul className='grey-text text-lighten-3'>
          <li>&copy; 2017 CMIMC</li>
          <li><Link to='/terms' className='grey-text text-lighten-3'>Terms</Link></li>
          <li><Link to='/privacy' className='grey-text text-lighten-3'>Privacy</Link></li>
          <li><Link to='/' className='grey-text text-lighten-3'>ctj@math.cmu.edu</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;

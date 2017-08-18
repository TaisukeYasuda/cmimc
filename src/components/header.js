import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from './forms/login.js';
import {
  authErrHandler,
  loginUser
} from '../actions';

const LoginModal = ({ onSubmit }) => (
  <Modal 
    trigger={
      <a className='waves-effect waves-light btn red darken-2'>Log In</a>
    }>
    <LoginForm onSubmit={ onSubmit } />
  </Modal>
);

class Header extends React.Component {
  submit = ({ email, password })  => {
    if (!email || !password) {
      this.props.authErrHandler('Please fill out all fields.');
      return;
    }
    this.props.loginUser({ email, password });
  } 

  render() {
    return (
      <header>
        <div className='navbar-fixed'>
          <nav className='z-depth-0'>
            <div className='nav-wrapper container'>
              <Link to='/' className='brand-logo'>
                <img src='assets/img/cmimc-logo-huge.png' height='28px' />
              </Link>
              <ul className='right hide-on-med-and-down'>
                <li><Link to='/' className='grey-text text-darken-3'>Home</Link></li>
                <li><Link to='/information' className='grey-text text-darken-3'>Information</Link></li>
                <li><Link to='/archive' className='grey-text text-darken-3'>Archive</Link></li>
                <li><Link to='/staff' className='grey-text text-darken-3'>Staff</Link></li>
                <li><LoginModal onSubmit={ this.submit } /></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  authErrHandler: errMessage => {
    authErrHandler(dispatch, errMessage);
  },
  loginUser: values => {
    loginUser(values)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

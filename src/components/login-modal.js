import React from 'react';
import { Modal, Row, Input } from 'react-materialize';
import { connect } from 'react-redux';

const LoginModal = () => (
  <Modal 
    trigger={
      <a className='waves-effect waves-light btn red darken-2'>Log In</a>
    }>
    <form>
      <Row>
        <div className='input-field col s12'>
          <input id='account_login_email' type='email' className='validate' />
          <label htmlFor='account_login_email'>Email</label>
        </div>
        <div className='input-field col s12'>
          <input id='account_login_password' type='password' className='validate' />
          <label htmlFor='account_login_password'>Password</label>
        </div>
        <div className='col s12 red-text text-darken-2'>
          <p>Error message here</p>
        </div>
        <div className='input-field col s12'>
          <button className='btn waves-effect waves-light right red darken-2' type='submit'>Log In</button>
        </div>
      </Row>
    </form>
  </Modal>
);

export default LoginModal;

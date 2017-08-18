import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Error from '../error';

const RegisterForm = ({ handleSubmit, error, message }) => (
  <div className='card-content signup-card'>
    <form onSubmit={ handleSubmit }>
      <h4>Sign Up</h4>
      <div className='row'>
        <div className='input-field col s12'>
          <Field 
            id='account-signup-email' 
            name='email' 
            component='input' 
            type='text' 
            placeholder='Email'
            className='validate' />
          <label htmlFor='account-signup-email'>Email</label>
        </div>
        <div className='input-field col s12'>
          <Field 
            id='account-signup-password' 
            name='password' 
            component='input' 
            type='password' 
            placeholder='Password'
            className='validate' />
          <label htmlFor='account-signup-password'>Password</label>
        </div>
        <div className='input-field col s12'>
          <Field 
            id='account-signup-password-confirm' 
            name='passwordConfirm' 
            component='input' 
            type='password' 
            placeholder='Password (confirm)'
            className='validate' />
          <label htmlFor='account-signup-password-confirm'>Password (confirm)</label>
        </div>
        <Error error={ error } message={ message } />
        <div className='input-field col s12'>
          <button 
            className='btn waves-effect waves-light right red darken-2' 
            type='submit'>
            Sign Up
          </button>
        </div>
      </div>
    </form>
  </div>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  error: state.auth.error,
  message: state.auth.message
});

export default reduxForm({ 
  /* unique name for form */
  form: 'register'
})(connect(mapStateToProps)(RegisterForm));

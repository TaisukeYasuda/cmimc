import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { Field, reduxForm } from 'redux-form';

import Error from '../error';

const LoginForm = ({ handleSubmit, error, message }) => (
  <form onSubmit={ handleSubmit }>
    <Row>
      <div className='input-field col s12'>
        <Field 
          id='account-login-email'
          name='email' 
          component='input' 
          type='text' 
          placeholder='Email' />
        <label htmlFor='account-login-email'>Email</label>
      </div>
      <div className='input-field col s12'>
        <Field 
          name='password' 
          component='input' 
          type='password' 
          className='validate'
          placeholder='Password' />
        <label htmlFor='account-login-password'>Email</label>
      </div>
      <Error error={ error } message={ message } />
      <div className='input-field col s12'>
        <button
          className='btn waves-effect waves-light right red darken-2' 
          type='submit'>
          Submit
        </button>
      </div>
    </Row>
  </form>
)

LoginForm.propTypes = {
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
  form: 'login'
})(connect(mapStateToProps)(LoginForm));

import React from 'react';

const SignupForm = ({ handleSubmit }) => (
  <div className='card-content signup-card'>
    <form onSubmit={ handleSubmit }>
      <h4>Sign Up</h4>
      <div className='row'>
        <div className='input-field col s12'>
          <input id='account_signup_email' type='email' className='validate' />
          <label htmlFor='account_signup_email'>Email</label>
        </div>
        <div className='input-field col s12'>
          <input id='account_signup_password' type='password' className='validate' />
          <label htmlFor='account_signup_password'>Password</label>
        </div>
        <div className='input-field col s12'>
          <input id='account_signup_password_confirm' type='password' className="validate" />
          <label htmlFor='account_signup_password_confirm'>Password (confirm)</label>
        </div>
        <div className='col s12 red-text text-darken-2'>
          <p>Error message here</p>
        </div>
        <div className='input-field col s12'>
          <button className='btn waves-effect waves-light right red darken-2' type='submit' name='action'>Sign Up</button>
        </div>
      </div>
    </form>
  </div>
);

export default SignupForm;

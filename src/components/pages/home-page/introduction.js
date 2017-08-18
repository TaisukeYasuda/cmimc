import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import RegisterForm from '../../forms/register';
import News from './news';
import { authErrHandler, registerUser } from '../../../actions';

/* blurb about cmimc */
const Blurb = ({ year, date }) => (
  <p style={{ marginBottom: '36px' }}>
    The Carnegie Mellon Informatics and Mathematics Competition (CMIMC) is an annual math and computer science competition held at <a href='http://www.cmu.edu/' target='_blank' className='red-text text-darken-2'>Carnegie Mellon University</a> by CMU students. The CMIMC { year } will be held on { date }.
  </p>
);

class Introduction extends React.Component {
  submit = ({ email, password, passwordConfirm }) => {
    if (!email || !password || !passwordConfirm) {
      this.props.authErrHandler('Please fill out all fields.');
      return;
    }
    if (password !== passwordConfirm) {
      this.props.authErrHandler('Passwords do not match.');
      return;
    }
    this.props.registerUser({ email, password });
  }

  render() {
    return (
      <div className='section white'>
        <div className='row container'>
          <div className='col l6 s12'>
            <h4 className='header'>Welcome, mathletes!</h4>
            <Blurb 
              year={ this.props.info.year || 'N/A' } 
              date={ this.props.info.contest_date || 'N/A' } />
            <News />
          </div>
          <div className='col l5 offset-l1 s12'>
            <div className='card'>
              <RegisterForm onSubmit={ this.submit }/>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

Introduction.propTypes = {
  info: PropTypes.object.isRequired,
  authErrHandler: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  info: state.init.info
});

const mapDispatchToProps = dispatch => ({
  authErrHandler: errMessage => {
    authErrHandler(dispatch, errMessage);
  },
  registerUser: values => {
    registerUser(values)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Introduction);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import SignupForm from './signup';
import News from './news';

/* blurb about cmimc */
const Blurb = ({ year, date }) => (
  <p style={{ marginBottom: '36px' }}>
    The Carnegie Mellon Informatics and Mathematics Competition (CMIMC) is an annual math and computer science competition held at <a href='http://www.cmu.edu/' target='_blank' className='red-text text-darken-2'>Carnegie Mellon University</a> by CMU students. The CMIMC { year } will be held on { date }.
  </p>
);

const Introduction = ({ info }) => (
  <div className='section white'>
    <div className='row container'>
      <div className='col l6 s12'>
        <h4 className='header'>Welcome, mathletes!</h4>
        <Blurb year={ info.year || 'N/A' } date={ info.contest_date || 'N/A' } />
        <News />
      </div>
      <div className='col l5 offset-l1 s12'>
        <div className='card'>
          <SignupForm />
        </div>
      </div>
    </div>
  </div> 
);

Introduction.propTypes = {
  info: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  info: state.init.info
});

export default connect(mapStateToProps)(Introduction);

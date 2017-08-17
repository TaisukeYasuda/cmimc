import React from 'react';
import fetch from 'isomorphic-fetch';

import SignupForm from './signup';
import News from './news';

/* blurb about cmimc */
const Blurb = ({ year, date }) => (
  <p style={{ marginBottom: '36px' }}>
    The Carnegie Mellon Informatics and Mathematics Competition (CMIMC) is an annual math and computer science competition held at <a href='http://www.cmu.edu/' target='_blank' className='red-text text-darken-2'>Carnegie Mellon University</a> by CMU students. The CMIMC { year } will be held on { date }.
  </p>
);

class Introduction extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('data/info.json', { method: 'get' })
    .then(res => res.json())
    .then(
      res => { this.setState({ info: res }); },
      err => { console.log(err); }
    );
  } 

  render() {
    const info = this.state.info || {};

    return (
      <div className='section white'>
        <div className='row container'>
          <div className='col l6 s12'>
            <h4 className='header'>Welcome, mathletes!</h4>
            <Blurb year={ info.year } date={ info.contest_date } />
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
  }
}

export default Introduction;

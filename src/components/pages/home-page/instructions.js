import React from 'react';

const instructions = [
  {
    title: 'Form a Team',
    img: 'assets/img/users.png',
    description: 'Form a team of 4-6 students. Make sure you have a diverse set of skills to cover the team and power round.'
  },
  {
    title: 'Register Online',
    img: 'assets/img/computer.png',
    description: 'Register your team by logging in. Be sure to keep track of all important deadlines and dates.'
  },
  {
    title: 'Travel to CMU',
    img: 'assets/img/plane.png',
    description: 'After receiving the confirmation email for your registration, book travel to Carnegie Mellon University.'
  }
];

const Instructions = () => (
  <div className='section blue-grey lighten-4'>
    <div className='row container center-align'>
      <h4>How to Participate</h4>
      {
        instructions.map((instruction, key) => (
          <div className='col l4 s12' key={key}>
            <img src={instruction.img} height='150px' />
            <h5>{instruction.title}</h5>
            <p>{instruction.description}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default Instructions;

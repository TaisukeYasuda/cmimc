import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error, message }) => {
  return error ? (
    <div className='col s12 red-text text-darken-2'>
      <p>{ message }</p>
    </div>
  ) : (
    <div></div>
  );
};

Error.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default Error;

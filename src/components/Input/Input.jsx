import PropTypers from 'prop-types';
import React from 'react';

const Input = ({ onInputChange }) => (
  <input type="text" onChange={(e) => { onInputChange(e.target.value); }} />
);

Input.propTypes = {
  onInputChange: PropTypers.func,
};

Input.defaultProps = {
  onInputChange: () => {},
};

export default Input;

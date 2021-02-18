import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, classname }) => (
  <button type='button' className={`button ${className}`}>{children}</button>
);

Button.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: 'Кнопачка',
  className: '',
};

export default Button;
import React from 'react';
import PropsType from 'prop-types';

const Button = ({ children, className }) => (
  <button type="button" className={className}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropsType.oneOfType([
    PropsType.string,
    PropsType.element,
  ]),
  className: PropsType.string,
};

Button.defaultProps = {
  children: 'Кнопачка',
  className: '',
};

export default Button;

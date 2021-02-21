import React from 'react';
import PropsType from 'prop-types';

const Button = ({ children }) => (
  <button type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropsType.oneOfType([
    Props.Type.string,
    PropsType.element,
  ])
};

Button.defaultProps = {
  children: 'Кнопачка'
};

export default Button;
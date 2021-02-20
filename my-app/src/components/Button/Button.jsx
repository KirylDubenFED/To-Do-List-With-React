import PropsType from 'prop-types';
import React from 'react';

const Button = ({ children, className }) => (
  <button className={className} type='button'>
    {children}
  </button>
);

Button.protoTypes = {
  children: PropsType.oneOfType([
    PropsType.string,
    PropsType.element,
  ]),
  className: PropsType.string,
};

Button.defaultProps = {
  children: 'Кнопачка',
  className: '',
}

export default Button;

import React from 'react';
import PropsType from 'prop-types';

const List = ({ className }) => (
  <ul className={className}>
    <li />
  </ul>
);

List.propTypes = {
  className: PropsType.string,
};

List.defaultProps = {
  className: '',
};

export default List;

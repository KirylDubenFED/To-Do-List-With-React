import React from 'react';
import PropsType from 'prop-types';

const List = ({ data, className }) => (
  <ul className={className}>
    {
      data.map((dataItem) => (
        <li key={dataItem.id}>{dataItem.label}</li>
      ))
    }
  </ul>
);

List.propTypes = {
  className: PropsType.string,
  data: PropsType.arrayOf(PropsType.object),
};

List.defaultProps = {
  className: '',
  data: [],
};

export default List;

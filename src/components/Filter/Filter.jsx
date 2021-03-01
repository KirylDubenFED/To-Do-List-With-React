import PropTypers from 'prop-types';
import React from 'react';

const Filter = ({ filters }) => (
  filters.map((filter) => (
    <button type="button" key={filter.id}>{filter.label}</button>
  ))
);

Filter.PropTypes = {
  fruits: PropTypers.arrayOf(PropTypers.object),
};

Filter.defaultProps = {
  fruits: [],
};

export default Filter;

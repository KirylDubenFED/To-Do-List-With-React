import PropTypers from 'prop-types';
import React, { useEffect, useState } from 'react';
import getFilters from '../api/filterApi/provider';

const Filter = ({ fruits }) => {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    getFilters().then((data) => setFilters(data));
  }, []);

  console.log(filters);

  return (
    fruits.map((fruit) => (
      <button type="button" key={fruit.id}>{fruit.label}</button>
    ))
  );
};

Filter.PropTypes = {
  fruits: PropTypers.arrayOf(PropTypers.object),
};

Filter.defaultProps = {
  fruits: [],
};

export default Filter;

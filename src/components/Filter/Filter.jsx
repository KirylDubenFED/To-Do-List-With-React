import React, { useEffect, useState } from 'react';
import getFilters from '../api/filterApi/provider';

const Filter = () => {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    getFilters().then((data) => setFilters(data));
  }, []);

  console.log(filters);

  return (
    filters.map((filtersItem) => (
      <button type="button" key={filters.id}>{ filtersItem.label }</button>
    ))
  );
};

export default Filter;

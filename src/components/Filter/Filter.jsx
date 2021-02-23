import React, { useEffect, useState } from 'react';
import getFilters from '../api/filterApi/provider';

const Filter = () => {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    getFilters().then((data) => setFilters(data));
  });

  console.log(filters);

  return (
    <button type="button">Текущие задачи</button>
  );
};

export default Filter;

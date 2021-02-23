import React, { useEffect } from 'react';
import getFilters from '../api/filterApi/provider';

const Filter = () => {
  useEffect(() => {
    getFilters().then((data) => console.log(data));
  });

  return (
    <button type="button">Текущие задачи</button>
  );
};

export default Filter;

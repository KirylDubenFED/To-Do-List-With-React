import React, { useEffect } from 'react';
import getFilters from '../../components/api/filterApi/provider'

const Filter = ({ children, className }) => {
  useEffect(() => {
    getFilters().then((data) => console.log(data)) 
    });

  return (
    <button type='button'></button>
  )
};

export default Filter;

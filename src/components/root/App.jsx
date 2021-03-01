import React, { Fragment, useEffect, useState } from 'react';
import './App.scss';
import Button from '../Button/Button';
// import List from '../List/List';
import Filter from '../Filter/Filter';
import getFilters from '../api/filterApi/provider';
import Input from '../Input/Input';

function App() {
  const [filters, setFilters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);

  useEffect(() => {
    getFilters().then((data) => setFilters(data));
  }, []);

  console.log(filters);

  return (
    <>
      <Input onInputChange={setInputValue} />
      <Filter filters={filters} />
      <Button className="button">Добавить задачу</Button>
      {/* <List className="List" data={fruits} /> */}
      <div className="App">Hello World</div>
    </>
  );
}

export default App;

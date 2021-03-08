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
  const [tasks, setTasks] = useState([]);

  const handleButtonClick = () => {
    setTasks(inputValue);
  };

  console.log(tasks);
  // console.log(inputValue);

  useEffect(() => {
    getFilters().then((data) => setFilters(data));
  }, []);

  return (
    <>
      <Input onInputChange={setInputValue} />
      <Filter filters={filters} />
      <Button onButtonClick={handleButtonClick} className="button">Добавить задачу</Button>
      {/* <List className="List" data={fruits} /> */}
      <div className="App">Hello World</div>
    </>
  );
}

export default App;

import React, { Fragment } from 'react';
import './App.scss';
import Button from '../Button/Button';
import List from '../List/List';
import Filter from '../Filter/Filter';

function App() {
  const fruits = [
    { label: 'Яблоко', id: 1 },
    { label: 'Киви', id: 2 },
    { label: 'Груша', id: 3 },
    { label: 'Мандарин', id: 4 },
  ];

  return (
    <>
      <Filter />
      <Button className="button">Добавить задачу</Button>
      <List className="List" data={fruits} />
      <div className="App">Hello World</div>
    </>
  );
}

export default App;

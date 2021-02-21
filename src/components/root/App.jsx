import React, { Fragment } from 'react';
import './App.scss';
import Button from '../Button/Button';
import List from '../List/List';

function App() {
  return (
    <>
      <Button className="button">Добавить задачу</Button>
      <List className="List" />
      <div className="App">Hello World</div>
    </>
  );
}

export default App;

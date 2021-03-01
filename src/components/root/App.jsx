import React, { Fragment, useEffect, useState } from 'react';
import './App.scss';
import Button from '../Button/Button';
// import List from '../List/List';
import Filter from '../Filter/Filter';
import getFilters from '../api/filterApi/provider';

function App() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getFilters().then((data) => setFilters(data));
  }, []);

  console.log(filters);

  return (
    <>
      <Filter filters={filters} />
      <Filter filters={[{ id: 0, lable: 'text' }]} />
      <Button className="button">Добавить задачу</Button>
      {/* <List className="List" data={fruits} /> */}
      <div className="App">Hello World</div>
    </>
  );
}

export default App;

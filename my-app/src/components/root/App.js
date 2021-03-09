import React from 'react';
import './App.css';
import { getNews } from '../../api/News/provider';
// import { NavLink } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage'

function App() {
  getNews().then(data => console.log(data))

  return (
    <div className='App'>

    </div>
  );
}

export default App;

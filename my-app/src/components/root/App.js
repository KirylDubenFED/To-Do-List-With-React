import React from 'react';
import './App.css';
import Search from '../Search/Search'
import { getNews } from '../../api/News/provider';
// import { NavLink } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage'
import ShowText from '../ShowText/ShowText'

function App() {
  getNews().then(data => console.log(data))

  return (
    <div className='App'>

      <ShowText isGreetting={false} />
      <button>click</button>


      <Search />
      {/* <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
          <li><NavLink exact to="/contacts" activeClassName="selected">contacts</NavLink></li>
          <li><NavLink exact to="/about-us" activeClassName="selected">about us</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/contacts"><ContactsPage /></Route>
        <Route path="/about-us"><AboutPage /></Route>
        <Route path="*"><PageNotFound /></Route>
      </Switch> */}
    </div>
  );
}

export default App;

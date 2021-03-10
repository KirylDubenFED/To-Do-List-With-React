import React, { useState } from 'react';
import './App.css';
import Search from '../Search/Search'
import { getNews } from '../../api/News/provider';

function App() {
  const [articles, setArticles] = useState([]);
  getNews().then(setArticles)

  return (
    <div className='App'>
      <ul>
        {
          articles.map((article) => {
            const { id, title, link, imageUrl } = article;

            return (
              <li key={id}>
                <h3>{title}</h3>
                <a href={link}>Ссылка</a>
                <img src={imageUrl} alt={title}></img>
              </li>
            )
          })
        }
      </ul>
      <Search />
    </div>
  );
}

export default App;

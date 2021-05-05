import './App.scss';

import * as _ from 'lodash';
import axios from 'axios';

import * as React from 'react'

import { useState, useEffect, useContext } from 'react';

import Popular from './components/Popular';
import Featured from './components/Featured';
import { createResponseComposition } from 'msw';

const themes = {
  light: {
    background: "#eeeeee"
  },
  dark: {
    background: "#eeeeee"
  }
}
const ThemeContext = React.createContext(themes.light);

function App() {

  const [popularActivities, setPopularActivities] = useState([]);
  const [featuredActivities, setFeaturedActivities] = useState([]);

  const [filteredPopularActivities, setFilteredPopularActivities] = useState([]);
  const [filteredFeaturedActivities, setFilteredFeaturedActivities] = useState([]);

  function handleInputChange(event) {
    const term = event.target.value.toLowerCase();
    const isFiltering = term.trim().length > 0;

  console.log(isFiltering);

    setFilteredPopularActivities(isFiltering
      ? _.filter(popularActivities, p => p.title.toLowerCase().indexOf(term) != -1)
      : popularActivities);

    setFilteredFeaturedActivities(isFiltering
      ? _.filter(featuredActivities, p => p.title.toLowerCase().indexOf(term) != -1)
      : featuredActivities);
  }

  useEffect(() => {
    async function getPopularActivities() {
      const result = await axios('/json/carousel.json'); // const result = await axios('http://demo3136867.mockable.io/carousel');
      const data = result.data.data;
      console.log(data);
      setPopularActivities(data);
      setFilteredPopularActivities(data);
    }

    async function getFeaturedActivities() {
      const result = await axios('/json/featured.json'); // const result = await axios('http://demo3136867.mockable.io/featured');
      const data = result.data.data;

      setFeaturedActivities(data);
      setFilteredFeaturedActivities(data);
    }

    getPopularActivities();
    getFeaturedActivities();
  }, []);

 
  return (
      <div className="App"> 
        <header className="App-header">

          <input type="text"
            placeholder="Search for..."
            onChange={ handleInputChange }
            data-testid="input" />

          <div className="content-container">
            <Popular
              activities={filteredPopularActivities}
               />
            
            <Featured 
              activities={filteredFeaturedActivities} />
          </div>
        </header>
      </div>
  );
}

export default App;

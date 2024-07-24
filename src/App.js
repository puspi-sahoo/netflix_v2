import React, { useState, useEffect } from 'react';
import SeriesCard from './SeriesCard';
import './App.css';

const App = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/netflix-series')
      .then(response => response.json())
      .then(data => setSeriesList(data));
  }, []);

  return (
    <div className="App">
      <h1>Top 10 Netflix Series</h1>
      <div className="series-list">
        {seriesList.map((series, index) => (
          <SeriesCard key={index} series={series} />
        ))}
      </div>
    </div>
  );
};

export default App;

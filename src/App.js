import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import Card from 'react-bootstrap/Card'
// import YearFilter from './YearFilter';

const App = () => {
  const [film, setFilms] = useState([]);

  // make a filter for years movie was made


  return (
    <div className="App">
      <h1>Studio Ghibli</h1>
      {/* <YearFilter /> */}
      <MovieInfo film={film} />
      <MovieList setter={setFilms} />
      

    </div>
  );
}

export default App;

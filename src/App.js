import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
// import YearFilter from './YearFilter';

const App = () => {
  const [film, setFilms] = useState([]);

  // make a filter for years movie was made


  return (
    <div className="App">
      <h1>Studio Ghibli</h1>
      {/* <YearFilter /> */}
      <MovieList setter={setFilms} />
      <MovieInfo film={film} />

    </div>
  );
}

export default App;

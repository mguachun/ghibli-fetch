import React, {useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import MovieInfo from './MovieInfo';

const App = () => {
  const [film, setFilms] = useState([]);

  // make a filter for years movie was made

  return (
    <div className="App">
      <h1>Studio Ghibli</h1>
      <MovieCard setter={setFilms}/>
      <MovieInfo film={film}/>

    </div>
  );
}

export default App;

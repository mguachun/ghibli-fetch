import React, {useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';

const App = () => {
  const [film, setFilms] = useState([]);


  return (
    <div className="App">
      <h1>Studio Ghibli</h1>
      <MovieCard setter={setFilms}/>

    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  return (
    <>
      <h1>The Shoppies</h1>
      <Search movies={movies} setMovies={setMovies} search={search} setSearch={setSearch}/>
      <Results search={search}/>
      <Nominations/>
    </>
  );
}

export default App;
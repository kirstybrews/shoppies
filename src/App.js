import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';
const MOVIES = `http://www.omdbapi.com/?type=movie&apikey=${process.env.REACT_APP_MOVIE_API}&s=`

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [nominations, setNominations] = useState([]);
  const [counter, setCounter] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(null)

  useEffect(() => {
    fetch(MOVIES + search + "&page=" + counter)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if (data.Search) {
                setMovies(data.Search)
                setNumberOfPages(Math.ceil(data.totalResults / 10))
            }
        })
  }, [search, counter])

  return (
    <>
      <header>
        <h1>The Shoppies</h1>
      </header>
      <Search search={search} setSearch={setSearch}/>
      <Results numberOfPages={numberOfPages} counter={counter} setCounter={setCounter} search={search} movies={movies} nominations={nominations} setNominations={setNominations}/>
      <Nominations nominations={nominations} setNominations={setNominations}/>
    </>
  );
}

export default App;

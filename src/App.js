import React, {useState, useEffect, useRef} from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';
import './App.css';
import Confetti from 'react-confetti';
const MOVIES = `https://www.omdbapi.com/?type=movie&apikey=${process.env.REACT_APP_MOVIE_API}&s=`

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [nominations, setNominations] = useState([]);
  const [counter, setCounter] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    fetch(MOVIES + search + "&page=" + counter)
        .then(r => r.json())
        .then(data => {
            if (data.Search) {
                setMovies(data.Search)
                setNumberOfPages(Math.ceil(data.totalResults / 10))
            }
        })
  }, [search, counter])

  useEffect(() => {
    setHeight(confettiRef.clientHeight);
    setWidth(confettiRef.clientWidth);
  }, [])

  return (
    <div ref={confettiRef}>
      {nominations.length === 5 
      ? <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={400}
      />
      : null}
      
      <header className="w3-container w3-section">
        <h1>The Shoppies</h1>
      </header>
      <Search search={search} setSearch={setSearch}/>
      <main className="flex-container">
        <Results numberOfPages={numberOfPages} counter={counter} setCounter={setCounter} search={search} movies={movies} nominations={nominations} setNominations={setNominations}/>
        <Nominations nominations={nominations} setNominations={setNominations}/>
      </main>
    </div>
  );
}

export default App;

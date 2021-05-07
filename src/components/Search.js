import React, {useEffect} from 'react';

const MOVIES = `http://www.omdbapi.com/?type=movie&apikey=${process.env.REACT_APP_MOVIE_API}&s=`

const Search = ({setMovies, search, setSearch}) => {

    useEffect(() => {
        fetch(MOVIES + search)
            .then(r => r.json())
            .then(data => {
                if (data.Search) {
                    setMovies(data.Search)
                }
            })
    }, [search])


    return (
        <div>
            <div>Movie title</div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}></input>
        </div>
    )
}

export default Search;
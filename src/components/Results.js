import React from 'react';
import Movie from './Movie';

const Results = ({search, movies, nominations}) => {
    return (
        <div>
            <h3>Results for "{search}"</h3>
            <ul>
                {movies.map(movie => <Movie key={movie.imdbID} movie={movie} nominations={nominations}/>)}
            </ul>
        </div>
    )
}

export default Results;
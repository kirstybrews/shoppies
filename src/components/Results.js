import React from 'react';
import Movie from './Movie';

const Results = ({search, movies}) => {
    return (
        <div>
            <h3>Results for "{search}"</h3>
            <ul>
                {movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
            </ul>
        </div>
    )
}

export default Results;
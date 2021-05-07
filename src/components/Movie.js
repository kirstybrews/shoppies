import React from 'react';

const Movie = ({movie, nominations}) => {
    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button disabled={nominations.includes(movie)}>Nominate</button>
        </li>
    )
}

export default Movie;
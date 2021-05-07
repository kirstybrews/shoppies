import React from 'react';

const Movie = ({movie}) => {
    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button>Nominate</button>
        </li>
    )
}

export default Movie;
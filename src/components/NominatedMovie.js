import React from 'react';

const NominatedMovie = ({movie}) => {
    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button>Remove</button>
        </li>
    )
}

export default NominatedMovie;
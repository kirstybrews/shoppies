import React from 'react';

const NominatedMovie = ({movie, setNominations, nominations}) => {
    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button onClick={() => setNominations(nominations.filter(nomination => nomination !== movie))}>Remove</button>
        </li>
    )
}

export default NominatedMovie;
import React from 'react';

const Movie = ({movie, nominations, setNominations}) => {

    const clickHandler = () => {
        if (nominations.length < 5) {
            setNominations([...nominations, movie])
        }
    }
    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button onClick={clickHandler} disabled={null}>Nominate</button>
        </li>
    )
}

export default Movie;
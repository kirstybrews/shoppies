import React from 'react';

const Movie = ({movie, nominations, setNominations}) => {

    const clickHandler = () => {
        if (nominations.length < 5) {
            setNominations([...nominations, movie])
        }
    }

    const checkForMovie = () => {
        let disabled = false;
        for (let i = 0; i < nominations.length; i++) {
            if (nominations[i].imdbID === movie.imdbID) {
                disabled = true;
            }
        }
        return disabled;
    }

    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button onClick={clickHandler} disabled={checkForMovie()}>Nominate</button>
        </li>
    )
}

export default Movie;
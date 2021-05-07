import React, {useState} from 'react';

const Movie = ({movie, nominations, setNominations}) => {
    const [disabled, setDisabled] = useState(false)

    const clickHandler = () => {
        if (nominations.length < 5) {
            setNominations([...nominations, movie])
            setDisabled(true)
        }
    }
    return (
        <li>
            <span>{movie.Title} ({movie.Year})</span>
            <button onClick={clickHandler} disabled={disabled}>Nominate</button>
        </li>
    )
}

export default Movie;
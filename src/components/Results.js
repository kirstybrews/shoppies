import React from 'react';
import Movie from './Movie';

const Results = ({search, movies, nominations, setNominations, counter, numberOfPages, setCounter}) => {

    return (
        <section id="results" class="w3-light-grey flex-item w3-mobile">
            <h3>Results for "{search}"</h3>
            <ul>
                {movies.map(movie => <Movie key={movie.imdbID} movie={movie} nominations={nominations} setNominations={setNominations}/>)}
            </ul>
            {counter > 1 ? <button id="previous" onClick={() => setCounter(counter -= 1)}>Previous</button> : null}
            {counter < numberOfPages ? <button onClick={() => setCounter(counter += 1)}>Next</button> : null}
            
        </section>
    )
}

export default Results;
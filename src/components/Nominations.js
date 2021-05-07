import React from 'react';
import NominatedMovie from './NominatedMovie';

const Nominations = ({nominations}) => {
    return (
        <div>
            <h3>Nominations</h3>
            <ul>
                {nominations.map(nomination => <NominatedMovie key={nomination.imdbID} movie={nomination}/>)}
            </ul>
        </div>
    )
}

export default Nominations;
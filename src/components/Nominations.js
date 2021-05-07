import React from 'react';
import NominatedMovie from './NominatedMovie';

const Nominations = ({nominations, setNominations}) => {
    return (
        <div>
            <h3>Nominations</h3>
            <ul>
                {nominations.map(nomination => <NominatedMovie key={nomination.imdbID} movie={nomination} setNominations={setNominations} nominations={nominations}/>)}
            </ul>
        </div>
    )
}

export default Nominations;
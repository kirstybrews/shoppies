import React from 'react';
import NominatedMovie from './NominatedMovie';

const Nominations = ({nominations, setNominations}) => {
    return (
        <section class="w3-light-grey flex-item w3-mobile">
            <h3>Nominations</h3>
            {nominations.length === 5 ? <div>You have 5 nominations!</div> : null}
            <ul>
                {nominations.map(nomination => <NominatedMovie key={nomination.imdbID} movie={nomination} setNominations={setNominations} nominations={nominations}/>)}
            </ul>
        </section>
    )
}

export default Nominations;
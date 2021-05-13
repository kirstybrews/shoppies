import React from 'react';
import NominatedMovie from './NominatedMovie';
import FiveNoms from './FiveNoms.png';

const Nominations = ({nominations, setNominations}) => {
    return (
        <section className="w3-light-grey flex-item w3-mobile">
            <h3>Nominations</h3>
            {nominations.length === 5 ? <img src={FiveNoms} alt="You have 5 nominations!"/> : null}
            <ul>
                {nominations.map(nomination => <NominatedMovie key={nomination.imdbID} movie={nomination} setNominations={setNominations} nominations={nominations}/>)}
            </ul>
        </section>
    )
}

export default Nominations;
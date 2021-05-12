import React from 'react';

const Search = ({search, setSearch}) => {


    return (
        <section>
            <div>Movie title</div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}></input>
        </section>
    )
}

export default Search;
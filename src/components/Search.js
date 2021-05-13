import React from 'react';

const Search = ({search, setSearch}) => {


    return (
        <section class="w3-container w3-section">
            <div>Search by Movie Title</div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}></input>
        </section>
    )
}

export default Search;
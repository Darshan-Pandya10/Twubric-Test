import React, { useState } from 'react';

function SortFollowers({ sortListBy }) {
    const [sortBy, setSortBy] = useState('');
  
    const handleSort = (e) => {
        const sortCriteria = e.target.value;
        setSortBy(sortCriteria);
        sortListBy(sortCriteria);
    };


    return (
        <section className='sort-section'>
            <h1 className='text-lg tracking-wider font-semibold'>Sort By</h1>
            <article>
                <button value='Twubric' className={`btn ${sortBy === 'Twubric' ? 'border-[#00A9FF]' : ''}`} onClick={handleSort}>Twubric Score</button>
                <button value='Friends' className={`btn ${sortBy === 'Friends' ? 'border-[#00A9FF]' : ''}`} onClick={handleSort}>Friends</button>
                <button value='Influence' className={`btn ${sortBy === 'Influence' ? 'border-[#00A9FF]' : ''}`} onClick={handleSort}>Influence</button>
                <button value='Chirpiness' className={`btn ${sortBy === 'Chirpiness' ? 'border-[#00A9FF]' : ''}`} onClick={handleSort}>Chirpiness</button>
            </article>
           
        </section>
    )
}

export default SortFollowers;

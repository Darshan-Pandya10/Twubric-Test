import React , {useState} from 'react'

function FilterByDate({filterByDate}) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    
    const handleDateFilter = () => {
        filterByDate(startDate, endDate);
    };


  return (
    <section className='my-6 md:my-0'>
    <article>
        <h1 className='text-lg tracking-wider font-semibold'>Filter by Join Date</h1>
        <input
            type='date' 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            className='border-2 bg-black text-white  border-solid border-white m-1 p-2'
        />
        <input 
            type='date' 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            className='border-2  bg-black text-white border-solid border-white m-1 p-2'
        />
        <button onClick={handleDateFilter} className='btn'>Filter</button>
    </article>
    </section>
  );
}

export default FilterByDate

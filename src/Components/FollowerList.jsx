import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';
import SortFollowers from './SortFollowers';
import FilterByDate from './FilterByDate';
import { RiH1 } from 'react-icons/ri';

const url = 'https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json';

function FollowerList() {
    const [list, setList] = useState([]);
    const [sortedList, setSortedList] = useState([]);

    const getFollowerList = async () => {
        const response = await axios.get(url);
        setList(response.data);
        setSortedList(response.data);
    };

    useEffect(() => {
        getFollowerList();
    }, []);

    const removePerson = (uid) => {
        const newList = list.filter((person) => person.uid !== uid);
        setList(newList);
        setSortedList(newList);
    };

    const sortListBy = (criteria) => {
        const sorted = [...sortedList].sort((a, b) => {
            if (criteria === 'Twubric') {
                return b.twubric.total - a.twubric.total;
            } else if (criteria === 'Friends') {
                return b.twubric.friends - a.twubric.friends;
            } else if (criteria === 'Influence') {
                return b.twubric.influence - a.twubric.influence;
            } else if (criteria === 'Chirpiness') {
                return b.twubric.chirpiness - a.twubric.chirpiness;
            }
            return 0;
        });
        setSortedList(sorted);
    };

    const filterByDate = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const filtered = list.filter((person) => {
        const joinDate = new Date(person.join_date * 1000);
        return joinDate >= startDate && joinDate <= endDate;
        });
        setSortedList(filtered);
    };

    if(sortedList.length === 0){
        return (
            <section className='p-8 mb-16 min-h-screen'>
            
            <section className='followerlist flex justify-center items-center flex-wrap'>
                <h1 className='text-2xl font-semibold text-red-400 capitalize tracking-widest'>List Is Empty!</h1>
            </section>
        </section>
        )
    }

    return (
        <section className='p-8 mb-16'>
            <article className='flex flex-col md:flex-row border-2 border-solid border-black p-4 justify-around items-center my-16'>
            <SortFollowers sortListBy={sortListBy} filterByDate={filterByDate} />
            <FilterByDate filterByDate={filterByDate}/>
            </article>
            <section className='followerlist flex justify-center items-center flex-wrap'>
                {sortedList.map((follower) => (
                    <FollowerCard key={follower.uid} follower={follower} removePerson={removePerson} />
                ))}
            </section>
        </section>
    );
}

export default FollowerList;

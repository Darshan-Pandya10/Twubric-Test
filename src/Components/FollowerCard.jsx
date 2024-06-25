import React from 'react'
import { RiUserUnfollowLine } from "react-icons/ri";
function FollowerCard({follower , removePerson}) {
    const {fullname , twubric , image , join_date , uid} = follower
    const { total , friends , influence , chirpiness } = twubric

    const date = new Date(join_date * 1000);

    const year = date.getUTCFullYear();
    const month = date.toLocaleString('default', { month: 'short' }); 
    const day = date.getUTCDate();

    const handleRemove = (uid) => {
        removePerson(uid)
    }


  return (
    <section className='follower-card hover:scale-105 transition-all min-w-fit min-h-fit p-4 m-8 cursor-pointer bg-[#393E46] rounded-lg shadow-md'>
      <div className='flex justify-between items-center'>
      <h1 className='text-base tracking-wider'>{fullname}</h1>
      <p className='text-base tracking-wider'>Total : {total}</p>
      </div>
 
      <img className='mx-auto my-4 rounded-full w-[5rem] h-[5rem] object-cover border-4 border-solid border-[#232931]' src={image} alt="" />

      <article className="twubric-box p-4 m-4 rounded-lg bg-[#222831] flex items-center justify-around">
        <section className='cell'>
            <p>{friends}</p>
            <h1>Friends</h1>
        </section>
        <section className='cell px-4 border-r-2 border-l-2 border-solid border-white'>
            <p>{influence}</p>
            <h1>Influence</h1>
        </section>
        <section className='cell'>
            <p>{chirpiness}</p>
            <h1>Chirpiness</h1>
        </section>
      </article>

        <article  className='flex justify-between items-center'>
            <h1 className='tracking-wide text-base font-semibold'>{`${month}${day}, ${year}`}</h1>
            <button className='bg-[#222831] p-2 rounded-full' onClick={() => handleRemove(uid)}><RiUserUnfollowLine size={24} /></button>
        </article>
    </section>
  )
}

export default FollowerCard

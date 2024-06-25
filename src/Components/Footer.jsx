import React from 'react'
import { FaCode } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='footer w-screen bg-[#222831] flex items-center justify-between px-6 py-3'>
       <main className="logo">
        <FaCode size={30} className='cursor-pointer' />
      </main>
      <main className="socials inline-block">
          <a href='www.linkedin.com/in/darshanpandya811' className='bg-[#151515] hover:scale-110 duration-50 hover:bg-[#000000] p-3 rounded-full inline-block m-2 text-white '><GrLinkedinOption size={28}/></a>
          <a href="https://github.com/Darshan-Pandya10" className='bg-[#151515] hover:scale-110 duration-50  hover:bg-[#000000]  p-3 rounded-full inline-block m-2 text-white '><FaGithub size={28}/></a>
      </main>
    </section>
  )
}

export default Footer
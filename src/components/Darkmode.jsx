import React, { useEffect } from 'react'
import { FaCloudSun } from 'react-icons/fa';

//aos
import AOS from 'aos'
import "aos/dist/aos.css"

const Darkmode = () => {

   useEffect(() => {
      AOS.init({duration:1200})
   }) 

  return (
    <div className='flex items-center bg-opacity-75 overflow-hidden bg-white py-[2px] px-[2px] gap-[2px] rounded-3xl'>
        <button data-aos="fade-left" className='p-1 relative z-10 bg-green outline-none text-white rounded-full'><FaCloudSun /></button>
        <p data-aos="fade-right" className='text-green font-semibold text-xs px-1'>Darkmode</p>
    </div>
  )
}

export default Darkmode
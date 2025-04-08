import React, { useEffect } from 'react'
import { FaCloudMoon } from 'react-icons/fa'
//aos
import AOS from 'aos'
import "aos/dist/aos.css"

const Lighttoggle = () => {

   useEffect(() => {
        AOS.init({duration:1200})
     }) 

  return (
     <div className='flex items-center  overflow-hidden bg-opacity-75 bg-white py-[2px] px-[2px] gap-[2px] rounded-3xl'>
           <p data-aos="fade-left" className='text-green font-semibold text-xs px-1'>Lightmode</p>
           <button data-aos="fade-right" className='p-1 bg-green outline-none text-white rounded-full'><FaCloudMoon /></button> 
        </div>
  )
}

export default Lighttoggle
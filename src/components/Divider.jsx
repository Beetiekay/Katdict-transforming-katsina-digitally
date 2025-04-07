import React, { useEffect } from 'react'
import logo from "../assets/katdict.png"
//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Divider = () => {
      useEffect(() => {
          AOS.init({duration:6200})
       }) 
  return (
    <div className='w-[100%] flex overflow-hidden'>
        <div data-aos="fade-right" className='w-[50%] h-[100vh] bg-green rounded-r-2xl'></div>
        <div data-aos="fade-left" className='w-[50%] h-[100vh] bg-green flex justify-center items-center rounded-l-2xl'>
            <div className='border-4 w-28 py-4 px-3 animate-spin absolute lg:scale-150 md:scale-150 scale-110 -left-[4rem] border-white p-2 rounded-full outline-none'><img src={logo} className='w-[100%]'/></div>
        </div>
    </div>
  )
}

export default Divider
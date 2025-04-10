import React, { useEffect } from 'react'
import logo from "../assets/katdict.png"
//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Divider = () => {
      useEffect(() => {
          AOS.init({duration:1500})
       }) 
  return (
    <div className='w-[100%] flex overflow-hidden'>
        <div data-aos="slide-right" className='w-[50%] h-[100vh] bg-green'></div>
        <div data-aos="slide-left" className='w-[50%] h-[100vh] bg-green flex justify-center items-center'>
            <div className='border-4 w-28 py-4 px-3 animate-spin absolute lg:scale-150 md:scale-150 scale-110 -left-[4rem] border-white p-2 rounded-full outline-none'><img src={logo} className='w-[100%]'/></div>
        </div>
    </div>
  )
}

export default Divider
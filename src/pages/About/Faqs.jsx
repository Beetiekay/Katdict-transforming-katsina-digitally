import React, { useEffect } from 'react'
//aos
import AOS from 'aos';
import "aos/dist/aos.css"
import video from "../About/video/katdict.mp4"
import Dropd from './Dropd';

const Faqs = () => {
   useEffect(() => {
          AOS.init({duration:1200})
       })
  return (
    <div>
    <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
      <div className='mt-56'>
           <h1 data-aos="fade-right" className='lg:text-2xl md:text-2xl text-xl mt-5 lg:px-10 md:px-8 px-4 lg:text-center md:text-center text-start mb-5'>FREQUENTLY ASKED <span className='font-bold text-green'>QUESTIONS</span></h1> 
           <div className='lg:px-0 md:px-0 px-2'><video src={video} controls className='rounded-2xl'/></div>
      </div>
    </div>
    <Dropd/>
    </div>
  )
}

export default Faqs
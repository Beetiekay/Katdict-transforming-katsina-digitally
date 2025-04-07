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
      <div className='mt-56 flex justify-around flex-wrap items-center gap-5'>
        <div>
          <h1  className='lg:text-2xl dark:text-white md:text-2xl text-xl mt-5 lg:px-4 md:px-4 px-4 lg:text-center md:text-center text-start mb-4'><span className='font-bold text-green'>QUESTIONS?</span> We'are Glad You Asked</h1> 
           <p  className='px-4 dark:text-white lg:text-sm md:text-sm text-xs font-semibold'>Here's Is a little more about how we operate. Got a more<br/> specific Questions.</p>
        </div>
           
           <div data-aos="zoom-in" className='lg:px-0 md:px-0 px-5'><video src={video} controls className='rounded-2xl'/></div>
      </div>
    </div>
    <Dropd/>
    </div>
  )
}

export default Faqs
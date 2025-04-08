import React, { useEffect } from 'react'
import image from "../assets/ktsmart.png"
import map from "../assets/map.png"
//aos
import AOS from 'aos';
import "aos/dist/aos.css"
import Button from './Button';
import Marquee from 'react-fast-marquee';
import slide1 from "../assets/i1.png"
import slide2 from "../assets/i2.png"
import slide3 from "../assets/i3.jpeg"
import slide4 from "../assets/i4.jpg"
import slide5 from "../assets/i5.webp"
import slide6 from "../assets/federal.png"
import slide7 from "../assets/nitda.png"
import slide8 from "../assets/kirkira.png"

const Downlaod = () => {
      useEffect
      (() => {
            AOS.init({duration:1200})
         })
  return (
    <div className='relative overflow-hidden'>
    <img src={map} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-15'/>
     <div className='lg:flex md:flex block lg:justify-around md:justify-between lg:gap-0 md:gap-2 gap-0 lg:px-6 md:px-4 px-4 lg:py-5 md:py-8 py-2 relative'>
     <div data-aos="zoom-in" className='lg:hidden md:hidden flex'><img src={image} className='rounded-xl hover:scale-110 w-full h-[60vh] object-cover'/></div>

         <div className='flex items-center'>
           <div>
           <p  className='font-semibold dark:text-white lg:py-4 md:py-4 py-1  pt-16 text-start lg:text-lg md:text-lg text-sm opacity-85'>HOW DO WE <span className='text-green'> WORK?</span></p>
           <div data-aos="fade-right"  className='flex dark:text-white justify-start mb-4'><h1 className=' lg:text-4xl md:text-4xl text-2xl font-semibold text-start mb-4'>DOWNLOAD OUR <span className='text-green'>DIGITAL<br className='lg:flex md:flex hidden'/> TRANSFORMATION STRATEGIC <br className='lg:flex md:flex hidden'/> BLUEPRINT.</span> </h1></div>
            <Button label={"Download Now (2MB)"}/>
        </div>
        </div>
         
         <div data-aos="zoom-in" className='lg:flex md:flex hidden'><img src={image} className='rounded-xl hover:scale-110 w-full md:h-[40vh] lg:h-[60vh] object-cover'/></div>
      </div>
      
       <div className=' w-[100%] px-8 py-6'>
        <Marquee className='flex justify-center '>
          <div className='grid grid-cols-8 lg:gap-9 md:gap-9 gap-4 '>
          <img src={slide1} className='w-24 h-12 object-cover dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20 '/>
          <img src={slide2} className='w-20 dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          <img src={slide3} className='w-20  h-12 object-cover dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          <img src={slide4} className='w-32 dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          <img src={slide5} className='w-20 dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          <img src={slide6} className='w-32 dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          <img src={slide7} className='w-32 dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          <img src={slide8} className='w-32 dark:bg-white bg-green p-2 px-4 rounded-2xl bg-opacity-20'/>
          </div>
        </Marquee>
        </div>
     </div>
  )
}

export default Downlaod
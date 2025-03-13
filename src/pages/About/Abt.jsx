import React, { useEffect } from 'react'
import Downlaod from '../../components/Downlaod'
import Footer from '../../components/Footer';
import Details from './Details';
import katdict from "../../assets/katdict3.jpg"

//aos
import AOS from 'aos';
import "aos/dist/aos.css"

const Abt = () => {
    useEffect(() => {
        AOS.init({duration:1200})
     })
  return (
      <div className='w-[100%] overflow-hidden'>
        <div className='min-h-[100vh] w-[100%] lg:px-0 md:px-0 px-4 flex justify-center items-center relative'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:bg-opacity-0 md:bg-opacity-0 bg-opacity-100 bg-green py-5 rounded-2xl mt-44'>
          <div>
          <h1 data-aos="fade-right" className='lg:text-4xl lg:text-black md:text-black text-white md:text-2xl text-xl lg:px-10 md:px-8 px-4 lg:text-start md:text-center text-start mb-5'>About <span className='font-bold lg:opacity-100 md:opacity-100 opacity-60 lg:text-green md:text-green text-black'>KATDICT</span>
          </h1>
          <div data-aos="zoom-in" className='flex justify-center  hover:translate-y-6'>
            <h1 className='lg:w-[90%] md:w-[95%] w-[95%] mb-4  hover:bg-opacity-100  hover:-mt-6 duration-700 ease-in-out hover:text-green lg:py-16 md:py-4 py-4 lg:px-4 md:px-4 px-2 rounded-2xl lg:text-lg md:text-lg text-sm'>
            KATDICT is Pioneering the Digital Transformation of Katsina State, our activities cut across providing ICT services to the Government, fostering the growth and development of Technology and Innovation Hubs and making Government services available to the populace.</h1>
          </div>
          </div>

          <div data-aos="fade-up" className='flex justify-center'>
            <img src={katdict} className='object-cover w-[90%] lg:h-[50vh] md:h-[30vh] lg:hover:-translate-x-8 md:hover:-translate-x-8 hover:-translate--2  duration-700 hover:scale-110  rounded-2xl saturate-150 -hue-rotate-30'/>
           </div>
        </div>
        </div>  
      <Details/>
      <Downlaod/>
      <Footer/>
    </div>
  )
}

export default Abt
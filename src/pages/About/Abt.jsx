import React, { useEffect } from 'react'
import Downlaod from '../../components/Downlaod'
import Footer from '../../components/Footer';
import Details from './Details';
import katdict from "../../assets/katdick3.jpg"

//aos
import AOS from 'aos';
import "aos/dist/aos.css"

const Abt = () => {
    useEffect(() => {
        AOS.init({duration:1200})
     })
  return (
      <div>
        <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-28'>
          <div>
          <h1 data-aos="fade-right" className='lg:text-4xl md:text-2xl text-xl lg:px-10 md:px-8 px-4 lg:text-start md:text-center text-start mb-5'>About <span className='font-bold text-green'>KATDICT</span>
          </h1>
          <div data-aos="zoom-in" className='flex justify-center  hover:translate-y-6'>
            <h1 className='lg:w-[90%] md:w-[95%] w-[95%] mb-4  hover:bg-opacity-100  hover:-mt-6 duration-700 ease-in-out hover:text-white bg-green bg-opacity-40 lg:py-14 md:py-4 lg:px-4 md:px-4 px-2 rounded-2xl lg:text-lg md:text-lg text-sm'>
            KATDICT is Pioneering the Digital Transformation of Katsina State, our activities cut across providing ICT services to the Government, fostering the growth and development of Technology and Innovation Hubs and making Government services available to the populace.</h1>
          </div>
          </div>

          <div data-aos="fade-up" className='flex justify-center'>
            <img src={katdict} className='object-cover w-[90%] lg:h-72 md:h-[35vh] lg:hover:-translate-x-8 md:hover:-translate-x-8 hover:-translate-x-2  duration-700 hover:scale-110  rounded-2xl saturate-150 -hue-rotate-30'/>
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
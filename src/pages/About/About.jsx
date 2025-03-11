import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import bg from "../../assets/dg (2).jpeg"

//aos
import AOS from 'aos';
import "aos/dist/aos.css"
import Downlaod from '../../components/Downlaod'
import Footer from '../../components/Footer';

const About = () => {
   useEffect(() => {
        AOS.init({duration:1200})
     })

  return (
    <div className='w-full relative'>
      <img src={bg} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-20 blur-[1.3px]'/>
      <div>
       <div className='absolute z-20'> <Navigation/></div>

       <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
        <div>
          <h1 data-aos="fade-right" className='lg:text-4xl md:text-2xl text-xl lg:px-4 md:px-4 px-4 lg:text-center md:text-center text-start mb-5'>About <span className='font-bold text-green'>KATDICT</span></h1>
          <div data-aos="fade-up" className='flex justify-center  hover:translate-y-6'>
            <h1 className='lg:w-[60%] md:w-[80%] w-[95%] text-cente hover:bg-opacity-100  hover:-mt-6 duration-700 ease-in-out hover:text-white bg-green bg-opacity-40 py-4 lg:px-4 md:px-4 px-2 rounded-2xl lg:text-lg md:text-lg text-sm'>
            KATDICT is Pioneering the Digital Transformation of Katsina State, our activities cut across providing ICT services to the Government, fostering the growth and development of Technology and Innovation Hubs and making Government services available to the populace.
            </h1>
          </div>

        </div>
        </div>
      </div>
      <Downlaod/>
      <Footer/>
    </div>
  )
}

export default About
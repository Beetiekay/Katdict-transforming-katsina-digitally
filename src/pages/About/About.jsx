import React from 'react'
import Navigation from '../../components/Navigation'
import bg from "../../assets/dg (2).jpeg"


const About = () => {
  return (
    <div className='w-full relative'>
           <img src={bg} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-20 blur-[1.3px]'/>
      <div>
       <div className='absolute z-20'> <Navigation/></div>

       <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
        <div>
          <h1 className='text-4xl text-center mb-5'>About <span className='font-bold text-green'>KATDICT</span></h1>
          <div className='flex justify-center'>
            <h1 className='w-[60%] text-cente bg-green bg-opacity-40 py-4 px-4 rounded-2xl text-lg'>
            KATDICT is Pioneering the Digital Transformation of Katsina State, our activities cut across providing ICT services to the Government, fostering the growth and development of Technology and Innovation Hubs and making Government services available to the populace.
            </h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
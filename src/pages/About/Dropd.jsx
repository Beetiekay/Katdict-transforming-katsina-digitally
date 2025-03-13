import React from 'react'
import {FaChevronCircleDown} from "react-icons/fa"

const Dropd = () => {
  return (
    <div className='w-full  py-0 lg:px-10 md:px-8 px-4 flex justify-center'>
      <div className='lg:w-[50%] md:w-[90%] w-full'>
        {/* drop down */}
        <div className='relative  mb-6 hover:scale-105'>
          <input type='checkbox' className='peer absolute w-full z-10 h-8 opacity-0 right-0'/>
          <div className='absolute right-4 top-2 text-white opacity-80 peer-checked:rotate-180 duration-500 cursor-pointer'><FaChevronCircleDown size={24}/></div>
          <div className=''><h1 className='bg-green text-white px-4 py-2 rounded-2xl lg:text-lg md:text-lg text-sm font-semibold'>What's KATDICT Primary Role?</h1></div>
          {/* content */}
          <div className=' peer-checked:hidden py-4 flex duration-500 overflow-hidden'>
           <p className='text-sm opacity-80 py-2 px-2'>
           KATDICT, the Katsina Directorate of Information and Communications Technology, leads the digital transformation of Katsina State, implementing and managing information and communications technology initiatives.
           </p>
          </div>
        </div>
        {/* drop down */}
        <div className='relative mb-6 hover:scale-105'>
          <input type='checkbox' className='peer absolute w-full z-10 h-8 opacity-0 right-0'/>
          <div className='absolute right-4 top-2 text-white opacity-80 peer-checked:rotate-180 duration-500 cursor-pointer'><FaChevronCircleDown size={24}/></div>
          <div className=''><h1 className='bg-green text-white rounded-2xl px-4 py-2 lg:text-lg md:text-lg text-sm  font-semibold'>Key Initiatives For Digital Transformation</h1></div>
          {/* content */}
          <div className=' peer-checked:flex hidden py-4 duration-500 overflow-hidden'>
           <p className='text-sm opacity-80 py-2 px-2'>
           KATDICT is engaged in diverse initiatives, spanning ICT infrastructure development, e-governance services, cybersecurity measures, ICT policy formulation, ecosystem empowerment, digital literacy programs, and the promotion of technology innovation.
           </p>
          </div>
        </div>

        <div className='relative mb-6 hover:scale-105'>
          <input type='checkbox' className='peer absolute w-full z-10 h-8 opacity-0 right-0'/>
          <div className='absolute right-4 top-2 text-white opacity-80 peer-checked:rotate-180 duration-500 cursor-pointer'><FaChevronCircleDown size={24}/></div>
          <div className=''><h1 className='bg-green text-white rounded-2xl px-4 py-2 lg:text-lg md:text-lg text-sm  font-semibold'>Citizen Benefit From KATDICT'S Service</h1></div>
          {/* content */}
          <div className=' peer-checked:flex hidden py-4  duration-500 overflow-hidden'>
           <p className='text-sm opacity-80 py-2 px-2'>
           Smart Katsina's citizens benefit through improved access to government services, enhanced digital literacy programs, and increased efficiency in public service delivery. KATDICT aims to make technology accessible and beneficial to the community.
           </p>
          </div>
        </div>

        <div className='relative  bg-opacity-20 mb-6'>
          <input type='checkbox' className='peer absolute w-full z-10 h-8 opacity-0 right-0'/>
          <div className='absolute right-4 top-2 text-white opacity-80 peer-checked:rotate-180 duration-500 cursor-pointer'><FaChevronCircleDown size={24}/></div>
          <div className=''>
            <h1 className='bg-green rounded-2xl text-white px-4 py-2 lg:text-lg md:text-lg text-sm  font-semibold'>Is KATDICT Focusing On Digital Literacy And Skills Development?</h1>
          </div>
          {/* content */}
          <div className=' peer-checked:flex hidden py-4 duration-500 overflow-hidden'>
           <p className='text-sm opacity-80 py-2 px-2'>
           Absolutely. KATDICT actively promotes digital literacy through comprehensive training programs and workshops, fostering technology skills and awareness among government employees and the broader community.
           </p>
          </div>
        </div>

        <div className='relative hover:scale-105  mb-6'>
          <input type='checkbox' className='peer absolute w-full z-10 h-8 opacity-0 right-0'/>
          <div className='absolute right-4 top-2 text-white opacity-80 peer-checked:rotate-180 duration-500 cursor-pointer'><FaChevronCircleDown size={24}/></div>
          <div className=''>
            <h1 className='bg-green text-white rounded-2xl px-4 py-2 lg:text-lg md:text-lg text-sm  font-semibold'>Role In Economic Development</h1>
          </div>
          {/* content */}
          <div className=' peer-checked:flex hidden py-4  duration-500 overflow-hidden'>
           <p className='text-sm opacity-80 py-2 px-2'>
           KATDICT contributes to economic development by nurturing a digital economy, supporting technology startups, and implementing initiatives that foster innovation and growth in the ICT sector.
           </p>
          </div>
        </div>

        <div className='relative hover:scale-105 mb-6'>
          <input type='checkbox' className='peer absolute w-full z-10 h-8 opacity-0 right-0'/>
          <div className='absolute right-4 top-2  text-white opacity-80 peer-checked:rotate-180 duration-500 cursor-pointer'><FaChevronCircleDown size={24}/></div>
          <div className=''>
            <h1 className='bg-green text-white rounded-2xl px-4 py-2 lg:text-lg md:text-lg text-sm  font-semibold'>Providing Feedback Or Suggestion?</h1>
          </div>
          {/* content */}
          <div className=' peer-checked:flex hidden py-4  duration-500 overflow-hidden'>
           <p className='text-sm opacity-80 py-2 px-2'>
             Citizens can share feedback or suggestions through official channels, such as the KATDICT website or by reaching out directly through established contact points.
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropd
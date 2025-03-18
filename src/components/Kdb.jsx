import React from 'react'
import Navigation from './Navigation'
import map from "../assets/map.png"

const Kdb = () => {
  return (
    <div className='w-full min-h-full relative overflow-hidden'>
    <img src={map} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-15'/>
    <div className='relative'>
    <div className='absolute z-20'><Navigation/></div>

      <div className='py-40 lg:px-8 md:px-8 px-2'>
          <h1 className='lg:text-7xl md:text-7xl text-green text-4xl text-center font-semibold mb-14'>A vision for a smarter world<br/>
          An ARM case study
          </h1>
      </div>
      </div>
    </div>
  )
}

export default Kdb
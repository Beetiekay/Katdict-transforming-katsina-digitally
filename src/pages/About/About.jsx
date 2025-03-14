import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Abt from './Abt';
import Team from './Team';
import Faqs from './Faqs';


const About = () => {

    const [state, setState] = useState(1)

  return (
    <div className='w-full overflow-hidden relative'>
      <div>
       <div className='absolute z-20'> <Navigation/></div>
       <div className="lg:overflow-hidden overflow-x-scroll md:overflow-hidden">
            
            <div className='flex justify-center mb-4'>
            <div className='absolute z-10 lg:top-56 md:top-56 top-40 bg-black bg-opacity-5 rounded-3xl flex gap-4 mt-6 lg:px-4 md:px-4 py-2 px-2 mb-6'>
             <button onClick={() => setState(1)} className={`${state === 1 ? "py-2 px-4 rounded-2xl bg-green text-white  " : "py-2 px-4 rounded-2xl  text-black"}`}>Background</button>
             <button onClick={() => setState(2)} className={`${state === 2 ? "py-2 px-4 rounded-2xl bg-green text-white" : "py-2 px-4 rounded-2xl  text-black"}`}>Team</button>
             <button onClick={() => setState(3)} className={`${state === 3 ? "py-2 px-4 rounded-2xl bg-green text-white" : "py-2 px-4 rounded-2xl  text-black"}`}>FAQs</button>
            </div>
            </div>

            {/* contents */}
            <div className=' mt-24'>
            {state === 1 && <Abt/>}
            {state === 2 && <Team/>}
            {state === 3 && <Faqs/>}
            </div>
        </div>
       
      </div>
      
    </div>
  )
}

export default About
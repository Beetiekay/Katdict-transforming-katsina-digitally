import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Welcomeadd from '../../components/Welcomeadd';
import Visionandmissions from '../../components/Visionandmissions';
import Ourservice from '../../components/Ourservice';
import Ourpartners from '../../components/Ourpartners';

const Tab = () => {
    const [state, setState] = useState(1)
    const navigate = useNavigate();
  return (
    <div className='bg-whitegray'>
         <p className='font-semibold py-4 pt-16 text-center text-lg opacity-85'>WELCOME TO <span className='text-green'>KATDICT</span></p>
         <div className='flex justify-center'><h1 className=' lg:text-4xl md:text-4xl text-2xl font-semibold text-center mb-4'>PIONEERING THE <span className='text-green'>DIGITAL TRANSFORMATION</span><br className='lg:flex md:flex hidden'/> KATSINA STATE</h1></div>
        <div className="lg:overflow-hidden overflow-x-scroll md:overflow-hidden">
          <div className='w-[200vw] lg:w-full md:w-full flex gap-4 mt-6 lg:px-10 md:px-5 px-2 mb-4'>
             <button onClick={() => setState(1)} className={`${state === 1 ? " text-green border-2 border-green  " : " hover:border-2 hover:border-green bg-white rounded-lg text-green"}  text-sm py-4 px-2 rounded flex-1 cursor-pointer`}>WELCOME ADDRESS</button>
             <button onClick={() => setState(2)} className={`${state === 2 ? " border-2 border-green text-green " : " hover:border-2 hover:border-green bg-white rounded-lg text-green"}  text-sm py-4 px-2 rounded flex-1 cursor-pointer`}>VISION & MISSION</button>
             <button onClick={() => setState(3)} className={`${state === 3 ? " text-green border-2 border-green py-4 px-2 font-normal" : " py-4 px-2 hover:border-2 hover:border-green bg-white rounded-lg font-normal text-green"}  text-sm font-semibold py-2 px-4 rounded flex-1 cursor-pointer`}>OUR SERVICES</button>
             <button onClick={() => setState(4)} className={`${state === 4 ? "text-green border-2 border-greenpy-4 font-normal px-2 " : " py-4 px-2 font-normal hover:border-2 hover:border-green bg-white rounded-lg text-green"}  text-sm font-semibold py-2 px-4 rounded flex-1 cursor-pointer`}>OUR PARTNERS</button>
            </div>
        </div>
         <div className="bg-whitegray shadow-md py-12 px-5 mt-2">
               {state === 1 && <Welcomeadd/>}
               {state === 2 && <Visionandmissions/>}
               {state === 3 && <Ourservice/>}
               {state === 4 && <Ourpartners/>}
         <div className="mt-4">
        </div>
    </div>
   </div>
  )
}

export default Tab
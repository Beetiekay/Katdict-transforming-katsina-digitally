import React, { useEffect, useState } from 'react'
import Welcomeadd from '../../components/Welcomeadd';
import Visionandmissions from '../../components/Visionandmissions';
import Ourservice from '../../components/Ourservice';
import Ourpartners from '../../components/Ourpartners';

//aos
import AOS from 'aos';
import "aos/dist/aos.css"
import { FaArrowRight } from 'react-icons/fa';

const Tab = () => {
   useEffect(() => {
      AOS.init({duration:1200})
   })

    const [state, setState] = useState(1)

  return (
    <div className='bg-whitegray dark:bg-black'>
         <p data-aos="fade-left" className='font-semibold dark:text-white lg:py-4 md:py-4 py-1 lg:px-0 md:px-0 px-4 pt-16 lg:text-center md:text-center text-start lg:text-lg md:text-lg text-sm opacity-85'>WELCOME TO <span className='text-green'>KATDICT</span></p>
         <div data-aos="fade-right"  className='flex lg:justify-center md:justify-center justify-start lg:px-0 md:px-0 px-4'><h1 className=' lg:text-4xl md:text-4xl dark:text-white text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>PIONEERING THE <span className='text-green'>DIGITAL TRANSFORMATION</span><br className='lg:flex md:flex hidden'/> KATSINA STATE</h1></div>
       <div>
        <div className='lg:hidden md:hidden relative top-4 flex justify-end px-10 animate-pulse text-green'><FaArrowRight size={15}/></div>
        <div className="lg:overflow-hidden overflow-x-scroll md:overflow-hidden">
          <div className='w-[200vw] lg:w-full md:w-full flex gap-4 mt-6 lg:px-10 md:px-5 px-2 mb-6'>
             <button onClick={() => setState(1)} className={`${state === 1 ? " text-green border-2  border-green  " : "outline-noner-2 dark:bg-black dark:shadow-md dark:shadow-seagreen hover:border-green bg-white rounded-lg text-green"}  text-sm py-4 outline-none px-2 rounded flex-1 cursor-pointer`}>WELCOME ADDRESS</button>
             <button onClick={() => setState(2)} className={`${state === 2 ? " border-2 border-green text-green " : " dark:bg-black dark:shadow-md dark:shadow-seagreen hover:border-2 hover:border-green bg-white rounded-lg text-green"}  text-sm py-4 px-2 rounded flex-1 cursor-pointer outline-none`}>VISION & MISSION</button>
             <button onClick={() => setState(3)} className={`${state === 3 ? " text-green border-2 border-green py-4 px-2 font-normal" : " dark:bg-black dark:shadow-md dark:shadow-seagreen py-4 px-2 hover:border-2 hover:border-green bg-white rounded-lg font-normal text-green"}  text-sm font-semibold py-2 px-4 rounded flex-1 cursor-pointer outline-none`}>OUR SERVICES</button>
             <button onClick={() => setState(4)} className={`${state === 4 ? "text-green border-2 border-greenpy-4 font-normal px-2 " : " dark:bg-black dark:shadow-md dark:shadow-seagreen py-4 px-2 font-normal hover:border-2 hover:border-green bg-white rounded-lg text-green"} outline-none text-sm font-semibold py-2 px-4 rounded flex-1 cursor-pointer`}>OUR PARTNERS</button>
            </div>
        </div>
        <div className='w-full lg:h-4 md:h-4 h-6 bg-whitegray dark:bg-black absolute -mt-4'></div>
        </div>

         <div className="bg-whitegray dark:bg-black shadow-md py-12 px-5 mt-2">
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
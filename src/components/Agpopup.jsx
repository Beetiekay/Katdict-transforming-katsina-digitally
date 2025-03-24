import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import logo from "../assets/katdict.png";
import katdict from "../assets/kat.png";
import Marquee from 'react-fast-marquee';

const Agpopup = () => {
    const [open, setOpen] = useState(true);
  return (
    <div>
        {
         open &&(
         <div className='w-full h-full flex justify-center transition-all fixed peer-checked:hidden items-center backdrop-blur-sm top-0 z-50 bg-green bg-opacity-50'>
          <div className='lg:w-[30%] md:w-[70%] w-[90%] relative lg:h-[74vh] md:h-[48vh] h-[64vh] bg-white rounded-xl p-2'>
            <div onClick={() => setOpen(false)} className='flex justify-end cursor-pointer z-30 transition-transform duration-300 relative'>
              <button className='bg-green rounded-full text-white hover:scale-110'><MdOutlineClose size={35} className=' rounded-full p-2'/></button>
            </div>
            <div className='absolute flex justify-center w-full -top-12'><button className='bg-green p-3 py-4 outline-none border-4 border-white rounded-full'><img src={logo} className='lg:w-20 md:w-20 w-14'/></button></div>

            <div>

              <div className='flex items-center mb-8 mt-6 lg:px-10 md:px-10 px-2'>
              <img src={katdict} className='w-14 bg-green px-1'/>
               <Marquee className=' flex justify-center items-center gap-10 '>
               <p className='text-xs px-2 font-mono font-semibold text-green'>KATSINA DIRECTORATE OF INFORMATION & COMMUNICATIONS TECHNOLOGY</p>
               </Marquee>
               </div>
              
                <h1 className='lg:text-6xl md:text-6xl text-4xl mb-16 text-green text-center font-bold mt-2'>Welcome To Katdict !</h1>
                 
                <div className='lg:px-6 md:px-6 px-2'><p className='text-xl text-center font-semibold px-8 border-x-4 border-green'>Beyond The Surface, A World Of Possibilities.</p></div>

                 <div className='flex justify-center items-center mt-10'><button className='py-3 px-8 rounded-2xl font-semibold text-xl bg-green text-white'>Continue</button></div>
            </div>
         </div>
        </div>
         )}
    </div>
  )
}

export default Agpopup
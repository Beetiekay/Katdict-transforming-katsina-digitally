import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import logo from "../assets/katdict.png";
import katdict from "../assets/kat.png";
import Marquee from 'react-fast-marquee';

const Agpopup = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
    setOpen(false)

    setTimeout(() => {
    setOpen(true)

    }, 2000);
  },[])
      
  return (
    <div>
        {
         open &&(
         <div className='w-full h-full flex justify-center transition-all fixed peer-checked:hidden items-center backdrop-blur-sm top-0 z-50 bg-green bg-opacity-50'>
          <div className='lg:w-[30%] md:w-[70%] w-[85%] relative lg:h-[74vh] md:h-[48vh] h-fit bg-white rounded-xl p-2'>
            <div onClick={() => setOpen(false)} className='flex justify-end cursor-pointer z-30 transition-transform duration-300 relative'>
              <button className='lg:text-4xl md:text-4xl text-4xl text-green hover:scale-110'><MdOutlineClose  className=' rounded-full p-2'/></button>
            </div>
            <div className='absolute flex justify-center w-full -top-12'><button className='bg-green p-3 py-4 outline-none border-4 border-white rounded-full'><img src={logo} className='lg:w-20 md:w-20 w-14'/></button></div>

            <div>

              <div className='flex items-center mb-8 mt-6 lg:px-10 md:px-10 px-2'>
              <img src={katdict} className='w-14 bg-green px-1'/>
               <Marquee className=' flex justify-center items-center gap-10 '>
               <p className='text-xs px-2 font-mono font-semibold text-green'>KATSINA DIRECTORATE OF INFORMATION & COMMUNICATIONS TECHNOLOGY</p>
               </Marquee>
               </div>
              
                <h1 className='lg:text-6xl md:text-6xl text-4xl lg:mb-16 md:mb-16 mb-4 text-green text-center font-bold mt-2'>Welcome To <br className='lg:hidden md:hidden flex'/> Katdict !</h1>
                 
                <div className='lg:px-6 md:px-6 px-2'><p className='lg:text-xl md:text-xl text-sm text-center font-semibold px-8 border-x-4 border-green'>Beyond The Surface, A World Of Possibilities.</p></div>

                 <div className='flex justify-center items-center mt-10'><button onClick={() => setOpen(false)} className='lg:py-3 md:py-3 py-3 lg:px-8 md:px-8 px-6 rounded-xl font-semibold lg:text-xl md:text-xl text-sm bg-green text-white'>Continue</button></div>
            </div>
         </div>
        </div>
         )}
    </div>
  )
}

export default Agpopup
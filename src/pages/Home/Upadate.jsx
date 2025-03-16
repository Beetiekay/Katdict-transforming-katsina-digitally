import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import levelup from "../../assets/levelup.png"
import hack from "../../assets/hack.png"
import pattern from "../../assets/icon5.png"
import com from "../../assets/icon1.png"
import { Link } from 'react-router-dom';

const Upadate = () => {
      useEffect(() => {
          AOS.init({duration:1200})
       }) 
  return (
    <div className='w-[100%] min-h-[100vh]'>
       <div>
       <p data-aos="fade-right" className='font-semibold lg:py-4 md:py-4 py-1 pt-16 lg:text-lg md:text-lg text-sm lg:text-center md:text-center text-start opacity-85'>RECENT <span className='text-green'>UPDATES</span></p>
       <div className='flex justify-center mb-16'><h1 data-aos="fade-up" className=' lg:text-4xl md:text-4xl text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>STAY INFORMED, <span className='text-green'> AS WE SHAPE TOMORROW</span> LEGACY.</h1></div>
       
       <div className='w-full  relative'> 
       <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:px-36 md:px-8 px-1 mb-10'>
        {/* 1 */}
        <div dat-aos="zoom-in" className='lg:px-24 md:px-0 p-1 relative  z-0'>
             <div className='bg-green absolute lg:h-[60vh] md:h-[45vh] lg:w-[60%] md:w-[100%] w-full -mt-4 rotate-3 animate-spin duration-700 rounded-2xl'></div>
            <div className='bg-white border relative z-10 shadow-md py-2 px-2 overflow-hidden rounded-xl hover:scale-95 duration-700'>
            <img src={pattern} className='absolute object-cover opacity-5'/>
              <div data-aos="zoom-in" className='lg:py-16 md:py-16 relative py-8 px-10 flex justify-center hover:scale-105 rounded-2xl mb-2'>
                <img src={levelup} className='w-[70%]'/>
              </div>
              <div className='px-4 mb-2'>
                <h1 className='text-lg mb-2'>Building Your Future Starts Here!</h1>
                <h2 className='font-semibold lg:text-2xl md:text-2xl text-xl mb-4 text-midnightblue'>WHY YOU SHOULD APPLY FOR LevelUp <span>Katsina</span></h2>
            </div>
            <div className='mb-2'><Link><h1 className='px-4 flex items-center gap-4 lg:text-lg md:text-lg text-xs'>Apply Now <span className='bg-cobalt px-2 text-white py-1'>Katdictng/levelup-katsina</span></h1></Link></div>
            </div>
        </div>
         
          {/* 2 */}
        <div dat-aos="zoom-in" className='lg:px-24 md:px-0 p-1 relative  z-0'>
             <div className='bg-green absolute lg:h-[60vh] md:h-[45vh] lg:w-[60%] md:w-[100%] w-full -mt-4 rotate-3 animate-spin duration-700 rounded-2xl'></div>
            <div className='bg-white border relative z-10 shadow-md py-2 px-2 overflow-hidden rounded-xl hover:scale-95 duration-700'>
            <img src={com} className='absolute object-cover opacity-5'/>
              <div data-aos="zoom-in" className='lg:py-12 md:py-16 gap-2 items-center relative py-4 px-10 flex justify-center hover:scale-105 rounded-2xl mb-2'>
                <img src={hack} className='w-[40%]'/>
                <h1 className='text-3xl font-mono font-semibold text-hack'>HACK <br/> KATSINA</h1>
              </div>
              <div className=''>
                <h1 className='text-lg mb-2'>100 STARTUPS AND BUSINESSES</h1>
                <h2 className='font-semibold lg:text-2xl md:text-2xl text-xl mb-4 text-midnightblue'>BUILDING THE NEXT GENERATION OF INNOVATORS</h2>
            </div>
            <div className='flex justify-center'><button className='outline-none py-3 px-6 hover:scale-105 rounded-xl bg-carrot text-white'>Apply Now</button></div>
            </div>
        </div>
       </div>
       </div>

       </div>
    </div>
  )
}

export default Upadate
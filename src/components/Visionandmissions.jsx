import React, { useEffect } from 'react'
import { TfiTarget } from 'react-icons/tfi'
import image from "../assets/dg2.png"
import { FaChevronDown, FaLocationArrow, FaStar } from 'react-icons/fa'
import image2 from "../assets/p5.jpg"
import image3 from "../assets/bg.jpg"
import Works from '../pages/Home/Works'
import Upadate from '../pages/Home/Upadate'

//aos
import AOS from 'aos'
import "aos/dist/aos.css"

const Visionandmissions = () => {
    useEffect(() => {
        AOS.init({duration:1200})
     }) 
  return (
    <div className='w-[100%] lg:py-4 md:py-4 py-1'>
      <div>
        {/* line */}
        <div data-aos="fade-up" className=' grid grid-cols-3 mb-5'>
          <div className='text-green'><hr/></div>
          <div className='lg:flex md:flex block justify-center  gap-4 items-center'><div className='flex justify-center'><TfiTarget size={25} className='text-green lg:text-lg md:text-sm'/></div><p className=' text-center lg:text-lg md:text-lg text-[14px]'>OUR <span className='text-green'>FORESIGHT</span></p></div>
          <div className='text-green'><hr/></div>
        </div>

        {/* contents */}
        <div className='grid lg:h-fit md:h-[40vh] h-[90vh] lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 px-8 mb-5'>
          <div><img src={image} data-aos="zoom-out"/></div> 
          <div className='flex hover:scale-110 duration-500 lg:items-center md:items-start items-start h-[100vh]'>
            <div data-aos="fade-left" className='lg:text-2xl  cursor-pointer md:text-2xl text-lg py-16 bg-green text-white bg-opacity-75 rounded-2xl'>
            <h1  className='lg:text-center text-start lg:px-0 md:px-0 px-2'>We picture a Katsina where technology isn’t just a tool, but a <span className='text-black font-semibold'>force driving inclusive development,</span> transparent governance, and sustainable progress.</h1>
            </div>
          </div>
          
        </div>
          
        {/* line */}
        <div data-aos="fade-up" className=' grid grid-cols-3 mb-12'>
          <div className='text-green'><hr/></div>
          <div className='lg:flex md:flex block justify-center  gap-4 items-center'><div className='flex justify-center'><FaLocationArrow size={25} className='text-green lg:text-lg md:text-sm'/></div><p className='text-center lg:text-lg md:text-lg text-[14px]'>OUR <span className='text-green'>MISSSIONS</span></p></div>
          <div className='text-green'><hr/></div>
        </div>

        {/* contents */}
        <div className='grid lg:h-fit md:h-[60vh] h-[90vh] lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 px-8 mb-5'>
        <div><img src={image2} data-aos="zoom-in" className='rounded-2xl object-cover h-full'/></div>
          <div className='flex items-center '>
          <div className='lg:text-2xl lg:mt-0 md:mt-0 -mt-10 hover:scale-110 duration-500 cursor-pointer bg-opacity-80 bg-green py-10 px-4 rounded-2xl text-white md:text-xl text-lg'>
            <h1 data-aos="fade-up">Our mission is to elevate government services, invigorate the economy, and enrich the quality of life in our community, through a blend of innovation and collaboration, to build a sustainable future where technology is a catalyst for positive change</h1>
            </div>
          </div>
        </div>
          
         {/* line */}
         <div data-aos="fade-up" className=' grid grid-cols-3 mb-12'>
          <div className='text-green'><hr/></div>
          <div className='lg:flex md:flex block justify-center  gap-4 items-center'><div className='flex justify-center'><FaStar size={25} className='text-green lg:text-lg md:text-sm'/></div><p className='text-center lg:text-lg md:text-lg text-[14px]'>CORE <span className='text-green'>VALUES</span></p></div>
          <div className='text-green'><hr/></div>
        </div>

        {/* content */}
         <div className='w-[100%] grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8 lg:px-8 md:px-8 px-0 mb-5'>
          <div>

           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl mb-6 overflow-hidden'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-0 rotate-180 duration-500 text-whit absolute text-white right-4 top-5 lg:text-[1.6rem] md:text-[1.6rem] text-[0.8]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='lg:text-2xl md:text-2xl text-lg text-white px-4'>Innovation</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 block peer-checked:hidden duration-500'>
               <p className='lg:text-lg md:text-lg text-sm mb-4'>Through Innovation, we dare to improve how things are done, embracing fresh ideas and cutting-edge solutions to push the boundaries of what's possible.</p>
             </div>
           </div> 
           
           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl mb-6 overflow-hidden'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-180 duration-500 text-whit absolute text-white right-4 top-5 lg:text-[1.6rem] md:text-[1.6rem] text-[0.8]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='lg:text-2xl md:text-2xl text-lg text-white px-4'>Excelense</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 hidden peer-checked:block duration-500'>
               <p className='lg:text-lg md:text-lg text-sm  mb-4'>
               Excellence is our relentless pursuit. We strive for the highest standards in everything we do, delivering experiences that consistently exceed expectations.
               </p>
             </div>
           </div> 

           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl mb-6 overflow-hidden'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-180 duration-500 text-whit absolute text-white right-4 top-5 lg:text-[1.6rem] md:text-[1.6rem] text-[0.8]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='lg:text-2xl md:text-2xl text-lg text-white px-4'>Collaboration</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 hidden peer-checked:block duration-500'>
               <p className='lg:text-lg md:text-lg text-sm  mb-4'>
               Collaboration is the fuel that ignites our collective brilliance. By working together, sharing knowledge, and fostering open communication, we achieve more than we ever could alone.
               </p>
             </div>
           </div> 

           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl overflow-hidden'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-180 duration-500 text-whit absolute text-white right-4 top-5 lg:text-[1.6rem] md:text-[1.6rem] text-[0.8]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='lg:text-2xl md:text-2xl text-lg text-white px-4'>Citizen-Centricity</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 hidden peer-checked:block duration-500'>
               <p className='lg:text-lg md:text-lg text-sm  mb-4'>
               Citizen-Centricity is the foundation on which we build. We are dedicated to understanding and serving the ever-evolving needs of our citizens, ensuring that technology empowers and uplifts their lives.
               </p>
             </div>
           </div>
          </div>
           <img src={image3} className='rounded-2xl object-cover w-full'/>
        </div>
        <Works/>
        <Upadate/>
      </div>
    </div>
  )
}

export default Visionandmissions
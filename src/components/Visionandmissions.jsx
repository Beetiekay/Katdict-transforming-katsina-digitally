import React, { useEffect } from 'react'
import { TfiTarget } from 'react-icons/tfi'
import image from "../assets/dgsplash.png"
import { FaChevronDown, FaLocationArrow, FaStar } from 'react-icons/fa'
import image2 from "../assets/p5.jpg"
import image3 from "../assets/p3.jpg"
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
    <div className='w-[100%] min-h-[100vh]'>
      <div>
        {/* line */}
        <div data-aos="fade-up" className=' grid grid-cols-3 mb-5'>
          <div className='text-green'><hr/></div>
          <div className='flex justify-center gap-4 items-center'><TfiTarget size={25} className='text-green'/><p>OUR <span className='text-green'>FORESIGHT</span></p></div>
          <div className='text-green'><hr/></div>
        </div>

        {/* contents */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 px-8 mb-5'>
          <div className='flex  items-center h-[100vh]'>
            <div className='text-2xl '>
            <h1 data-aos="fade-up">We picture a Katsina where technology isn’t just a tool, but a <span className='font-semibold text-green'>force driving inclusive development,</span> transparent governance, and sustainable progress.</h1>
            </div>
          </div>
          <div><img src={image} data-aos="zoom-out"/></div> 
        </div>
          
        {/* line */}
        <div data-aos="fade-up" className=' grid grid-cols-3 mb-10'>
          <div className='text-green'><hr/></div>
          <div className='flex justify-center gap-4 items-center'><FaLocationArrow size={25} className='text-green'/><p>OUR <span className='text-green'>MISSIONS</span></p></div>
          <div className='text-green'><hr/></div>
        </div>

        {/* contents */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 px-8 mb-5'>
        <div><img src={image2} data-aos="zoom-in" className='rounded-2xl'/></div>
          <div className='flex h-[100vh]'>
          <div className='text-2xl '>
            <h1 data-aos="fade-up">Our mission is to elevate government services, invigorate the economy, and enrich the quality of life in our community, through a blend of innovation and collaboration, to build a sustainable future where technology is a catalyst for positive change</h1>
            </div>
          </div>
        </div>
          
         {/* line */}
        <div data-aos="fade-up" className=' grid grid-cols-3 mb-10'>
          <div className='text-green'><hr/></div>
          <div className='flex justify-center gap-4 items-center'><FaStar size={25} className='text-green'/><p>OUR <span className='text-green'>MISSIONS</span></p></div>
          <div className='text-green'><hr/></div>
        </div>

        {/* content */}
         <div className='w-[100%] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 px-8 mb-5'>
          <div>

           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl mb-6'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-0 rotate-180 duration-500 text-whit absolute text-white right-4 top-5 text-[1.6rem]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='text-2xl text-white px-4'>Innovation</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 block peer-checked:hidden duration-500'>
               <p className='text-lg mb-4'>Through Innovation, we dare to improve how things are done, embracing fresh ideas and cutting-edge solutions to push the boundaries of what's possible.</p>
             </div>
           </div> 
           
           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl mb-6'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-180 duration-500 text-whit absolute text-white right-4 top-5 text-[1.6rem]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='text-2xl text-white px-4'>Excelense</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 hidden peer-checked:block duration-500'>
               <p className='text-lg mb-4'>
               Excellence is our relentless pursuit. We strive for the highest standards in everything we do, delivering experiences that consistently exceed expectations.
               </p>
             </div>
           </div> 

           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl mb-6'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-180 duration-500 text-whit absolute text-white right-4 top-5 text-[1.6rem]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='text-2xl text-white px-4'>Collaboration</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 hidden peer-checked:block duration-500'>
               <p className='text-lg mb-4'>
               Collaboration is the fuel that ignites our collective brilliance. By working together, sharing knowledge, and fostering open communication, we achieve more than we ever could alone.
               </p>
             </div>
           </div> 

           <div data-aos="fade-up" className='shadow-md bg-white relative rounded-xl'>
            <input type='checkbox' className='peer absolute right-4 top-5 z-20 transition-transform w-8 h-8 cursor-pointer opacity-0'/>
            <div className='transition-all peer-checked:rotate-180 duration-500 text-whit absolute text-white right-4 top-5 text-[1.6rem]' ><FaChevronDown /></div>
            <div className='bg-green py-4 rounded-t-2xl'><h1 className='text-2xl text-white px-4'>Citizen-Centricity</h1></div>
             {/* drp down*/}
             <div className='py-4 px-4 hidden peer-checked:block duration-500'>
               <p className='text-lg mb-4'>
               Citizen-Centricity is the foundation on which we build. We are dedicated to understanding and serving the ever-evolving needs of our citizens, ensuring that technology empowers and uplifts their lives.
               </p>
             </div>
           </div>
          </div>
           <img src={image3} className='rounded-2xl'/>
        </div>
        <Works/>
        <Upadate/>
      </div>
    </div>
  )
}

export default Visionandmissions
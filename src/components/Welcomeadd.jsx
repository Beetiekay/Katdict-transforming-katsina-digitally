import React, { useEffect } from 'react'
import DG from "../assets/dg (1).png"
import Button from './Button'
import Video from './Video/Video'
import { FaBookOpen } from 'react-icons/fa'
import {MdOutlineShoppingCart} from "react-icons/md"

//aos
import AOS from 'aos'
import "aos/dist/aos.css"

import Upadate from '../pages/Home/Upadate'
import Works from '../pages/Home/Works'
import { Link } from 'react-router-dom'

const Welcomeadd = () => {
    useEffect(() => {
      AOS.init({duration:1200})
   }) 
  return (
    <div className='w-[100%] min-h-[100vh]'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
        <div className='relative'>
          <img src={DG} data-aos="zoom-out" className='opacity-90'/>
          <div className='absolute lg:h-[90vh] md:h-[35vh] h-[40vh] top-0 z-20 flex justify-center items-center w-full'>
             <Video/>
          </div>
        </div>
        <div className='px-6 opacity-75 flex items-center'>
          <div>
          <p className='text-lg mb-6 dark:text-white'>
          <span className='text-green text-xl font-semibold'>Welcome to KATDICT – </span>the Katsina State Directorate of Information and Communication Technology, where we are pioneering the digital transformation of our beloved state.
          </p>

          <div>
            <div className='px-4 py-2 rounded-lg border-x-4 dark:text-white border-green mb-7'>
               <p>
               <span data-aos="fade-up" className='text-green text-xl font-semibold'>At KATDICT,</span> we don’t just dream of a digital future; we craft it. We are committed to shaping the very essence of Katsina’s technological evolution, diving into a realm where innovation knows no bounds and accessibility is the key to unlocking solutions for the challenges we all face.
               </p>
            </div>
            <p data-aos="fade-right" className='dark:text-white lg:text-2xl md:text-xl font-semibold mb-6'><span className='text-green'>- Naufal Ahmad</span> Director General</p>

            <Button label={"Read More"}/>
          </div>
        </div>
        </div>
      </div>
        {/* Our Focus Areas */}

         <p data-aos="fade-right" className='font-semibold dark:text-white lg:py-4 md:py-4 py-1 pt-16 lg:text-lg md:text-lg text-sm lg:text-center md:text-center text-start opacity-85'>WHAT WE <span className='text-green'>DO</span></p>
         <div className='flex justify-center mb-4'><h1 data-aos="fade-up" className='dark:text-white lg:text-4xl md:text-4xl text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>We Are Crafting<span className='text-green'> Katsina's Digital</span> Legacy.</h1></div>

         {/* cards */}
         <div className='py-2 text-lg flex justify-end lg:px-16 md:px-5 px-4 text-green'><Link to={"/more"}>See All</Link></div>
        
         <div className='w-[100%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 md:px-5 px-4 mb-10'>
            {/* 1 */}
            <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
              <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><FaBookOpen/></button></div>
              <div className='px-4 py-6'>
                <h1 className='text-2xl font-semibold text-white'>ICT Governance & Strategy</h1>
                <p className='text-white opacity-80'>
                We coordinate Katsina State ICT activities, implement strategic policy frameworks, and drive automation initiatives to streamline government processes.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
              <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><MdOutlineShoppingCart/></button></div>
              <div className='px-4 py-6'>
                <h1 className='text-2xl font-semibold text-white'>Needs Asssesments & Procurement</h1>
                <p className='text-white opacity-80'>
                We Conduct assessments, recommend innovative solutions, procure ICT resources, and champion efficient procurement practices.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
              <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><FaBookOpen/></button></div>
              <div className='px-4 py-6'>
                <h1 className='text-2xl font-semibold text-white'>Capacity Building & Training</h1>
                <p className='text-white opacity-80'>
                Capacity Building & Training
                We Provide ICT staff to government agencies, support skill development for public servants, and equip them with automation expertise.
                </p>
              </div>
            </div>
         </div>

         <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-6 gap-6 lg:px-96 md:px-20'>
           <button data-aos="fade-down" className='w-full py-4 border-2 rounded-lg hover:translate-y-1 duration-700 ease-out transition-all bg-green text-white'>
            Request Our Service
           </button>

           <button data-aos="fade-down" className='w-full py-4 border-2 rounded-lg dark:text-white border-green hover:translate-y-1 duration-700 ease-out transition-all hover:bg-green hover:text-white'>
            Other Services
           </button>
         </div>
         <Works/>
         <Upadate/>
    </div>
  )
}

export default Welcomeadd
import React, { useEffect } from 'react'
import Logo from './Logo'
import katdict from '../assets/kat2.png'
import { FaClock, FaFacebook, FaInstagram, FaInternetExplorer, FaLinkedin, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import Map from './Map'
import bg from "../assets/layerbg.png"

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
      AOS.init({duration:1200})
   }) 
  return (
    <div className='bg-green w-[100%]  relative lg:overflow-hidden md:overflow-hidden overflow-visible'>
       <img src={bg} className='absolute w-full h-[100vh] top-0 opacity-35'/>
      <div className='w-full relative'>
        <img src={katdict} className='w-full absolute lg:top-0 md:top-0 -top-[0.1rem] lg:object-fill md:object-fill object-cover'/>
        <div className='grid lg:grid-cols-2 grid-cols-1 relative lg:px-16 md:px-16 px-5 py-10 gap-10'>  
            <div className='lg:mt-24 md:mt-24 mt-10'>

                <div className='flex justify-between flex-wrap mb-4 py-2 border-b-2 border-white'>
                <div data-aos="zoom-in"><Logo/></div>
                  <div >
                    <h1 data-aos="zoom-in" className='text-lg font-semibold text-white opacity-80 mb-2'>Follow Us</h1>
                    <div className='flex gap-2 text-white opacity-80'>
                        <FaInstagram size={25} data-aos="zoom-in"  className='hover:scale-110 duration-700 cursor-pointer'/>
                        <FaFacebook size={25} data-aos="zoom-in" className='hover:scale-110 duration-700 cursor-pointer'/>
                        <FaLinkedin size={25} data-aos="zoom-in" className='hover:scale-110 duration-700 cursor-pointer'/>
                        <FaTwitter size={25} data-aos="zoom-in" className='hover:scale-110 duration-700 cursor-pointer'/>
                    </div>
                    </div>
                 </div>
              
                 {/* usefull Links */}
                 <div className='flex justify-between flex-wrap mb-4 py-2 border-b-2 border-white'>
                 <div data-aos="zoom-in" className='lg:mb-0 md:mb-0 mb-2'>
                   <h1 className='text-xl text-white mb-2'>Support Links</h1>
                   <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Get Support</p>
                   <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Help & FAQ</p>
                   <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Solutions</p>
                   <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Privacy Policy</p>
                   <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Contact Us</p>
                   <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Terms & Service</p>
                 </div>

                 <div data-aos="zoom-in" className='lg:mb-0 md:mb-0 mb-2'>
                   <h1 className='text-xl text-white mb-2'>Katdict Services</h1>
                     <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>ICT Governance & Strategy</p>
                     <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Needs Assessment & Procurement</p>
                     <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Capacity Building & Training</p>
                     <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Infrastructure Management & Oversight</p>
                     <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Innovation & Collaboration</p>
                     <p className='text-white opacity-80 hover:translate-x-3 duration-700 cursor-pointer'>Reporting & Advocacy</p>
                 </div>
                 </div>
                 <p className='lg:text-lg md:text-lg text-sm lg:flex hidden text-white'>Copyright@ 2025 <span className='text-black font-semibold'>KATDICT</span> AllRights Reserved</p>
              </div>

              <div className='mt-24'>
              <div className='space-y-2 py-5 grid lg:grid-cols-2 grid-cols-1'>
                <div data-aos="zoom-out" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaSearchLocation/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>KATDICT Complex</h1>
                        <p className='text-sm'>KSITM, Ring Road, Katsian</p>
                    </div>
                </div>

                <div data-aos="zoom-out" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaClock/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>09:00am - 05:00pm</h1>
                        <p className='text-sm'>Monday To Friday</p>
                    </div>
                </div>
                
                <div data-aos="zoom-out" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaInternetExplorer/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>Online 24/7</h1>
                        <p className='text-sm'>070-KATDICT</p>
                    </div>
                </div>

                <div data-aos="zoom-out" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaPhone/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>070-KATDICT</h1>
                        <p className='text-sm'>Info@katdict.ng</p>
                    </div>
                </div>
              </div>

              <div className='lg:mb-0 md:mb-2 mb-3'>
                <div data-aos="zoom-in" className='bg-white w-full h-40 rounded-2xl shadow-md overflow-hidden'><Map/></div>
              </div>
                <p  className='lg:text-lg md:text-lg text-sm lg:hidden flex text-white'>Copyright@ 2025 <span className='text-black font-semibold'>  KATDICT</span>  AllRights Reserved</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
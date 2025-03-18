import React from 'react'
import Navigation from '../../components/Navigation'
import { FaClock, FaInternetExplorer, FaPhone, FaSearchLocation } from 'react-icons/fa'
import Map from '../../components/Map'
import Footer from '../../components/Footer'


const Contact = () => {
  return (
    <div className='w-[100%] lg:min-h-[100vh] md:min-h-[100vh] min-h-[80vh]  overflow-x-hidden'>
        <div className='absolute z-20'><Navigation/></div>
          <div className='min-h-[100vh] w-[100%] lg:mt-16 md:mt-16 mt-24 flex justify-center items-center relative'>
            <div>
            <h1 data-aos="fade-right" className='lg:text-4xl md:text-4xl text-2xl text-center font-semibold mb-6'>CONTACT <span className='text-green'>US</span></h1> 
            <div >
             <div data-aos="fade-up" className=' flex justify-center px-5 mb-16'>
               <div className='space-y-2 py-5 lg:px-10 md:px-16 px-8 gap-6 rounded-2xl shadow-md bg-green grid lg:grid-cols-2 grid-cols-1'>
                <div data-aos="fade-right" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaSearchLocation/></button>
                <div className='text-white'>
                    <h1 className='font-semibold'>KATDICT Complex</h1>
                    <p className='text-sm'>KSITM, Ring Road, Katsian</p>
                 </div>
                </div>
                <div data-aos="fade-right" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaClock/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>09:00am - 05:00pm</h1>
                        <p className='text-sm'>Monday To Friday</p>
                    </div>
                </div>
                
                <div data-aos="fade-left" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaInternetExplorer/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>Online 24/7</h1>
                        <p className='text-sm'>070-KATDICT</p>
                    </div>
                </div>

                <div data-aos="fade-left" className='flex gap-2 '>
                    <button className='p-2 px-3 rounded-lg bg-white text-green outline-none text-2xl'><FaPhone/></button>
                    <div className='text-white'>
                        <h1 className='font-semibold'>070-KATDICT</h1>
                        <p className='text-sm'>Info@katdict.ng</p>
                    </div>
                </div>

                </div>
              </div>
             
                <div className='flex justify-center mb-4'><div className='lg:w-[100%] md:w-[90%] w-[45%] scale-125  rounded-2xl overflow-hidden'><Map/></div></div>
             </div>
           </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Contact
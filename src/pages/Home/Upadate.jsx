import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from '../../components/Logo';

const Upadate = () => {
      useEffect(() => {
          AOS.init({duration:1200})
       }) 
  return (
    <div className='w-[100%] min-h-[100vh]'>
       <div>
       <p data-aos="fade-up" className='font-semibold py-4 pt-16 text-lg lg:text-center md:text-center text-start opacity-85'>RECENT <span className='text-green'>UPDATES</span></p>
       <div className='flex justify-center mb-16'><h1 data-aos="fade-up" className=' lg:text-4xl md:text-4xl text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>Stay Informed, <span className='text-green'> as we Shape Tomorrow</span> Legacy.</h1></div>
       
       <div>
       <div className='w-full overflow-x-scroll relative'> 
       <div className='lg:w-[180vw] md:w-[370vw] w-[700vw] grid grid-cols-6  gap-5 lg:px-0 md:px-5 px-1 mb-10'>
        {/* 1 */}
        <div className='px-6 relative z-0'>
            <div className='bg-white relative z-10 shadow-md py-2 px-2 rounded-xl hover:scale-95 duration-700'>
              <div className='lg:py-16 md:py-16 py-8 px-6 bg-green bg-opacity-60 hover:scale-105 rounded-2xl mb-2'>
                <Logo/>
              </div>
              <div>
                <h1 className='font-semibold font-mono text-xl mb-2'>Digital Bridge Initiative Launches: A Collaborative Ecosystem For Innovation.</h1>
                <h2 className='font-bold text-2xl mb-4 text-green'>Lauch Of Digital Bridge</h2>
                <p className='text-sm mb-4 opacity-80'>
                    The highly anticipated Digital Bridge initiative Officially Lauches Toady, making a significant
                    milestone in fostering co-creation and innovation This groundbreaking initiative brings together
                    a powerful-ecosystem - government, academia, and industry-to accelerate breakthoughts across various 
                    technological frontiers
                </p>
            </div>
            </div>
        </div>
        {/* 2 */}
        <div className='px-6 relative z-0'>
            <div className='bg-white relative z-10 shadow-md py-2 px-2 rounded-xl hover:scale-95 duration-700'>
              <div className='lg:py-16 md:py-16 py-8 px-6 bg-green bg-opacity-60 hover:scale-105 rounded-2xl mb-2'>
                <Logo/>
              </div>
              <div>
                <h1 className='font-semibold font-mono text-xl mb-2'>Hackkatsina 2025: A Collaborative Ecosystem For Innovation.</h1>
                <h2 className='font-bold text-2xl mb-4 text-green'>Lauch Of Digital Bridge</h2>
                <p className='text-sm mb-4 opacity-80'>
                    The highly anticipated Digital Bridge initiative Officially Lauches Toady, making a significant
                    milestone in fostering co-creation and innovation This groundbreaking initiative brings together
                    a powerful-ecosystem - government, academia, and industry-to accelerate breakthoughts across various 
                    technological frontiers
                </p>
            </div>
            </div>
        </div>
        {/* 3 */}
        <div className='px-6 relative z-0'>
            <div className='bg-white relative z-10 shadow-md py-2 px-2 rounded-xl hover:scale-95 duration-700'>
              <div className='lg:py-16 md:py-16 py-8 px-6 bg-green bg-opacity-60 hover:scale-105 rounded-2xl mb-2'>
                <Logo/>
              </div>
              <div>
                <h1 className='font-semibold font-mono text-xl mb-2'>Digital Bridge Initiative Launches: A Collaborative Ecosystem For Innovation.</h1>
                <h2 className='font-bold text-2xl mb-4 text-green'>Lauch Of Digital Bridge</h2>
                <p className='text-sm mb-4 opacity-80'>
                    The highly anticipated Digital Bridge initiative Officially Lauches Toady, making a significant
                    milestone in fostering co-creation and innovation This groundbreaking initiative brings together
                    a powerful-ecosystem - government, academia, and industry-to accelerate breakthoughts across various 
                    technological frontiers
                </p>
            </div>
            </div>

        </div>
         {/* 4 */}
        <div className='px-6 relative z-0'>
            <div className='bg-white relative z-10 shadow-md py-2 px-2 rounded-xl hover:scale-95 duration-700'>
              <div className='lg:py-16 md:py-16 py-8 px-6 bg-green bg-opacity-60 hover:scale-105 rounded-2xl mb-2'>
                <Logo/>
              </div>
              <div>
                <h1 className='font-semibold font-mono text-xl mb-2'>Digital Bridge Initiative Launches: A Collaborative Ecosystem For Innovation.</h1>
                <h2 className='font-bold text-2xl mb-4 text-green'>Lauch Of Digital Bridge</h2>
                <p className='text-sm mb-4 opacity-80'>
                    The highly anticipated Digital Bridge initiative Officially Lauches Toady, making a significant
                    milestone in fostering co-creation and innovation This groundbreaking initiative brings together
                    a powerful-ecosystem - government, academia, and industry-to accelerate breakthoughts across various 
                    technological frontiers
                </p>
            </div>
            </div>
        </div>
        {/* 5 */}
        <div className='px-6 relative z-0'>
            <div className='bg-white relative z-10 shadow-md py-2 px-2 rounded-xl hover:scale-95 duration-700'>
              <div className='lg:py-16 md:py-16 py-8 px-6 bg-green bg-opacity-60 hover:scale-105 rounded-2xl mb-2'>
                <Logo/>
              </div>
              <div>
                <h1 className='font-semibold font-mono text-xl mb-2'>Digital Bridge Initiative Launches: A Collaborative Ecosystem For Innovation.</h1>
                <h2 className='font-bold text-2xl mb-4 text-green'>Lauch Of Digital Bridge</h2>
                <p className='text-sm mb-4 opacity-80'>
                    The highly anticipated Digital Bridge initiative Officially Lauches Toady, making a significant
                    milestone in fostering co-creation and innovation This groundbreaking initiative brings together
                    a powerful-ecosystem - government, academia, and industry-to accelerate breakthoughts across various 
                    technological frontiers
                </p>
            </div>
            </div>
        </div>

        {/* 6 */}
        <div className='px-6 relative z-0'>
            <div className='bg-white relative z-10 shadow-md py-2 px-2 rounded-xl hover:scale-95 duration-700'>
              <div className='lg:py-16 md:py-16 py-8 px-6 bg-green bg-opacity-60 hover:scale-105 rounded-2xl mb-2'>
                <Logo/>
              </div>
              <div>
                <h1 className='font-semibold font-mono text-xl mb-2'>Digital Bridge Initiative Launches: A Collaborative Ecosystem For Innovation.</h1>
                <h2 className='font-bold text-2xl mb-4 text-green'>Lauch Of Digital Bridge</h2>
                <p className='text-sm mb-4 opacity-80'>
                    The highly anticipated Digital Bridge initiative Officially Lauches Toady, making a significant
                    milestone in fostering co-creation and innovation This groundbreaking initiative brings together
                    a powerful-ecosystem - government, academia, and industry-to accelerate breakthoughts across various 
                    technological frontiers
                </p>
            </div>
            </div>
        </div>

       </div>
       </div>
       <div className='bg-whitegray w-full h-6 relative -top-4'></div>
       </div>

       </div>
    </div>
  )
}

export default Upadate
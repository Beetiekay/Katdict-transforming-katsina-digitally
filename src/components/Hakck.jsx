import React from 'react'
import image1 from "../assets/ktgov.png"
import image2 from "../assets/kirkira.png"
import image3 from "../assets/hack.png"
import logo from "../Favicon/fav.png";
import CountUp from 'react-countup'
import refrence from "../assets/videos/hackatsina.mp4"

const Hakck = () => {
  return (
    <div  className='py-4 lg:px-24 h-[100vh] dark:bg-black md:px-8 px-2 overflow-hidden'>
       <div data-aos="zoom-left" >
        <div className='flex justify-around items-center lg:py-4 md:py-4 py-2 border-b-2 mb-6 border-green'>
          <div className='flex items-center gap-2'>         
             <div><img src={image1} className='lg:w-32 md:w-28 w-16 object-fill'/></div>
             <div>
             <div className='flex gap-2'>
                 <div><img src={logo} className='w-10'/></div>
                 <div className='flex items-center'>
                 <div >
                  <h1 className='lg:text-[16px] md:text-[16px] text-[10px] text-green font-serif font-semibold'>KATDICT</h1>
                  <div className='w-20 h-3 gap-1 flex'>
                     <div className='lg:w-6 md:w-6 w-4 h-1 bg-green rounded-lg'></div>
                     <div className='lg:w-14 md:w-14 w-7 h-1  bg-green rounded-lg'></div>
                  </div>
                  </div>
                 </div>
              </div>
            </div>
        </div>

            <div><img src={image2} className='lg:w-28 md:w-28 w-16 object-fill'/></div>
        </div>

        <div className='grid lg:grid-cols-2 md:grid-cols-1 mb-6'>
        <div className='lg:mb-0 md:mb-28 mb-4'>
        <div className='flex justify-center mb-4'>
            <div className='flex items-center'>
            <img src={image3} className='w-[100%]'/>
            <div>
               <h1 className='text-hack text-3xl font-bold font-serif'>HACK <br/> KATSINA</h1> 
            </div>
          </div>
        </div>
         
         <div className='flex dark:text-white justify-center mb-6'><p className='text-lg text-center'>Building The Next Generation <br/> Of Innovation</p></div>

         <div className='flex justify-center'>
          <div className='relative'>
           <button className='backdrop-blur relative z-10  py-4 px-8 rounded-2xl'>
            <CountUp start={0} end={100} delay={1} className='text-8xl mb-1 font-bold text-white'/>
            <p className='text-center font-mono text-whitegray px-4'>STARTUPS AND BUSINESSES</p>
           </button>

           <button className='bg-hack w-[100%] absolute top-0 right-0 h-[21vh] overflow-hidden rounded-2xl'>
           <div className='flex w-full'>
           <div className='h-[30vh] bg-opacity-75 -rotate-45 mt-5 w-[35%] shadow-2xl shadow-carrot bg-carrot'></div>
           </div>
           
           </button>
          </div>
         </div>
         </div>

         <div><video src={refrence} controls className='rounded-2xl border-4 border-hack'/></div>
        </div>
       
        <div className='flex justify-center'>
          <div className=' lg:w-[27%] md:w-[60%] w-full px-2 text-lg flex gap-2 items-center'>
          <h1 className='dark:text-white'>For More Info Visit</h1>
          <a href='https://hackkatsina.ng/' target='_blank' className='px-4 bg-hack text-white'>Hackkatsina.ng</a>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hakck
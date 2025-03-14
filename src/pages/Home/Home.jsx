import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import bg from "../../assets/katdict3.jpg"
import Tab from './Tab'
import Footer from '../../components/Footer'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
   useEffect(() => {
      AOS.init({duration:1200})
   }) 

  return (
    <div className='w-full lg:min-h-[100vh] md:min-h-[100vh] min-h-[80vh] bg-green bg-opacity-30 overflow-x-hidden'>
     <img src={bg} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-20 blur-[1.3px]'/>
      <div>
         <div className='absolute z-20'><Navigation/></div>
         <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
          <div className='lg:mt-32 md:mt-0 mt-0'>
           <h1 data-aos="fade-right" className='lg:text-7xl md:text-7xl text-4xl text-center font-semibold mb-4'>Crafting Tomorrow's <span className='text-green'>Technologies</span> Today!</h1> 

           <div className='flex justify-center mb-10 lg:px-0 md:px-0 px-5'><p data-aos="fade-up" className='opacity-70 lg:text-xl md:text-lg text-sm lg:text-center md:text-center text-start font-semibold mb-2'>The advance of technology is based on making it fit in so that you don't<br className='lg:flex md:flex hidden'/>even notice it's part of everyday life.</p></div>
            
            <div className='flex justify-center'>
              <div className='lg:w-52 md:w-56 w-72' data-aos="zoom-out"><button className='bg-green text-white py-4 w-full rounded-2xl outline-none'>Know More</button></div>
            </div>
          </div>
         </div>
      </div> 
      <Tab/> 
     <Footer/>
    </div>
  )
}

export default Home
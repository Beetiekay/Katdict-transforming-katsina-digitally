import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import bg from "../../assets/robotic1.jpg"
import Tab from './Tab'
import Footer from '../../components/Footer'

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

const Home = () => {
   useEffect(() => {
      AOS.init({duration:1200})
   }) 

  return (
    <div className='w-full lg:min-h-[100vh] md:min-h-[100vh] min-h-[80vh] dark:bg-black bg-green bg-opacity-30 overflow-hidden'>
     <img src={bg} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-20 blur-[1.3px]'/>
      <div>
         <div className='absolute z-20'><Navigation/></div>
         <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
          <div className='lg:mt-32 md:mt-0 mt-0'>
           <h1 data-aos="flip-down" className='lg:text-7xl dark:text-white md:text-7xl text-4xl text-center font-semibold mb-4'>Crafting Tomorrow's <Link to={"imageslider"}><span className='text-green'>Technologies</span></Link> Today!</h1> 

           <div className='flex justify-center mb-10 lg:px-0 md:px-0 px-5'><p data-aos="fade-up" className='opacity-70 dark:text-white lg:text-xl md:text-lg text-sm lg:text-center md:text-center text-start font-semibold mb-2'>The advance of technology is based on making it fit in so that you don't<br className='lg:flex md:flex hidden'/>even notice it's part of everyday life.</p></div>
            

            <div className='flex justify-center'>
              <div className='lg:w-52 md:w-56 w-72' data-aos="flip-right">
                <Link to={"/about"}><button className='bg-green text-white py-4 w-full rounded-2xl outline-none'>Know More</button></Link>
              </div>
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
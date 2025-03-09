import React from 'react'
import Navigation from '../../components/Navigation'
import bg from "../../assets/bg.jpg"
import Tab from './Tab'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='w-[100%]'>
    <div className='w-full min-h-[100vh] bg-green bg-opacity-30 overflow-x-hidden'>
     <img src={bg} className='w-full h-full absolute top-0 object-cover opacity-15'/>
      <div>
         <div className='relative z-10'><Navigation/></div>
         <div className='min-h-[100vh] w-[100%] flex justify-center items-center relative'>
          <div>
           <h1 className='lg:text-6xl md:text-6xl text-4xl text-center font-semibold mb-4'>Crafting Tomorrow's <span className='text-green'>Technologies</span> Today!</h1> 

           <div className='flex justify-center mb-10 lg:px-0 md:px-0 px-2'><p className='opacity-70 lg:text-xl md:text-xl text-sm lg:text-center md:text-center text-start font-semibold mb-2'>The advance of technology is based on making it fit in so that you don't<br className='lg:flex md:flex hidden'/>even notice it's part of everyday life.</p></div>
            
            <div className='flex justify-center'>
              <div className='lg:w-36 md:w-56 w-72'><Button label={"Know More"}/></div>
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
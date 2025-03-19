import React from 'react'
import Cardw from './Cardw'

import image1 from "../../assets/p1.jpg"
import image2 from "../../assets/p2.webp"
import image3 from "../../assets/p3.jpg"
import image6 from "../../assets/pattern.png"
import { Link } from 'react-router-dom'

const Works = () => {
  return (
    <div className='w-[100%] lg:min-h-[100vh] md:min-h-[80vh] relative overflow-hidden min-h-[70vh]'>
      <img src={image6} className='w-full h-screen opacity-15  absolute object-cover'/>
        <div className='reltive'>
        <p data-aos="fade-right" className='font-semibold lg:py-4 md:py-4 py-1 pt-16 lg:text-lg md:text-lg text-sm lg:text-center md:text-center text-start opacity-85'>SOME OF THE <span className='text-green'>WORKS</span> WE DO </p>
        <div className='flex justify-center mb-16'><h1 data-aos="fade-up" className=' lg:text-4xl md:text-4xl text-2xl font-semibold lg:text-center md:text-center text-start mb-4'>TO SHAPE THE FUTURE OF<span className='text-green'> KATSINA</span>  TODAY </h1></div>

        <div >
            <div className='py-2 relative flex justify-end lg:px-16 md:px-5 px-0 text-green'><Link to={"/all works"} className=' py-2 px-4'>See All</Link></div>
          <div className='w-full overflow-x-scroll relative'> 
            <div className='lg:w-[100%] md:w-[170vw] w-[220vw] grid grid-cols-3  gap-5 lg:px-52 md:px-5 px-1 mb-10'>
                <Link to={"/eyeonkt"}>
                <Cardw 
                image={image3} 
                tittle="Eye On Katsina" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
                </Link>
                 
                <Link to={"/kdb"}>
               <Cardw 
                image={image2} 
                tittle="Katsina Digital Bridge" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
                </Link>
                
                <Link to={"/ktdatasolution"}>
               <Cardw 
                image={image1} 
                tittle="Katsina Data Solution" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
                </Link>
            </div>
         </div>
         <div className='bg-whitegray w-full h-6 relative -top-4'></div>
        </div>

           <div className='flex justify-center py-6 mb-4'>
           <h1 className='font-semibold py-4 pt-16 lg:text-4xl md:text-lg text-sm lg:text-center md:text-center text-start opacity-85'>
            Join Us in Crafting our <Link to={"#"} className='lg:text-4xl md:text-lg text-smlg:text-4xl md:text-lg text-sm text-green'>Digital Legacy!</Link>
           </h1>
           </div>

        </div>
    </div>
  )
}

export default Works
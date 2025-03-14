import React from 'react'
import Navigation from '../../components/Navigation'

import image1 from "../../assets/focus1.jpg";
import image2 from "../../assets/focus2.jpg";
import image3 from "../../assets/focus3.jpg";
import image4 from "../../assets/focus4.jpg";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const Focusarea = () => {
  return (
    <div className='w-full lg:min-h-[100vh] md:min-h-[100vh] min-h-[80vh]  overflow-x-hidden'>
     <div className='absolute z-20'><Navigation/></div>
     <div className='min-h-[100vh] lg:mt-56 md:mt-52 mt-56 w-[100%] flex justify-center items-center relative'>
        <div>
       <h1 data-aos="fade-right" className='lg:text-5xl md:text-4xl text-2xl text-center font-semibold mb-2'>OUR FOCUS <span className='text-green'>AREAS</span></h1> 
        <p className='text-lg text-center text-green mb-6'>Empowering Katsina Through ICT</p>
          
          <div>

            <div className='lg:px-10 md:px-10 px-4 mb-6'>
             <div className='grid lg:grid-cols-2 grid-cols-1 lg:border-2 md:border-2 border-none lg:bg-whitegray md:bg-whitegray bg-green border-green rounded-2xl lg:px-10 md:px-10 px-2 py-4 gap-6'>
             <div>
                <img src={image1} className='rounded-2xl object-cover'/>
             </div>

             {/* contents */}
             <div className='relative'>
                <div className='absolute -right-1 h-[60vh] lg:w-8 md:w-8 w-2 lg:bg-whitegray md:bg-whitegray bg-green'></div>
             <div className='flex lg:px-4 md:px-4 px-2 items-center overflow-y-auto h-[60vh]'>
                <div className='w-full lg:mt-20 md:mt-20 mt-96 '>
                   <h1 className='flex lg:text-black md:text-black text-white items-center font-semibold lg:text-xl md:text-xl text-xl mb-4 lg:gap-4 md:gap-4 gap-2'><span className='font-bold lg:text-2xl md:text-2xl text-xl lg:text-green md:text-green text-white'>1.</span>Katsina ICT Innovation Hub:</h1>

                   <p className='text-sm mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> A physical or virtual space dedicated to fostering ICT innovation within Katsina.</p> 

                   <p className='text-sm  flex gap-2 mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> It serves as a central point for learning, collaboration, and entrepreneurship</p>

                   <h1 className='flex items-center  lg:text-black md:text-black text-white font-semibold text-lg mb-4 gap-4'><span className=' lg:text-green md:text-green text-white text-xl'>●</span> Elements:</h1>
                    
                    <p className='mb-2  lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Digital Literacy Training: </span>Offer basic and advanced digital skills training for youth, women, and entrepreneurs.</p>

                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Coding and Software Development Workshops: </span>
                    Conduct workshops to teachcoding, app development, and software engineering.</p>

                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Startup Incubator/Accelerator:</span>
                     Provide resources, mentorship, and funding
                     opportunities for ICT startups.
                    </p>
                    
                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ E-Governance Training:</span>
                    Train government officials and citizens on using ICT forefficient service delivery.
                    </p>

                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Local Language Content Creation:</span>
                    Support the creation of digital content in
                    Hausa to increase accessibility
                    </p>

                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Cybersecurity Awareness:</span>
                    Conduct workshops to educate people about onlinesafety and cybersecurity.
                    </p>
                </div> 
             </div>
             </div>

             </div>
            </div>
              
            <div className='lg:px-10 md:px-10 px-4 mb-6'>
             <div className='grid lg:grid-cols-2 grid-cols-1 lg:border-2 md:border-2 border-none lg:bg-whitegray md:bg-whitegray bg-green border-green rounded-2xl lg:px-10 md:px-10 px-2 py-4 gap-6'>
             <div>
                <img src={image2} className='rounded-2xl object-cover'/>
             </div>

             {/* contents */}
             <div className='relative'>
                <div className='absolute -right-1 h-[60vh] lg:w-8 md:w-8 w-2 lg:bg-whitegray md:bg-whitegray bg-green'></div>
             <div className='flex lg:px-4 md:px-4 px-2 items-center overflow-y-auto h-[60vh]'>
                <div className='w-full lg:mt-20 md:mt-20 mt-36 '>
                   <h1 className='flex lg:text-black md:text-black text-white items-center font-semibold lg:text-xl md:text-xl text-xl mb-4 lg:gap-4 md:gap-4 gap-2'><span className='font-bold lg:text-2xl md:text-2xl text-xl lg:text-green md:text-green text-white'>2.</span>Katsina ICT for Agriculture (AgriTech) Program:
                   </h1>

                   <p className='text-sm mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> Leverage ICT to improve agricultural practices and productivity in Katsina.</p>

                   <p className='text-sm  flex gap-2 mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> This is very important to the local economy</p>

                   <h1 className='flex items-center  lg:text-black md:text-black text-white font-semibold text-lg mb-4 gap-4'><span className=' lg:text-green md:text-green text-white text-xl'>●</span> Elements:</h1>
                    
                    <p className='mb-2  lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Mobile Apps for Farmers: </span>Develop mobile apps providing farmers with weather
                    updates, market information, and best practices</p>

                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Precision Agriculture Technology:</span>
                    Introduce technologies like drones and
                    sensors to monitor crop health and optimize resource use.
                    </p>

                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ E-Commerce Platforms:</span>
                    Create platforms for farmers to sell their produce online.
                    </p>
                    
                    <p className='mb-2 lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Agricultural Data Collection and Analysis:</span>
                    Use ICT to collect and analyze
                    agricultural data to inform policy decisions.
    
                    </p>

                </div> 
             </div>
             </div>

             </div>
            </div>
           </div>

       </div>
      </div>
    </div>
  )
}

export default Focusarea
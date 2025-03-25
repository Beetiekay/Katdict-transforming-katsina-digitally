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
import Footer from '../../components/Footer';

const Focusarea = () => {
  return (
    <div className='w-full lg:min-h-[100vh] dark:bg-black md:min-h-[100vh] min-h-[80vh]  overflow-x-hidden'>
     <div className='absolute z-20'><Navigation/></div>
     <div className='min-h-[100vh] lg:mt-56 md:mt-52 mt-40 w-[100%] flex justify-center items-center relative'>
        <div>
           <h1 data-aos="fade-right" className='lg:text-5xl dark:text-white md:text-4xl text-2xl text-center font-semibold mb-2'>OUR FOCUS <span className='text-green'>AREAS</span></h1> 
           <p className='text-lg text-center text-green mb-6'>Empowering Katsina Through ICT</p>
          
           <div>

            <div className='lg:px-10 md:px-10 px-4 mb-6'>
               <div className='flex justify-center relative top-9'><button className='p-5  dark:bg-black bg-whitegray outline-none rounded-full border-2 border-green'><img src={icon1} data-aos="zoom-in" className='w-10'/></button></div>
             <div className='grid dark:bg-black lg:grid-cols-2 grid-cols-1 lg:border-2 md:border-2  lg:bg-whitegray md:bg-whitegray bg-green border-green rounded-2xl lg:px-10 md:px-10 px-2 lg:py-8 md:py-8 py-2 gap-6'>
             <div>
                <img src={image1}  className='rounded-2xl object-cover'/>
             </div>

             {/* contents */}
             <div className='relative '>
                <div className='absolute -right-1 h-[60vh] lg:w-8 md:w-8 w-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green'></div>
             <div className='flex lg:px-4 md:px-4 px-2 items-center overflow-y-auto h-[60vh]'>
                <div className='w-full lg:mt-20 md:mt-20 mt-96 '>
                   <h1 data-aos="fade-right" className='flex dark:text-white lg:text-black md:text-black text-white items-center font-semibold lg:text-xl md:text-xl text-xl mb-4 lg:gap-4 md:gap-4 gap-2'><span className='font-bold lg:text-2xl md:text-2xl text-xl lg:text-green md:text-green text-white'>1.</span>Katsina ICT Innovation Hub:</h1>

                   <p data-aos="fade-up" className='text-sm mb-4 dark:text-white lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> A physical or virtual space dedicated to fostering ICT innovation within Katsina.</p> 

                   <p data-aos="fade-up" className='text-sm dark:text-white flex gap-2 mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> It serves as a central point for learning, collaboration, and entrepreneurship</p>

                   <h1 data-aos="fade-right" className='flex items-center dark:text-white lg:text-black md:text-black text-white font-semibold text-lg mb-4 gap-4'><span className=' lg:text-green md:text-green text-white text-xl'>●</span> Elements:</h1>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Digital Literacy Training: </span>Offer basic and advanced digital skills training for youth, women, and entrepreneurs.</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Coding and Software Development Workshops: </span>
                    Conduct workshops to teachcoding, app development, and software engineering.</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Startup Incubator/Accelerator:</span>
                     Provide resources, mentorship, and funding
                     opportunities for ICT startups.
                    </p>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ E-Governance Training:</span>
                    Train government officials and citizens on using ICT forefficient service delivery.
                    </p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Local Language Content Creation:</span>
                    Support the creation of digital content in
                    Hausa to increase accessibility
                    </p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Cybersecurity Awareness:</span>
                    Conduct workshops to educate people about onlinesafety and cybersecurity.
                    </p>
                </div> 
             </div>
             </div>

             </div>
            </div>
              
            <div className='lg:px-10 md:px-10 px-4 mb-6'>
            <div className='flex justify-center  relative top-9'><button className='p-5 dark:bg-black bg-whitegray py-6 outline-none rounded-full border-2 border-green'><img src={icon2} data-aos="zoom-in" className='w-10'/></button></div>
             <div className='grid lg:grid-cols-2 grid-cols-1 lg:border-2 md:border-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green border-green rounded-2xl lg:px-10 md:px-10 px-2 lg:py-8 md:py-8 py-2 gap-6'>
             <div>
                <img src={image2}  className='rounded-2xl object-cover'/>
             </div>

             {/* contents */}
             <div className='relative'>
                <div className='absolute -right-1 h-[60vh] lg:w-8 md:w-8 w-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green'></div>
             <div className='flex lg:px-4 md:px-4 px-2 items-center overflow-y-auto h-[60vh]'>
                <div className='w-full  lg:mt-20 md:mt-20 mt-36 '>
                   <h1 data-aos="fade-right" className='flex dark:text-white lg:text-black md:text-black text-white items-center font-semibold lg:text-xl md:text-xl text-xl mb-4 lg:gap-4 md:gap-4 gap-2'><span className='font-bold lg:text-2xl md:text-2xl text-xl lg:text-green md:text-green text-white'>2.</span>Katsina ICT for Agriculture (AgriTech) Program:
                   </h1>

                   <p data-aos="fade-up" className='text-sm mb-4 dark:text-white  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> Leverage ICT to improve agricultural practices and productivity in Katsina.</p>

                   <p data-aos="fade-up" className='text-sm dark:text-white flex gap-2 mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> This is very important to the local economy</p>

                   <h1 data-aos="fade-right" className='flex dark:text-white items-center  lg:text-black md:text-black text-white font-semibold text-lg mb-4 gap-4'><span className=' lg:text-green md:text-green text-white text-xl'>●</span> Elements:</h1>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Mobile Apps for Farmers: </span>Develop mobile apps providing farmers with weather
                    updates, market information, and best practices</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Precision Agriculture Technology:</span>
                    Introduce technologies like drones and
                    sensors to monitor crop health and optimize resource use.
                    </p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ E-Commerce Platforms:</span>
                    Create platforms for farmers to sell their produce online.
                    </p>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Agricultural Data Collection and Analysis:</span>
                    Use ICT to collect and analyze
                    agricultural data to inform policy decisions.
    
                    </p>

                </div> 
             </div>
             </div>

             </div>
            </div>
            
            <div className='lg:px-10 md:px-10 px-4 mb-6'>
            <div className='flex justify-center  relative top-9'><button className=' bg-whitegray dark:bg-black outline-none rounded-full border-2 border-green'><img src={icon3} data-aos="zoom-in" className='w-20'/></button></div>
             <div className='grid lg:grid-cols-2 grid-cols-1 lg:border-2 md:border-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green border-green rounded-2xl lg:px-10 md:px-10 px-2 lg:py-8 md:py-8 py-2 gap-6'>
             <div>
                <img src={image3}  className='rounded-2xl object-cover'/>
             </div>

             {/* contents */}
             <div className='relative'>
                <div className='absolute -right-1 h-[60vh] lg:w-8 md:w-8 w-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green'></div>
             <div className='flex lg:px-4 md:px-4 px-2 items-center overflow-y-auto h-[60vh]'>
                <div className='w-full lg:mt-20 md:mt-20 mt-36 '>
                   <h1 data-aos="fade-right" className='flex dark:text-white lg:text-black md:text-black text-white items-center font-semibold lg:text-xl md:text-xl text-xl mb-4 lg:gap-4 md:gap-4 gap-2'><span className='font-bold lg:text-2xl md:text-2xl text-xl lg:text-green md:text-green text-white'>3.</span>Katsina Digital Education Initiative:

                   </h1>

                   <p data-aos="fade-up" className='text-sm mb-4 dark:text-white lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> Integrate ICT into the education system to enhance learning outcomes</p>

                   <p data-aos="fade-up" className='text-sm dark:text-white flex gap-2 mb-4  lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> This will help to increase the education level within the state</p>

                   <h1 data-aos="fade-right" className='flex items-center dark:text-white lg:text-black md:text-black text-white font-semibold text-lg mb-4 gap-4'><span className=' lg:text-green md:text-green text-white text-xl'>●</span> Elements:</h1>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ E-Learning Platforms: </span>Develop and implement e-learning platforms for schools</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Digital Content Development:</span>
                    Create digital educational content in Hausa and
                    English.
                    </p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold  lg:text-green md:text-green text-white'>○ Teacher Training on ICT Integration:</span>
                    Train teachers on how to effectively use ICT
                    in the classroom.
                    </p>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Computer Labs in Schools:</span>
                    Establish and equip computer labs in schools
                    </p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'><span className='font-bold lg:text-green md:text-green text-white'>○ Online Libraries:</span>
                    : create digital libraries that are accessible to students.

                    </p>

                </div> 
             </div>
             </div>

             </div>
            </div>
 
            <div className='lg:px-10 md:px-10 px-4 mb-8'>
            <div className='flex justify-center  relative top-9'><button className=' bg-whitegray dark:bg-black  outline-none rounded-full border-2 border-green'><img src={icon4} data-aos="zoom-in" className='w-20'/></button></div>
             <div className='grid lg:grid-cols-2 grid-cols-1 lg:border-2 md:border-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green border-green rounded-2xl lg:px-10 md:px-10 px-2 lg:py-8 md:py-8 py-2 gap-6'>
             <div>
                <img src={image4}  className='rounded-2xl object-cover'/>
             </div>

             {/* contents */}
             <div className='relative'>
                <div className='absolute -right-1 h-[60vh] lg:w-8 md:w-8 w-2 dark:bg-black lg:bg-whitegray md:bg-whitegray bg-green'></div>
             <div className='flex lg:px-4 md:px-4 px-2 items-center overflow-y-auto h-[60vh]'>
                <div className='w-full lg:mt-20 md:mt-20 -mt-8 '>
                   <h1 data-aos="fade-right" className='flex dark:text-white lg:text-black md:text-black text-white items-center font-semibold lg:text-xl md:text-xl text-xl mb-4 lg:gap-4 md:gap-4 gap-2'><span className='font-bold lg:text-2xl md:text-2xl text-xl lg:text-green md:text-green text-white'>4.</span>Katsina ICT and Entrepreneurship Program:

                   </h1>

                   <p data-aos="fade-up" className='text-sm mb-4 dark:text-white lg:text-black md:text-black text-white'><span className=' lg:text-green md:text-green text-white'>○</span> To create a new generation of ICT entrepreneurs</p>

                   <h1 data-aos="fade-right" className='flex items-center dark:text-white lg:text-black md:text-black text-white font-semibold text-lg mb-4 gap-4'><span className=' lg:text-green md:text-green text-white text-xl'>●</span> Elements:</h1>
                    
                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'>Provide access to computers, and internet</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'>Provide training in online business, and E-commerce.</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'>Provide training in online marketing.</p>

                    <p data-aos="fade-up" className='mb-2 dark:text-white lg:text-black md:text-black text-white'> Create a platform to connect entrepreneurs with investors.</p>


                </div> 
             </div>
             </div>

             </div>
            </div>

           </div>
         
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Focusarea
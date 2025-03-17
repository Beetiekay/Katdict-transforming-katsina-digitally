import React from 'react'
import image1 from "../assets/levelup.png"
import image2 from "../assets/wootlab.png"
import logo from "../Favicon/fav.png";
import levelup from "../assets/videos/levelup.mp4";


const Ktlevelup = () => {
  return (
    <div data-aos="zoom-out"  className='py-4 lg:px-24 md:px-8 px-2'>
        <div>
        <div className='flex justify-around items-center lg:py-4 md:py-4 py-2 border-b-2 mb-6 border-cobalt'>
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
            <div><img src={image1} className='lg:w-28 md:w-28 w-16 object-fill'/></div>
            <div><img src={image2} className='lg:w-28 md:w-28 w-16 object-fill'/></div>
        </div>

         <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-14 lg:px-0 md:px-0 px-4'>
          <div className='lg:mb-0 md:mb-0 mb-4'>
           <p className='lg:text-xl md:text-xl text-sm font-semibold lg:mb-4 md:mb-4 mb-2'>Your Future Start Here !</p>
           <h1 className='lg:text-5xl md:text-5xl text-3xl font-semibold text-cobalt'>Why You Should You <br/>Apply For LevelUp <br/><span className='text-black'>Katsina</span></h1>
           </div>

           <div>
            <video src={levelup} controls className='lg:h-[60vh] md:h-[40vh] h-[50vh] lg:w-[80%] md:w-[80%] w-[100%] rounded-2xl border-4 border-cobalt'/>
           </div>
         </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-0 md:px-0 px-4'>

             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='lg:text-4xl md:text-4xl text-3xl font-semibold mb-2 text-cobalt'>Gain In-Demand <br className='lg:flex md:flex hidden'/>Digital Skills</h1>
                <p>
                92% of future jobs will require digital skills.Get trained in high-demand fields like Al, Data, and Blockchain.
                </p>
             </div>

             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='lg:text-4xl md:text-4xl text-3xl font-semibold mb-2 text-cobalt'>100% Free Training- <br className='lg:flex md:flex hidden'/> No Cost!</h1>
                <p>
                No fees! This fully-funded training is sponsored for you.  Grab this opportunity before slots fill up!

                </p>
             </div>
              
             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='lg:text-4xl md:text-4xl text-3xl font-semibold mb-2 text-cobalt'>Certification & <br className='lg:flex md:flex hidden'/>Career Boost</h1>
                <p>
                Earn a recognized certificate upon completion. Stand out in the job market with industry- relevant training.
                </p>
             </div>

             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='lg:text-4xl md:text-4xl text-3xl font-semibold mb-2 text-cobalt'>Connect with Experts <br className='lg:flex md:flex hidden'/> & Build Your Network</h1>
                <p>
                Learn directly from industry experts and mentors. Expand your career opportunities with a strong network.
                </p>
             </div>
          </div> 

          <div className='lg:px-0 md:px-0 px-4 mt-4'>
            <h1 className='lg:text-4xl md:text-4xl text-2xl text-cobalt font-bold mb-4'>Apply Now!</h1>
            <p className='lg:w-[40%] px-1 py-2 text-xl rounded-t-2xl bg-midnightblue text-white'>
              Only 20,000 Youths & 5,000 Civil Servants will be selected. Limited Slots Available
             </p>

             <button className='px-4 py-2 mb-6 text-white bg-midnightblue rounded-b-xl'>Deadline 20th March, 2025</button>

             <div className='py-2 flex gap-2 animate-pulse'><button className='font-semibold'>Apply Now</button> <a href='https://levelupkatsina.katdict.ng/' target='_blank' className='bg-cobalt px-2 text-white py-2'>www.levelupkatsina.com</a></div>
          </div>    
              
        </div>
        
    </div>
  )
}

export default Ktlevelup
import React from 'react'
import image1 from "../assets/levelup.png"
import image2 from "../assets/wootlab.png"
import logo from "../Favicon/fav.png"


const Ktlevelup = () => {
  return (
    <div className='py-4 lg:px-24 md:px-8 px-2'>
        <div>
        <div className='flex justify-around py-4 border-b-2 mb-6 border-midnightblue'>
            <div>
             <div className='flex gap-2'>
                 <div><img src={logo} className='w-8'/></div>
                 <div className='flex items-center'>
                 <div className='lg:block md:block hidden'>
                  <h1 className='text-[16px] text-green font-serif font-semibold'>KATDICT</h1>
                  <div className='w-20 h-3 gap-1 flex'>
                     <div className='w-6 h-1 bg-green rounded-lg'></div>
                     <div className='w-14 h-1  bg-green rounded-lg'></div>
                  </div>
                  </div>
                 </div>
              </div>
            </div>
          <img src={image1} className='lg:w-28 md:w-28 w-10 object-fill'/>
          <img src={image2} className='lg:w-28 md:w-28 w-10 object-fill'/>
        </div>

         <div className='flex justify-start mb-14'>
          <div>
           <p className='text-xl font-semibold mb-4'>Your Future Start Here !</p>
           <h1 className='text-5xl font-semibold text-cobalt'>Why You Should You <br/>Apply For LevelUp <br/><span className='text-black'>Katsina</span></h1>
           </div>
         </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>

             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='text-4xl font-semibold mb-2 text-cobalt'>Gain In-Demand <br/>Digital Skills</h1>
                <p>
                92% of future jobs will require digital skills.Get trained in high-demand fields like Al, Data, and Blockchain.
                </p>
             </div>

             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='text-4xl font-semibold mb-2 text-cobalt'>100% Free Training- <br/> No Cost!</h1>
                <p>
                No fees! This fully-funded training is sponsored for you.  Grab this opportunity before slots fill up!

                </p>
             </div>
              
             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='text-4xl font-semibold mb-2 text-cobalt'>Certification & <br/>Career Boost</h1>
                <p>
                Earn a recognized certificate upon completion. Stand out in the job market with industry- relevant training.
                </p>
             </div>

             <div className='py-4 px-2 rounded-2xl bg-midnightblue bg-opacity-15 hover:scale-105'>
               <h1 className='text-4xl font-semibold mb-2 text-cobalt'>Connect with Experts <br/> & Build Your Network</h1>
                <p>
                Learn directly from industry experts and mentors. Expand your career opportunities with a strong network.
                </p>
             </div>
          </div>     
        </div>
    </div>
  )
}

export default Ktlevelup
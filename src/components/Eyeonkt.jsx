import React from 'react'
import imagelayer from "../assets/vadoo.jpg"
import Navigation from './Navigation'
import { MdGppGood, MdMail } from 'react-icons/md'
import { FaArrowRight, FaChevronCircleDown, FaFacebook, FaGoodreads } from 'react-icons/fa'

const Eyeonkt = () => {
  return (
    <div className='lg:overflow-visible md:overflow-visible overflow-y-scroll h-[100vh]'>
     <div className='w-[100%] h-[100vh] bg-seagreen  bg-opacity-35 relative '>
        <img src={imagelayer} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-15'/>
        <div className='h-full'>
        <div className='relative '>
        <div className='absolute z-20'><Navigation/></div>
          <div className='py-40'>
            
            <h1 className='lg:text-7xl md:text-7xl text-white text-4xl text-center font-semibold mb-14'>How innovation drives
            research and development
            </h1>
            
            <div className='w-full lg:overflow-visible md:overflow-visible overflow-x-auto lg:px-0 md:px-0 px-2'>
            <div className='grid grid-cols-2 gap-4 lg:w-fit md:w-fit w-[180vw] lg:mb-0 md:mb-0 mb-4'>
                <div data-aos="flip-right" className='bg-white py-6 px-4 lg:rounded-none md:rounded-none rounded-2xl'>
                    <h1 className='bg-green py-2 px-3 text-white lg:text-2xl md:text-2xl text-lg lg:w-44 md:w-44 w-28 mb-4'>Overview</h1>
                    <p className='lg:text-2xl md:text-2xl text-lg mb-6'>
                    Using a laptop computer, Smartphone or iPad has become an essential part of everyday life for many people.
                    </p>

                    <p className='lg:text-xl md:text-xl text-lg bg-green text-white py-2 px-2 lg:w-32 md:w-32 w-28 mb-2'>Louis Smirf</p>
                    <h4 className='text-black opacity-40'>/ Design Leader – Aqua Group</h4>
                </div>

                <div data-aos="flip-up" className='bg-white bg-opacity-35 lg:rounded-none md:rounded-none rounded-2xl py-6 px-4'>
                    <p className='text-sm mb-4'>
                    From its founding in 1990 in Cambridge in the UK, it has grown to become a major developer of digital electronic products. The company has offices around the world, including design centres in the UK, USA, India, Scandinavia, France and China.
                    </p>

                    <div className='bg-green text-white px-2 py-2 flex justify-between border-b-4 border-white'>
                        <p className=''>TAGS</p>

                        <a href='https://katdict.ng/case-study-tag/basic/' target='_blank'>Basic</a>
                    </div>

                    <div className='bg-green text-white px-2 py-2 flex justify-between'>
                        <p className=''>SHARE</p>
                         
                        <div className='flex items-center gap-4'>
                        <a href='https://twitter.com/share?text=Katsina%20Data%20Revolution&url=https%3A%2F%2Fkatdict.ng%2Fcase_study%2Fkatsina-data-revolution%2F' target='_blank'>X</a>
                        <a href='https://www.facebook.com/sharer.php?m2w=&s=100&p%5Burl%5D=https%3A%2F%2Fkatdict.ng%2Fcase_study%2Fkatsina-data-revolution%2F&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fkatdict.ng%2Fwp-content%2Fuploads%2F2019%2F03%2Fcase-study-04.jpg&p%5Btitle%5D=Katsina+Data+Revolution&sw_fnr_id=436100255&fnr_t=6' target='_blank'><FaFacebook/></a>
                        <a href='' target='_blank'><MdMail/></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

          </div>
        </div>
    
        </div>
         <div>
            {/* another section */}
            <div className='lg:px-8 md:px-8 px-2 py-6 grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-6 border-b-2 relative lg:top-0 md:top-28 top-0 border-green'>
            <div >
            <h1 className='lg:text-5xl md:text-5xl text-2xl mb-4 text-green lg:px-4 md:px-4 px-2 font-semibold'>Requirements</h1>
            <div className='lg:flex md:flex block gap-4'>
                <FaArrowRight size={25} className='mt-3 lg:rotate-0 md:rotate-0 rotate-90 text-green'/>
                <p className='text-lg'>The communication between machines of<br/> different kinds sometimes cause troubles and<br/> inaccuratsignal decoding results.</p>
             </div>
            </div>

            <div>
            <h1 className='lg:text-5xl md:text-5xl text-2xl mb-4 text-green g:px-4 md:px-4 px-2 font-semibold'>Our solution</h1>
            <div className='lg:flex md:flex block gap-4'>
                <MdGppGood size={40} className='mt-3  text-green'/>
                Advancements in technology – including machine-to-machine communications between smart sensors, referred to as ‘The Internet of Things’. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are.
             </div>
            </div>

         </div>

         <div className='lg:px-8 md:px-8 px-2 py-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 relative lg:top-0 md:top-28 top-0  gap-6 mb-6 border-b-2 border-green'>
            <div>
            <div className='lg:flex md:flex block gap-4'>
                <FaArrowRight size={25} className='mt-3 lg:rotate-0 md:rotate-0 rotate-90 text-green'/>
                <p className='text-lg'>The potential market for servers and networking equipment development is still unstable and shrinks every year.</p>
             </div>
            </div>

            <div>
            <div className='lg:flex md:flex block gap-4'>
                <MdGppGood size={40} className='mt-3  text-green'/>
                Market development – increasing market share in new markets such as servers and networking equipment. ARM’s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet.
             </div>
            </div>
         </div>
        
         <div className='lg:px-8 md:px-8 px-2 py-6 relative lg:top-0 md:top-28 top-0 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-6 border-b-2 border-green'>
            <div>
            <div className='lg:flex md:flex block gap-4'>
                <FaArrowRight size={25} className='mt-3 mb-2 lg:rotate-0 md:rotate-0 rotate-90 text-green'/>
                <p className='text-lg'>Demand for energy efficient technology – the market demands high performance products using low power technology.</p>
             </div>
            </div>

            <div>
            <div className='lg:flex md:flex block gap-4'>
                <MdGppGood size={40} className='mt-3 text-green'/>
                This case study will demonstrate how ARM’s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners.
             </div>
            </div>

         </div>

         <div className='lg:px-48 md:px-10 px-2 py-6 relative lg:top-0 md:top-20 top-0 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-16'>
            <div>
            <div className='flex gap-4'>
                <h1 className='text-3xl lg:text-black md:text-black text-green font-semibold'>Results:</h1>
             </div>
            </div>

            <div>
            <div className='flex gap-4'>
            Over 900 licenses have been sold to more than 250 companies, including the world’s leading semiconductor and systems companies.
             </div>
            </div>
         </div>

         <div className='lg:px-48 md:px-10 px-2 gap-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-6'>
            <div  className='relative mb-4'>
              <input type='checkbox' className='w-40 h-6 z-10 absolute opacity-0 peer transition-transform'/>
              <div className=' peer-checked:text-green peer-checked:rotate-180 absolute'><FaChevronCircleDown size={25}/></div>
              <div className=' peer-checked:text-green'><h1 className='lg:text-xl md:text-xl text-lg font-semibold px-8'>New Multiple Site Connectivity</h1></div>
              <div className='px-2 py-2 duration-500 hidden peer-checked:block'>
                <p>
                We use a newly developed technology to connect sites that are based on different types of servers and networks, SiteConnect, which helps to reduce the misinterpretation of signals as well as the loss of data during transfering.   
                </p>
              </div>
            </div>

            <div className='relative mb-4'>
              <input type='checkbox' className='w-40 h-6 z-10 absolute opacity-0 peer transition-transform'/>
              <div className=' peer-checked:text-green peer-checked:rotate-180 absolute'><FaChevronCircleDown size={25}/></div>
              <div className=' peer-checked:text-green'><h1 className='lg:text-xl md:text-xl text-lg font-semibold px-8'>IT Security & Software</h1></div>
              <div className='px-2 py-2 duration-500 hidden peer-checked:block'>
                <p>
                To keep your systems, your devices, and network stay secure, we have developed a new program that limits the access of suspicious objects or people and authenticate all logins to the system. 
                </p>
              </div>
            </div>
            
            <div className='relative mb-4'>
              <input type='checkbox' className='w-40 h-6 z-10 absolute opacity-0 peer transition-transform'/>
              <div className=' peer-checked:text-green peer-checked:rotate-180 absolute'><FaChevronCircleDown size={25}/></div>
              <div className=' peer-checked:text-green'><h1 className='lg:text-xl md:text-xl text-lg font-semibold px-8'>Weak Hosted Capability</h1></div>
              <div className='px-2 py-2 duration-500 hidden peer-checked:block'>
                <p>
                Some hosts are unaware of the potential risks as well as security loopholes in their system. By detecting these errors and taking prompt actions on improving firewalls, we can upgrade the system security. 
                </p>
              </div>
            </div>

            <div className='relative mb-4'>
              <input type='checkbox' className='w-40 h-6 z-10 absolute opacity-0 peer transition-transform'/>
              <div className=' peer-checked:text-green peer-checked:rotate-180 absolute'><FaChevronCircleDown size={25}/></div>
              <div className=' peer-checked:text-green'><h1 className='lg:text-xl md:text-xl text-lg font-semibold px-8'>Build Internet Network</h1></div>
              <div className='px-2 py-2 duration-500 hidden peer-checked:block'>
                <p>
                The internal network is essential for all companies and corporations, especially for those working in IT sector. To avoid possible risks when sharing internal confidential files and documentation to an external receiver, internal network must be strong.
                </p>
              </div>
            </div>
         </div>

        </div>
     </div>  
    </div>
  )
}

export default Eyeonkt
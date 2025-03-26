import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { TfiWorld } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const Wedo = () => {
  return (
    <div className='py-6 dark:bg-black'>
      {/* cards */}
      <div className='py-2 text-lg flex justify-start lg:px-8 md:px-5 px-4 text-green'><Link to={"/"}>Back</Link></div>
            
        <div className='w-[100%]  dark:bg-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-8 md:px-5 px-4 mb-10'>
        {/* 1 */}
        <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
                  <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><FaBookOpen/></button></div>
                  <div className='px-4 py-6'>
                    <h1 className='text-2xl font-semibold text-white'>ICT Governance & Strategy</h1>
                    <p className='text-white opacity-80'>
                    We coordinate Katsina State ICT activities, implement strategic policy frameworks, and drive automation initiatives to streamline government processes.
                    </p>
                  </div>
        </div>
        {/* 2 */}
        <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
                  <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><MdOutlineShoppingCart/></button></div>
                  <div className='px-4 py-6'>
                    <h1 className='text-2xl font-semibold text-white'>Needs Asssesments & Procurement</h1>
                    <p className='text-white opacity-80'>
                    We Conduct assessments, recommend innovative solutions, procure ICT resources, and champion efficient procurement practices.
                    </p>
                  </div>
        </div>
        {/* 3 */}
        <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
                  <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><FaBookOpen/></button></div>
                  <div className='px-4 py-6'>
                    <h1 className='text-2xl font-semibold text-white'>Capacity Building & Training</h1>
                    <p className='text-white opacity-80'>
                    Capacity Building & Training
                    We Provide ICT staff to government agencies, support skill development for public servants, and equip them with automation expertise.
                    </p>
                  </div>
        </div>
        {/* 4 */}
        <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
                  <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><TfiWorld/></button></div>
                  <div className='px-4 py-6'>
                    <h1 className='text-2xl font-semibold text-white'>Infrastructure Management & Oversight</h1>
                    <p className='text-white opacity-80'>
                    Maintain state-owned technology platforms, oversee technology providers, and ensure efficient infrastructure for all ICT needs.
                    </p>
                  </div>
                </div>
        {/* 5 */}
        <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
                  <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><RxDashboard/></button></div>
                  <div className='px-4 py-6'>
                    <h1 className='text-xl font-semibold text-white'>Innovation & Collaboration</h1>
                    <p className='text-white opacity-80'>
                     Foster ICT hubs development, collaborate with providers for continous leearning, and explore
                     innovative solutions for government service
                    </p>
                  </div>
        </div>
        {/* 6 */}
        <div data-aos="flip-up" className='bg-green dark:bg-opacity-65 rounded-lg shadow-md cursor-pointer'>
                  <div><button className='px-4 py-6 border-4 hover:scale-110 duration-700 border-white bg-black text-white rounded-lg text-4xl'><GoProjectSymlink/></button></div>
                  <div className='px-4 py-6'>
                    <h1 className='text-2xl font-semibold text-white'>Reporting & Advocacy</h1>
                    <p className='text-white opacity-80'>
                     Deliver annual ICT performance reports, organize ICT events in the state, and represent the state at technology events, and advocate for the effective use of technology within government.
                    </p>
                  </div>
        </div>
    </div>
    </div>
  )
}

export default Wedo
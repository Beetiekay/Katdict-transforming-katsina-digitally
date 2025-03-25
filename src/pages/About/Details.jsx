import React, { useEffect } from 'react'
//aos
import AOS from 'aos';
import "aos/dist/aos.css"
import image from "../../Favicon/fav.png"
import bg from "../../Favicon/fav.png"

const Details = () => {
    useEffect(() => {
            AOS.init({duration:1200})
         })
  return (
    <div className='py-5 relative'>
        <img src={bg} className='w-full h-[100vh] absolute top-0 saturate-0 object-cover opacity-5'/>
        <div className='relative'>
        <div className='lg:px-0 md:px-0 px-4'>
        <p className='bg-black dark:bg-green dark:bg-opacity-70 dark:text-white bg-opacity-10 py-6 px-4 lg:w-[60%] md:w-[80%] w-full mb-4'>
        That's excellent! KATDICT is playing a crucial role in bringing that vision to reality. Let's delve deeper into how these activities align with the goals of inclusive development, transparent governance, and sustainable progress in Katsina State:
        </p>
        </div>
         
        <p data-aos="fade-right" className='lg:text-lg dark:text-white md:text-lg text-sm font-semibold px-5 mb-6'>
         KATDICT's Role in Transparent Governance:
          </p>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-2 mb-6'>
         <div data-aos="fade-up" className='mb-6'>
         <p className='text-lg dark:text-white font-semibold px-5'>
           ICT Services to Government:
          </p>
          <div className='px-6 mb-4'><div className='h-1 w-28 bg-green rounded-2xl'></div></div>
          <div className='px-4'>
          <p className=' bg-green dark:bg-opacity-50 text-white py-4 px-4 rounded-b-2xl'>
          * By providing robust and reliable ICT infrastructure, KATDICT enables government agencies to deliver services more efficiently and effectively. This can lead to improved access to healthcare, education, and social services, particularly for marginalized communities.
          </p>
          </div>
          </div>
          {/* 2 */}
         <div data-aos="fade-up" className='mb-6'>
         <p className='text-lg dark:text-white font-semibold px-5'>
          KATDICT's Role in Transparent Governance
          </p>
          <div className='px-6 mb-4'><div className='h-1 w-28 bg-green rounded-2xl'></div></div>
          <div className='px-4'>
          <p className=' bg-green dark:bg-opacity-50 text-white py-4 px-4 rounded-b-2xl'>
          * Implementing digital record-keeping and data management systems enhances transparency and accountability within government agencies.
         Digital platforms can facilitate the publication of government data and financial information, making it accessible to the public.
          </p>
          </div>
          </div>
          {/* 3 */}
          <div data-aos="fade-up" className='mb-6'>
         <p className='text-lg dark:text-white font-semibold px-5'>
         KATDICT's Role in Sustainable Progress
          </p>
          <div className='px-6 mb-4'><div className='h-1 w-28 bg-green rounded-2xl'></div></div>
          <div className='px-4'>
          <p className=' bg-green dark:bg-opacity-50 text-white py-4 px-4 rounded-b-2xl'>
          * Data analysis and digital monitoring tools can be used to track environmental indicators and support sustainable resource management.
          Digital platforms can facilitate the dissemination of information on sustainable agricultural practices and renewable energy solutions.
          </p>
          </div>
          </div>       
          </div>
           
          <p data-aos="fade-right" className='text-lg dark:text-white font-semibold px-6'>Recommendations for KATDICT:</p>
          <div className='px-6 mb-4'><div className='h-1 w-28 bg-green rounded-2xl'></div></div>
           
           <p data-aos="fade-up" className='px-6 dark:text-white lg:w-[50%] md:w-[80%] w-[100%] mb-4'>
           <span className='font-semibold text-green'>* Prioritize Digital Inclusion:</span> Ensure that initiatives are designed to reach all segments of the population, including women, youth, and people with disabilities.
           </p>

           <p data-aos="fade-up" className='px-6 dark:text-white lg:w-[50%] md:w-[80%] w-[100%] mb-4'>
           <span className='font-semibold text-green'>* Strengthen Cybersecurity:</span> Implement robust cybersecurity measures to protect government data and ensure the security of online services.
           </p>

           <p data-aos="fade-up" className='px-6 dark:text-white lg:w-[50%] md:w-[80%] w-[100%] mb-4'>
           <span className='font-semibold text-green'>* Promote Collaboration: </span> 
           Foster partnerships with local communities, businesses, and educational institutions to maximize the impact of digital initiatives.
           </p>

           <p data-aos="fade-up" className='px-6 dark:text-white lg:w-[50%] md:w-[80%] w-[100%] mb-4'>
           <span className='font-semibold text-green'>* Focus on Local Content:</span> Encourage
            the development of digital content and applications in local languages.
           </p>

           <p data-aos="fade-up" className='px-6 dark:text-white lg:w-[50%] md:w-[80%] w-[100%] mb-4'>
           <span className='font-semibold text-green'>* Monitor and Evaluate: </span>Regularly 
           assess the impact of digital initiatives and make adjustments as needed.
           </p>

           <div>
            <div data-aos="zoom-in" className='flex justify-center mb-2'><img src={image} className='w-24'/></div>

            <div className='flex justify-center lg:px-0 md:px-0 px-4'>
            <p data-aos="fade-up" className='bg-black dark:bg-green dark:bg-opacity-50 dark:text-white lg:text-base md:text-base text-sm bg-opacity-5 py-6 lg:px-4 md:px-4 px-2 text-center rounded-2xl shadow-md lg:w-[50%] md:w-[70%] w-full'>By continuing to play a leading role in these areas, KATDICT can significantly contribute to the digital transformation of Katsina State and improve the lives of its citizens.</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Details
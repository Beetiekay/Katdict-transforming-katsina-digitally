import React from 'react'
import Cardw from '../pages/Home/Cardw'
import image1 from "../assets/p1.jpg"
import image2 from "../assets/p2.webp"
import image3 from "../assets/p3.jpg"
import image4 from "../assets/p4.webp"
import image5 from "../assets/p5.jpg"

const Allworks = () => {
  return (
    <div className='py-6 lg:px-8 md:px-8 px-0'>
          <div className='w-full relative'> 
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-24 md:px-5 px-1 mb-10'>
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

               <Cardw 
                image={image1} 
                tittle="Katsina Data Solution" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />

              <Cardw 
                image={image4} 
                tittle="Katsina Smart Government House" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />

              <Cardw 
                image={image5} 
                tittle="Katsina Data Revolution" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
            </div>
         </div>
         <div className='bg-whitegray w-full h-6 relative -top-4'></div>
        </div>
  )
}

export default Allworks
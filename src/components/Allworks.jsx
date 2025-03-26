import React from 'react'
import Cardw from '../pages/Home/Cardw'
import image from "../Favicon/fav.png"
import { Link } from 'react-router-dom'


const Allworks = () => {
  return (
    <div className='py-6 dark:bg-black lg:px-8 md:px-8 px-0'>
          <div className='w-full relative'> 
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-24 md:px-5 px-1 mb-10'>
              <Link to={"/eyeonkt"}>
                <Cardw 
                image={image} 
                tittle="Eye On Katsina" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
                </Link>

               <Link to={"/kdb"}>
               <Cardw 
                image={image} 
                tittle="Katsina Digital Bridge" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
                </Link>
               
               <Link to={"/ktdatasolution"}>
               <Cardw 
                image={image} 
                tittle="Katsina Data Solution" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
                </Link>

              <Cardw 
                image={image} 
                tittle="Katsina Smart Government House" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />

              <Cardw 
                image={image} 
                tittle="Katsina Data Revolution" 
                desc="Capacity Building And Training"
                paragh="The Prospect for a company operating in this new market are varied and exciting. The potencial..."
                />
            </div>
         </div>
        </div>
  )
}

export default Allworks
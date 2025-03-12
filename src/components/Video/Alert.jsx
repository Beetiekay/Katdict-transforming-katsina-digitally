import React from 'react'
import {IoMdCloseCircle} from "react-icons//io";
import interview from "../Video/dg.mp4";

export default function Alert({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full min-h-[100vh] fixed lg:px-0 md:px-0 px-4 inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
     <div className='flex-col bg-white bg-opacity-85 p-5 border-2 border-green rounded-3xl'> 
        <div className='flex justify-end mb-4'><IoMdCloseCircle size={30} onClick={onClose}  className='cursor-pointer text-black hover:scale-125 duration-700'/></div>
        <h1 className='text-xl font-semibold mb-2'><span className='text-green font-normal'>Naufal Ahmad</span> Director General</h1>

        <video src={interview} controls/>
     </div>      
    </div>
  )};
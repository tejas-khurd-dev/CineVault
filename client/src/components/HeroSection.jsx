import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-[url("/backgroundImage.jpg")] bg-cover bg-center h-screen flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-22 gap-2'>
        
        <img src={assets.theConjuringLogo} alt="" className='w-48 sm:w-64 md:w-80 mt-5' />

        <h1 className='py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'><span className='text-[#c02628] font-extrabold'>The Conguring 4: </span><br />Last Rites</h1>

        <div className='text-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 text-sm md:text-base'>
            <span> Horror | Supernatural | Thriller</span>
            <div className='flex justify-between items-center sm:mx-4 gap-6'>
                <div className='flex justify-between items-center gap-3'>
                    <CalendarIcon className='w-4 h-4 md:w-5 md:h-5'/> <span>2025</span>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <Clock className='w-4 h-4 md:w-5 md:h-5'/> <span>2h 15m</span>
                </div>
            </div> 
        </div>

        <p className='text-gray-300 py-3 text-sm md:text-base max-w-xl'>In their final and most terrifying case, <br className='hidden md:block' />Ed and Lorraine Warren confront an ancient evil that <br className='hidden md:block' /> threatens to consume every soul.</p>

        <button onClick={()=>{navigate("/movies"); scroll(0, 0);}} className='bg-primary px-4 py-2 my-2 rounded-3xl text-base md:text-xl flex justify-between items-center gap-1 cursor-pointer' >Explore Movies <ArrowRight/> </button>
    </div>
  )
}

export default HeroSection
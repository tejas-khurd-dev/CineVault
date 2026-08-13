import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='relative isolate min-h-[100svh] bg-[url("/backgroundImage.jpg")] bg-cover bg-center flex flex-col justify-end sm:justify-center items-start px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16 gap-4'>
        <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/10' />
        <div className='relative z-10 max-w-2xl'>
          <img src={assets.theConjuringLogo} alt="" className='w-40 sm:w-56 md:w-72 lg:w-80' />

          <h1 className='py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
            <span className='text-[#c02628] font-extrabold'>The Conjuring 4: </span>
            <br />Last Rites
          </h1>

          <div className='text-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 text-sm md:text-base'>
              <span>Horror | Supernatural | Thriller</span>
              <div className='flex flex-wrap items-center gap-4 sm:gap-6'>
                  <div className='flex items-center gap-3'>
                      <CalendarIcon className='w-4 h-4 md:w-5 md:h-5'/> <span>2025</span>
                  </div>
                  <div className='flex items-center gap-3'>
                      <Clock className='w-4 h-4 md:w-5 md:h-5'/> <span>2h 15m</span>
                  </div>
              </div> 
          </div>

          <p className='text-gray-300 py-3 text-sm md:text-base max-w-xl'>In their final and most terrifying case, Ed and Lorraine Warren confront an ancient evil that threatens to consume every soul.</p>

          <button onClick={()=>{navigate("/movies"); scroll(0, 0);}} className='bg-primary px-5 py-3 mt-2 rounded-3xl text-sm sm:text-base md:text-lg font-medium flex justify-between items-center gap-1 cursor-pointer' >
            Explore Movies <ArrowRight className='w-4 h-4'/> 
          </button>
        </div>
    </div>
  )
}

export default HeroSection

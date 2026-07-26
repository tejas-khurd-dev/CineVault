import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-[url("/backgroundImage.jpg")] bg-cover bg-center h-screen flex flex-col justify-center items-start px-22 gap-2'>
        
        <img src={assets.theConjuringLogo} alt="" className='w-80 mt-5' />

        <h1 className='py-4 text-6xl'><span className='text-[#c02628] font-extrabold'>The Conguring 4: </span><br />Last Rites</h1>

        <div className='text-gray-300 flex justify-between items-center gap-4'>
            <span> Horror | Supernatural | Thriller</span>
            <div className='flex justify-between items-center mx-4 gap-6'>
                <div className='flex justify-between items-center gap-3'>
                    <CalendarIcon /> <span>2025</span>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <Clock /> <span>2h 15m</span>
                </div>
            </div> 
        </div>

        <p className='text-gray-300 py-3 '>In their final and most terrifying case, <br />Ed and Lorraine Warren confront an ancient evil that  <br />  threatens  to consume every soul.</p>

        <button onClick={()=>navigate("/movies")} className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer' >Explore Movies <ArrowRight/> </button>
    </div>
  )
}

export default HeroSection
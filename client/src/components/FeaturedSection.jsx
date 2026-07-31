import { ArrowRight } from 'lucide-react'
import React from 'react'
import BlurCircle from './BlurCircle'
import { useNavigate } from 'react-router-dom'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeaturedSection = () => {

    const navigate = useNavigate()

  return (
    <div className='relative w-full py-10 px-60'>
        <div className='relative py-15 flex w-full justify-between items-center'>
            <BlurCircle top="-40px" right="-75px"/>
            <p className='text-xl font-bold text-white/90 [word-spacing:2px]'>Now Showing</p>
            <button className='flex justify-between items-center gap-2 text-gray-300 cursor-pointer' >View All <ArrowRight /> </button>
        </div>

        <BlurCircle top="35rem" left="10rem"/>

        <div className='flex flex-wrap justify-center items-center gap-7'>
            {dummyShowsData.slice(0,8).map((movie)=><MovieCard key={movie._id} movie={movie}/>)}
        </div>
       
  
        <div className='flex justify-center items-center mt-12'>
            <button onClick={()=>{navigate("/movies"); scroll(0, 0);}} className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Show More</button>
        </div>
    </div>
  )
}

export default FeaturedSection
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import BlurCircle from './BlurCircle'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard'
import { useMovie } from '../hooks/useMovie.js'

const FeaturedSection = () => {

    const navigate = useNavigate()
    const { movies, handleGetAllMovies } = useMovie()

    useEffect(() => {
      handleGetAllMovies()
    }, [])

    const goToMovies = () => {
      navigate("/movies")
      scroll(0, 0)
    }

  return (
    <div className='relative w-full py-10 px-6 md:px-16 lg:px-24 xl:px-44'>
        <div className='relative py-8 md:py-15 flex w-full justify-between items-center'>
            <BlurCircle top="-40px" right="-75px"/>
            <p className='text-lg md:text-xl font-bold text-white/90 [word-spacing:2px]'>Now Showing</p>
            <button onClick={goToMovies} className='flex justify-between items-center gap-2 text-sm md:text-base text-gray-300 cursor-pointer' >View All <ArrowRight className='w-4 h-4 md:w-5 md:h-5'/> </button>
        </div>

        <BlurCircle top="35rem" left="10rem"/>

        <div className='flex flex-wrap justify-center items-center gap-4 md:gap-7 lg:gap-12 xl:gap-15'>
            {movies.slice(0,8).map((movie)=><MovieCard key={movie._id} movie={movie}/>)}
        </div>
       
  
        <div className='flex justify-center items-center mt-12'>
            <button onClick={goToMovies} className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Show More</button>
        </div>
    </div>
  )
}

export default FeaturedSection
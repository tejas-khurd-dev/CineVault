import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import { useMovie } from '../hooks/useMovie.js'

const Movies = () => {

  const { movies, loading, handleGetAllMovies } = useMovie()

  useEffect(() => {
    handleGetAllMovies()
  }, [])

  if (loading && movies.length === 0) {
    return <Loading />
  }

  return movies.length > 0 ? (
    <div className='pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40'>
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-gray-300 text-center sm:text-left'>Now Showing</h1>
      <BlurCircle top='18rem'/>
      <BlurCircle top='40rem' right='2rem'/>
      <BlurCircle bottom='-50rem' left='6rem'/>
      <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8'>
          {movies.map((movie)=><MovieCard key={movie._id} movie={movie}/>)}
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-36 lg:pt-44 xl:pt-48 pb-5 h-screen text-center'>
      <h3 className='text-base sm:text-lg md:text-xl font-bold text-gray-300'>No movies available right now</h3>
    </div>
  )
}

export default Movies

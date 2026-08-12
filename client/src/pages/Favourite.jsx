import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import { useUser } from '../hooks/useUser.js'

const Favourite = () => {

  const { favourites, loading, handleGetFavourites } = useUser()

  useEffect(() => {
    handleGetFavourites()
  }, [])

  if (loading && favourites.length === 0) {
    return <Loading />
  }

  return favourites.length > 0 ? (
    <div className='relative min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-35 pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40'>
      <BlurCircle top='2rem'/>
      <BlurCircle bottom='0' right='6rem'/>

      <h1 className='text-base sm:text-lg md:text-xl font-bold text-gray-300 text-center sm:text-left'>Your Favourite Movies</h1>

      <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8'>
          {favourites.map((fav) => (
            <MovieCard key={fav.movie._id} movie={fav.movie}/>
          ))}
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-36 lg:pt-44 xl:pt-50 pb-5 h-screen text-center'>
      <h3 className='text-base sm:text-lg md:text-xl font-bold text-gray-300'>No favourite movies yet</h3>
    </div>
  )
}

export default Favourite
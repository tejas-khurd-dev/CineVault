import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className='pt-35 pb-5'>
      <h1 className='text-xl font-bold text-gray-300 ml-40'>Now Showing</h1>\
      <BlurCircle top='18rem'/>
      <BlurCircle top='40rem' right='2rem'/>
      <BlurCircle bottom='-50rem' left='6rem'/>
      <div className='flex flex-wrap justify-center gap-8 px-40 mt-8'>
          {dummyShowsData.map((movie)=><MovieCard key={movie._id} movie={movie}/>)}
      </div>
    </div>
  ) : (
    <div className='flex justify-center pt-50 pb-5 h-screen'>
      <h3 className='text-xl font-bold text-gray-300 ml-40'>No movies available right now</h3>
    </div>
  )
}

export default Movies
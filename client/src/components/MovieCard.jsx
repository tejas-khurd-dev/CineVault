import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/moviedetails/${movie._id}`)
    scrollTo(0, 0)
  }

  return (
    <div className='bg-gray-800 w-full max-w-[16rem] sm:max-w-[17rem] rounded-2xl px-3 sm:px-4 py-2 shadow-lg shadow-black/20 transition hover:-translate-y-1'>

      <img
        onClick={handleNavigate}
        src={movie.posterPath}
        alt=""
        className='rounded-lg h-64 sm:h-75 w-full object-cover cursor-pointer mt-2 shadow-[0_0_10px_rgba(0,0,0,0.6)]'
      />

      <p className='font-semibold text-sm sm:text-base mt-3 truncate'>
        {movie.title}
      </p>

      <p className='text-xs sm:text-sm text-gray-400 mt-2 mb-4 sm:mb-5 truncate'>
        {movie.genres?.slice(0, 2).join(" | ")} • {timeFormat(movie.runtime)}
      </p>

      <div className='flex justify-between items-center gap-2 mb-1'>
        <button
          onClick={handleNavigate}
          className='bg-primary mt-2 px-2 sm:px-3 py-2 rounded-2xl text-xs sm:text-sm flex justify-between items-center gap-1 cursor-pointer'
        >
          Buy Tickets
        </button>

        <p className='flex justify-between items-center gap-1 sm:gap-2 text-gray-400 shrink-0 text-xs sm:text-sm'>
          <StarIcon className='text-primary fill-primary w-3.5 h-3.5 sm:w-4 sm:h-4' />
          {movie.voteAverage?.toFixed(1)}
        </p>
      </div>

    </div>
  )
}

export default MovieCard
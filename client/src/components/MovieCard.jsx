import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({movie}) => {

    const navigate = useNavigate()

  return (
    <div className='bg-gray-800 w-full max-w-[15.5rem] sm:w-66 rounded-2xl px-4 py-2 m-1 sm:m-3'>
        <img onClick={()=>{navigate(`/moviedetails/${movie._id}`); scroll(0,0);}} src={movie.backdrop_path} alt="" className='rounded-lg h-56 sm:h-65 w-full object-cover cursor-pointer mt-2 shadow-[0_0_10px_rgba(0,0,0,0.6)]' />
        
        <p className='font-semibold mt-3 truncate'>{movie.title}</p>

        <p className="text-sm text-gray-400 mt-2 mb-5 truncate">
            {movie.release_date.slice(0, 4)} • {movie.genres.slice(0, 2).map(i => i.name).join(" | ")} • {timeFormat(movie.runtime)}
        </p>

        <div className='flex justify-between items-center gap-4 mb-1'>
            <button onClick={()=>{navigate(`/moviedetails/${movie._id}`); scroll(0,0);}} className='bg-primary mt-2 px-2 py-2 rounded-2xl text-sm flex justify-between items-center gap-1 cursor-pointer' > Buy Tickets</button>
            <p className='flex justify-between items-center gap-2 text-gray-400 shrink-0'>
                <StarIcon className='text-primary fill-primary w-4 h-4'/> {movie.vote_average.toFixed(1)}
            </p>
        </div>
    </div>
  )
}

export default MovieCard
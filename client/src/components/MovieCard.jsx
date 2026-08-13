import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({movie}) => {

    const navigate = useNavigate()

  return (
    <div className='bg-gray-800 w-full max-w-[19rem] sm:max-w-[17rem] rounded-2xl px-4 py-2 shadow-lg shadow-black/20 transition hover:-translate-y-1'>
        <img onClick={()=>{navigate(`/moviedetails/${movie._id}`); scroll(0,0);}} src={movie.posterPath} alt="" className='rounded-lg h-75 w-full object-cover cursor-pointer mt-2 shadow-[0_0_10px_rgba(0,0,0,0.6)]' />
        
        <p className='font-semibold mt-3 truncate'>{movie.title}</p>

        <p className="text-sm text-gray-400 mt-2 mb-5 truncate">
            {movie.genres?.slice(0, 2).join(" | ")} • {timeFormat(movie.runtime)}
        </p>

        <div className='flex justify-between items-center gap-4 mb-1'>
            <button onClick={()=>{navigate(`/moviedetails/${movie._id}`); scroll(0,0);}} className='bg-primary mt-2 px-2 py-2 rounded-2xl text-sm flex justify-between items-center gap-1 cursor-pointer' > Buy Tickets</button>
            <p className='flex justify-between items-center gap-2 text-gray-400 shrink-0'>
                <StarIcon className='text-primary fill-primary w-4 h-4'/> {movie.voteAverage?.toFixed(1)}
            </p>
        </div>
    </div>
  )
}

export default MovieCard

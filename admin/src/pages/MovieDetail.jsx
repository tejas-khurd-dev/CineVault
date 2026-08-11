import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, StarIcon } from 'lucide-react'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import { useMovie } from '../hooks/useMovie.js'
import AddCast from '../components/AddCast.jsx'
import AddShow from '../components/AddShow.jsx'

const MovieDetail = () => {

  const { movieId } = useParams()
  const navigate = useNavigate()

  const { movie, loading, handleGetMovieById } = useMovie()

  useEffect(() => {
    if (!movieId) return
    handleGetMovieById(movieId)
  }, [movieId])

  if (loading && !movie) {
    return <Loading />
  }

  return (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='25%'/>

      <button
        onClick={() => navigate('/add-movies')}
        className='flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary cursor-pointer mb-4 sm:mb-6'
      >
        <ArrowLeftIcon className='w-4 h-4' />
        Back to Movies
      </button>

      {/* Movie header */}
      {movie && (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10'>
          <img
            src={movie.backdropPath}
            alt={movie.title}
            className='w-32 sm:w-40 md:w-48 aspect-[2/3] object-cover rounded-md sm:rounded-lg border border-primary/20 shrink-0'
          />
          <div>
            <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>{movie.title}</h1>
            <p className='flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 mt-1.5'>
              <StarIcon className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary' />
              {movie.voteAverage?.toFixed(1)} • {movie.runtime} min
            </p>
            <p className='text-xs sm:text-sm text-gray-300 mt-3 max-w-xl'>{movie.overview}</p>
            {movie.genres?.length > 0 && (
              <div className='flex flex-wrap gap-1.5 mt-3'>
                {movie.genres.map((genre) => (
                  <span key={genre} className='text-[10px] sm:text-xs px-2 py-1 rounded-md bg-primary/15 text-primary'>
                    {genre}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cast + Show sections */}
      <div className='flex flex-col gap-8 sm:gap-10'>
        <AddCast movieId={movieId} />
        <AddShow movieId={movieId} />
      </div>
    </div>
  )
}

export default MovieDetail
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadIcon, ImageIcon, StarIcon, TrashIcon } from 'lucide-react'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import ConfirmDialog from '../components/ConfirmDialog'
import toast from 'react-hot-toast'
import { useMovie } from '../hooks/useMovie.js'

const GENRE_OPTIONS = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime',
  'Documentary', 'Drama', 'Family', 'Fantasy', 'Horror', 'Music' , 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War',
]

const AddMovies = () => {

  const navigate = useNavigate()
  const { movies, loading, error, handleAddMovie, handleGetAllMovies, handleDeleteMovie } = useMovie()

  const [posterFile, setPosterFile] = useState(null)
  const [posterPreview, setPosterPreview] = useState(null)

  const [backdropFile, setBackdropFile] = useState(null)
  const [backdropPreview, setBackdropPreview] = useState(null)

  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [selectedGenres, setSelectedGenres] = useState([])
  const [originalLanguage, setOriginalLanguage] = useState('en')
  const [runtime, setRuntime] = useState('')

  const [movieToDelete, setMovieToDelete] = useState(null) 
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    handleGetAllMovies()
  }, [])

  const handlePosterChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setPosterFile(file)
    setPosterPreview(URL.createObjectURL(file))
  }

  const handleBackdropChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setBackdropFile(file)
    setBackdropPreview(URL.createObjectURL(file))
  }

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    )
  }

  const resetForm = () => {
    setPosterFile(null)
    setPosterPreview(null)
    setBackdropFile(null)
    setBackdropPreview(null)
    setTitle('')
    setOverview('')
    setSelectedGenres([])
    setOriginalLanguage('en')
    setRuntime('')
  }

  const handleAddShow = async () => {
    if (!posterFile) return toast.error('Please upload a poster image')
    if (!backdropFile) return toast.error('Please upload a backdrop image')
    if (!title.trim()) return toast.error('Please enter a movie title')
    if (!overview.trim()) return toast.error('Please enter an overview')
    if (selectedGenres.length === 0) return toast.error('Please select at least one genre')
    if (!runtime || Number(runtime) <= 0) return toast.error('Please enter a valid runtime')

    const formData = new FormData()
    formData.append('poster', posterFile)
    formData.append('backdrop', backdropFile)
    formData.append('title', title.trim())
    formData.append('overview', overview.trim())
    formData.append('genres', JSON.stringify(selectedGenres))
    formData.append('originalLanguage', originalLanguage || 'en')
    formData.append('runtime', runtime)

    const newMovie = await handleAddMovie(formData)

    if (newMovie) {
      toast.success('Movie added successfully')
      resetForm()
    } else {
      toast.error(error || 'Could not add movie')
    }
  }

  const goToMovieDetail = (movieId) => {
    navigate(`/movie-detail/${movieId}`)
  }

  const onDeleteClick = (e, movie) => {
    e.stopPropagation() // don't trigger the card's navigate-to-detail click
    setMovieToDelete(movie)
  }

  const confirmDelete = async () => {
    if (!movieToDelete) return

    setDeleting(true)
    const success = await handleDeleteMovie(movieToDelete._id)
    setDeleting(false)

    if (success) {
      toast.success('Movie deleted')
    } else {
      toast.error(error || 'Could not delete movie')
    }

    setMovieToDelete(null)
  }

  return (
    <div className='relative overflow-x-hidden'>
      <BlurCircle bottom='0' right='15%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        Add <span className='text-primary'>Movie</span>
      </h1>

      <div className='mt-4 sm:mt-6 md:mt-8 bg-primary/10 border border-primary/20 rounded-md sm:rounded-lg p-4 sm:p-6 max-w-3xl'>

        {/* Image uploads */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
          <div>
            <p className='text-sm sm:text-base font-medium mb-2'>Poster Image <span className='text-red-500'>*</span></p>
            <label className='block w-28 sm:w-32 md:w-36 aspect-[2/3] rounded-md sm:rounded-lg border border-dashed border-primary/40 bg-primary/5 cursor-pointer overflow-hidden relative hover:border-primary/70 transition'>
              <input type='file' accept='image/*' onChange={handlePosterChange} className='hidden' />
              {posterPreview ? (
                <img src={posterPreview} alt='Poster preview' className='w-full h-full object-cover' />
              ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-1.5 text-gray-400'>
                  <UploadIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                  <span className='text-[10px] sm:text-xs'>Upload poster</span>
                </div>
              )}
            </label>
          </div>

          <div className='flex-1'>
            <p className='text-sm sm:text-base font-medium mb-2'>Backdrop Image <span className='text-red-500'>*</span></p>
            <label className='block w-28 sm:w-32 md:w-36 aspect-[2/3] rounded-md sm:rounded-lg border border-dashed border-primary/40 bg-primary/5 cursor-pointer overflow-hidden relative hover:border-primary/70 transition'>
              <input type='file' accept='image/*' onChange={handleBackdropChange} className='hidden' />
              {backdropPreview ? (
                <img src={backdropPreview} alt='Backdrop preview' className='w-full h-full object-cover' />
              ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-1.5 text-gray-400'>
                  <ImageIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                  <span className='text-[10px] sm:text-xs'>Upload backdrop</span>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Title */}
        <div className='mt-5 sm:mt-6'>
          <p className='text-sm sm:text-base font-medium mb-2'>Movie Title <span className='text-red-500'>*</span></p>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter movie title'
            className='w-full sm:w-96 border border-primary/30 bg-primary/5 rounded-md px-3 py-1.5 sm:py-2 text-sm sm:text-base outline-none placeholder:text-gray-500 focus:border-primary/60'
          />
        </div>

        {/* Overview */}
        <div className='mt-5 sm:mt-6'>
          <p className='text-sm sm:text-base font-medium mb-2'>Overview <span className='text-red-500'>*</span></p>
          <textarea
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder='Enter movie overview'
            rows={3}
            className='w-full border border-primary/30 bg-primary/5 rounded-md px-3 py-2 text-sm sm:text-base outline-none placeholder:text-gray-500 resize-none focus:border-primary/60'
          />
        </div>

        {/* Genres */}
        <div className='mt-5 sm:mt-6'>
          <p className='text-sm sm:text-base font-medium mb-2'>Genres <span className='text-red-500'>*</span></p>
          <div className='flex flex-wrap gap-2'>
            {GENRE_OPTIONS.map((genre) => (
              <label
                key={genre}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md border cursor-pointer text-xs sm:text-sm transition ${
                  selectedGenres.includes(genre)
                    ? 'border-primary bg-primary/20 text-primary'
                    : 'border-primary/30 bg-primary/5 text-gray-300 hover:border-primary/50'
                }`}
              >
                <input
                  type='checkbox'
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                  className='hidden'
                />
                {genre}
              </label>
            ))}
          </div>
        </div>

        {/* Language + runtime */}
        <div className='flex flex-wrap gap-4 sm:gap-6 mt-5 sm:mt-6'>
          <div>
            <p className='text-sm sm:text-base font-medium mb-2'>Original Language</p>
            <input
              type='text'
              value={originalLanguage}
              onChange={(e) => setOriginalLanguage(e.target.value)}
              placeholder='en'
              maxLength={5}
              className='border border-primary/30 bg-primary/5 rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none w-20 sm:w-24 placeholder:text-gray-500 focus:border-primary/60'
            />
          </div>

          <div>
            <p className='text-sm sm:text-base font-medium mb-2'>Runtime (minutes) <span className='text-red-500'>*</span></p>
            <input
              type='number'
              min='0'
              value={runtime}
              onChange={(e) => {
                const val = e.target.value
                if (val === '' || Number(val) >= 0) setRuntime(val)
              }}
              onKeyDown={(e) => {
                if (e.key === '-' || e.key === 'e' || e.key === '+') e.preventDefault()
              }}
              placeholder='150'
              className='border border-primary/30 bg-primary/5 rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none w-24 sm:w-28 placeholder:text-gray-500 focus:border-primary/60 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            />
          </div>
        </div>

        <button
          onClick={handleAddShow}
          disabled={loading}
          className='mt-6 sm:mt-8 border border-primary/40 bg-primary px-6 sm:px-8 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto'
        >
          {loading ? 'Adding...' : 'Add Movie'}
        </button>
      </div>

      {/* Active Movies */}
      <p className='text-sm sm:text-base md:text-lg font-medium mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4'>Active Movies</p>

      {loading && movies.length === 0 ? (
        <Loading />
      ) : movies.length === 0 ? (
        <p className='text-sm text-gray-400'>No movies added yet.</p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 md:gap-6'>
          {movies.map((movie) => (
            <div
              key={movie._id}
              className='bg-gray-800/60 border border-primary/10 hover:border-primary/30 transition rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-2.5 sm:py-3'
            >
              <div className='relative'>
                <img
                  onClick={() => goToMovieDetail(movie._id)}
                  src={movie.posterPath}
                  alt={movie.title}
                  className='rounded-md sm:rounded-lg w-full h-40 sm:h-56 md:h-85 object-cover cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)]'
                />
                <button
                  onClick={(e) => onDeleteClick(e, movie)}
                  aria-label={`Delete ${movie.title}`}
                  className='absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-600 transition rounded-full p-1.5 cursor-pointer'
                >
                  <TrashIcon className='w-3 h-3 sm:w-3.5 sm:h-3.5 text-white' />
                </button>
              </div>

              <p className='font-semibold mt-2.5 sm:mt-3 truncate text-xs sm:text-base'>{movie.title}</p>

              <p className='text-[10px] sm:text-sm text-gray-400 mt-1 mb-2.5 sm:mb-3 truncate'>
                {movie.genres?.slice(0, 2).join(' | ')} • {movie.runtime} min
              </p>

              <div className='flex justify-between items-center gap-2'>
                <button
                  onClick={() => goToMovieDetail(movie._id)}
                  className='bg-primary hover:bg-primary/90 transition px-3 py-1.5 rounded-2xl text-[10px] sm:text-sm font-medium cursor-pointer'
                >
                  Manage
                </button>
                <p className='flex items-center gap-1 text-gray-400 text-[10px] sm:text-sm shrink-0'>
                  <StarIcon className='text-primary fill-primary w-3 h-3 sm:w-4 sm:h-4'/>
                  {movie.voteAverage?.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <ConfirmDialog
        isOpen={!!movieToDelete}
        title='Delete this movie?'
        message={movieToDelete ? `"${movieToDelete.title}" and all of its cast members and showtimes will be permanently deleted. This can't be undone.` : ''}
        confirmText='Delete'
        cancelText='Cancel'
        loading={deleting}
        onConfirm={confirmDelete}
        onCancel={() => setMovieToDelete(null)}
      />
    </div>
  )
}

export default AddMovies
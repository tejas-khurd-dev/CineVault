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

      <div className='mt-4 w-full max-w-4xl rounded-xl border border-primary/20 bg-primary/10 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:mt-6 sm:p-6 md:mt-8'>

        {/* Image uploads */}
        <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
          <div className='w-full sm:w-auto'>
            <p className='text-sm sm:text-base font-medium mb-2'>Poster Image <span className='text-red-500'>*</span></p>
            <label className='block aspect-[2/3] w-32 overflow-hidden rounded-lg border border-dashed border-primary/40 bg-primary/5 cursor-pointer transition hover:border-primary/70 sm:w-36'>
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

          <div className='w-full flex-1'>
            <p className='text-sm sm:text-base font-medium mb-2'>Backdrop Image <span className='text-red-500'>*</span></p>
            <label className='block aspect-[2/3] w-32 overflow-hidden rounded-lg border border-dashed border-primary/40 bg-primary/5 cursor-pointer transition hover:border-primary/70 sm:w-36'>
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
            className='w-full rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm outline-none placeholder:text-gray-500 focus:border-primary/60 sm:w-96 sm:py-2 sm:text-base'
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
            className='w-full resize-none rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm outline-none placeholder:text-gray-500 focus:border-primary/60 sm:text-base'
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
        <div className='mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:gap-6'>
          <div>
            <p className='text-sm sm:text-base font-medium mb-2'>Original Language</p>
            <input
              type='text'
              value={originalLanguage}
              onChange={(e) => setOriginalLanguage(e.target.value)}
              placeholder='en'
              maxLength={5}
              className='w-24 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-xs outline-none placeholder:text-gray-500 focus:border-primary/60 sm:w-28 sm:px-3 sm:py-2 sm:text-sm'
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
              className='w-28 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-xs outline-none placeholder:text-gray-500 focus:border-primary/60 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none sm:w-32 sm:px-3 sm:py-2 sm:text-sm'
            />
          </div>
        </div>

        <button
          onClick={handleAddShow}
          disabled={loading}
          className='mt-6 w-full rounded-md border border-primary/40 bg-primary px-6 py-2 text-sm font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:mt-8 sm:w-auto sm:px-8 sm:py-2.5 sm:text-base'
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
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:gap-5 md:gap-6'>
          {movies.map((movie) => (
            <div
              key={movie._id}
              className='overflow-hidden rounded-2xl border border-primary/10 bg-gray-800/60 px-3 py-3 transition hover:border-primary/30'
            >
              <div className='relative'>
                <img
                  onClick={() => goToMovieDetail(movie._id)}
                  src={movie.posterPath}
                  alt={movie.title}
                  className='h-56 w-full cursor-pointer rounded-lg object-cover shadow-[0_0_10px_rgba(0,0,0,0.5)] sm:h-64'
                />
                <button
                  onClick={(e) => onDeleteClick(e, movie)}
                  aria-label={`Delete ${movie.title}`}
                  className='absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-600 transition rounded-full p-1.5 cursor-pointer'
                >
                  <TrashIcon className='w-3 h-3 sm:w-3.5 sm:h-3.5 text-white' />
                </button>
              </div>

              <p className='mt-2.5 truncate text-xs font-semibold sm:mt-3 sm:text-base'>{movie.title}</p>

              <p className='mt-1 mb-2.5 truncate text-[10px] text-gray-400 sm:mb-3 sm:text-sm'>
                {movie.genres?.slice(0, 2).join(' | ')} • {movie.runtime} min
              </p>

              <div className='flex items-center justify-between gap-2'>
                <button
                  onClick={() => goToMovieDetail(movie._id)}
                  className='rounded-full bg-primary px-3 py-1.5 text-[10px] font-medium cursor-pointer transition hover:bg-primary/90 sm:text-sm'
                >
                  Manage
                </button>
                <p className='flex shrink-0 items-center gap-1 text-[10px] text-gray-400 sm:text-sm'>
                  <StarIcon className='h-3 w-3 text-primary fill-primary sm:h-4 sm:w-4'/>
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

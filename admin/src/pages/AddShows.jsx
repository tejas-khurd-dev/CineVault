import React, { useState } from 'react'
import { dummyDashboardData } from '../assets/assets'
import { UploadIcon, ImageIcon, StarIcon } from 'lucide-react'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

const AddShows = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [activeShows, setActiveShows] = useState(dummyDashboardData.activeShows)

  const [posterFile, setPosterFile] = useState(null)
  const [posterPreview, setPosterPreview] = useState(null)

  const [backdropFile, setBackdropFile] = useState(null)
  const [backdropPreview, setBackdropPreview] = useState(null)

  const [movieTitle, setMovieTitle] = useState('')
  const [showPrice, setShowPrice] = useState('')
  const [showDate, setShowDate] = useState('')
  const [showTime, setShowTime] = useState('')

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

  const resetForm = () => {
    setPosterFile(null)
    setPosterPreview(null)
    setBackdropFile(null)
    setBackdropPreview(null)
    setMovieTitle('')
    setShowPrice('')
    setShowDate('')
    setShowTime('')
  }

  const handleAddShow = () => {
    if (!posterPreview) return toast('Please upload a poster image')
    if (!backdropPreview) return toast('Please upload a backdrop image')
    if (!movieTitle) return toast('Please enter a movie title')
    if (!showPrice) return toast('Please enter show price')
    if (!showDate || !showTime) return toast('Please select date and time')

    const newShow = {
      _id: `local_${Date.now()}`,
      movie: {
        title: movieTitle,
        poster_path: posterPreview,
        backdrop_path: backdropPreview,
        vote_average: 0,
      },
      showDateTime: `${showDate}T${showTime}:00.000Z`,
      showPrice: Number(showPrice),
      occupiedSeats: {},
    }

    setActiveShows((prev) => [newShow, ...prev])
    toast.success('Show added successfully')
    resetForm()
  }

  return (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='25%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        Add <span className='text-primary'>Shows</span>
      </h1>

      {/* Image uploads */}
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8'>
        <div>
          <p className='text-sm sm:text-base font-medium mb-2'>Poster Image</p>
          <label className='block w-32 sm:w-36 md:w-40 aspect-[2/3] rounded-md sm:rounded-lg border border-dashed border-primary/40 bg-primary/5 cursor-pointer overflow-hidden relative'>
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
          <p className='text-sm sm:text-base font-medium mb-2'>Backdrop Image</p>
          <label className='block w-32 sm:w-36 md:w-40 aspect-[2/3] rounded-md sm:rounded-lg border border-dashed border-primary/40 bg-primary/5 cursor-pointer overflow-hidden relative'>
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

      {/* Movie title */}
      <div className='mt-5 sm:mt-6'>
        <p className='text-sm sm:text-base font-medium mb-2'>Movie Title</p>
        <input
          type='text'
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder='Enter movie title'
          className='w-full sm:w-80 md:w-96 border border-primary/30 bg-primary/5 rounded-md px-3 py-1.5 sm:py-2 text-sm sm:text-base outline-none placeholder:text-gray-500'
        />
      </div>

      {/* Price, date, time */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-5 sm:mt-6'>
        <div>
          <p className='text-sm sm:text-base font-medium mb-2'>Show Price</p>
          <div className='inline-flex items-center gap-1 border border-primary/30 bg-primary/5 rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2'>
            <span className='text-gray-400 text-sm sm:text-base'>{currency}</span>
            <input
              type='number'
              min='0'
              value={showPrice}
              onChange={(e) => setShowPrice(e.target.value)}
              placeholder='0'
              className='bg-transparent outline-none w-24 sm:w-28 md:w-32 text-sm sm:text-base placeholder:text-gray-500'
            />
          </div>
        </div>

        <div>
          <p className='text-sm sm:text-base font-medium mb-2'>Show Date</p>
          <input
            type='date'
            value={showDate}
            onChange={(e) => setShowDate(e.target.value)}
            className='border border-primary/30 bg-primary/5 rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none w-full sm:w-auto [&::-webkit-calendar-picker-indicator]:invert'
          />
        </div>

        <div>
          <p className='text-sm sm:text-base font-medium mb-2'>Show Time</p>
          <input
            type='time'
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
            className='border border-primary/30 bg-primary/5 rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none w-full sm:w-auto [&::-webkit-calendar-picker-indicator]:invert'
          />
        </div>
      </div>

      <button
        onClick={handleAddShow}
        className='mt-6 sm:mt-8 md:mt-10 border border-primary/40 bg-primary px-6 sm:px-8 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium cursor-pointer'
      >
        Add Show
      </button>

      {/* Active Shows */}
      <p className='text-sm sm:text-base md:text-lg font-medium mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4'>Active Shows</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6'>
        {dummyDashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className='rounded-md sm:rounded-lg overflow-hidden bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300'
          >
            <img src={show.movie.poster_path} alt={show.movie.title} className='w-full h-48 sm:h-60 md:h-75 object-cover' />
            <div className='px-3 sm:px-4 py-2.5 sm:py-3'>
              <p className='text-sm sm:text-base font-medium truncate'>{show.movie.title}</p>
              <div className='flex items-center justify-between mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-400'>
                <p className='text-white font-medium'>{currency}{show.showPrice}</p>
                <p className='flex items-center gap-1'>
                  <StarIcon className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary' />
                  {show.movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddShows
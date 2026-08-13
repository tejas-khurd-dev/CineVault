import React, { useEffect, useState } from 'react'
import { TrashIcon } from 'lucide-react'
import Loading from '../components/Loading'
import toast from 'react-hot-toast'
import { useShow } from '../hooks/useShow.js'

const AddShow = ({ movieId }) => {

  const currency = import.meta.env.VITE_CURRENCY

  const { shows, loading, error, handleAddShow, handleGetShowsByMovie, handleDeleteShow } = useShow()

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    if (!movieId) return
    handleGetShowsByMovie(movieId)
  }, [movieId])

  const resetForm = () => {
    setDate('')
    setTime('')
    setPrice('')
  }

  const handleSubmit = async () => {
    if (!date) return toast.error('Please select a date')
    if (!time) return toast.error('Please select a time')
    if (!price || Number(price) <= 0) return toast.error('Please enter a valid price')

    const newShow = await handleAddShow(movieId, { date, time, price })

    if (newShow) {
      toast.success('Show added')
      resetForm()
    } else {
      toast.error(error || 'Could not add show')
    }
  }

  const onDeleteShow = async (showId) => {
    const success = await handleDeleteShow(showId)
    if (success) {
      toast.success('Show removed')
    } else {
      toast.error(error || 'Could not remove show')
    }
  }

  return (
    <div>
      <p className='text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4'>Showtimes</p>

      {/* Add show form */}
      <div className='w-full max-w-xl rounded-xl border border-primary/20 bg-primary/10 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-6'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5'>
          <div>
            <p className='text-xs sm:text-sm font-medium mb-1.5'>Date <span className='text-red-500'>*</span></p>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='w-full rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-xs outline-none focus:border-primary/60 [&::-webkit-calendar-picker-indicator]:invert sm:py-2 sm:text-sm'
            />
          </div>

          <div>
            <p className='text-xs sm:text-sm font-medium mb-1.5'>Time <span className='text-red-500'>*</span></p>
            <input
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='w-full rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-xs outline-none focus:border-primary/60 [&::-webkit-calendar-picker-indicator]:invert sm:py-2 sm:text-sm'
            />
          </div>

          <div>
            <p className='text-xs sm:text-sm font-medium mb-1.5'>Price <span className='text-red-500'>*</span></p>
            <div className='inline-flex w-full items-center gap-1 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1.5 focus-within:border-primary/60 sm:w-auto sm:py-2'>
              <span className='text-gray-400 text-xs sm:text-sm'>{currency}</span>
              <input
                type='number'
                min='0'
                value={price}
                onChange={(e) => {
                  const val = e.target.value
                  if (val === '' || Number(val) >= 0) setPrice(val)
                }}
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e' || e.key === '+') e.preventDefault()
                }}
                placeholder='0'
                className='w-full bg-transparent text-xs outline-none placeholder:text-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none sm:w-20 sm:text-sm'
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className='mt-4 w-full rounded-md border border-primary/40 bg-primary px-5 py-2 text-sm font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:mt-5 sm:w-auto sm:px-6 sm:text-base'
        >
          {loading ? 'Adding...' : 'Add Show'}
        </button>
      </div>

      {/* Existing shows list */}
      {loading && shows.length === 0 ? (
        <Loading />
      ) : shows.length === 0 ? (
        <p className='text-sm text-gray-400 mt-4'>No showtimes added yet.</p>
      ) : (
        <div className='mt-4 sm:mt-6 rounded-md sm:rounded-lg border border-primary/20 overflow-x-auto no-scrollbar max-w-xl'>
          <table className='w-full min-w-[420px] border-collapse text-left text-xs sm:text-sm'>
            <thead>
              <tr className='bg-primary/20 text-white'>
                <th className='px-3 sm:px-4 py-2.5 font-medium whitespace-nowrap'>Date</th>
                <th className='px-3 sm:px-4 py-2.5 font-medium whitespace-nowrap'>Time</th>
                <th className='px-3 sm:px-4 py-2.5 font-medium whitespace-nowrap'>Price</th>
                <th className='px-3 sm:px-4 py-2.5 font-medium'></th>
              </tr>
            </thead>
            <tbody className='text-gray-300'>
              {shows.map((show) => (
                <tr key={show._id} className='border-t border-primary/10'>
                  <td className='px-3 sm:px-4 py-2.5 whitespace-nowrap'>{new Date(show.date).toLocaleDateString()}</td>
                  <td className='px-3 sm:px-4 py-2.5 whitespace-nowrap'>{show.time}</td>
                  <td className='px-3 sm:px-4 py-2.5 whitespace-nowrap'>{currency}{show.price}</td>
                  <td className='px-3 sm:px-4 py-2.5'>
                    <button
                      onClick={() => onDeleteShow(show._id)}
                      aria-label='Remove show'
                      className='text-gray-400 hover:text-red-500 cursor-pointer'
                    >
                      <TrashIcon className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AddShow

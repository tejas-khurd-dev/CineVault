import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading.jsx'
import BlurCircle from '../components/BlurCircle.jsx'
import { useAuth } from '../hooks/useAuth.js'
import { useBooking } from '../hooks/useBooking.js'

const formatTime = (time) => {
  const [hourStr, minute] = time.split(':')
  let hour = Number(hourStr)
  const period = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12
  return `${hour}:${minute} ${period}`
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

const PastBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const { user, loading: authLoading } = useAuth()
  const { pastBookings, loading, handleGetPastBookings } = useBooking()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) handleGetPastBookings()
  }, [user])

  if (authLoading) {
    return <Loading />
  }

  if (!user) {
    return (
      <div className='relative overflow-x-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen pb-8 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-xl sm:text-2xl font-bold'>Sign in to see your bookings</h1>
          <button
            onClick={() => navigate('/login')}
            className='mt-6 border border-primary/40 bg-primary px-4 py-2 rounded-3xl text-sm sm:text-base'
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='relative overflow-x-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen pb-8'>
      <BlurCircle top='50px' left='60px'/>
      <BlurCircle bottom='100px' right='20%'/>
      <h1 className='text-base sm:text-lg md:text-xl font-bold text-gray-300 text-center sm:text-left'>Past Bookings</h1>

      {pastBookings.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-[60vh] gap-3'>
          <p className='text-gray-400 text-sm sm:text-base'>No past bookings yet.</p>
          <button
            onClick={() => navigate('/movies')}
            className='border border-primary/40 bg-primary px-4 py-2 rounded-3xl text-sm sm:text-base'
          >
            Browse Movies
          </button>
        </div>
      ) : (
        <div className='flex flex-col gap-4 sm:gap-0 h-[75vh] sm:h-[80vh] overflow-y-auto no-scrollbar mt-2 sm:mt-0'>
          {pastBookings.map((booking) => (
            <div key={booking._id} className='flex justify-center w-full'>
              <div className='flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[85%] lg:w-[80%] my-4 sm:my-8 md:my-10 lg:my-12 gap-4 sm:gap-5 rounded-lg bg-primary/10 border border-primary px-4 sm:px-5 py-4 sm:py-5'>
                <img
                  src={booking.show?.movie?.posterPath}
                  alt=""
                  className='w-28 sm:w-36 md:w-44 h-auto object-cover rounded mx-auto sm:mx-0 shrink-0'
                />
                <div className='flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-2 w-full relative'>
                  <div className='flex flex-col gap-1.5 sm:gap-2 text-center sm:text-left'>
                    <p className='text-lg sm:text-xl'>{booking.show?.movie?.title}</p>
                    <p className='text-sm sm:text-base text-gray-400'>
                      {booking.show?.date && formatDate(booking.show.date)}
                      {booking.show?.time && ` • ${formatTime(booking.show.time)}`}
                    </p>
                  </div>

                  <div className='flex flex-col gap-2 sm:gap-2 items-center sm:items-end text-center sm:text-right'>
                      <p className='text-2xl sm:text-3xl'>{currency}{booking.amount}</p>
                      <p className='px-2 py-2 text-green-300'>Paid</p>

                    <div className='flex flex-col gap-1 sm:gap-1.5'>
                      <p className='text-sm sm:text-base text-gray-400 whitespace-nowrap'>
                        Total Tickets <span className='text-white'>{booking.seats.length}</span>
                      </p>
                      <p className='text-sm sm:text-base text-gray-400 whitespace-nowrap'>
                        Seats Number: <span className='text-white'>{booking.seats.join(", ")}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PastBookings

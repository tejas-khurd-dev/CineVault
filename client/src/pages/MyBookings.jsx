import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import { useAuth } from '../hooks/useAuth'
import { useBooking } from '../hooks/useBooking.js'
import { useNavigate } from 'react-router-dom'

// show.date/show.time are separate fields, not a combined datetime
const formatTime = (time) => {
  const [hourStr, minute] = time.split(':')
  let hour = Number(hourStr)

  const period = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12

  return `${hour}:${minute} ${period}`
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)

  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const { user, loading: authLoading } = useAuth()
  const { bookings, loading, handleGetMyBookings } = useBooking()

  const navigate = useNavigate()

  const navigateToShow = (movieId, showDate) => {
    const formatedDate = showDate.split('T')[0]
    navigate(`/seatlayout/${movieId}/${formatedDate}`)
  }

  useEffect(() => {
    if (user) handleGetMyBookings()
  }, [user])

  if (authLoading) {
    return <Loading />
  }

  if (!user) {
    return (
      <div className='relative overflow-x-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen pb-8 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-xl sm:text-2xl font-bold'>
            Sign in to see your bookings
          </h1>

          <button
            onClick={() => navigate('/login')}
            className='mt-6 border border-primary/40 bg-primary px-4 py-2 rounded-3xl text-sm sm:text-base cursor-pointer'
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
    <div className='relative overflow-x-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-3 sm:px-8 md:px-16 lg:px-24 min-h-screen pb-8'>

      <BlurCircle top='50px' left='60px' />
      <BlurCircle bottom='100px' right='20%' />

      <h1 className='text-base sm:text-lg md:text-xl font-bold text-gray-300 text-center sm:text-left'>
        My Bookings
      </h1>

      {bookings.length === 0 ? (

        <div className='flex flex-col items-center justify-center h-[60vh] gap-3'>
          <p className='text-gray-400 text-sm sm:text-base text-center'>
            You haven't booked any tickets yet.
          </p>

          <button
            onClick={() => navigate('/movies')}
            className='border border-primary/40 bg-primary px-4 py-2 rounded-3xl text-sm sm:text-base cursor-pointer'
          >
            Browse Movies
          </button>
        </div>

      ) : (
        <div className='flex flex-col gap-4 sm:gap-6 h-[75vh] sm:h-[80vh] overflow-y-auto no-scrollbar mt-4 sm:mt-6'>
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className='flex justify-center w-full'
            >

              <div className='flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[85%] lg:w-[80%] bg-gray-900/80 border border-primary/30 rounded-2xl overflow-hidden shadow-lg shadow-black/20'>

                <div className='p-3 sm:p-4 flex justify-center sm:block shrink-0'>

                  <img
                    onClick={() =>
                      booking.show?.movie?._id &&
                      navigateToShow(
                        booking.show.movie._id,
                        booking.show.date
                      )
                    }
                    src={booking.show?.movie?.posterPath}
                    alt=''
                    className='w-full max-w-[200px] sm:w-32 sm:max-w-none md:w-36 lg:w-40 aspect-[2/3] object-cover rounded-xl cursor-pointer'
                  />

                </div>


                <div className='flex flex-col sm:flex-row flex-1 min-w-0'>


                  <div className='flex flex-col justify-center gap-2 px-4 sm:px-5 pb-4 sm:py-5 text-center sm:text-left flex-1 min-w-0'>

                    <p className='text-lg sm:text-xl font-semibold truncate'>
                      {booking.show?.movie?.title}
                    </p>

                    <p className='text-sm sm:text-base text-gray-400'>
                      {booking.show?.date &&
                        formatDate(booking.show.date)}

                      {booking.show?.time &&
                        ` • ${formatTime(booking.show.time)}`}
                    </p>

                    <div className='flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 mt-2'>

                      <p className='text-sm text-gray-400'>
                        Total Tickets:{' '}
                        <span className='text-white'>
                          {booking.seats.length}
                        </span>
                      </p>

                      <span className='hidden sm:block text-gray-600'>
                        •
                      </span>

                      <p className='text-sm text-gray-400'>
                        Seats:{' '}
                        <span className='text-white'>
                          {booking.seats.join(', ')}
                        </span>
                      </p>

                    </div>

                  </div>

                  {/* DASHED DIVIDER */}
                  <div className='border-t sm:border-t-0 sm:border-l border-dashed border-primary/40 mx-4 sm:my-5 sm:mx-0' />

                  {/* PAYMENT */}
                  <div className='flex sm:min-w-[160px] flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end px-4 sm:px-5 py-4 sm:py-5 gap-2'>

                    <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>
                      {currency}{booking.amount}
                    </p>

                    <p className='px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm whitespace-nowrap'>
                      Paid
                    </p>

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

export default MyBookings
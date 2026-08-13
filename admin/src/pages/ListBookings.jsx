import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import { useBooking } from '../hooks/useListBookings.js'

const formatTime = (time) => {
  const [hourStr, minute] = time.split(':')
  let hour = Number(hourStr)

  const period = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12

  return `${hour}:${minute} ${period}`
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)

  return `${d.getDate()} ${d.toLocaleString('en-GB', {
    month: 'short',
  })} ${d.getFullYear()}`
}

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const {
    bookings,
    loading,
    error,
    handleGetAllBookingsAdmin,
  } = useBooking()

  const [visibleCount, setVisibleCount] = useState(10)

  useEffect(() => {
    handleGetAllBookingsAdmin()
  }, [])

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10)
  }

  if (loading && !bookings.length) {
    return <Loading />
  }

  return (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='10%' />

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        List <span className='text-primary'>Bookings</span>
      </h1>

      {error ? (
        <p className='text-sm text-red-400 mt-4 sm:mt-6'>
          {error}
        </p>
      ) : bookings.length === 0 ? (
        <p className='text-sm text-gray-400 mt-4 sm:mt-6'>
          No bookings yet.
        </p>
      ) : (
        <>
          <div className='mt-4 sm:mt-6 md:mt-8 rounded-md sm:rounded-lg border border-primary/20 overflow-x-auto no-scrollbar'>
            <table className='w-full min-w-[620px] border-collapse text-left text-xs sm:text-sm'>
              <thead>
                <tr className='bg-primary/20 text-white'>
                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    User Name
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Movie Name
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Show Time
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Seats
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody className='text-gray-300'>
                {bookings.slice(0, visibleCount).map((booking) => (
                  <tr
                    key={booking._id}
                    className='border-t border-primary/10'
                  >
                    <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>
                      {booking.user?.username}
                    </td>

                    <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 max-w-[160px] sm:max-w-none truncate'>
                      {booking.show?.movie?.title}
                    </td>

                    <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>
                      {booking.show?.date && formatDate(booking.show.date)}
                      {booking.show?.time &&
                        `, ${formatTime(booking.show.time)}`}
                    </td>

                    <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>
                      {booking.seats?.join(', ')}
                    </td>

                    <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>
                      {currency}
                      {booking.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {visibleCount < bookings.length && (
            <div className='flex justify-center mt-6'>
              <button
                onClick={handleLoadMore}
                className='px-5 py-2 rounded-md bg-primary text-white hover:opacity-90 transition'
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ListBookings
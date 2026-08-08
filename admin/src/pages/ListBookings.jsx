import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import dateFormat from '../lib/dateFormat'
import showTimeFormat from '../lib/showTimeFormat'

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllBookings = () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getAllBookings()
  }, [])

  return !isLoading ? (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='10%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        List <span className='text-primary'>Bookings</span>
      </h1>

      <div className='mt-4 sm:mt-6 md:mt-8 rounded-md sm:rounded-lg border border-primary/20 overflow-x-auto no-scrollbar'>
        <table className='w-full min-w-[620px] border-collapse text-left text-xs sm:text-sm'>
          <thead>
            <tr className='bg-primary/20 text-white'>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>User Name</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Movie Name</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Show Time</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Seats</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Amount</th>
            </tr>
          </thead>
          <tbody className='text-gray-300'>
            {bookings.map((booking, index) => {
              const { day, month, year } = dateFormat(booking.show.showDateTime)
              return (
                <tr key={booking._id || index} className='border-t border-primary/10'>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>{booking.user.name}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 max-w-[160px] sm:max-w-none truncate'>{booking.show.movie.title}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>{day} {month} {year}, {showTimeFormat(booking.show.showDateTime)}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>{booking.bookedSeats.join(", ")}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>{currency}{booking.amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default ListBookings
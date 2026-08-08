import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import dateFormat from '../lib/dateFormat'
import showTimeFormat from '../lib/showTimeFormat'

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [shows, setShows] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllShows = () => {
    setShows(dummyDashboardData.activeShows)
    setIsLoading(false)
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return !isLoading ? (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='10%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        List <span className='text-primary'>Shows</span>
      </h1>

      <div className='mt-4 sm:mt-6 md:mt-8 rounded-md sm:rounded-lg border border-primary/20 overflow-x-auto no-scrollbar'>
        <table className='w-full min-w-[560px] border-collapse text-left text-xs sm:text-sm'>
          <thead>
            <tr className='bg-primary/20 text-white'>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Movie Name</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Show Time</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Total Booking</th>
              <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>Earning</th>
            </tr>
          </thead>
          <tbody className='text-gray-300'>
            {shows.map((show, index) => {
              const { day, month, year } = dateFormat(show.showDateTime)
              const totalBookings = Object.keys(show.occupiedSeats).length
              const earning = totalBookings * show.showPrice
              return (
                <tr key={index} className='border-t border-primary/10'>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 max-w-[160px] sm:max-w-none truncate'>{show.movie.title}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>{day} {month} {year}, {showTimeFormat(show.showDateTime)}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3'>{totalBookings}</td>
                  <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3'>{currency}{earning}</td>
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

export default ListShows
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import { useShow } from '../hooks/useShow.js'

const TOTAL_SEATS = 90

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const { shows, loading, handleGetAllShows } = useShow()

  const [visibleCount, setVisibleCount] = useState(10)

  useEffect(() => {
    handleGetAllShows()
  }, [])

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10)
  }

  return (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='10%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        List <span className='text-primary'>Shows</span>
      </h1>

      {loading && shows.length === 0 ? (
        <Loading />
      ) : shows.length === 0 ? (
        <p className='text-sm text-gray-400 mt-4 sm:mt-6 h-screen'>
          No shows added yet.
        </p>
      ) : (
        <>
          <div className='mt-4 sm:mt-6 md:mt-8 rounded-md sm:rounded-lg border border-primary/20 overflow-x-auto no-scrollbar'>
            <table className='w-full min-w-[560px] border-collapse text-left text-xs sm:text-sm'>
              <thead>
                <tr className='bg-primary/20 text-white'>
                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Movie Name
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Show Time
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Total Booking
                  </th>

                  <th className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 font-medium whitespace-nowrap'>
                    Earning
                  </th>
                </tr>
              </thead>

              <tbody className='text-gray-300'>
                {shows.slice(0, visibleCount).map((show) => {

                  const totalBooking = TOTAL_SEATS - show.ticket
                  const earning = totalBooking * show.price

                  return (
                    <tr
                      key={show._id}
                      className='border-t border-primary/10'
                    >
                      <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 max-w-[160px] sm:max-w-none truncate'>
                        {show.movie?.title || 'Unknown movie'}
                      </td>

                      <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 whitespace-nowrap'>
                        {new Date(show.date).toLocaleDateString()}, {show.time}
                      </td>

                      <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3'>
                        {totalBooking}
                      </td>

                      <td className='px-3 sm:px-4 md:px-5 py-2.5 sm:py-3'>
                        {currency}{earning}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {visibleCount < shows.length && (
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

export default ListShows
import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../assets/assets'
import { ChartLine, CircleDollarSign, PlayCircleIcon, UsersIcon, StarIcon } from 'lucide-react'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'

const Dashboard = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [dashboardData, setDashboardData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getDashboardData = () => {
    setDashboardData(dummyDashboardData)
    setIsLoading(false)
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  const cards = dashboardData ? [
    { label: 'Total Bookings', value: dashboardData.totalBookings, icon: ChartLine },
    { label: 'Total Revenue', value: `${currency}${dashboardData.totalRevenue}`, icon: CircleDollarSign },
    { label: 'Active Movies', value: dashboardData.activeShows.length, icon: PlayCircleIcon },
    { label: 'Total Users', value: dashboardData.totalUser, icon: UsersIcon },
  ] : []

  return !isLoading && dashboardData ? (
    <div className='relative overflow-x-hidden'>
      <BlurCircle top='0' left='10%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        Admin <span className='text-primary'>Dashboard</span>
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 '>
        {cards.map((card, index) => (
          <div
            key={index}
            className='flex items-center justify-between gap-2 sm:gap-3 bg-primary/10 border border-primary/20 rounded-md sm:rounded-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5'
          >
            <div>
              <p className='text-[11px] sm:text-xs md:text-sm text-gray-400'>{card.label}</p>
              <p className='text-base sm:text-lg md:text-xl font-semibold mt-1'>{card.value}</p>
            </div>
            <card.icon className='w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-primary shrink-0' />
          </div>
        ))}
      </div>

      <p className='text-sm sm:text-base md:text-lg font-medium mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4'>Active Movies</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 '>
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className='rounded-md sm:rounded-lg overflow-hidden bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300 '
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
  ) : (
    <Loading />
  )
}

export default Dashboard
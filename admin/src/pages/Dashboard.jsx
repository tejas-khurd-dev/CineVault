import React, { useEffect } from 'react'
import { ChartLine, CircleDollarSign, PlayCircleIcon, UsersIcon, StarIcon } from 'lucide-react'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import { useDashboard } from '../hooks/useDashboard.js'
import EarningsChart from '../components/EarningsChart'

const Dashboard = () => {

  const currency = import.meta.env.VITE_CURRENCY
  const { stats, loading, handleGetDashboardStats } = useDashboard()

  useEffect(() => {
    handleGetDashboardStats()
  }, [])

  const cards = stats ? [
    { label: 'Total Bookings', value: stats.totalBookings, icon: ChartLine },
    { label: 'Total Revenue', value: `${currency}${stats.totalRevenue}`, icon: CircleDollarSign },
    { label: 'Active Movies', value: stats.activeMoviesCount, icon: PlayCircleIcon },
    { label: 'Total Users', value: stats.totalUsers, icon: UsersIcon },
  ] : []

  if (loading && !stats) {
    return <Loading />
  }

  return (
    <div className='relative overflow-y-hidden'>
      <BlurCircle top='0' left='10%'/>

      <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
        Admin <span className='text-primary'>Dashboard</span>
      </h1>

      <div className='mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 md:mt-8 xl:grid-cols-4'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='flex items-center justify-between gap-3 rounded-xl border border-primary/20 bg-primary/10 px-4 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:px-5 sm:py-5'
          >
            <div>
              <p className='text-[11px] sm:text-xs md:text-sm text-gray-400'>{card.label}</p>
              <p className='mt-1 text-base font-semibold sm:text-lg md:text-xl'>{card.value}</p>
            </div>
            <card.icon className='h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8 md:h-9 md:w-9' />
          </div>
        ))}
      </div>

      <EarningsChart />
    </div>
  )
}

export default Dashboard

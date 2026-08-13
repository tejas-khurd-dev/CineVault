import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useDashboard } from '../hooks/useDashboard.js'

const EarningsChart = () => {

  const currency = import.meta.env.VITE_CURRENCY
  const { monthlyEarnings, yearlyEarnings, handleGetEarnings } = useDashboard()

  const [view, setView] = useState('monthly') // 'monthly' | 'yearly'

  useEffect(() => {
    handleGetEarnings()
  }, [])

  const data = view === 'monthly' ? monthlyEarnings : yearlyEarnings

  return (
    <div className='mt-6 rounded-xl border border-primary/20 bg-primary/10 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:mt-8 sm:p-6'>
      <div className='mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-sm sm:text-base md:text-lg font-medium'>Earnings</p>

        <div className='flex gap-1.5 self-start sm:gap-2'>
          <button
            onClick={() => setView('monthly')}
            className={`px-3 py-1 rounded-md text-xs sm:text-sm cursor-pointer transition ${
              view === 'monthly' ? 'bg-primary text-white' : 'bg-primary/10 text-gray-400 hover:text-gray-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView('yearly')}
            className={`px-3 py-1 rounded-md text-xs sm:text-sm cursor-pointer transition ${
              view === 'yearly' ? 'bg-primary text-white' : 'bg-primary/10 text-gray-400 hover:text-gray-200'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {data.length === 0 ? (
        <p className='text-sm text-gray-400'>No earnings data yet.</p>
      ) : (
        <div className='h-64 w-full sm:h-80'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="label" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                formatter={(value) => [`${currency}${value}`, 'Revenue']}
                contentStyle={{ background: '#1f2937', border: '1px solid #37415155', borderRadius: 8 }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="revenue" fill="#F84565" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default EarningsChart

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRight, Clock } from 'lucide-react'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import { useShow } from '../hooks/useShow.js'
import { useRazorpayPayment } from '../hooks/useRazorpay.js'

const formatTime = (time) => {
  const [hourStr, minute] = time.split(':')
  let hour = Number(hourStr)
  const period = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12
  return `${hour}:${minute} ${period}`
}

const SeatLayout = () => {
  const { id, date } = useParams()
  const { user } = useAuth()
  const { shows, loading, handleGetShowsByMovie } = useShow()
  const { paying, payNow } = useRazorpayPayment()

  const [chosenShow, setChosenShow] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])

  const navigate = useNavigate()

  const groupRows = [['A', 'B'], ['C', 'D'], ['E', 'F'], ['G', 'H'], ['I', 'J']]

  useEffect(() => {
    if (!id) return
    handleGetShowsByMovie(id)
  }, [id])

  useEffect(() => {
    setSelectedSeats([])
  }, [chosenShow])

  const showsForDate = shows.filter(
    (show) => new Date(show.date).toISOString().slice(0, 10) === date
  )

  const handleSeatClick = (seatId) => {
    if (!chosenShow) return toast('Please select time')

    if (chosenShow.seatsBooked?.includes(seatId)) {
      return toast('This seat is already booked')
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId))
      return
    }

    if (selectedSeats.length >= 5) {
      return toast('You can only book 5 seats')
    }

    setSelectedSeats([...selectedSeats, seatId])
  }

  const renderSeats = (row, count = 9) => (
    <div key={row} className='flex items-center justify-center gap-1.5 sm:gap-2'>
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`
        const isBooked = chosenShow?.seatsBooked?.includes(seatId)

        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            disabled={isBooked}
            className={`h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded border text-[10px] sm:text-xs transition ${
              isBooked
                ? 'cursor-not-allowed border-gray-600 bg-gray-600 text-gray-400'
                : selectedSeats.includes(seatId)
                ? 'cursor-pointer border-primary bg-primary text-white'
                : 'cursor-pointer border-primary/60 bg-transparent'
            }`}
          >
            {seatId}
          </button>
        )
      })}
    </div>
  )

  const onProceed = () => {
    if (!user) {
      toast('Login to book tickets')
      navigate('/login')
      return
    }

    if (!chosenShow) {
      toast('Please select a time')
      return
    }

    if (selectedSeats.length === 0) {
      toast('Please select at least one seat')
      return
    }

    payNow({
      showId: chosenShow._id,
      seats: selectedSeats,
      user,
      onSuccess: () => {
        navigate('/my-bookings')
        scroll(0, 0)
      },
    })
  }

  if (loading && shows.length === 0) {
    return <Loading />
  }

  return (
    <div className='relative flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 overflow-x-hidden'>
      <div className='w-full lg:w-72 lg:sticky lg:top-28 self-start rounded-xl border border-primary bg-primary/15 p-4 sm:p-5'>
        <h3 className='text-base sm:text-lg font-bold text-white/90 [word-spacing:2px]'>Available Timing</h3>

        <div className='mt-3 max-h-40 sm:max-h-52 overflow-y-auto no-scrollbar pr-1'>
          {showsForDate.length === 0 ? (
            <p className='text-xs sm:text-sm text-gray-400'>No showtimes for this date.</p>
          ) : (
            <div className='flex flex-wrap gap-2'>
              {showsForDate.map((show) => (
                <button
                  key={show._id}
                  onClick={() => setChosenShow(chosenShow?._id === show._id ? null : show)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-2 text-left transition ${
                    chosenShow?._id === show._id
                      ? 'border-primary bg-primary'
                      : 'border-white/10 bg-transparent hover:border-primary/50'
                  }`}
                >
                  <Clock className='h-3.5 w-3.5' />
                  <span className='whitespace-nowrap text-xs sm:text-sm'>
                    {formatTime(show.time)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <BlurCircle top='0' left='18rem' />

      <div className='relative flex w-full max-w-5xl flex-col items-center py-4 sm:py-6'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-white/90 [word-spacing:2px] text-center'>
          Select Your Seat
        </h2>

        {/*
          Everything below (screen graphic + seat grid) is wrapped in one
          horizontally-scrollable container with a fixed min-width. On mobile
          this means the layout stays IDENTICAL to desktop (same seat sizes,
          same spacing, nothing shrinks or wraps) — narrow screens just scroll
          sideways to see the full row, instead of squishing everything down.
        */}
        <div className='mt-6 sm:mt-8 md:mt-10 w-full overflow-x-auto no-scrollbar'>
          <div className='min-w-[640px] flex flex-col items-center gap-1'>
            <img src={assets.screenImage} alt='' className='mx-auto w-full max-w-md' />
            <h4 className='mt-1 text-xs uppercase text-gray-400 sm:text-sm'>Screen Side</h4>

            <div className='mt-6 flex flex-col items-center gap-5 px-2 sm:px-4 text-xs text-gray-300'>
              <div className='flex flex-col items-center gap-2 sm:gap-3'>
                {groupRows[0].map((row) => renderSeats(row))}
              </div>

              <div className='grid grid-cols-2 gap-4 sm:gap-8 md:gap-10'>
                {groupRows.slice(1).map((group, idx) => (
                  <div key={idx} className='flex flex-col items-center gap-2 sm:gap-3'>
                    {group.map((row) => renderSeats(row))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 sm:mt-10 md:mt-12 flex items-center justify-center'>
          <button
            onClick={onProceed}
            disabled={paying}
            className='flex cursor-pointer items-center justify-between gap-2 rounded-3xl border border-primary/40 bg-primary px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:text-base'
          >
            {paying ? 'Processing...' : 'Proceed to Book'}
            <ArrowRight className='h-4 w-4 sm:h-5 sm:w-5' />
          </button>
        </div>

        <BlurCircle bottom='-2rem' right='-8rem' />
      </div>
    </div>
  )
}

export default SeatLayout
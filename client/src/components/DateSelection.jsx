import { useState } from 'react'
import BlurCircle from './BlurCircle'
import dateFormat from '../lib/dateFormat'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const DateSelection = ({ dateTime = [] }) => {

  const {id} = useParams()

  const [selected, setSelected] = useState(null)

  const navigate = useNavigate()

  // Multiple shows can share the same date at different times — collapse to unique dates for this picker
  const uniqueDates = [...new Set(dateTime.map((show) => new Date(show.date).toISOString().slice(0, 10)))]

  const onBookHnadler = () =>{
    if(!selected){
      return toast("Please select a date")
    }
    navigate(`/seatlayout/${id}/${selected}`)
    scroll(0,0)
  }

  if (uniqueDates.length === 0) {
    return (
      <div className='px-6 md:px-16 lg:px-24 xl:px-44 pt-10 md:pt-15'>
        <div className='relative bg-primary/10 border border-primary rounded-md py-5 px-4 md:px-6'>
          <p className='text-sm md:text-base text-gray-400'>No showtimes available for this movie yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 pt-10 md:pt-15'>
      <div className='relative bg-primary/10 border border-primary rounded-md py-5'>
        <h3 className='text-lg md:text-xl font-bold text-white/80 mx-4 md:mx-6 my-4 md:my-8'>Choose Date</h3>
        <BlurCircle top='-5rem'/>
        <BlurCircle top='4rem' right='10rem'/>

        <div className='flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-8 px-3 md:px-5 py-2'>
          <div className='flex justify-start items-center gap-4 md:gap-8 px-2 md:px-5 py-2 overflow-x-auto no-scrollbar mx-0 md:mx-2'> 
            {uniqueDates.map((date) => {
              const { day, month } = dateFormat(date)
              return (
                <button onClick={()=> setSelected(selected===date?null:date)} key={date} className={`shrink-0 border border-primary px-4 md:px-5 py-2 rounded-md text-sm md:text-base ${selected === date? "bg-primary" : "bg-transparent"}`}>
                  {day} <br /> {month}
                </button>
              )
            })}
          </div>

          <div onClick={onBookHnadler} className='h-full mx-0 md:mx-2 flex justify-center md:justify-start'>
            <button className='bg-primary px-4 py-2 my-2 rounded-3xl text-base md:text-xl flex justify-between items-center gap-1 cursor-pointer whitespace-nowrap'>Book Now</button>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default DateSelection
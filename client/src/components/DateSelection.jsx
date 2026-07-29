import { useState } from 'react'
import BlurCircle from './BlurCircle'
import { dummyDateTimeData } from '../assets/assets'
import dateFormat from '../lib/dateFormat'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const DateSelection = () => {

  const {id} = useParams()

  const [selected, setSelected] = useState(null)

  const navigate = useNavigate()

  const onBookHnadler = () =>{
    if(!selected){
      return toast("Please select a date")
    }
    navigate(`/seatlayout/${id}/${selected}`)
    scroll(0,0)
  }

  return (
    <div className='px-50 pt-15'>
      <div className=' bg-primary/10  border border-primary rounded-md py-5'>
        <h3 className='text-xl font-bold text-white/80 mx-6 my-8'>Choose Date</h3>
        <BlurCircle top='-5rem'/>
        <BlurCircle top='4rem' right='10rem'/>

        <div className='flex justify-between items-center gap-8 px-5 py-2 '>
          <div className='flex justify-start items-center gap-8 px-5 py-2 overflow-x-auto no-scrollbar  mx-2'> 
            {dummyDateTimeData.map((i) => {
              const { day, month } = dateFormat(i.date)
              return (
                <button  onClick={()=> setSelected(selected===i.date?null:i.date)} key={i.date} className={`border  border-primary px-5 py-2 rounded-md ${selected === i.date? "bg-primary" : "bg-transparent"}`}>
                  {day} <br /> {month}
                </button>
              )
            })}
          </div>

          <div onClick={onBookHnadler} className='h-full mx-2'>
            <button className='bg-primary px-4 py-2 my-2 rounded-3xl text-xl flex justify-between items-center gap-1 cursor-pointer'>Book Now</button>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default DateSelection
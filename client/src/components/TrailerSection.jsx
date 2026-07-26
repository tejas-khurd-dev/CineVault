import { useState } from 'react'
import ReactPlayer from 'react-player'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircle } from 'lucide-react'

const TrailerSection = () => {
  
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  
    return (
    <div className='relative flex flex-col justify-between w-full gap-4 mt-12'>
        <h3 className='text-2xl text-white/90 absolute left-100 font-medium mt-6'>Trailers</h3>

        <BlurCircle top='0' right='40px'/>

        <div className="mx-auto mt-22 w-[960px] h-[540px] rounded-2xl overflow-hidden border border-gray-400/15">
          <ReactPlayer
            src={currentTrailer.videoUrl}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>

        <div className='grid grid-cols-4 mx-auto w-4xl gap-4 mt-3'>
          {dummyTrailers.map((i)=>(
            <div key={i._id} className='relative' onClick={()=>setCurrentTrailer(i)}>
              <img src={i.image} alt=""  className='rounded-2xl'/>
              <PlayCircle className='absolute top-1/2 left-1/2 -transition-x-1/2 -transition-y-1/2'/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TrailerSection
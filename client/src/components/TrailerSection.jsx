import { useState } from 'react'
import ReactPlayer from 'react-player'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircle } from 'lucide-react'

const TrailerSection = () => {
  
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  
    return (
    <div className='relative flex flex-col justify-between w-full gap-4 mt-12 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-44'>
        <h3 className='text-xl md:text-2xl text-white/90 font-medium mt-6'>Trailers</h3>

        <BlurCircle top='0' right='40px'/>

        <div className="mx-auto mt-6 md:mt-10 w-full max-w-[960px] aspect-video rounded-2xl overflow-hidden border border-gray-400/15 bg-black">
          <ReactPlayer
            src={currentTrailer.videoUrl}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 mx-auto w-full max-w-4xl gap-3 md:gap-4 mt-3'>
          {dummyTrailers.map((i)=>(
            <div key={i._id} className='relative cursor-pointer' onClick={()=>setCurrentTrailer(i)}>
              <img src={i.image} alt=""  className='rounded-2xl w-full h-auto object-cover'/>
              <PlayCircle className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8'/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TrailerSection

import Image from 'next/image'
import React from 'react'
import grid from '@/public/images/gridleftsm.png'

function Text() {
  return (
 
    
      <div className='flex relative mt-[10vw] space-x-[5vw] w-[75vw] items-center mx-auto' >
          <div className='flex-1 relative' >
              <p className=' font-bold text-white text-[2.5vw]' >Want to earn rewards while</p>
              <p className='font-bold text-white text-[2.5vw]'>streaming your favourite</p>
              <p className='font-bold text-white text-[2.5vw]'>videos?</p>
            
          </div>
         
              <Image className='absolute ' alt='img' src={grid} />
         
          <div className='flex-1' >
              <p className=' text-[1.5vw] sm:text-[1.3vw] md:text-[1vw] text-white'><span>At ShardZ,</span> we&apos;re transforming the streaming landscape into a dynamic ecosystem where every view counts. Imagine a platform where your time spent watching your favorite content isn&apos;t just enjoyable, but also rewarding. That&apos;s what we offer -<span>an innovative approach to streaming that puts you at the center of the experience.</span></p>
          </div>  
      </div>
  )
}

export default Text  
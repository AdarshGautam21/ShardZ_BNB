import React from 'react';
import thumbnail from '@/public/images/thumbnail.png'
import Link from 'next/link'

const Playlist = () => {
  const videos = [
    { id: 1,   videoNum: '7 videos', title: 'Basic how to get into web 2 ecosystem', text: 'view full playlist' , thumbnail },
    { id: 1,   videoNum: '7 videos', title: 'Basic how to get into web 2 ecosystem', text: 'view full playlist' , thumbnail },
    { id: 1,   videoNum: '7 videos', title: 'Basic how to get into web 2 ecosystem', text: 'view full playlist' , thumbnail },
    { id: 1,   videoNum: '7 videos', title: 'Basic how to get into web 2 ecosystem', text: 'view full playlist' , thumbnail },
    { id: 1,   videoNum: '7 videos', title: 'Basic how to get into web 2 ecosystem', text: 'view full playlist' , thumbnail },


  ];

  return (
    <div className="mx-auto ">
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map(video => (
          <Link href='/VideoPlayerPage' key={video.id}>

            <div className='bg-gradient-to-b from-[#fff0]  via-[#ffffff2d] to-cyan-400 p-[0.2vw] rounded-[0.5vw]' >
                <div key={video.id} className="bg-black   text-white rounded-[0.5vw] overflow-hidden">
                  <div className='relative' >
                  <img src={video.thumbnail.src} alt={video.title} className="w-full" />
                  <div className='absolute bottom-[1vw] px-[1vw] text-[2vw] md:text-[1vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.videoNum}</div>
                  </div>
                    <div className="p-[1vw]">
                        <p className="  text-[3vw] md:text-[1vw]  font-semibold mb-2">{video.title}</p>
                        <div className='flex text-center text-[2.5vw] md:text-[0.8vw] text-[#808191] space-x-[0.5vw]' >
                            {video.text}
                            
                        </div>
                    
                    </div>
                </div>
            </div>
        </Link>
        ))}
      </div>
    </div>
    );
};

export default Playlist;

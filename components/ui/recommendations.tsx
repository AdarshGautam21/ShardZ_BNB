import React from 'react';
import thumbnail from '@/public/images/trendthumbnail.png'

const Recommendation = () => {
  const videos = [
    { id: 1, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 2, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 3, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 4, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 5, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },



  ];

  return (
    <div className="mx-auto space-y-[2vw] mt-[3vw] border-[3px] border-slate-600 rounded-[0.5vw] bg-gradient-to-r from-[#ffffff11] to-[#ffffff00] p-[1vw] ">
      
        {videos.map(video => (
            <div className=' border-[3px] border-slate-600 rounded-[0.5vw]' key={video.id}>
                <div key={video.id} className="bg-black flex   text-white rounded-[0.5vw]">
                  <div className='relative w-1/3 md:w-1/2' >

                  <img src={video.thumbnail.src} className='w-full h-full  ' alt={video.title}   />

                  <div className='absolute bottom-[0.5vw] px-[1vw] text-[1vw] md:text-[0.5vw] rounded-[0.2vw]  bg-[#00000055] right-[0.5vw] ' >{video.time}</div>

                  </div>
                    <div className="flex justify-center items-center p-[0.7vw]">
                        <div className='space-y-[1vw] md:space-y-0' >
                        <p className='text-[3vw] md:text-[1vw] lg:text-[1vw] ' >{video.title}</p>
                        <p className='text-[2vw] md:text-[1vw] lg:text-[1vw] text-[#808191] ' >{video.creator}</p>
                        <div className='flex text-center text-[2vw] md:text-[0.8vw] text-[#808191] space-x-[0.5vw]' >
                            {video.views}
                            <div className='text-center px-[1vw]' ><p>.</p></div>
                            {video.timeAdded}
                        </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        ))}
      </div>
  );
};

export default Recommendation;

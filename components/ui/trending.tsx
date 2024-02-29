import React from 'react';
import thumbnail from '@/public/images/trendthumbnail.png'

const TrendingSection = () => {
  const videos = [
    { id: 1, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 2, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 3, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 4, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 5, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 6, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 7, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 8, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 9, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },


  ];

  return (
    <div className="mx-auto space-y-[2vw] ">
      
        {videos.map(video => (
            <div className='bg-gradient-to-r from-[#fff0] via-[#ffffff2d] to-cyan-400 p-[0.1vw] rounded-[0.5vw]' key={video.id}>
                <div key={video.id} className="bg-black flex items-center p-[0.5vw]  text-white rounded-[0.5vw]">
                  <div className=' w-1/2 md:w-4/12 relative ' >

                  <img src={video.thumbnail.src} className='w-full' alt={video.title}   />

                  <div className='absolute bottom-[1vw] px-[1vw] text-[1vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.time}</div>

                  </div>
                    <div className=" w-1/2 md:w-full m-[1vw] md:m-0 p-[0.8vw] md:p-[1vw]">
                        <p className='text-[3.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] ' >{video.title}</p>
                        <p className="  text-[3vw] md:text-[1vw] line-clamp-2 md:line-clamp-none text-[#808191] mb-[0.2vw]">{video.description}</p>
                        <p className='text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#808191] ' >{video.creator}</p>
                        <div className='flex text-center text-[2vw] md:text-[1.2vw] lg:text-[1vw]  text-[#808191] space-x-[0.5vw]' >
                            {video.views}
                            <div className='text-center px-[1vw]' ><p>.</p></div>
                            {video.timeAdded}
                        </div>
                    
                    </div>
                </div>
            </div>
        ))}
      </div>
  );
};

export default TrendingSection;

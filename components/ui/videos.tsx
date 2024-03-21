import React, {useEffect, useState} from 'react';
import thumbnail from '@/public/images/thumbnail.png'
import Link from 'next/link'
import lighthouse from '@lighthouse-web3/sdk'

const VideoSection = () => {
  const videos = [
    { id: 1, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 2, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 3, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 4, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 5, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 6, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 7, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 8, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 9, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 10, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },

  ];


  interface FileObject {
    publicKey: string;
    fileName: string;
    mimeType: string;
    txHash: string;
    status: string;
    createdAt: number;
    fileSizeInBytes: string;
    cid: string;
    id: string;
    lastUpdate: number;
    encryption: boolean;
  }
  
  const [allVideos, setAllVideos] = useState<FileObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await lighthouse.getUploads("634d38b8.9e4eefb3ff5940b78276e56b7403a967");
        if (response.data && response.data.fileList) {
          setAllVideos(response.data.fileList);
          console.log(allVideos);
          console.log(response.data.fileList);
          
          
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error fetching uploads:', error);
        // Handle error accordingly
      }
    };

    fetchData();
  }, []);


  

  return (
    <div className="mx-auto ">
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allVideos.map((video, index) => (
          <Link href={`/VideoPlayerPage?video=${encodeURIComponent(JSON.stringify(video))}`} key={index}>
            <div className='bg-gradient-to-b from-[#fff0] via-[#ffffff2d] to-cyan-400  p-[0.3vw] md:p-[0.1vw] rounded-[0.5vw]' >
                <div key={video.id} className="bg-black   text-white rounded-[0.5vw] overflow-hidden">
                  <div className='relative' >
                  {/* <img src={video.thumbnail.src} alt={video.title} className="w-full" /> */}
                  {/* <div className='absolute top-[1vw] px-[1vw] text-[2vw] md:text-[1.2vw] lg:text-[0.9vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.time}</div> */}
                  </div>
                    <div className="p-[1vw]">
                        {/* <p className='  text-[3vw] md:text-[1vw] lg:text-[0.8vw] ' >{video.creator}</p> */}
                        <p className=" text-sm md:text-[1vw]  font-semibold mb-2">{video.fileName}</p>
                        <div className='flex text-center text-[2.2vw] md:text-[0.8vw] text-[#808191] space-x-[0.5vw]' >
                            {/* {video.views} */}
                            <div className='text-center px-[1vw]' ><p>.</p></div>
                            {video.createdAt}
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

export default VideoSection;

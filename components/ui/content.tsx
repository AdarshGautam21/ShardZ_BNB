import React from 'react';
import thumbnail from '@/public/images/trendthumbnail.png'
import edit from '@/public/images/edit.png'
import { MoreVertical } from 'lucide-react';
import { Switch } from "@/components/ui/switch"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from 'next/image';
import { Button } from './button';

const Content = () => {
  const videos = [
    { id: 1, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 2, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 3, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 4, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 5, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },


  ];

  return (
    <div>

    <div className="mx-auto space-y-[2vw] hidden md:block ">
      
        {videos.map(video => (
            <div className='bg-gradient-to-r from-[#fff0] via-[#ffffff2d] to-cyan-400 p-[0.1vw] rounded-[0.5vw]' key={video.id} >
                
                <div key={video.id} className="bg-black flex items-center p-[0.5vw]  text-white rounded-[0.5vw]">
                  <div className='w-4/12 relative ' >

                  <img src={video.thumbnail.src} className='w-full' alt={video.title}   />

                  <div className='absolute bottom-[1vw] px-[1vw] text-[1vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.time}</div>

                  </div>
                    <div className=" p-[0.8vw] md:p-[1vw] flex items-center">
                      <div className='w-1/2 mr-[2vw] ' >
                        <p className='text-[2vw] md:text-[1vw] lg:text-[1vw] ' >{video.title}</p>
                        <p className="  text-[1vw] md:text-[0.8vw] text-[#808191] mb-[0.2vw]">{video.description}</p>
                      </div>
                      <div className='flex w-1/2 justify-between' >
                        <div className='text-center' >
                          <p className='text-gray-500 text-[0.8vw]' >Views</p>  
                          <p className='text-[1vw]' >53</p>
                        </div>
                        <div className='text-center' >
                          <p className='text-gray-500 text-[0.8vw]' >Date</p>  
                          <p className='text-[1vw]' >Apr 13, 2023</p>
                        </div>
                        <div className='text-center' >
                          <p className='text-gray-500 text-[0.8vw]' >Comments</p>  
                          <p className='text-[1vw]'>2</p>
                        </div>
                        <div className='text-white items-center ' >
                          <div className='h-full  items-center text-center ' >
                            <p className='text-gray-500 text-[0.6vw]' >Public</p>
                            <div  >
                            <Switch className=' ' />
                            </div>
                          </div>

                          <div className='flex justify-around ' >
                            <Image src={edit} className='hover:bg-[#fff3] w-[2vw] h-[2vw] rounded-[0.2vw]' alt='' />
                            <Popover>
                              <PopoverTrigger><MoreVertical className='w-[2vw] h-[2vw]' /></PopoverTrigger>
                              <PopoverContent className='bg-black border rounded-e-[1vw] rounded-b-[1vw] flex-col border-gray-500' >
                                <div className='text-center flex justify-center items-center  border-b  border-gray-400'><Button className='text-white text-center  text-[1vw]' >Get Sharable Link</Button></div>
                                <div className='text-center flex justify-center items-center  '><Button className='text-white text-center  text-[1vw]' > Delete </Button></div>
                              </PopoverContent>
                            </Popover>

                          </div>
                          
                        </div>
                      </div>
                    
                    </div>
                </div>
                </div>
        ))}
      </div>
      <div className="mx-[2vw] space-y-[2vw]  md:hidden ">
      
        {videos.map(video => (
            <div className='bg-gradient-to-r from-[#fff0] via-[#ffffff2d] to-cyan-400 p-[0.2vw] rounded-[1vw]' key={video.id}>
                
                <div key={video.id} className="bg-black items-center p-[2vw]  text-white rounded-[0.5vw]">
                  <div className='  relative w-full  flex ' >

                  <img src={video.thumbnail.src} className='w-[80%]' alt={video.title}   />

                  {/* <div className='absolute bottom-[1vw] px-[1vw] text-[1vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.time}</div> */}
                  <div className='w-full p-[1vw]  ' >
                        <p className='text-[3vw] md:text-[1vw] lg:text-[1vw] ' >{video.title}</p>
                        <p className="  text-[2vw] md:text-[0.8vw] text-[#808191] mb-[0.2vw]">{video.description}</p>
                      </div>
                  </div>
                    <div className=" w-full p-[0.8vw] md:p-[1vw] flex items-center">
                      <div className='flex w-full justify-around' >
                        <div className='text-center' >
                          <p className='text-gray-500 text-[2vw]' >Views</p>  
                          <p className='text-[2vw]' >53</p>
                        </div>
                        <div className='text-center' >
                          <p className='text-gray-500 text-[2vw]' >Date</p>  
                          <p className='text-[2vw]' >Apr 13, 2023</p>
                        </div>
                        <div className='text-center' >
                          <p className='text-gray-500 text-[2vw]' >Comments</p>  
                          <p className='text-[2vw]'>2</p>
                        </div>
                        <div className='text-white items-center ' >
                          <div className='h-full  items-center text-center ' >
                            <p className='text-gray-500 text-[2vw]' >Public</p>
                            <div  >
                            <Switch className='  ' />
                            </div>
                          </div>

                          
                          
                        </div>
                      </div>
                      
                    
                    </div>
                    <div className='flex flex-row-reverse ' >

                            <Popover>
                              <PopoverTrigger><MoreVertical className='w-[4vw] h-[4vw]' /></PopoverTrigger>
                              <PopoverContent className='bg-black border rounded-e-[1vw] rounded-b-[1vw] flex-col border-gray-500' >
                                <div className='text-center flex justify-center items-center  border-b  border-gray-400'><Button className='text-white text-center  text-[4vw]' >Get Sharable Link</Button></div>
                                <div className='text-center flex justify-center items-center  '><Button className='text-white text-center  text-[4vw]' > Delete </Button></div>
                              </PopoverContent>
                            </Popover>
                            <Image src={edit} className='hover:bg-[#fff3] w-[4vw] h-[4vw] rounded-[0.2vw]' alt='' />

                          </div>
                </div>
                </div>
        ))}
      </div>
      </div>
  );
};

export default Content;

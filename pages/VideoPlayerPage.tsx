"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import logo from '@/public/images/logo.png'
import "@/app/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from '@/components/main/Nav'
import Sidemenu from '@/components/main/Sidemenu';
import { AlertCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import video from '@/public/images/videoUp.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Menu, MenuIcon } from 'lucide-react'

import coin from '@/public/images/coin.png'
import ellipse from '@/public/images/EllipseHome.png'

import VideoSection from '../components/ui/videos';
import { Button } from '../components/ui/button';
import Recommendation from '../components/ui/recommendations';
import Comments from '../components/ui/comments';
import { useRouter } from 'next/router';
function VideoPlayer() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };


      const router = useRouter();
      const { video } = router.query;

      let VideoInfo;
  if (video) {
    VideoInfo = JSON.parse(decodeURIComponent(video as string));
  }



  return (
    <div className='bg-[#0D0D0E]' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >
        <Nav />
        {/* <div className=' block md:hidden mx-[2vw]  ' >
                <div className='w-full flex h-[8vw] rounded-[2vw] items-center bg-transparent justify-between border border-cyan-400 md:rounded-[0.5vw] relative ' >
                    <input className='w-full text-[3vw] sm:text-[2.5vw] md:text-[1vw] text-white bg-transparent focus:outline-none md:rounded-[1vw] px-[2vw] md:px-[1vw] py-1 '
                        type='text'
                        placeholder='Search..'

                    />
                    <button className='px-[1vw]' >
                            <svg
                            className=" w-[3vw] h-[3vw] md:w-[1.5vw] md:h-[1vw] text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                            </svg>
                    </button>

                </div>
            </div> */}

    
        <div className=" mx-[2vw] md:mx-[20vw] mt-[2vw] rounded-[1vw] ">
            <video
              className="w-full cursor-pointer h-full rounded-[0.5vw] "
              src={`https://gateway.lighthouse.storage/ipfs/${VideoInfo.cid}`}
              title="YouTube video player"
              controls= {true}
            ></video>
        </div>
        <div className='' >
        <div className='mx-[4vw]  md:space-x-[1vw] text-white flex items-start ' >
            <div className=' w-full md:w-3/4 my-[3vw]  md:border border-slate-500 space-y-[1vw] p-[1vw] rounded-[0.5vw] ' >
                <div className='p-[1vw] border border-slate-600 rounded-[0.5vw] bg-gradient-to-r from-[#ffffff11] to-[#ffffff00] ' >
                    <div className='flex items-center  justify-between ' >
                        <p className='text-white text-[3vw] md:text-[1.5vw] cursor-pointer' >Blind Woodturner: Turning passion into fine art</p>
                        <Button className='bg-cyan-400 cursor-pointer text-[2vw] md:text-[0.7vw] h-[3vw] md:h-[2vw] px-[1vw] rounded-[0.3vw] border' >Subscribe</Button>
                    </div>
                    {/* Views */}
                    <p className='text-white text-[2vw] md:text-[1vw] cursor-pointer' >469 views . Oct 8, 2023</p>
                </div>

                {/* description */}
                <div className='p-[1vw] border space-y-[1vw] border-slate-600 rounded-[0.5vw] bg-gradient-to-r from-[#ffffff11] to-[#ffffff00] ' >
                    <div className='flex items-center space-x-[0.7vw] ' >
                        <Avatar className=' w-[5vw] h-[5vw] md:w-[2.2vw] cursor-pointer md:h-[2.2vw]' >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='' >
                            <p className=' text-[3vw] md:text-[1vw]' >Marcus Levin</p>
                            <p className=' text-[2.5vw] md:text-[1vw]' >548 subscribers</p>
                        </div>
                    </div>
                    <p className=' text-[1.5vw] md:text-[0.8vw] ]' >Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.</p>
                </div>

                <p className=' text-[3vw] md:text-[1vw]' >16  Comments</p>

                <div className='flex space-x-1 ' >
                <Avatar className=' w-[5vw] h-[5vw] md:w-[2.2vw] cursor-pointer md:h-[2.2vw]' >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    <div className='w-full' >
                    <form className='' >
                    <input
                        className="w-full text-[3vw] md:text-[1vw] bg-transparent cursor-pointer border-b border-[#393838b2] rounded p-2 mb-2"
                        placeholder="Write your comment..."
                    ></input>
                </form>
                    </div>
                </div>

                <div>
                    <Comments/>
                </div>

                

                
            </div>


            <div className='w-1/4 hidden md:block cursor-pointer' >
                <Recommendation/>
            </div>
        </div>
        <div className='mx-[2vw] md:hidden' >
            <Recommendation/>
        </div>

        </div>
    </div>
  )
}

export default VideoPlayer
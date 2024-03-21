"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '@/public/images/logo.png'
import "@/app/globals.css";
import video from '@/public/images/videoUp.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import coin from '@/public/images/coin.png'
import ellipse from '@/public/images/EllipseHome.png'
import { Menu, MenuIcon } from 'lucide-react'
import Home from '@/public/images/Home.png'
import Arrow from '@/public/images/Arrow - Right.png'
import thumb1 from '@/public/images/Image1.png'
import thumb2 from '@/public/images/Image2.png'
import Link from 'next/link';
import Nav from '@/components/main/Nav'
import Sidemenu from '@/components/main/Sidemenu';
import VideoSection from '../components/ui/videos';


function VideoPage() {
    var settings = {
        arrows: false,
        dots: false,
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
              slidesToShow: 4.5,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 4.5,
              slidesToScroll: 1
            }
          }
        ]
      };

      var settings2 = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
        ]
      };

      

  return (
    <div className='bg-[#0D0D0E]' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >
        <Nav />
        
        <div className='flex justify-between mt-[2vw]' >

            <Sidemenu />

            <div className='w-full px-[2vw] md:w-4/5 md:mx-auto space-y-[1vw]' >

                <div>
                    <h2 className='text-white  text-[5vw] md:text-[2vw] cursor-pointer font-semibold' >Discover</h2>
                </div>

                <div className=' slider-container  ' >
                    <Slider {...settings}>
                        <div className='text-center ' ><p className='text-white px-[1vw] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >All</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Music</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >BlockChain</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Education</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Gaming</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Podcast</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Hobbies</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Comedy</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Stocks</p></div>
                    </Slider>
                </div>
                
                <div className=' slider-container  ' >
                    <Slider {...settings2} >
                    <div className=' w-4/5 md:w-1/2 relative ' >
                        <Image src={thumb1} className=' w-[95%] md:w-[98%] object-cover rounded-[0.5vw] ' alt='' />
                        <div className='absolute top-[1vw] px-[1vw] text-white text-[2vw] md:text-[1.3vw] lg:text-[1vw] rounded-[0.5vw]  bg-[#0000002f] left-[1vw] ' >7 min</div>
                        <div className='absolute w-[50%] bottom-[1vw] left-[1vw] ' >
                            <p className='text-gray-500 text-[2vw] sm:text-[1.5vw] md:text-[1vw] ' >Andy William</p>
                            <p className='text-white text-[3vw] sm:text-[2.2vw] md:text-[1.5vw] ' >Basic how to get into web3  ecosystem</p>
                            <p className='text-gray-500 text-[2vw] sm:text-[1.5vw] md:text-[1vw] ' >53 views . 2 weeks ago</p>
                        </div>
                    </div>
                    <div className=' w-4/5 md:w-1/2 relative ' >
                        <Image src={thumb2} className=' w-[95%] md:w-[98%] rounded-[0.5vw] object-cover' alt='' />
                        <div className='absolute top-[1vw] px-[1vw] text-white text-[2vw] md:text-[1.3vw] lg:text-[1vw] rounded-[0.5vw]  bg-[#0000002f] left-[1vw] ' >7 min</div>
                        <div className='absolute w-[50%] bottom-[1vw] left-[1vw] ' >
                            <p className='text-gray-500 text-[2vw] sm:text-[1.5vw] md:text-[1vw] ' >Andy William</p>
                            <p className='text-white text-[3vw] sm:text-[2.2vw] md:text-[1.5vw] ' >Basic how to get into web3  ecosystem</p>
                            <p className='text-gray-500 text-[2vw] sm:text-[1.5vw] md:text-[1vw] ' >53 views . 2 weeks ago</p>
                        </div>
                    </div>
                    </Slider>
                </div>
              

                <div className=' w-[95%] ' >

                    <div>
                        <h2 className='text-white  text-[5vw] md:text-[2vw] cursor-pointer font-semibold' >Recently Uploaded</h2>
                    </div>

                    <VideoSection/>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default VideoPage
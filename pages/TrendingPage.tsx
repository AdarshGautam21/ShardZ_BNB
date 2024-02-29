"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AlertCircle, Menu } from 'lucide-react';
import logo from '@/public/images/logo.png'
import "@/app/globals.css";
import video from '@/public/images/videoUp.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import coin from '@/public/images/coin.png'
import ellipse from '@/public/images/EllipseHome.png'
import { MenuIcon } from 'lucide-react'
import Home from '@/public/images/Home.png'
import Arrow from '@/public/images/Arrow - Right.png'
import thumb1 from '@/public/images/Image1.png'
import thumb2 from '@/public/images/Image2.png'
import VideoSection from '../components/ui/videos';
import TrendingSection from '../components/ui/trending';
import Sidemenu from '@/components/main/Sidemenu'
import Nav from '@/components/main/Nav'
function TrendingPage() {
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
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 5,
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

            <div className=' w-full md:w-4/5 mx-[2vw] md:mx-auto space-y-[1vw]' >

                <div>
                    <h2 className='text-white hidden md:block text-[3vw] md:text-[2vw] cursor-pointer font-semibold' >New & Trending</h2>
                    <h2 className='text-white md:hidden text-[4vw] md:text-[2vw] cursor-pointer font-semibold' >Trending and New</h2>

                </div>

                <div className=' slider-container ' >
                    <Slider {...settings}>
                        <div className='text-center ' ><p className='text-white px-[1vw] text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >All</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Music</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >BlockChain</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Education</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Gaming</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Podcast</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Hobbies</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Comedy</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw] text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Stocks</p></div>
                    </Slider>
                </div>

                <div className=' w-[95%] ' >

                   

                    <TrendingSection/>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default TrendingPage
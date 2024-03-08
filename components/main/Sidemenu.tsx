"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "@/app/globals.css";
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu, Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dot } from 'lucide-react';
import video from '@/public/images/videoUp.png'
import Home1 from '@/public/images/home1.png'
import subscription from '@/public/images/subscriptions.png'
import analytics from '@/public/images/chart.png'
import downloads from '@/public/images/downloads.png'
import video2 from '@/public/images/videos2.png'
import 'slick-carousel/slick/slick-theme.css';
import logo from '@/public/images/logo.png'
import coin from '@/public/images/coin.png'
import ellipse from '@/public/images/EllipseHome.png'
import { MenuIcon } from 'lucide-react'


function Sidemenu(){
    return(
        // <div className='mx-[1vw] space-y-[1vw]  items-start ' >
        <div className='mx-[1vw] hidden space-y-[1vw] md:block items-start '  >
            <Link href='/VideoPage'>

                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className='p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={Home1} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Home</p>
                </div>
            </Link>

                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
            <Link href='/AnalyticsPage'>
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={analytics} className='w-[3vw]' alt='img' />
                    </div>
            </Link>
                
            <Link href='/AnalyticsPage'>
                    <p className='text-white text-[1vw]' >Analytics</p>
            </Link>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={video2} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >My Videos</p>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={subscription} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Subscriptions</p>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={downloads} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Downloads</p>
                </div>

                <div className='rounded-xl cursor-pointer bg-[#33C1EE] flex items-center justify-center space-x-3 text-center ' >
                <Link href='/UploadPage'>
                    <Video className='w-[1vw]' />
                </Link>

                <Link href='/UploadPage'>
                    <p className='bg-[#33C1EE] py-[0.5vw] text-[1vw] font-bold rounded-[0.5vw] ' >Upload Video</p>
                </Link>
                </div>
                
            </div>
    )
}
export default Sidemenu;
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import video from '@/public/images/videoUp.png';
import Home1 from '@/public/images/home1.png'
import subscription from '@/public/images/subscriptions.png'
import analytics from '@/public/images/chart.png'
import logo from '@/public/images/logo.png'
import "@/app/globals.css";
import downloads from '@/public/images/downloads.png'
import Sidemenu from '@/components/main/Sidemenu'
import Nav from '@/components/main/Nav'
import video2 from '@/public/images/videos2.png'
import thumbnail from '@/public/images/thumbnail.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import 'slick-carousel/slick/slick-theme.css';
import HomeIcon from '@/public/images/Home.png';
import ArrowRightIcon from '@/public/images/Arrow - Right.png';
import coin from '@/public/images/coin.png'
import ellipse from '@/public/images/EllipseHome.png'
import { Menu, MenuIcon, Video } from 'lucide-react'

import { Button } from '../components/ui/button';
function NftPage() {
    const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
    
  return (
    <div className='bg-[#0D0D0E] h-[100%] md:h-[100vh] ' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
        // height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >
        
        <Nav />
            <div className='flex justify-between mt-[2vw]'>
            

            {/* <Sidemenu /> */}
                <div className='w-[95%] mx-[2vw] md:w-4/5 md:mx-auto space-y-[1vw]'>

                    
                    <div className='w-4/5 mx-auto my-[3vw]' >
                
                <div className='w-full md:flex items-center pb-[40vw] md:pb-0 ' >
                   
                        <div className=' mx-[2vw] md:mx-0 w-full md:w-[50%] h-[70vw] md:h-[25vw]  p-[3vw] md:p-[1vw] lg:w-1/2 border border-cyan-400 rounded-[0.5vw] bg-gradient-to-tr from-[#0f0f0f78] to-[#33c2ee91]' >
                            <Image  className='w-full  rounded-[0.5vw] h-full ' src={thumbnail} alt=''/>
                        </div>
                   
                    <div className='  md:w-1/2 mx-[2vw] space-y-[1vw] ' >
                        <p className='text-white text-[5vw] md:text-[2vw] font-semibold ' >Basic how to get into web3 Ecosystem</p>
                        <p className='text-white text-[4vw] md:text-[1vw] font-semibold' >Description</p>
                        <p className='text-[#D4D4D4] text-[3vw] md:text-[1vw]' >Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.</p>

                        <div>
                            <div className='flex items-center space-x-[0.5vw]' >
                                <p className='text-white text-[4vw] md:text-[1.4vw]' >Price : </p>
                                <p className=' text-[6vw] md:text-[1.5vw] font-semibold bg-gradient-to-r inline-block text-transparent bg-clip-text from-[#33C1EE] via-[#8DDCF5]  to-[#FFFFFF] ' >0.8 ETH</p>
                            </div>
                            
                            <div className="  md:flex items-center mt-[2vw] md:mt-0 space-x-[1vw] ">
                            <div className='flex items-center' >
                            <button
                                className="bg-[#33C1EE]  text-white font-bold py-[1vw] px-[3vw] md:py-[0.5vw] md:px-[1vw] rounded-[1vw] md:rounded-[0.2vw] focus:outline-none"
                                onClick={decreaseCount}
                            >
                                -
                            </button>
                            <div className=" text-[5vw] md:text-[1vw] text-white font-semibold py-[0.5vw] px-[1vw]">{count}</div>
                                <button
                                className="bg-[#33C1EE]  text-white font-bold py-[1vw] px-[3vw] md:py-[0.5vw] md:px-[1vw] rounded-[1vw] md:rounded-[0.2vw] focus:outline-none"
                                onClick={increaseCount}
                            >
                                +
                            </button>
                            </div>

                            <div className='mt-[4vw] md:mt-0' >
                                <Button className='text-black bg-[#33C1EE] w-full  hover:bg-[#33C1EE] rounded-[1vw] md:rounded-[0.2vw] md:h-[4.5vw] lg:h-[3vw] px-[1.5vw] text-[2.8vw] md:text-[1vw] font-bold' >Buy 2 fraction(s)</Button>
                            </div>


                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
                </div>
            </div>
        
    </div>
  )
}

export default NftPage






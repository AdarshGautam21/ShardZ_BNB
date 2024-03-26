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
import MyVideos from '../components/ui/myVideos';
import Playlist from '../components/ui/playlist';
import Sidemenu from '@/components/main/Sidemenu'
import Nav from '@/components/main/Nav'
function ProfilePage() {
    
  return (
    <div className='bg-[#0D0D0E]' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >
        
    

        <div className='hidden md:block' >
        

        <Nav />


        <div className='flex justify-between mt-[2vw]' >

        <Sidemenu />

            <div className='w-4/5 mx-auto space-y-[1vw]' >
                    <div className='w-[95%] flex items-center' >

                    <Avatar className='w-[10vw] h-[10vw] border-[0.2vw] border-cyan-400' >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='p-[2vw] space-y-[1vw] w-[60%]' >
                        <div>
                        <p className='text-white text-[2vw] font-bold' >Marcus Levin</p>
                        <p className='text-gray-400 text-[1vw]' >548 subscribers</p>
                        <p className='text-white text-[0.8vw]'>Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. </p>
                        </div>
                        <div className='flex font-semibold text-[1.5vw]  items-center  ' >
                            <div>
                                <p className='text-cyan-400' >15 <span className='text-white' >Videos</span> </p>
                            </div>
                            <Dot className='text-white' />
                            <div>
                                <p className='text-cyan-400'>2278 < span  className='text-white'>Views</span></p>
                            </div>
                            <Dot className='text-white' />
                            <div>
                                <p className='text-cyan-400'>Joined <span  className='text-white'>May 26, 2013</span> </p>
                            </div>
                        </div>
                    </div>

                    </div>
                <div className=' flex ' >
                        <div className='text-center ' ><p className='text-white px-[1vw] text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >All</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Music</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >BlockChain</p></div>
                </div>
                
                    
                
                {/* <div className='w-[95%]' >
                    <div>
                        <h2 className='text-white text-[3vw] md:text-[2vw] cursor-pointer font-semibold' >Playlist</h2>
                    </div>
                    <Playlist />
                </div> */}

                <div className=' w-[95%] ' >

                    <div>
                        <h2 className='text-white text-[3vw] md:text-[2vw] cursor-pointer font-semibold' >Recently Uploaded</h2>
                    </div>

                    <MyVideos/>

                </div>
            </div>

        </div>
        </div>
        <div>
        <div className='mx-[2vw] md:hidden  mb-[8vw] md:mb-0 pt-[4vw] flex items-center space-x-[4vw] justify-between' >
            <div className='flex space-x-[1vw] cursor-pointer  items-center' >
                <div className='md:hidden' > 
                <DropdownMenu  >
                    <DropdownMenuTrigger className='text-white text-center' ><Menu/></DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-black border border-cyan-400 rounded-[2vw] ' >
                            <DropdownMenuItem className='text-white' >Home</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Marketplace</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Analytics</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Subscriptions</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Whitepaper</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Contact us</DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Image src={logo} className='w-[15vw] md:w-[10vw]' alt='' />

            </div>


            <div className='w-full hidden md:block  ' >
                <div className='w-full flex h-[2.5vw] items-center bg-transparent justify-between border border-cyan-400 rounded-[0.5vw] relative ' >
                    <input className='w-full text-[1vw] text-white bg-transparent focus:outline-none rounded-[1vw] px-[1vw] py-1 '
                        type='text'
                        placeholder='Search..'

                    />
                    <button className='px-[1vw]' >
                            <svg
                            className="w-[1.5vw] h-[1vw] text-gray-500"
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
            </div>
            <div className='flex space-x-[3vw]  ' >

                <div className='flex items-center space-x-2' >
                    <Image src={video} className=' w-[7vw] sm:w-[4vw] md:hidden'alt='' />
                    <Image src={coin} className=' w-[7vw] sm:w-[4vw] ' alt='' />
                    <div className='relative ' >
                        <p className='text-white press-start-2p-text text-[4vw] md:text-[1.5vw]' >120</p>
                        {/* <AlertCircle className='absolute top-[0vw] right-[0vw] w-[1vw] text-white' /> */}
                        
                    </div>
                </div>

                <div className='block md:hidden' >
            
                        <img className='w-[6vw] h-[6vw] rounded-full ' src="https://github.com/shadcn.png" />
                        
                
                </div>
            

            <div className='hidden md:block p-[0.1vw] rounded-[0.5vw] bg-gradient-to-tl from-cyan-400 to-black m-2' >
                <div className='flex bg-black rounded-[0.5vw]  w-[10vw] h-[2.5vw] space-x-[1vw]  items-center' >
               
                    <img className='w-[2vw] rounded-full ' src="https://github.com/shadcn.png" />
           
                    <p className='  text-[0.7vw] text-white'>Andy William</p>
                    <MenuIcon className='text-white w-[1vw] h-[1vw] cursor-pointer hover:bg-[#33c2ee50] rounded-[0.2vw] ' />
                </div>
            </div>
            </div>
            
        </div>
        <div className=' block md:hidden mx-[2vw] mb-[4vw] ' >
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
            </div>
        <div>   

                <div className=' md:hidden flex justify-center items-center' >
                    <Avatar className='w-[20vw] h-[20vw]  border-[0.2vw] border-cyan-400' >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className='text-center md:hidden mx-[3vw]' >
                    <p className='text-white text-[5vw] font-bold' >Marcus Levin</p>
                    <p className='text-gray-400 text-[2.5vw]' >586 Subscribers</p>
                    <p className='text-white text-[2vw]' >Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. </p>
                    <div className='flex font-semibold text-center text-[2.5vw] justify-center items-center  ' >
                            
                                <p className='text-cyan-400' >15 <span className='text-white' >Videos</span> </p>
                            
                            <Dot className='text-white' />
                            
                                <p className='text-cyan-400'>2278 < span  className='text-white'>Views</span></p>

                            <Dot className='text-white' />
                            
                                <p className='text-cyan-400'>Joined <span  className='text-white'>May 26, 2013</span> </p>
                        </div>
                        <div className=' flex space-x-4 my-[4vw] ' >
                        <div className='text-center ' ><p className='text-white px-[1vw] text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >All</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw] text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Music</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw] text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >BlockChain</p></div>
                </div>
                
                
                </div>
                <div className=' md:hidden mx-[2vw]' >
                    <p className='text-white text-[5vw] sm:text-[4vw] md:text-[2vw] mx-[2vw] cursor-pointer font-semibold' >My Videos</p>
                    <MyVideos/>
                </div>
                
        </div>
        </div>
        
    </div>
  )
}

export default ProfilePage
"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import { Menu, MessageCircle } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import Home1 from '@/public/images/home1.png'
import subscription from '@/public/images/subscriptions.png'
import analytics from '@/public/images/chart.png'
import downloads from '@/public/images/downloads.png'
import video2 from '@/public/images/videos2.png'
import Link from 'next/link'
import 'slick-carousel/slick/slick-theme.css';
import Sidemenu from '@/components/main/Sidemenu'
import Nav from '@/components/main/Nav'
import logo from '@/public/images/logo.png'
import "@/app/globals.css";
import { ThumbsUp } from 'lucide-react';
import { Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText } from 'lucide-react';
import coin from '@/public/images/coin.png'
import video from '@/public/images/videoUp.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ellipse from '@/public/images/EllipseHome.png'
import { Users } from 'lucide-react';
import { MenuIcon } from 'lucide-react'
import Home from '@/public/images/Home.png'
import Arrow from '@/public/images/Arrow - Right.png'
import LineChart from '../components/ui/chartpage';
import BarChart from '../components/ui/bargraph';
const AnalyticsPage: React.FC = () => {
    const subscriberCounts = [100, 200, 200, 300, 500 , 400 , 300 , 1000 ]; // Example subscriber counts
    const months = ['January', 'February', 'March', 'April', 'May' , 'June' , 'July' , 'August']; // Example months
    const profileVisits = [10, 30, 50, 10, 70, 60, 40];
      
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const percentage = -1.23
    var color
    if(percentage > 1) {
        color = true;
    }
    else {
        color = false;
    }
    
  return (
    <div className='bg-[#0D0D0E] min-h-screen' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
        // height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >
        <div className='hidden md:block' >
        


        <Nav />


        <div className='flex justify-between mt-[2vw]' >

            {/* <div className='mx-[1vw] space-y-[1vw] items-start ' >
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <Link href='/'>
                    <div className='p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={Home1} className='w-[3vw]' alt='img' />
                    </div>
                    </Link>
                    <Link href='/'>
                    <p className='text-white text-[1vw]' >Home</p>
                    </Link>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={analytics} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Analytics</p>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <Link href='/ProfilePage'>
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={video2} className='w-[3vw]' alt='img' />
                    </div>
                    </Link>
                    <Link href='/ProfilePage'>
                    <p className='text-white text-[1vw]' >My Videos</p>
                    </Link>
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
                <Link href='UploadPage'>
                    <Video className='w-[1vw]' />
                </Link>
                <Link href='UploadPage'>
                    <p className='bg-[#33C1EE] py-[0.5vw] text-[1vw] font-bold rounded-[0.5vw] ' >Upload Video</p>
                    </Link>
                </div>
                
            </div> */}




            <Sidemenu />

            <div className='w-4/5 mx-auto' >
                <div className='flex border-b border-[#33C1EE3D] space-x-[2vw]' >
                    <div><p className='text-white hover:text-black hover:bg-[#33C1EE] p-[0.5vw] rounded-[0.3vw] text-[0.8vw] font-semibold m-[0.5vw]' >Last 7 Days</p></div>
                    <div><p className='text-white hover:text-black hover:bg-[#33C1EE] p-[0.5vw] rounded-[0.3vw] text-[0.8vw] font-semibold m-[0.5vw]' >Months</p></div>
                    <div><p className='text-white hover:text-black hover:bg-[#33C1EE] p-[0.5vw] rounded-[0.3vw] text-[0.8vw] font-semibold m-[0.5vw]' >Years</p></div>
                </div>

                <div className='flex space-x-[1vw] my-[3vw]' >
                    <div className='border border-[#33C1EE52] rounded-[0.4vw] bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[1vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[1.8vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <Users className=' ml-[1vw] w-[2vw] mb-[1vw] h-[2vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[1vw] ' : 'text-[#FF3131] text-[1vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#33C1EE52] rounded-[0.4vw] bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[1vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[1.8vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <FileText className=' ml-[1vw] w-[2vw] h-[2vw] mb-[1vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[1vw] ' : 'text-[#FF3131] text-[1vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#33C1EE52] rounded-[0.4vw] bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[1vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[1.8vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <ThumbsUp className=' ml-[1vw] w-[2vw] h-[2vw] mb-[1vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[1vw] ' : 'text-[#FF3131] text-[1vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#33C1EE52] rounded-[0.4vw] bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[1vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[1.8vw] font-semibold ' >354782</p>
                            </div>
                            <div className='  ' >
                                <MessageCircle className=' ml-[1vw] w-[2vw] h-[2vw] mb-[1vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[1vw] ' : 'text-[#FF3131] text-[1vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='flex mx-auto ' >
              
                    <LineChart subscriberCounts={subscriberCounts} months={months} />
                    <BarChart profileVisits={profileVisits} daysOfWeek={daysOfWeek} />
               
                </div>
                   
            </div>

            

            

        </div>
        </div>

        <div className='md:hidden' >
        <div className='mx-[2vw]  mb-[10vw] md:mb-0 pt-[4vw]  flex items-center space-x-[4vw] justify-between' >
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

        <div className='flex w-[95%] justify-around mx-auto border-b mb-[5vw] border-[#33C1EE3D] ' >
                    <div><p className='text-white hover:text-black hover:bg-[#33C1EE] p-[1vw] rounded-[2vw] text-[4vw] font-semibold m-[0.5vw]' >Last 7 Days</p></div>
                    <div><p className='text-white hover:text-black hover:bg-[#33C1EE] p-[1vw] rounded-[2vw] text-[4vw] font-semibold m-[0.5vw]' >Months</p></div>
                    <div><p className='text-white hover:text-black hover:bg-[#33C1EE] p-[1vw] rounded-[2vw] text-[4vw] font-semibold m-[0.5vw]' >Years</p></div>
        </div>

        <div className=' space-y-[5vw] mx-[2vw] ' >
                    <div className='flex space-x-[5vw] ' >
                    <div className='border border-[#33C1EE52] w-1/2 rounded-[2vw] bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw]  items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[3vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[3vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <Users className=' ml-[4vw] w-[4vw] mb-[1vw] h-[4vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[3vw] ' : 'text-[#FF3131] text-[3vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#33C1EE52] rounded-[2vw] w-1/2 bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[3vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[3vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <FileText className=' ml-[4vw] w-[4vw] mb-[1vw] h-[4vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[3vw] ' : 'text-[#FF3131] text-[3vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='flex space-x-[5vw] ' >
                    <div className='border border-[#33C1EE52] rounded-[2vw] w-1/2 bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw] flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[3vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[3vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <ThumbsUp className=' ml-[4vw] w-[4vw] mb-[1vw] h-[4vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[3vw] ' : 'text-[#FF3131] text-[3vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#33C1EE52] rounded-[2vw] w-1/2 bg-gradient-to-b from-[#0F191D8C] via-[#33c2ee1b] to-[#0F191D8C] ' >
                        <div className='p-[2vw]  flex space-x-[3vw] items-center ' >
                            <div className='' >
                                <p className='text-[#C9C9C9] mb-[1vw] text-[3vw] ' >Total Subscribers</p>
                                <p className='text-[#33C1EE] text-[3vw] font-semibold ' >0</p>
                            </div>
                            <div className='  ' >
                                <MessageCircle className=' ml-[4vw] w-[4vw] mb-[1vw] h-[4vw] text-[#C9C9C9] ' />
                                <p className={color ? 'text-[#33C1EE] text-[3vw] ' : 'text-[#FF3131] text-[3vw] '} >{percentage}%</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='pb-[40vw]' >

                    <LineChart subscriberCounts={subscriberCounts} months={months} />
                    <BarChart profileVisits={profileVisits} daysOfWeek={daysOfWeek} />
                    </div>
                    


                    
                </div>
            
        </div>
        
    </div>
  )
}

export default AnalyticsPage
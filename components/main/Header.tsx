import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import leftImg from '@/public/images/left.png'
import logo from '@/public/images/logo.png'
import Link from 'next/link';
import MarketPlace from "@/pages/Marketplace";

import rightImg from '@/public/images/right.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import rocket from '@/public/images/Rocket.png'

function Header() {
  return (

    <div className='relative h-[55vw] sm:h-[45vw]  md:h-[40vw] mx-[2vw] bg-gradient-to-b from-black from-[40%] to-[#33C1EE] to-[120%] rounded-[3vw]' > 
    <div className='mx-[10vw]' >
        <div className='flex justify-between z-10  flex-1  items-center' >  
        <div className='flex space-x-[1vw]   items-center' >
            <Link href='/HomePage'>
          <Image src={logo} className='w-[15vw] md:w-[10vw]' alt='' />
          </Link>

            </div>
            <div className=' hidden  md:flex space-x-[5vw] ' >

                <p className=' text-[#FFFFFF] text-[1vw] cursor-pointer' >Home</p>

                <Link href="/Marketplace">
                <p className='text-[#FFFFFF] text-[1vw] cursor-pointer'>Marketplace</p>
                </Link>
                <p className='text-[#FFFFFF] text-[1vw] cursor-pointer'>Contact us</p>
            </div>
            <div className='flex items-center space-x-3 ' >
                {/* <div className='bg-white rounded-full h-[7vw] sm:h-[5vw] md:h-[3vw] flex justify-center items-center  ' >
                    <Button className='  rounded-full px-[1vw] py-0 text-center md:rounded-[2vw] text-[3vw]  sm:text-[2vw] md:text-[1vw] ' variant="secondary">Connect Wallet</Button>
                </div> */}
                <div className='block items-center md:hidden' >
                <DropdownMenu  >
                    <DropdownMenuTrigger className='text-white text-center' ><Menu/></DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-black' >
                        <DropdownMenuSeparator className='text-white' />
                            <DropdownMenuItem className='text-white' >Profile</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Billing</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Team</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
        </div>

        <div className='mt-[7%]  relative space-y-[0.2vw] ' >

                {/* <div className=" py-1 flex justify-center items-center relative">
            <div className="absolute inset-0 flex justify-center mb-4 items-center text-white z-10">
                <span className="text-[1vw] font-semibold  ">Stream, Mint and Connect</span>
                <Image src={rocket} alt='img' className='mx-2 w-[1vw] h-[1vw]' />
            </div>

            <div className="absolute inset-0 border border-transparent rounded-lg pointer-events-none">
            </div>
            </div> */}

            <div className="mx-auto flex  items-center justify-center">
                <div className="bg-gradient-to-r rounded-[0.5vw] from-cyan-400  via-black  to-cyan-400  p-[0.2vw]">
                    <div className="flex h-full w-full rounded-[0.5vw] px- items-center  justify-center bg-black">
                    <p className=" text-[3vw] sm:text-[2vw] md:text-[1vw] text-white">Stream, Mint and Connect</p>
                    <Image src={rocket} alt='img' className='mx-2 w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1vw] md:h-[1vw]' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center  mx-auto' >
                <p className='font-extrabold text-white text-[3.5vw] sm:text-[3vw]  md:text-[2.5vw]' >DIVE INTO <span>DECENTRALIZED STREAMING</span></p>
            </div>   
            
            <div className='flex justify-center text-center  mx-auto' >
                <p className='font-extrabold text-white  text-[3.5vw] sm:text-[3vw]  md:text-[2.5vw]'>FOR GREATER CONTROL AND OWWNERSHIP</p>
            </div>

            <div>
                <p className='flex text-white text-center text-[1.5vw] md:text-[1vw]  justify-center'>Discover a new era of streaming where creativity meets blockchain technology. Upload, watch, and trade NFTs while earning rewards along the way</p>

            </div>
            

            
            
            
        </div>
        <Link href='/VideoPage'>
        <div className='bg-white rounded-full w-[20vw] md:w-[15vw] mt-[2vw] mx-auto h-[6vw] sm:h-[5vw] md:h-[3vw] flex justify-center items-center  ' >
                    <Button className='  rounded-full px-[1vw] py-0 text-center md:rounded-[2vw] text-[2.5vw]  sm:text-[1.5vw] md:text-[1vw] font-semibold  ' variant="secondary">Get Started</Button>
                </div>
                </Link>

        
        <div className='absolute bottom-[-5vw]' >
            <Image className='h-[20vw] w-[20vw]'  alt="img" src={leftImg}  />
           
        </div>
        <div className='absolute right-[3vw] bottom-[-2vw]' >
            <Image className='h-[17.5vw] w-[17.5vw]'  alt="img" src={rightImg}  />
        </div>
        </div>
    </div>
  )
}

export default Header 


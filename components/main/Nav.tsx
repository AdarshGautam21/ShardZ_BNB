"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '@/public/images/logo.png'
import profile from '@/public/images/profile.png';
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
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ethers, Provider } from 'ethers';
declare var ethereum: any;

function Nav(){


    const [walletConnected, setWalletConnected] = useState(false)
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState('')
  const [provider, setProvider] = useState('')
  const [contract, setContract] = useState('')
  const [accountAddress, setAccountAddress] = useState<Provider | {}>({});


    useEffect(() => {
        checkMetaMask();
      }, []);


      const checkMetaMask = async () => {
        if (typeof (window as any).ethereum !== 'undefined') {
          const provider = new ethers.BrowserProvider((window as any).ethereum);
          try {
            const accounts = await provider.listAccounts();
            if (accounts.length > 0) {
              setIsConnected(true);
              setAccountAddress(accounts[0]); 
              // console.log(accountAddress);
              // console.log(accounts[0]);
              
              
              
            } else {
              setIsConnected(false);
            }
          } catch (error) {
            console.error('Error checking MetaMask connection:', error);
            setIsConnected(false);
          }
        } else {
          setIsConnected(false);
        }
      };
      
      


      const connectWallet = async () => {
        try {
          await ethereum.request({ method: 'eth_requestAccounts' });
          checkMetaMask();
        } catch (error) {
          console.error('Error connecting MetaMask:', error);
        }
      };


    return(
        <div>
        <div className='mx-[2vw]  mb-[8vw] md:mb-0 pt-[4vw] flex items-center space-x-[4vw] justify-between' >
            <div className='flex space-x-[1vw] cursor-pointer  items-center' >
                <div className='md:hidden' > 
                <DropdownMenu  >
                    <DropdownMenuTrigger className='text-white text-center' ><Menu/></DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-black border border-cyan-400 rounded-[2vw] ' >
                          <Link href='/'>

                            <DropdownMenuItem className='text-white' >Home</DropdownMenuItem>
                          </Link>
                            <Link href='Marketplace'>

                            <DropdownMenuItem className='text-white' >Marketplace</DropdownMenuItem>
                            </Link>
                            <Link href='AnalyticsPage'>

                            <DropdownMenuItem className='text-white' >Analytics</DropdownMenuItem>
                            </Link>
                            <Link href=''>

                            <DropdownMenuItem className='text-white' >Subscriptions</DropdownMenuItem>
                            </Link>
                            <Link href=''>

                            <DropdownMenuItem className='text-white' >Whitepaper</DropdownMenuItem>
                            </Link>
                            <Link href=''>

                            <DropdownMenuItem className='text-white' >Contact us</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Link href='/VideoPage'>

                <Image src={logo} className='w-[15vw] md:w-[10vw]' alt='' />
                </Link>
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
              <Link href='/SwappingPage'>
                        <p className='text-white press-start-2p-text text-[4vw] md:text-[1.5vw]' >120</p>
                        {/* <AlertCircle className='absolute top-[0vw] right-[0vw] w-[1vw] text-white' /> */}
                        
                </Link>
                    </div>
                </div>

                <div className='block md:hidden' >
            
                        {/* <img className='w-[6vw] h-[6vw] rounded-full ' src="https://github.com/shadcn.png" /> */}
                        <Image className='w-[6vw] h-[6vw] rounded-full' src={profile} alt='profile' />
                        
                
                </div>
                {isConnected?(

<DropdownMenu  >
<DropdownMenuTrigger className='text-white text-center' >

<div className='hidden md:block p-[0.1vw] rounded-[0.5vw] bg-gradient-to-tl from-cyan-400 to-black m-2' >
                    {/* <Link href='/ProfilePage'> */}
                      <div className='flex bg-black rounded-[0.5vw]  w-[10vw] h-[2.5vw] space-x-[1vw]  items-center' >
                     
                          {/* <img className='w-[2vw] rounded-full ' src="@/public/images/profile.png" /> */}

                          <Image className='w-[2vw] rounded-full ' src={profile} alt='profile' />
                 
                          <p className='  text-[0.7vw] text-white'>Andy William</p>
                          <MenuIcon className='text-white w-[1vw] h-[1vw] cursor-pointer hover:bg-[#33c2ee50] rounded-[0.2vw] ' />
                      </div>
                    {/* </Link> */}
                  </div>



</DropdownMenuTrigger>
    <DropdownMenuContent className='bg-black border border-cyan-400 rounded-[2vw] ' >
      <Link href='/ProfilePage'>

        <DropdownMenuItem className='text-white cursor-pointer' >Profile</DropdownMenuItem>
      </Link>
        <Link href='/StudioPage'>

        <DropdownMenuItem className='text-white cursor-pointer' >Creator Studio</DropdownMenuItem>
        </Link>
        
    </DropdownMenuContent>
</DropdownMenu>



                    
                ):(
                    <div className='bg-white rounded-full h-[7vw] sm:h-[5vw] md:h-[3vw] flex justify-center items-center  ' >
                    <Button className='  rounded-full px-[1vw] py-0 text-center md:rounded-[2vw] text-[3vw]  sm:text-[2vw] md:text-[1vw] ' variant="secondary" onClick={connectWallet}>Connect Wallet</Button>
                </div>
                )}

            

            
            </div>
        </div>
        <div className=' block md:hidden mx-[2vw]  ' >
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
            </div>
    )
}

export default Nav;
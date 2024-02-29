import Image from 'next/image'
import React from 'react'
import arrow from '@/public/images/arrow.png'
import tv from '@/public/images/tv.png'
import gift from '@/public/images/gift.png'
import sign from '@/public/images/dollar-sign.png'
import zap from '@/public/images/zap.png'
import { Button } from '../ui/button'
import Features from './Features'
import Link from 'next/link'

function Hero() {
  return (
    <div className='mt-[5vw] pt-[8vw] bg-gradient-to-t from-[#000] from-[50%] rounded-3xl  to-[#33C1EE] to-[130%] relative mx-[2vw]' >
        {/* <div className="absolute rounded-[5vh] inset-0 bg-gradient-to-tr from-[#00000000] from-70%  to-[#00c3ff] opacity-70"></div>
        <div className="absolute rounded-[5vh] inset-0 bg-gradient-to-tl from-[#00000000] from-70%  to-[#00c3ff] opacity-70 "></div>
        <div className="absolute rounded-[5vh] inset-0  bg-gradient-to-t from-[#00000000] from-60%  to-[#00c3ff] opacity-50 "></div> */}

        <div className='mx-[10vw]  space-y-[2vw]' >
            <div className='flex justify-center text-[3vw] sm:text-[2.5vw] md:text-[1vw] ' ><p className='text-white' >HOW SHARDS WORKS</p></div>
            <div className='flex justify-center ' ><p className=' font-extrabold text-white text-[3.5vw] sm:text-[3vw]  md:text-[2.5vw]' >Stream, Mint, Trade, Earn</p></div>
            <div className='flex-col justify-center'>
                <div className='flex text-center text-[2.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:-[1vw]'><p className='text-white' >Explore and Learn How You Can Engage with Content, Convert Videos into NFTs, and Participate in Fractionalized Trading to Unlock Rewards and Opportunities.</p></div>
            </div>
            <div className='flex space-x-[1vw] items-center' >
                <div>
                    <p className='bg-gradient-to-t text-center from-[#33c2ee37] to-[#33C1EE] text-transparent text-[5vw] font-extrabold bg-clip-text' >1</p>
                    <p className='font-bold text-center text-white text-[1.9vw]'>Stream with Ease</p>
                    <p className='text-white text-center text-[1vw]' >Immerse yourself in an endless stream of captivating content, where every click opens a door to discovery.</p>
                </div>

               
                    <Image className='h-[2vw] w-[6vw]' alt='img' src={arrow} />
               
                
                <div>
                    <p className='bg-gradient-to-t text-center from-[#33c2ee37] to-[#33C1EE] text-transparent text-[5vw] font-extrabold bg-clip-text'>2</p>
                    <p className='font-bold text-center text-white text-[2vw]'>Mint Your Content</p>
                    <p className='text-white text-center text-[1vw]' >Turn your creativity into currency with ShardZ, where your videos become valuable digital assets in just a few clicks.</p>
                </div>

          
                    <Image className='h-[2vw] w-[6vw] '  alt='img' src={arrow} />
           

                <div>
                    <p className='bg-gradient-to-t text-center from-[#33c2ee37] to-[#33C1EE] text-transparent text-[5vw] font-extrabold bg-clip-text'>3</p>
                    <p className='font-bold text-center  text-white text-[2vw]'>Mint Your Content</p>
                    <p className='text-white text-center text-[1vw]' >Turn your creativity into currency with ShardZ, where your videos become valuable digital assets in just a few clicks.</p>
                </div>
            </div>

            <div className='flex justify-center space-x-[1vw]' >
                    <div className='flex items-center ' >
                        <p className='text-[1vw] text-white mx-1' >Stream</p>
                        <Image className='h-[1w] w-[1.5vw]' src={tv} alt="img" />
                    </div>
                    <Image className='h-[1w] w-[1vw]' src={zap} alt="img" />
                    <div className='flex items-center'>
                        <p className='text-[1vw] text-white mx-1' >Mint</p>
                        <Image className='h-[1w] w-[1.5vw]' src={gift} alt="img" />
                    </div>
                    <Image className='h-[1w] w-[1vw]' src={zap} alt="img" />
                    <div className='flex items-center mx-1'>
                        <p className=' text-[1vw] text-white' >Trade and earn</p>
                        <Image className='h-[1vw] w-[1.5vw]' src={sign} alt="img" />
                    </div>
            </div>
            <div className='bg-white rounded-full w-[20vw] mx-auto h-[6vw] sm:h-[5vw] md:h-[3vw] flex justify-center items-center  ' >
            <Link href='VideoPage'>
                    <Button className='  rounded-full px-[1vw] py-0 text-center md:rounded-[2vw] text-[2.5vw]  sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] ' variant="secondary">Get Started -{'>'} </Button>
                </Link>
                </div>
            <div className='mx-auto flex justify-center' >
                <p className='bg-gradient-to-t text-center text-[2vw] sm:text-[1.5vw] md:text-[1vw] from-[#28cdffc7] to-[#33C1EE] text-transparent  font-extrabold bg-clip-text' >ALL FEATURES</p>
            </div>
            <div className='mx-auto w-[60vw] md:w-[50vw] text-center flex justify-center'>
                <p className='font-extrabold text-white text-[3.5vw] sm:text-[3vw]  md:text-[2.5vw]'>Discover Streaming&apos;s Evolution through Top Features</p>
            </div>

            <div className='mx-auto w-[45vw] text-center flex justify-center' >
                <p className='text-white text-[1.5vw]' >Experience a transformative leap in streaming technology with our feature-packed platform, designed to elevate your viewing experience and redefine the way you engage with digital content.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero 
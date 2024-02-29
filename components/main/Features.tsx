import React from 'react'
import NFT from '@/public/images/NFT 4.png'
import Image from 'next/image'
import sdk from '@/public/images/sdk.png'
import shield from '@/public/images/shield-security.png'
import swap from '@/public/images/swap.png'
import coin from '@/public/images/coins.png'
import img from '@/public/images/img.png'
import right from '@/public/images/bigright.png'
import rightrectangle from '@/public/images/Rectangle 4.png'
import Link from 'next/link'
import { Button } from '../ui/button'
function Features() {
  return (
    <div className=' mx-[2vw] mt-[4vw] pb-[5vw] bg-gradient-to-b from-[#000] from-[80%] rounded-3xl  to-[#33C1EE] to-[120%]  relative ' >
        {/* <div className="absolute  rounded-[5vh] inset-0 bg-gradient-to-br from-[#00000000] from-85%  to-[#00c3ff] "></div>
        <div className="absolute rounded-[5vh] inset-0  bg-gradient-to-bl from-[#00000000] from-85%  to-[#00c3ff]  "></div>
        <div className="absolute rounded-[5vh] inset-0  bg-gradient-to-b from-[#00000000] from-90%  to-[#00c3ff] opacity-70 "></div> */}
        <div className='w-[75vw] mx-auto space-y-2 sm:space-y-3 md:space-y-4' >
        <div className='flex h-[18vw] space-x-2 sm:space-x-3 md:space-x-4' >
            <div className='w-2/3 relative flex z-10 bg-[#101012] mx-auto rounded-2xl items-center space-x-11' >
                <div className='text-left  w-[15vw] space-y-1 ml-[4vw] pt-[3vw]  ' >
                    <p className='text-white text-[1.5vw]  ' >NFT Integration</p>
                    <div className=' text-left' >
                        <p className='text-[#BABCD2] text-[1vw] ' >Elevate your content into unique digital assets seamlessly, allowing creators to mint their videos effortlessly.</p>
                    </div>
                </div>
                <div className=' absolute right-[0vw] bottom-[0vw]' >
                    <Image className='h-[12vw] w-[12vw]' alt="img" src={NFT} />
                </div>
                
            </div>
            <div className='w-1/3 rounded-2xl bg-[#101012]' >
                <div className='p-[2vw]  items-start' >
                    <Image className='w-[5vw] h-[5vw] ' alt='img' src={sdk} />
                    <p className='text-white   text-[1.5vw] ' >Fractionalized Trading</p>
                    <p className='text-[#BABCD2] text-[1vw]' >Democratize access to exclusive content and digital collectibles, empowering investors to trade fractional ownership.</p>
                </div>
            </div>

            <div className='absolute top-[-35vw]  left-[-25vw]' >
                <Image alt='img' className='h-[55vw] w-[55vw]' src={right}  />
            </div>

            <div className='absolute top-[-35vw] opacity-75 left-[-25vw]' >
                <Image alt='img' className='h-[55vw] w-[55vw]' src={rightrectangle}  />
            </div>

            <div className='absolute top-[-35vw]  left-[-25vw] opacity-75' >
                <Image alt='img' className='h-[55vw] w-[55vw]' src={rightrectangle}  />
            </div>
            
        </div>

        <div className='flex h-[18vw] space-x-2 sm:space-x-3 md:space-x-4' >

            <div className='w-1/3 rounded-2xl bg-[#101012]' >
                <div className='p-[2vw] items-start' >
                    <Image className='w-[5vw] h-[5vw] ' alt='img' src={shield} />
                    <p className='text-white  text-[1.5vw] ' >Enhanced Security</p>
                    <p className='text-[#BABCD2] text-[1vw]' >Rest easy with top-notch security protocols, ensuring the safety of your data and transactions.</p>
                </div>
            </div>

            <div className='w-2/3 relative flex bg-[#101012] mx-auto rounded-2xl items-center' >
                <div className='text-left  space-y-1 ml-[4vw] pt-[3vw]  ' >
                    <p className='text-white text-[1.5vw]  ' >Multi-Chain Compatibility</p>
                    <div className=' text-left w-[15vw]' >
                        <p className='text-[#BABCD2] text-[1vw] ' >Enjoy unparalleled flexibility across various blockchain networks, ensuring seamless interaction and transactions.</p>
                    </div>
                </div>
                <div className=' absolute right-[0vw] bottom-[0vw]' >
                    <Image className='h-[15vw] w-[22vw]' alt="img" src={coin} />
                </div>
                
            </div>
        </div>

        <div className='flex h-[18vw] space-x-2 sm:space-x-3 md:space-x-4' >
            <div className='w-2/3 z-10 relative flex bg-[#101012] mx-auto rounded-2xl items-center' >
                <div className='text-left w-[15vw] space-y-1 ml-[4vw] pt-[3vw]  ' >
                    <p className='text-white text-[1.5vw]' >Transparent Revenue Sharing</p>
                    <div className=' text-left' >
                        <p className='text-[#BABCD2] text-[1vw] ' >Experience fair and transparent revenue distribution among creators, investors, and viewers.</p>
                    </div>
                </div>
                
            </div>
            <div className='w-1/3 z-10 rounded-2xl bg-[#101012]' >
                <div className='p-[2vw] items-start' >
                    <Image alt='img' className='w-[5vw] h-[5vw] ' src={swap} />
                    <p className='text-white  text-[1.5vw] ' >Fractionalized Trading</p>
                    <p className='text-[#BABCD2] text-[1vw]' >Democratize access to exclusive content and digital collectibles, empowering investors to trade fractional ownership.</p>
                </div>
            </div>
            
            <div className='absolute top-[25vw]  right-0' >
                <Image alt='img' className='h-[55vw] w-[55vw]' src={right}  />
            </div>

            <div className='absolute  right-0' >
                <Image alt='img' className='h-[55vw] w-[55vw]' src={rightrectangle}  />
            </div>
            <div className='absolute  right-0' >
                <Image alt='img' className='h-[40vw] w-[40vw]' src={rightrectangle}  />
            </div>
            
            
        </div>
        <div className='flex justify-center' >
            <Image src={img} alt='img' />
        </div>
        <div className='mx-auto flex justify-center' >
                <p className='bg-gradient-to-t text-center text-[2vw] sm:text-[1.5vw] md:text-[1vw] from-[#28cdffc7] to-[#33C1EE] text-transparent  font-extrabold bg-clip-text' >BENEFITS</p>
        </div>
        <div className='mx-auto w-[55vw] text-center flex justify-center'>
                <p className='font-extrabold text-white text-[3.5vw] sm:text-[3vw]  md:text-[2.5vw]'>Own Your Content, Earn Your Worth</p>
        </div>

        <div className='mx-auto w-[45vw] text-center flex justify-center' >
                <p className='text-white text-[2vw]' >ShardZ enables creators to convert their videos into NFTs, granting full ownership and control, leading to diverse revenue streams and enhanced monetization opportunities.</p>
        </div>

        <div className='flex justify-center' >
            <Image src={img} alt='img' />
        </div>

        <div className='mx-auto w-[60vw] md:w-[45vw] text-center flex justify-center'>
                <p className='font-extrabold text-white text-[3.5vw] sm:text-[3vw]  md:text-[2.5vw]'>Join ShardZ Today and Shape the Future of Streaming!</p>
        </div>

        <div className='mx-auto w-[50vw] md:w-[45vw] text-center flex justify-center' >
                <p className='text-white text-[2vw]' >Join our vibrant community today. Sign up now and be part of the future of streaming! Welcome to ShardZ, where creativity meets technology, and every interaction is valued.</p>
        </div>
        <div className='bg-white rounded-full w-[20vw] mx-auto h-[6vw] sm:h-[5vw] md:h-[3vw] flex justify-center items-center  ' >
        <Link href='/VideoPage'>
                    <Button className='  rounded-full px-[1vw] py-0 text-center md:rounded-[2vw] text-[2.5vw]  sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] ' variant="secondary">Get Started -{'>'} </Button>
                </Link>
                </div>
        </div>
    </div>
  )
}

export default Features
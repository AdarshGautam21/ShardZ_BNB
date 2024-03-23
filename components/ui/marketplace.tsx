import React from 'react';
import thumbnail from '@/public/images/thumbnail.png'
import { Button } from './button';
import Link from 'next/link'

const Market = () => {
  const rewards = [
    { id: 1, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 2, creator: '@Andy William' , collectable: true , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 3, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 4, creator: '@Andy William' , collectable: true , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 5, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 6, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 7, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 8, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 9, creator: '@Andy William' , collectable: false , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },
    { id: 10, creator: '@Andy William' , collectable: true , title: 'Basic how to get into web 2 ecosystem', cost: '0.8 ETH' , thumbnail },

  ];

  return (
    <div className="  md:w-[90%] pb-[10vw] ">
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {rewards.map(reward => (
            <div className='bg-gradient-to-br from-cyan-400  via-[#ad9f9f00] to-cyan-400 p-[0.1vw] rounded-[0.5vw]' key={reward.id}>
                <div key={reward.id} className="bg-[#151414] h-full text-white rounded-[0.5vw] overflow-hidden">
                  <div className=  "w-full relative " >
                    <Link href='/NftPage'>
                  <img src={reward.thumbnail.src} alt={reward.title} className="w-full h-full p-[1vw]" />
                  </Link>
                  </div>
                    <div className="p-[1vw]">
                    <Link href='/NftPage'>
                        <p className="  text-[4vw] md:text-[1vw]  font-semibold mb-2">{reward.title}</p>
                        </Link>
                        <div className='flex text-center items-center justify-between text-[2vw] md:text-[0.8vw] text-[#808191] space-x-[0.5vw]' >
                            <p className='text-[3vw] md:text-[1vw] lg:text-[0.8vw] ' >{reward.creator}</p>
                            
                            <p className=' text-[3vw] md:text-[1.5vw] font-semibold bg-gradient-to-r inline-block text-transparent bg-clip-text from-[#33C1EE] via-[#8DDCF5]  to-[#FFFFFF] ' >{reward.cost}</p>
                        </div>

                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Market;

import React from 'react';
import thumbnail from '@/public/images/thumbnail.png'
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { ThumbsUp , ThumbsDown } from 'lucide-react';
const Comments = () => {
  const comment = [
    { id: 1, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem Basic how to get into web 2 ecosystem Basic how to get into web 2 ecosystem Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 2, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 3, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 4, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 5, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 6, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 7, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 8, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 9, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },
    { id: 10, creator: 'Andy William' , time: '7 min', title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , thumbnail },

  ];

  return (
    <div className="mx-auto ">
      <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {comment.map(comment => (
            <div key={comment.id}>
            <div className=' border-[0.5px] border-slate-600 p-[0.1vw] rounded-[2vw] md:rounded-[0.5vw]' >
                <div key={comment.id} className=" flex  border-slate-600 space-x-[0.6vw]  bg-gradient-to-r from-[#0000004f] to-[#0000005e]  p-[1vw] h-full  text-white rounded-[0.5vw]">
                    <div>
                      <Avatar className=' w-[5vw] h-[5vw] md:w-[2.2vw] cursor-pointer md:h-[2.2vw]' >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    
                    <div className="">
                        <div className='flex space-x-[1vw] ' >
                            <p className='text-[2.5vw] cursor-pointer md:text-[1vw] lg:text-[0.8vw] ' >{comment.creator}</p>
                            <p className=" cursor-pointer text-gray-500  text-[2vw] md:text-[0.8vw]  ">{comment.time}</p>
                        </div>
                        
                        <div className='flex cursor-pointer  text-[2.5vw] md:text-[0.8vw] text-[#808191] space-x-[0.5vw]' >
                            {comment.title}
                            
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className='flex space-x-[1vw] items-center p-[1vw]' >
              <ThumbsUp className='cursor-pointer w-[4vw] h-[4vw] md:h-[1vw] md:w-[1vw] ' />
              <p className=' text-[2vw] md:text-[0.8vw] text-white' >3</p>
              <ThumbsDown className='cursor-pointer w-[4vw] h-[4vw] md:h-[1vw] md:w-[1vw] ' />
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

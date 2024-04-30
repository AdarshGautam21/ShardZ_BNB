import React, {useEffect, useState} from 'react';
import thumbnail from '@/public/images/trendthumbnail.png'
import edit from '@/public/images/edit.png'
import { MoreVertical } from 'lucide-react';
import { Switch } from "@/components/ui/switch"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import lighthouse from '@lighthouse-web3/sdk'
import contractABI from '@/public/abi/createNft.json'
import Link from 'next/link'
import Image from 'next/image';
import {ethers} from 'ethers'
import { Button } from '../ui/button';
import SkeletonLoading from '../StudioPage/SkeletonLoading';

const Content = () => {
  const videos = [
    { id: 1, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 2, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 3, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 4, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },
    { id: 5, creator: 'Andy William' , time: '7 min' , title: 'Basic how to get into web 2 ecosystem', views: '52 views' , timeAdded: '2 weeks ago' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...." , thumbnail },


  ];




  interface FileObject {
    publicKey: string;
    fileName: string;
    mimeType: string;
    txHash: string;
    status: string;
    createdAt: number;
    fileSizeInBytes: string;
    cid: string;
    id: string;
    lastUpdate: number;
    encryption: boolean;
  }

  const [allVideos, setAllVideos] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState(true)


  const outputList: any[] = [];

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
            const signer = await provider.getSigner();
            // const shardZNFTContract = new ethers.Contract("0x4335e4fFfD017D382dFae9131E966555f0E41B8C", contractABI, signer);
            const shardZNFTContract = new ethers.Contract("0x23Ef0e4f4031c2d0DeeB4C1f7b8fe097a8276342", contractABI, signer)
            
            const response = await lighthouse.getUploads("27423fd5.3c405e09d4dc4b1e8b5e78ff342ba5c2");
            if (response.data && response.data.fileList) {
      
            for (let i = 1; ; i++) {
                try{
                const transaction = await shardZNFTContract.getTokenCID(i);
                const owner = await shardZNFTContract.ownerOf(i);
                if(owner == signer.address){
                  // outputList.push([transaction, owner]);
                  outputList.push(transaction);
                }
                }
                catch(err){
                  console.log("Error:", err)
                    break;
                }
            }


        const filteredFiles = response.data.fileList.filter(file => {
          return outputList.includes(file.cid);
        });

          setAllVideos(filteredFiles);
          console.log(filteredFiles);
          setLoading(false);
          
          
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error fetching uploads:', error);
        // Handle error accordingly
      }
    };

    fetchData();
  }, []);






  return (
    <div>


      {loading ? (
        <SkeletonLoading/>
      ):
      (
        <div>

<div className="mx-auto space-y-[2vw] hidden md:block ">
      
      {allVideos.map((video,index) => (
        <Link href={`/PublishToMarketplace?video=${encodeURIComponent(JSON.stringify(video))}`} key={index} >
            <div className='bg-gradient-to-r from-[#fff0] via-[#ffffff2d] to-cyan-400 p-[0.1vw] rounded-[0.5vw] mb-[0.5vw]' >
              
              <div className="bg-black flex items-center p-[0.5vw] text-white rounded-[0.5vw]">
                <div className='w-4/12 relative' style={{ width: '100%', maxWidth: '300px' }}>

                <img src={`https://gateway.lighthouse.storage/ipfs/${video.fileName.substring(video.fileName.lastIndexOf(' ') + 1)}`} alt={video.fileName} className='w-full h-[20vh]'   />
                
                {/* <div className='absolute bottom-[1vw] px-[1vw] text-[1vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.time}</div> */}

                </div>
                  <div className=" p-[0.8vw] md:p-[1vw] flex items-center">
                    <div className='w-1/2 mr-[2vw] ' >
                      <p className='text-[2vw] md:text-[1vw] lg:text-[1vw] ' >{video.fileName.substring(0, video.fileName.lastIndexOf(' '))}</p>
                      {/* <p className='text-[2vw] md:text-[1vw] lg:text-[1vw] ' >{video.title}</p> */}
                      <p className="  text-[1vw] md:text-[0.8vw] text-[#808191] mb-[0.2vw]">hello eveeryone uiewfuiv uiwe uiv ewuvuwev wev wev uew vuew vuwe vuw vue ev wuiu </p>
                    </div>
                    <div className='flex w-1/2 justify-between' >
                      <div className='text-center' >
                        <p className='text-gray-500 text-[0.8vw]' >Views</p>  
                        <p className='text-[1vw]' >53</p>
                      </div>
                      <div className='text-center' >
                        <p className='text-gray-500 text-[0.8vw]' >Date</p>  
                        <p className='text-[1vw]' >Apr 13, 2023</p>
                      </div>
                      <div className='text-center' >
                        <p className='text-gray-500 text-[0.8vw]' >Comments</p>  
                        <p className='text-[1vw]'>2</p>
                      </div>
                      <div className='text-white items-center ' >
                        <div className='h-full  items-center text-center ' >
                          <p className='text-gray-500 text-[0.6vw]' >Public</p>
                          <div  >
                          <Switch className=' ' />
                          </div>
                        </div>

                        <div className='flex justify-around ' >
                          <Image src={edit} className='hover:bg-[#fff3] w-[2vw] h-[2vw] rounded-[0.2vw]' alt='' />
                          <Popover>
                            <PopoverTrigger><MoreVertical className='w-[2vw] h-[2vw]' /></PopoverTrigger>
                            <PopoverContent className='bg-black border rounded-e-[1vw] rounded-b-[1vw] flex-col border-gray-500' >
                              <div className='text-center flex justify-center items-center  border-b  border-gray-400'><Button className='text-white text-center  text-[1vw]' >Get Sharable Link</Button></div>
                              <div className='text-center flex justify-center items-center  '><Button className='text-white text-center  text-[1vw]' > Delete </Button></div>
                            </PopoverContent>
                          </Popover>

                        </div>
                        
                      </div>
                    </div>
                  
                  </div>
              </div>
              </div>

             </Link>
      ))}
    </div>
    <div className="mx-[2vw] space-y-[2vw]  md:hidden ">
    
      {allVideos.map((video, index) => (
        <Link href='/PublishToMarketplace' key={index}>
          <div className='bg-gradient-to-r from-[#fff0] via-[#ffffff2d] to-cyan-400 p-[0.2vw] rounded-[1vw]'>
              
              <div key={video.id} className="bg-black items-center p-[2vw]  text-white rounded-[0.5vw]">
                <div className='  relative w-full  flex ' >

                {/* <img src={video.thumbnail.src} className='w-[80%]' alt={video.title}   /> */}

                <img src={`https://gateway.lighthouse.storage/ipfs/${video.fileName.substring(video.fileName.lastIndexOf(' ') + 1)}`} alt={video.fileName} className='w-full h-[20vh]'   />

                {/* <div className='absolute bottom-[1vw] px-[1vw] text-[1vw] rounded-[0.5vw]  bg-[#0000002f] right-[1vw] ' >{video.time}</div> */}
                <div className='w-full p-[1vw]  ' >
                      {/* <p className='text-[3vw] md:text-[1vw] lg:text-[1vw] ' >{video.title}</p>
                      <p className="  text-[2vw] md:text-[0.8vw] text-[#808191] mb-[0.2vw]">{video.description}</p> */}
                      <p className='text-[2vw] md:text-[1vw] lg:text-[1vw] ' >{video.fileName.substring(0, video.fileName.lastIndexOf(' '))}</p>
                      {/* <p className='text-[2vw] md:text-[1vw] lg:text-[1vw] ' >{video.title}</p> */}
                      <p className="  text-[1vw] md:text-[0.8vw] text-[#808191] mb-[0.2vw]">hello eveeryone uiewfuiv uiwe uiv ewuvuwev wev wev uew vuew vuwe vuw vue ev wuiu </p>
                    </div>
                </div>
                  <div className=" w-full p-[0.8vw] md:p-[1vw] flex items-center">
                    <div className='flex w-full justify-around' >
                      <div className='text-center' >
                        <p className='text-gray-500 text-[2vw]' >Views</p>  
                        <p className='text-[2vw]' >53</p>
                      </div>
                      <div className='text-center' >
                        <p className='text-gray-500 text-[2vw]' >Date</p>  
                        <p className='text-[2vw]' >Apr 13, 2023</p>
                      </div>
                      <div className='text-center' >
                        <p className='text-gray-500 text-[2vw]' >Comments</p>  
                        <p className='text-[2vw]'>2</p>
                      </div>
                      <div className='text-white items-center ' >
                        <div className='h-full  items-center text-center ' >
                          <p className='text-gray-500 text-[2vw]' >Public</p>
                          <div  >
                          <Switch className='  ' />
                          </div>
                        </div>

                        
                        
                      </div>
                    </div>
                    
                  
                  </div>
                  <div className='flex flex-row-reverse ' >

                          <Popover>
                            <PopoverTrigger><MoreVertical className='w-[4vw] h-[4vw]' /></PopoverTrigger>
                            <PopoverContent className='bg-black border rounded-e-[1vw] rounded-b-[1vw] flex-col border-gray-500' >
                              <div className='text-center flex justify-center items-center  border-b  border-gray-400'><Button className='text-white text-center  text-[4vw]' >Get Sharable Link</Button></div>
                              <div className='text-center flex justify-center items-center  '><Button className='text-white text-center  text-[4vw]' > Delete </Button></div>
                            </PopoverContent>
                          </Popover>
                          <Image src={edit} className='hover:bg-[#fff3] w-[4vw] h-[4vw] rounded-[0.2vw]' alt='' />

                        </div>
              </div>
              </div>
              </Link>
      ))}
    </div>


        </div>
      )}

    
      </div>
  );
};

export default Content;

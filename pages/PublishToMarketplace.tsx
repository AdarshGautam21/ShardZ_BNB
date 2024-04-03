"use client"
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../components/ui/button';
import "@/app/globals.css";
import video from '@/public/images/videoUp.png'
import coin from '@/public/images/coin.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '@/public/images/logo.png';
import Sidemenu from '@/components/main/Sidemenu'
import Nav from '@/components/main/Nav'
import Lottie, {LottieProps} from 'react-lottie';
import uploadAnimationData from '@/public/uploading.json'
import successfulAnimation from '@/public/successful.json'
import Link from 'next/link';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { upload } from "@lighthouse-web3/sdk";
import lighthouse from '@lighthouse-web3/sdk'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { zodResolver } from "@hookform/resolvers/zod"
import {ethers, Contract, Provider, JsonRpcSigner} from 'ethers';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { boolean, z } from "zod"
import ellipse from '@/public/images/EllipseHome.png'
import { Menu, MenuIcon } from 'lucide-react'
import VideoSelector from '../components/ui/videoSelector';
import ThumbnailSelector from '../components/ui/thumbnailSelector';
import Image from 'next/image';
import contractABI from '@/public/abi/createNft.json';
import { useRouter } from 'next/router';
import { log } from 'console';

// import {ethers} from 'ethers'

const formSchema = z.object({
  Title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  Description: z.string().min(40, {
      message: "Description must be at least 40 characters.",
  }),
  yes: z.boolean(),
  no: z.boolean(),
});



const UploadPage =() => {
  const router = useRouter();
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedVideo(acceptedFiles[0]);
  }, []);



  const { video } = router.query;
  
      const [videoInfo, setVideoInfo] = useState(null)
      let VideoInfo;
      if (video) {
        VideoInfo = JSON.parse(decodeURIComponent(video as string));
        
        console.log(videoInfo);
        
      }





  const remove = () => {
    setSelectedVideo(null);
  };

  const dropzoneOptions = {
    onDrop,
  };

  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Description: "",
      yes: false,
      no: false,
    },
  });

  const [signer, setSigner] = useState<any>('')
  const [contract, setContract] = useState<any>('')



useEffect(() => {
  if (video){
  setVideoInfo(JSON.parse(decodeURIComponent(video as string)));
  }
  console.log(videoInfo);
  
  
  const initializeProvider = async () => {
      try {
          // const provider = new ethers.providers.Web3Provider(window.ethereum);
          const provider = new ethers.BrowserProvider((window as any).ethereum);
          const signer = await provider.getSigner();
          setSigner(signer);
          console.log(signer);
          const shardZNFTContract = new ethers.Contract("0x23Ef0e4f4031c2d0DeeB4C1f7b8fe097a8276342", contractABI, signer);
          setContract(shardZNFTContract);
      } catch (error) {
          console.error("Error initializing provider:", error);
      }
  };

  initializeProvider();
}, []);


function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }



  if(!videoInfo){
    return(
      <div className='bg-[#0D0D0E]' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
          height: '100%',
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
        }} >
          </div>
    )
  }

  return (
    <div className='bg-[#0D0D0E]' style={{
      backgroundImage: `url(${ellipse.src})`,
      width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >

        {/* {videoInfo ? ():(<></>)} */}


        <Nav />

        <div className='hidden md:block' >
        
        
        

      <h1 className='text-center text-[#33C1EE] mr-[2vw] mt-[2vw] font-bold text-[2vw]' >Video Details</h1>

      <div className='flex justify-around ' >
          <Form {...form}>
        <div className='text-white w-[50%] m-[5vw] ' >

        
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[100%]">
              <FormField
                
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Title (required) </FormLabel>
                    <FormControl className='rounded-[0.5vw]' >
                      <Input disabled className='bg-[#00000033]' {...field} value={videoInfo.fileName.substring(0, videoInfo.fileName.lastIndexOf(' '))}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Description </FormLabel>
                    <FormControl className='rounded-[0.5vw]' >
                      <textarea rows={10} className='w-full  p-2 bg-[#00000033] border ' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

                <div className="mt-4 cursor-pointer ">
     
          <div className='w-[25vw]' >
            <div className='flex justify-between' >
              <img
              src={`https://gateway.lighthouse.storage/ipfs/${videoInfo.fileName.substring(videoInfo.fileName.lastIndexOf(' ') + 1)}`}
              alt="Selected Thumbnail"
              className=" w-[10vw] max-h-32 object-cover rounded-lg  border  border-cyan-400"
              />
            </div>

          </div>
    </div>

            </form>




        </div>

        <div className='w-[50%] m-[5vw] rounded-[0.5vw]' >
          {/* <video className=' w-[100%] rounded-[0.5vw] border border-cyan-500' controls preload="none"> 
            <source src="/path/to/video.mp4" type="video/mp4" />
          </video> */}
           <div className="mt-4">
      <div>

          <div>
          <div className="relative ">
            <video
              src={`https://gateway.lighthouse.storage/ipfs/${videoInfo.cid}`}
              className="w-full border border-cyan-500 rounded-[0.5vw]"
              controls
            />
          </div>
          </div>

      </div>
     
    </div>
        </div>
          </Form>



      </div>

      </div>
      <div className=' pb-[5vw] md:hidden' >
    
        <div className="m-4">
      <div>
          <div>
          <div className="relative ">
            <video
              src={`https://gateway.lighthouse.storage/ipfs/${videoInfo.cid}`}
              className="w-full border border-cyan-500 rounded-[0.5vw]"
              controls
            />
          </div>
          </div>

      </div>
    </div>
    <div className='text-white  m-[5vw] ' >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[100%]">
              <FormField
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Title (required) </FormLabel>
                    <FormControl className='rounded-[2vw]' >
                      <Input className='bg-[#00000033]' {...field} disabled value={videoInfo.fileName.substring(0, videoInfo.fileName.lastIndexOf(' '))}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Description </FormLabel>
                    <FormControl className='rounded-[2vw]' >
                      <textarea rows={10} className='w-full  p-2 bg-[#00000033] border ' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

      </div>
    </div>
  );
}

export default UploadPage;
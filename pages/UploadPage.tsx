"use client"
import React, { useCallback, useState } from 'react';
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
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { zodResolver } from "@hookform/resolvers/zod"
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

const UploadPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedVideo(acceptedFiles[0]);
  }, []);

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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

      <h1 className='text-center text-[#33C1EE] mr-[2vw] mt-[2vw] font-bold text-[2vw]' >Upload a Video</h1>

      <div className='flex justify-around ' >
        <div className='text-white w-[50%] m-[5vw] ' >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[100%]">
              <FormField
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Title (required) </FormLabel>
                    <FormControl className='rounded-[0.5vw]' >
                      <Input className='bg-[#00000033]' {...field} />
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
              <div>
                <p className='text-white text-[1vw]' >Audience</p>
                <p className='text-white text-[0.7vw]' >Is this video made for kids? (required)</p>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label className='text-white' htmlFor="option-one">Yes, it&apos;s made for kids.</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">No, it&apos;s not made for kids</Label>
                </div>
                </RadioGroup>
                <div>
                    <p className='text-white text-[1vw]'>Thumbnail</p>
                    <p className='text-white text-[0.7vw]' >Select or upload a picture that shows what&apos;s in your video. A good thumbnail stands out and draws viewers&apos; attention. </p>
                </div>
                <ThumbnailSelector/>

              
                <Button type='submit' className='border w-[4vw]s w-[13hw] text-[1.5vw] bg-cyan-400 border-cyan-400 rounded-[0.5vw] text-black mt-[2vw] ' onClick={() => {}} >UPLOAD</Button>
            </form>
          </Form>
        </div>

        <div className='w-[50%] m-[5vw] rounded-[0.5vw]' >
          {/* <video className=' w-[100%] rounded-[0.5vw] border border-cyan-500' controls preload="none"> 
            <source src="/path/to/video.mp4" type="video/mp4" />
          </video> */}
           <div className="mt-4">
      <div
        {...getRootProps({
          className:`${selectedVideo ? ''
          :'p-[1vw] h-[25vw] flex justify-center text-center bg-[#FFFFFF0F] items-center border border-dashed border-gray-400 rounded-[1vw]  cursor-pointer'
        }`

        })}
      >
        <input {...getInputProps()} />
        {selectedVideo ? (
          <div>
          <div className="relative ">
            <video
              src={URL.createObjectURL(selectedVideo)}
              className="w-full border border-cyan-500 rounded-[0.5vw]"
              controls
            />
          </div>
          <div className='flex justify-center items-center' >
            <Button className='border border-cyan-400 rounded-[0.5vw] text-cyan-400 font-semibold mt-[2vw] ' onClick={remove} >REMOVE</Button>
          </div>
          </div>
        ) : (
          <div>
            <p className="text-white font-semibold text-[1.5vw] ">
              +
            </p>
            <p className='text-white font-semibold text-[1.5vw] ' >Upload a video</p>
          </div>
        )}
      </div>
     
    </div>
        </div>
      </div>
      </div>
      <div className=' pb-[5vw] md:hidden' >
        
      { selectedVideo == null ?  <div className='mx-[2vw]  mb-[4vw] md:mb-0 pt-[4vw] flex items-center space-x-[4vw] justify-between' >
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
                {/* <div className='bg-[#2DA6CC] rounded-[0.5vw] w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] '></div>
                <h2 className=' text-[5vw] md:text-[2vw]  text-[#FFFFFF] font-extrabold' >shardZ</h2> */}
                <Image src={logo} className='w-[15vw]' alt='' />
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
                    <div>
                      
                    <Image src={coin} className=' w-[7vw] sm:w-[4vw] md:hidden'alt='' />

                    
                    </div>

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
        </div> : <div className='mx-[2vw]  mb-[8vw] md:mb-0 pt-[4vw] flex items-center space-x-[4vw] justify-between' >
            <div className='flex space-x-[1vw] cursor-pointer  items-center' >
                <Image src={logo} className='w-[15vw]' alt='' />

            </div>


            <div className='w-full hidden md:block  ' >
                <div className='w-full flex h-[2.5vw] items-center bg-transparent justify-center space-x-[4vw] text-white rounded-[0.5vw] relative ' >
                    <p className='text-[1vw]' >Home</p>
                    <p className='text-[1vw]' >Marketplace</p>
                </div>
            </div>
            <div className='flex  items-center ' >
                <div className='flex items-center mr-[3vw] space-x-2' >
                    <Image src={video} className=' w-[7vw] sm:w-[4vw] md:hidden'alt='' />
                  <Button className='rounded-[2vw] h-[7vw] w-[30vw] text-[3vw] bg-white' >Connect Wallet</Button>
                </div>

                <div className='hidden md:hidden' >
            
                        <img className='w-[6vw] h-[6vw] rounded-full ' src="https://github.com/shadcn.png" />

                        
                
                </div>

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
            

            <div className='hidden md:block p-[0.1vw] rounded-[0.5vw] bg-gradient-to-tl from-cyan-400 to-black m-2' >
                <div className='flex bg-black rounded-[0.5vw]  w-[10vw] h-[2.5vw] space-x-[1vw]  items-center' >
               
                    <img className='w-[2vw] rounded-full ' src="https://github.com/shadcn.png" />
           
                    <p className='  text-[0.7vw] text-white'>Andy William</p>
                    <MenuIcon className='text-white w-[1vw] h-[1vw] cursor-pointer hover:bg-[#33c2ee50] rounded-[0.2vw] ' />
                </div>
            </div>
            </div>
        </div> }
        <div className='m-[2vw]' >
          <p className='text-white font-semibold text-[5vw] ' >Upload video</p>
        </div>
        <div className="m-4">
      <div
        {...getRootProps({
          className:`${selectedVideo ? ''
          :'p-[1vw] h-[60vw] flex justify-center text-center bg-[#FFFFFF0F] items-center border border-dashed border-gray-400 rounded-[2vw] cursor-pointer'
        }`

        })}
      >
        <input {...getInputProps()} />
        {selectedVideo ? (
          <div>
          <div className="relative ">
            <video
              src={URL.createObjectURL(selectedVideo)}
              className="w-full border border-cyan-500 rounded-[0.5vw]"
              controls
            />
          </div>
          <div className='flex justify-center items-center' >
            <Button className='border border-cyan-400 rounded-[0.5vw] text-cyan-400 font-semibold mt-[2vw] ' onClick={remove} >REMOVE</Button>
          </div>
          </div>
        ) : (
          <div>
            <p className="text-white font-semibold text-[5vw] ">
              +
            </p>
            <p className='text-white font-semibold text-[5vw] ' >Upload a video</p>
          </div>
        )}
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
                      <Input className='bg-[#00000033]' {...field} />
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
              <div>
                <p className='text-white text-[5vw]' >Audience</p>
                <p className='text-white text-[3vw]' >Is this video made for kids? (required)</p>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label className='text-white text-[3vw]' htmlFor="option-one">Yes, it&apos;s made for kids.</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label className='text-white text-[3vw]' htmlFor="option-two">No, it&apos;s not made for kids</Label>
                </div>
                </RadioGroup>
                <div>
                    <p className='text-white text-[5vw]'>Thumbnail</p>
                    <p className='text-white text-[3vw]' >Select or upload a picture that shows what&apos;s in your video. A good thumbnail stands out and draws viewers&apos; attention. </p>
                </div>
                <ThumbnailSelector/>

              
                <Button type='submit' className='border h-[4vw] text-[2vw]  md:text-[0.6vw] bg-cyan-400 border-cyan-400 rounded-[0.5vw] text-black font-bold mt-[2vw] ' onClick={() => {}} >UPLOAD</Button>
            </form>
          </Form>
        </div>

      </div>
    </div>
  );
}

export default UploadPage;

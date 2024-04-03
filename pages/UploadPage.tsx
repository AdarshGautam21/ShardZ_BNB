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
import axios from 'axios'
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



const UploadPage: React.FC = () => {
  const router = useRouter();
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

  const [signer, setSigner] = useState<any>('')
  const [contract, setContract] = useState<any>('')


//   useEffect(() => {
//     // const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const provider = new ethers.BrowserProvider((window as any).ethereum);
//     const signer = provider.getSigner();
//     setSigner(signer);
//     console.log(signer);
//     const signerr = await signer;
    
//     const shardZNFTContract = new ethers.Contract("0x0aB61D5cdc5091326a796D48eEE6a124f8ea8C81", contractABI, signer);
//     setContract(shardZNFTContract);
// }, []);


useEffect(() => {
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



  

  // const progressCallback = (progressData: { total: number; uploaded: number }) => {
  //   if (progressData && typeof progressData.total === 'number' && typeof progressData.uploaded === 'number') {
  //     const percentageDone = 100 - Number(((progressData.total / progressData.uploaded) * 100).toFixed(2));
  //     console.log(percentageDone);
  //   }
  // };

  //const CID = await shardZNFTContract.getTokenCID(tokenId);
  //console.log('Token CID for Token ID ${tokenId}: ${cid}');



  interface NFTCreatedEvent {
    event: string; // Should be "NFTCreated"
    args: {
      tokenId: string;
    };
  }
  

  async function createNFT(signer: JsonRpcSigner, cid: string): Promise<any> {
    try {
      console.log(contract);
      const transaction = await contract.createNFT(signer, cid);
      const receipt = await transaction.wait();
      setUploading(false);

      setSuccessful(true);
      
      setTimeout(() => {
        router.push('/VideoPage'); // Redirect to another page
    }, 5000);

      // const events: NFTCreatedEvent[] = receipt.events.filter(
      //   (event: NFTCreatedEvent) => event.event === 'NFTCreated'
      // );

      // const tokenId = events[0].args.tokenId;
      // if (events.length > 0) {
      //     console.log('NFT created successfully. Token ID:', tokenId.toString());
      // } else {
      //     console.log('NFT creation event not found in the transaction receipt.', events);
      // }
      // console.log('NFT created successfully.', transaction);
      // const overrides = {
      //   gasLimit: 300000 
      // };



      // const airDrop = await contract.airdropNFT("0x0aB61D5cdc5091326a796D48eEE6a124f8ea8C81", tokenId, overrides)
      // const airdropReceipt = await airDrop.wait()
      // console.log("Airdropped", airDrop);


    }
    catch (error){
      console.log("Error in creating NFT", error)
    }
  }
  



  const submit = async () => {
    if (!selectedVideo) {
      return;
    }

    try {
      setUploading(true);

      // const thumbnailOutput = await lighthouse.upload( [thumbnail], '634d38b8.9e4eefb3ff5940b78276e56b7403a967');
      // console.log(thumbnail);27423fd5.3c405e09d4dc4b1e8b5e78ff342ba5c2
      const thumbnailOutput = await lighthouse.upload( [thumbnail], '27423fd5.3c405e09d4dc4b1e8b5e78ff342ba5c2');
      

      const updatedFileName = form.watch('Title') + " " + thumbnailOutput.data.Hash;
      const updatedFile = selectedVideo ? new File([selectedVideo], updatedFileName, { type: selectedVideo.type }) : null;
      console.log(updatedFile);
      
      setSelectedVideo(updatedFile);

      const output = await lighthouse.upload( [updatedFile], '27423fd5.3c405e09d4dc4b1e8b5e78ff342ba5c2');
      console.log('File Status:', output);
      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
      
      // const address = await signer.getAddress();
      // console.log(signer);
      
    const signerr = await signer;
    // const address = signerr.getAddress();
    console.log(signerr.address);
    // console.log(address);

    // const shardZNFTContract = new ethers.Contract("0x0aB61D5cdc5091326a796D48eEE6a124f8ea8C81", contractABI, signerr);
    // setContract(shardZNFTContract);
    
    
    // const nft = await axios.post('http://192.168.1.34:8080/api/contract/createNFT', {signer: signerr.address, cid: output.data.Hash})
    const nft = await createNFT(signerr.address , output.data.Hash)

    // setUploading(false);

    //   setSuccessful(true);
      
    //   setTimeout(() => {
    //     router.push('/VideoPage'); // Redirect to another page
    // }, 5000);

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  
  



  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }







  const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const removeThumbnail = () => {
    setSelectedThumbnail(null);
  }




  const [uploading, setUploading] = useState(false);
  const [successful, setSuccessful] = useState(false);





  return (
    <div className='bg-[#0D0D0E]' style={{
      backgroundImage: `url(${ellipse.src})`,
      width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >

{uploading && <div style={{position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    zIndex: 9999, // Ensure the overlay is on top of other content
    filter: 'grayscale(100%)'}} />}


        <div className='hidden md:block' >
        
        <Nav />
        
        

      <h1 className='text-center text-[#33C1EE] mr-[2vw] mt-[2vw] font-bold text-[2vw]' >Upload a Video</h1>

      <div className='flex justify-around ' >
          <Form {...form}>
        <div className='text-white w-[50%] m-[5vw] ' >

        {uploading && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10000 }}>
                    <Lottie options={{ animationData: uploadAnimationData }} height={300} width={300} />
                </div>
            )}
          {successful && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10000 }}>
                    <Lottie options={{ animationData: successfulAnimation, loop: false }} height={300} width={300} speed= {0.5}/>
                </div>
            )}
        
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[100%]">
              <FormField
                
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Title (required) </FormLabel>
                    <FormControl className='rounded-[0.5vw]' >
                      <Input required className='bg-[#00000033]' {...field} />
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
              <RadioGroup defaultValue="option-one" required>
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
                {/* <ThumbnailSelector /> */}
                <div className="mt-4 cursor-pointer ">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="thumbnail"
        required
      />
      <label
        htmlFor="thumbnail"
        className={selectedThumbnail ? "" : " h-[20vw] w-[30vw] border border-dashed border-gray-500  bg-[#00000033] rounded-[1vw] md:h-[5vw] text-center md:w-[10vw] flex justify-center items-center"}
      >
        {selectedThumbnail ? (
          <div className='w-[25vw]' >
            <div className='flex justify-between' >
              <img
              src={selectedThumbnail}
              alt="Selected Thumbnail"
              className=" w-[10vw] max-h-32 object-cover rounded-lg  border  border-cyan-400"
              />
              <img
              src={selectedThumbnail}
              alt="Selected Thumbnail"
              className=" w-[10vw] max-h-32 object-cover rounded-lg  border  border-cyan-400"
              />
            </div>
            
            <Button className='border w-[4vw] h-[2vw] text-[0.6vw] border-cyan-400 rounded-[0.5vw] text-cyan-400 font-semibold mt-[2vw] ' onClick={removeThumbnail} >REMOVE</Button>

          </div>

        ) : (
          <div>
            <p className="text-white text-[5vw] md:text-[1vw] ">+</p>
            <p className='text-white text-[3vw] md:text-[1vw] ' >Upload a thumbnail</p>
          </div>
          

        )}
      </label>
    </div>

              
                <Button type='submit' className='border w-[4vw]s w-[13hw] text-[1.5vw] bg-cyan-400 border-cyan-400 rounded-[0.5vw] text-black mt-[2vw] ' onClick={submit} >UPLOAD</Button>
            </form>




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
        <input {...getInputProps()} required/>
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
            <p className='text-white font-semibold text-[1.5vw] ' >Upload a Video</p>
          </div>
        )}
      </div>
     
    </div>
        </div>
          </Form>



      </div>
      </div>
      <div className=' pb-[5vw] md:hidden' >
        
      {/* { selectedVideo == null ?  <div className='mx-[2vw]  mb-[4vw] md:mb-0 pt-[4vw] flex items-center space-x-[4vw] justify-between' >
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
        </div> } */}
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

              
                <Button type='submit' className='border h-[4vw] text-[2vw]  md:text-[0.6vw] bg-cyan-400 border-cyan-400 rounded-[0.5vw] text-black font-bold mt-[2vw] ' onClick={submit} >UPLOAD</Button>
            </form>
          </Form>
        </div>

      </div>
    </div>
  );
}

export default UploadPage;

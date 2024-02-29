// VideoSelector.tsx
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './button';

const VideoSelector: React.FC = () => {
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

  return (
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
          <div>
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
  );
};

export default VideoSelector;

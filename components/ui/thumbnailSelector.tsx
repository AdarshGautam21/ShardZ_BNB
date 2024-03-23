// ThumbnailSelector.tsx
import React, { useState } from 'react';
import { Button } from './button';

const ThumbnailSelector: React.FC = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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

  return (
    <div className="mt-4 cursor-pointer ">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="thumbnail"
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
  );
};

export default ThumbnailSelector;

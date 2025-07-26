"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';
import Image from 'next/image';
import { getImagePath } from '@/src/utils';

const UploadImagenCloudinaryWidget = ({ image } : {image: string | undefined}) => {
  const [imageUrl, setImage] = useState('');
  
  return ( 
    <CldUploadWidget  
      onSuccess={(result, {widget}) => {
        if(result.event === 'success') {
          widget.close()
          
          const image = result?.info as {secure_url: string};
          setImage(image.secure_url)
          
        }
      }}

      uploadPreset="quiosco-app"
      options={{
        maxFiles:1
      }}
      >
      {({ open }) => {
        return (
          <div className='space-y-2'>
            <label className='text-slate-800'>Imagen Producto:</label>

            <div 
              onClick={() => open()}
              className='relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'>
              <TbPhotoPlus size={50}/>
              <p className='text-lg font-semibold'>Agregar imagen</p>

              {imageUrl && (
                <div
                  className='absolute inset-0 w-full h-full'
                >
                  <Image 
                    alt='Imagen de producto' 
                    src={imageUrl} 
                    fill 
                    style={{objectFit: 'contain'}}
                  />
                </div>
              )}
              </div>
              <input
                name='image' 
                defaultValue={imageUrl ? imageUrl : image}
                type='hidden'
              />

              {image && !imageUrl && (
                <div className='space-y-2'>
                  <label htmlFor="">Imagen actual:</label>

                  <div className='relative w-64 h-64'>
                    <Image 
                      alt='Imagen producto'
                      fill
                      src={getImagePath(image)}
                    />
                  </div>
                </div>
              )}
          </div>

        );
      }}
    </CldUploadWidget>
  );
}
 
export default UploadImagenCloudinaryWidget; 
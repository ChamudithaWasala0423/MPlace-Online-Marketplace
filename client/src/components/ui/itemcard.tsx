import React from 'react';
import Image from 'next/image';
import Favoritebutton from './favouritebutton';

type ItemcardProps = {
  name: string;
  description: string;
  price: string;
  location: string;
  daysAdded: number;
  itemImage: string;
}

const Itemcard: React.FC <ItemcardProps>=({ 
  name, description, price, location, daysAdded, itemImage }: ItemcardProps) => {
  return (
    <div className='bg-terirary-100 h-[359px] w-[339px] flex flex-col m-4 rounded-corner hover:bg-terirary-400 
                    lg:h-[500px] lg:w-[437px]'>
      <div className="flex h-[196px] w-[339px] overflow-hidden relative 
                      lg:h-[325px] lg:w-[437px]">
        <Image 
          className="object-cover w-full h-full rounded-t-corner" 
          src={itemImage} 
          alt="Product Image" 
          layout="fill"
        />
        <div className='absolute top-0 right-0 mt-3 mr-3 w-[34px] h-[34px] bg-terirary-100 hover:bg-terirary-400 
                        rounded-full border-purple-600 flex justify-center items-center'>
          <Favoritebutton />
        </div>
      </div>
      
      <div className='flex items-start flex-col w-[280px] h-[104px] m-4 text-black text-balance overflow-clip 
                      lg:w-[405px]'>
        <p className='font-sans font-semibold w-full text-[16px] 
                      lg:text-[20px]'>{name}</p>
        <p className='font-sans font-normal text-[14px] 
                      lg:text-[16px]'>{description}</p>
      </div>
      
      <p className='font-sans text-[16px] font-semibold text-limegreen mt-0 mr-4 ml-4 
                    lg:text-[20px] lg:ml-4 lg:mr-4'>{price}</p>
      
      <div className='flex flex-row space-x-2 m-4 mt-0 
                      lg:space-x-4 lg:flex-row lg:m-4 lg:mt-0'>
        <p className='font-sans text-black text-opacity-75 w-full 
                      lg:w-[190px]'>{location}</p>
        <p className='font-sans text-black text-opacity-75 w-full m-0 mt-1 text-left 
                      lg:w-[190px] lg:m-4 lg:mt-0 lg:text-right'>Added {daysAdded} days ago</p>
      </div>
    </div>
  );
}

export default Itemcard;
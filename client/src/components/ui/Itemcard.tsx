import React from 'react'
import Image from 'next/image'
import Favoritebutton from './Favoritebutton';
type ItemcardProps = {
    name: string;
    description: string;
    price: string;
    location: string;
    daysAdded: number;
    itemImage: string;
  }
  
//
const Itemcard = ({name,description,price,location,daysAdded,itemImage}:ItemcardProps) => {
  return (
    <div className='bg-terirary-100 h-[500px] w-[437px] flex flex-col  m-4  rounded-corner hover:bg-terirary-400'>
        <div className="flex h-[325px] w-[437px] overflow-hidden relative">
          <Image 
            className="object-cover w-full h-full rounded-t-corner" 
            src={itemImage}
            alt="Product Image" 
            width={437} 
            height={325} 
          />
          <div className='absolute top-0 right-0 mt-3 mr-3 w-[34px] h-[34px] bg-terirary-100 hover:bg-terirary-400 
         rounded-full border-purple-600 flex justify-center items-center'>
            <Favoritebutton></Favoritebutton>
          </div>
          
        </div>
        
        <div className='flex items-start flex-col w-[405px] h-[104px] m-4  text-black text-balance overflow-clip'>
            <p className='font-sans font-semibold w-full text-[20px]'>{name}</p>
            <p className='font-sans font-normal text-[16px]'>{description}</p>
        </div>
        <p className='font-sans text-[20px] font-semibold text-limegreen mt-0 mr-4 ml-4'>  {price} 
        </p>
        <div className='flex flex-row space-x-4 m-4 mt-0'>
            <p className='font-sans text-black text-opacity-75 w-[190px] '>{location}</p>

            <p className='font-sans text-black text-opacity-75 w-[190px] m-4 mt-0 text-right'> Added {daysAdded} days ago</p>
            
        </div>
    </div>
  )
}

export default Itemcard
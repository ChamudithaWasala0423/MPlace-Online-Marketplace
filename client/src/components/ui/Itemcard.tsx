import React from 'react'
import Image from 'next/image'
type ItemcardProps = {
    name: string;
    description: string;
    price: string;
    location: string;
    daysAdded: number;
    itemImage: string;
  }
  
//{name,description,price,location,daysAdded,itemImage}:ItemcardProps
const Itemcard = () => {
  return (
    <div className='bg-terirary-100 h-[500px] w-[437px] flex flex-col  m-4  rounded-corner'>
        <div className="flex h-[325px] w-[437px] overflow-hidden">
          <Image 
            className="object-cover w-full h-full rounded-t-corner" 
            src="/images/chair.jpg" 
            alt="Product Image" 
            width={437} 
            height={325} 
          />
          
        </div>
        <div className='flex items-start flex-col w-[405px] h-[104px] m-4  text-black text-balance overflow-clip'>
            <p className='font-sans font-semibold w-full text-[20px]'>Name of the product</p>
            <p className='font-sans font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique lorem nunc, quis volutpat lectus commodo a. Nam nec lacus quis ante egestas aliquet vitae et ex. In sodales feugiat ultricies. Suspendisse sed feugiat lectus. Vivamus mi tortor, bibendum accumsan consequat eget, faucibus in ligula. Vestibulum ultricies euismod tellus, ac facilisis ante rutrum sit amet. Integer sit amet velit vitae nunc tincidunt eleifend quis ut neque. </p>
        </div>
        <p className='font-sans text-[20px] font-semibold text-limegreen mt-0 mr-4 ml-4'>  Price 
        </p>
        <div className='flex flex-row space-x-4 m-4 mt-0'>
            <p className='font-sans text-black text-opacity-75 w-[190px] '>Location</p>

            <p className='font-sans text-black text-opacity-75 w-[190px] m-4 mt-0 text-right'>Days added</p>
            
        </div>
    </div>
  )
}

export default Itemcard
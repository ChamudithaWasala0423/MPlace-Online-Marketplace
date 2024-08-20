import React from 'react'
import Image from 'next/image'

type NotifcardProps={
    type:string,
    previewImage:string,
    message:string
}

const Notifcard = () => {
  return (
    <div className='flex w-[704px] h-[99px] flex-row space-x-[20px] bg-terirary-200 hover:bg-terirary-400 rounded-corner p-3'>
      <div className='flex w-[75px]h-[75px] overflow-hidden items-center rounded-2xl '>
        <Image 
        src={"/images/chair.jpg"} 
        width={75}
        height={75}
        alt={'preview image'}
        className='flex object-cover 
        '/>
        </div>
        <div className='flex w-[585px] h-[75px] ml-5 items-start gap-4'>
          <p className=' flex self-center font-sans text-[20px] w-[125px] font-normal text-black text-balance '>
            Ad update
          </p>

          <p className='flex self-center font-sans text-[16px] w-[463px] font-normal text-black text-pretty '>
          Your ad 'Vintage Chair' has been approved and is now live!
          </p>
          
        </div>

    </div>
  )
}

export default Notifcard
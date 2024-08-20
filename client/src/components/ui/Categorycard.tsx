import React from 'react'
import Image from 'next/image'

type CategorycardProps = {
  category : string
  icon: string
}


const Categorycard = ({category,icon}:CategorycardProps) => {
  return (
    <div className="w-[200px] h-[200px] rounded-corner bg-green-100 flex flex-col justify-center items-center gap-3">
    <Image src={icon} alt="icon" width={100} height={100} />
    <p className="text-black font-Poppins text-[20px] font-bold">{category}</p>
  </div>
  )
}

export default Categorycard
import React from 'react'
import Image from 'next/image'

type CategorycardProps = {
  category : string
  icon: string
}


const Categorycard = ({category,icon}:CategorycardProps) => {
  return (
    <div className="w-[200px] h-[200px] rounded-corner bg-secondary-50 flex flex-col justify-center items-center gap-3 hover:bg-secondary-100">
    <Image src={icon} alt="icon" width={100} height={100} />
    <p className="text-black font-sans text-[20px] font-normal">{category}</p>
  </div>
  )
}

export default Categorycard
import React from 'react'

type ButtonProps = {
    title : string
}

function Button( {title} : ButtonProps) {
  return (
    <div className=' w-36 bg-red-500 p-2 rounded-lg flex items-center justify-center'>
      <p className=' font-Poppins text-lg'>{title}</p>
    </div>
  )
}

export default Button
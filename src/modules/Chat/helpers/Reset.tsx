import React from 'react'
//
import { icons } from '@libs/Icons'


const Reset = ({ onClick } : { onClick : any }) => {
  return (
    <div onClick={onClick} className="h-[40px] w-[40px] bg-pink-300 bg-opacity-25 text-pink-600 flex justify-center items-center text-2xl rounded-full cursor-pointer ml-[10px] fixed top-[9px] left-1" >
        <span> {icons.reset} </span> 
    </div>
  )
}

export default Reset
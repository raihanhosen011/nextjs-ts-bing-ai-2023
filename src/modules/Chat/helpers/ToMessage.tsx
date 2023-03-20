import React from 'react'
//
import { ConversationProps } from '@config/types'


const ToMessage : React.FC<ConversationProps> = ({ response }) => {
  return (
    <div className='w-fit ml-auto my-3 bg-gradient-to-r from-[#4cd687] to-[#25a059] p-3 rounded-xl'>
      <p className='text-md text-white'> {response} </p>
    </div>
  )
}

export default ToMessage

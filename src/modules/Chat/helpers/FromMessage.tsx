import React from 'react'
//
import { ConversationProps } from '@config/types'


const FromMessage:React.FC<ConversationProps> = ({ response, handleButtonSubmit }) => {
  return (
    <div className='bg-[#ffffff] rounded-lg shadow w-full mt-3'>
      
      {response?.custom && <div className='p-3'>
         {response.custom.answer}
      </div>}

      {response?.text && <div className='p-3'>
         {response.text}
      </div>}

      {response?.buttons && <div className="border-t p-3 flex-wrap flex items-center gap-2">
        <ul className="flex items-center gap-3 flex-wrap">
          {response.buttons.map((e:any, i:number) => (
              <li 
                key={i}
                className="text-sm bg-blue-200 text-blue-800 cursor-pointer px-2 py-1 rounded-md"
                onClick={() => handleButtonSubmit(e)}
              >
                {e.title}
              </li>
          ))}
        </ul>
      </div>}
    </div>
  )
}

export default FromMessage

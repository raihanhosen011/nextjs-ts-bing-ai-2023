import React from 'react'
//
import { ConversationProps } from '@config/types'
import Texthighlighter from './Texthighlighter'


const FromMessage:React.FC<ConversationProps> = ({ response, handleButtonSubmit }) => {

  return (
    <div className='bg-[#ffffff] rounded-lg shadow w-full mt-3'>

      {response?.custom && <div className='p-3'>
         <Texthighlighter highlightRanges={response.custom.highlighted_indices} text={response.custom.answer} />
      </div>}

      {response?.text && <div className='p-3'>
         {response.text}
      </div>}

      {response?.custom?.urls && 
        <div className="border-t p-3 flex items-center gap-2">
          <ul className="flex items-center gap-3 flex-wrap">
            <h1 className='font-[500]' > Learn More : </h1>

            {response?.custom?.urls.map((e:any, i:number) => (
              <a href={e.url} target="_blank" >
                <li 
                  key={i}
                  className="text-sm bg-[#59ffa042] text-[#197f46] font-[500] cursor-pointer px-2 py-1 rounded-md"
                >
                  {e?.title?.split('.')[1]}
                </li>
              </a>
            ))}
          </ul>
        </div>
      }

      {response?.buttons && <div className="border-t p-3 flex-wrap flex items-center gap-2">
        <ul className="flex items-center gap-3 flex-wrap">
          {response.buttons.map((e:any, i:number) => (
              <li 
                key={i}
                className="text-sm bg-[#59ffa042] text-[#197f46] font-[500] cursor-pointer px-2 py-1 rounded-md"
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

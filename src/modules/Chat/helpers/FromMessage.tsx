import React from 'react'
import LearnMoreWithTag from './LearnMoreWithTag'
import MessageBox from './MessageBox'

const FromMessage = () => {
  return (
    <div className='bg-[#ffffff] rounded-lg shadow w-full mt-3'>
      <MessageBox />
      <LearnMoreWithTag />
    </div>
  )
}

export default FromMessage

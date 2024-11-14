import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-nowrap justify-center items-center gap-2 grow-0'>
      <div className='w-[48px] h-[48px] bg-black flex flex-col items-center justify-center gap-1 rounded-md'>
        <div className='w-[38px] h-[5px] rounded-sm bg-white '></div>
        <div className='w-[38px] h-[5px] rounded-sm bg-white '></div>
        <div className='w-[38px] h-[5px] rounded-sm bg-white '></div>
      </div>
      <div>
        <p className='text-2xl font-semibold'>Todo List</p>
      </div>
    </div>
  )
}

export default Logo
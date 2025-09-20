import React from 'react'

const Pirce = () => {
  return (
    <div className='bg-gray-100 z-[9999] h-[200px] rounded-lg mt-10'>
        <h2 className='text-2xl font-semibold px-2 pt-1 mb-5 mt-6'>PRICES</h2>
        <div className='flex gap-6'>
            <p className='text-xl px-2'>Range</p> 
        <p className='text-xl mb-4'>$13.99-$25.99</p>
        </div>
        <input type="range"  className='w-full p-3'/>
    </div>
  )
}

export default Pirce
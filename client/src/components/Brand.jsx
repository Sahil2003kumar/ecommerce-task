import React from 'react'

const Brand = () => {
  return (
    <div className='h-[250px] bg-gray-100 mt-10 rounded-xl '>
        <h2 className='text-2xl font-semibold px-3 text-gray-700'>BRAND</h2>
        <div className='mt-5 px-3'>
           <ul>
           
            <li className=' w-full hover:text-blue-500 mb-3 '> Nike <span className='ml-40'>99</span></li>
           <li className=' w-full hover:text-blue-500 mb-3'> Nike <span className='ml-40'>99</span></li>
            <li className=' w-full hover:text-blue-500 mb-3'> Addidas <span className='ml-34'>99</span></li>
             <li className=' w-full hover:text-blue-500 mb-3'> Semiens <span className='ml-33'>99</span></li>
           </ul>
        </div>
    </div>
  )
}

export default Brand
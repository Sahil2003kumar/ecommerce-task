import React from 'react'
import { FaCircle } from "react-icons/fa";
const Color = () => {
    return (
        <div className='bg-gray-200 z-[9999] mt-10 h-[120px] rounded-lg'>
            <h2 className='text-2xl px-3 font-semibold py-4 '>Color</h2>
            <div className='flex gap-6  px-2'>
                <FaCircle size={25} className='text-blue-500 ' />
                <FaCircle size={25} className='text-red-500' />
                <FaCircle size={25} />
                <FaCircle size={25} className='text-yellow-400' />
                <FaCircle size={25} className='text-pink-500' />
            </div>
        </div>
    )
}

export default Color
import React from 'react'
import { FaUser } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";

function CardBlog({blog}) {
  return (
    <div className='mx-4 bg-white rounded-2xl'>
        <img src={`${blog.cover}`}/>
        <div className='py-4'>
        <div>
            <div className='grid lg:grid-cols-3 gap-2  items-center '>
                <div className='flex gap-2 justify-center'>
                <FaUser className='text-sky-400'/> 
                <p className='uppercase text-sm'>  {blog.type}</p>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                <FaCalendarDays className='text-sky-400'/> 
                <p className='uppercase text-sm text-gray-900'>{blog.date}</p>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                <AiFillMessage className='text-sky-400'/> 
                <p  className='uppercase text-sm text-gray-900'>{blog.com}</p>
                </div>
                
            </div>

        </div>
       
        <div>
        <h2 className='text-lg font-semibold p-4 '>{blog.title}</h2>

        </div>
        <div>
            <h3 className='p-4' >
                {blog.desc}
            </h3>

        </div>
        </div>
    </div>
  )
}

export default CardBlog
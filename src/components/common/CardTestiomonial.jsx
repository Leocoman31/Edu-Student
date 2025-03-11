import React from 'react'
import { AiFillMessage } from "react-icons/ai";

function CardTestiomonial({testimonal}) {
  return (
    <div className='  relative'>
        <div>
            <div >
                <img src={`${testimonal.cover}` } className=' rounded-2xl '/>

               

            </div>
            

        </div>

        <div className='absolute  bg-sky-50/35 top-[30%] right-0 xl:top-[50%] lg:top-[40%] md:top-[50%] md:w-[50%] lg:w-full sm:top-[50%] mx-3.5 rounded-2xl'>
        <div  className=' bottom-0 right-2 '><AiFillMessage size={50} color='white'/></div>
        <div className='px-8 truncate '>
               <h1 className='text-center text-lg lg:text-sm font-bold text-black '> {testimonal.name}</h1> 
               <p className='text-center  text-lg  lg:text-smfont-semibold text-black'>{testimonal.post}</p>
 
            </div>
      

        </div>

        

    </div>
  )
}

export default CardTestiomonial
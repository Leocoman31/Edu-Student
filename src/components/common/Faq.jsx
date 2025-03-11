import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Faq({faq,index}) {
    const [click, setClick] = useState(false)

    const toggle = (index) => {
      if (click === index) {
        return setClick(null)
      }
      setClick(index)
    }
  return (
    <div>
        <div className='bg-white shadow-2xl my-4 '>
            <div className='flex justify-between hover:bg-sky-400 text-sky-400 hover:text-white p-4'>
            <button  className='text-lg  '  onClick={() => toggle(index)}>{faq.title}
            
            </button>
            <span>{click === index ? <IoIosArrowDown/>:<IoIosArrowForward/>}</span>
              </div>
            {click === index ? (
                <div>
                  <p className='p-4 text-gray-700'>{faq.desc}</p>
                </div>
              ) : null}
        
        </div>
    </div>
  )
}

export default Faq
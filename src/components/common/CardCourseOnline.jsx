import React from 'react'

function CardCourseOnline({courseOnline}) {
  return (
    <div className='p-4 bg-white rounded-2xl hover:bg-sky-50 hover:shadow-lg' >
       
        <div className='flex flex-col justify-center items-center'>
          <img src={`${courseOnline.imageCover}`} className='w-20 h-20'/>
            <p className='text-lg text-center font-semibold'>{courseOnline.courseName}</p>
            <p className='text-sky-300 text-center'>
            {courseOnline.course}

            </p>
        </div>

        <div>
           
        </div>


    </div>
  )
}

export default CardCourseOnline
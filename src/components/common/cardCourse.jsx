import React from 'react'
import ReactStars from "react-rating-stars-component";
import { MdOutlineStar } from "react-icons/md";




function CardCourse({course}) {

  return (
    <div className='m-4   flex flex-col justify-center p-4 rounded-2xl h-[100%] bg-white items-center '>
       
    
  
       
       <h1 className='text-xl text-center font-semibold'>{course.coursesName}</h1>



       

    
        <div >
        <MdOutlineStar size={20}  className='text-yellow-500 inline'/>
        <MdOutlineStar  size={20}  className='text-yellow-500 inline'/>
        <MdOutlineStar  size={20}  className='text-yellow-500 inline'/>
        <MdOutlineStar size={20}   className='text-yellow-500 inline'/>
        <MdOutlineStar size={20}   className='text-yellow-500 inline'/> 
  
  </div>
      
        
          
              <div>
          {
                course.courTeacher.map((detail) => (<div> <p className='text-lg text-center'> { detail.name}</p>
        <p className='text-lg text-center'>{detail.totalTime}</p></div>))
                }
        </div>
        
        
            
         


        <div> <p>{course.priceAll} / {course.pricePer} </p></div>
        <div className='border border-sky-300 px-4 py-2  my-4 rounded-2xl hover:bg-sky-300'> 
            <button>Enroll Now</button>
        </div>

        
    </div>
  )
}

export default CardCourse
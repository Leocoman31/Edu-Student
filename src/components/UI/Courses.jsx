import React from 'react'
import {courses as listCourses, coursesOnline } from '../../data/dummydata'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardCourse from '../common/cardCourse';
import CardCourseOnline from '../common/CardCourseOnline';
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    }
}




function Courses() {
  return (
    <>
    <motion.section id='courses' className='text-gray-600  m-16 space-y-8'
    variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                >
        <h2 className="text-center  text-sky-400 my-2 text-xl uppercase" >Courses</h2>
        <h1 className='text-center text-black text-[2.5rem] '>Explore Our Popular Online Courses</h1>

        <Carousel responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    arrows={false}
    >
            {
                listCourses.map((course) => <CardCourse course={course} key={course.id}/>)
}
        </Carousel>

    <div className='space-y-8'>
        <h2 className=' text-center text-black text-[2.5rem] '>Browse Our Online Courses</h2>
        <div className='grid xl:grid-cols-6  lg:grid-cols-4 md:grid-cols-2 gap-4'>
        {coursesOnline.map((courseOnline) =>(<CardCourseOnline courseOnline={courseOnline} key={courseOnline.courseName}/>))}
        </div>
        
    </div>





    </motion.section>
    </>
  )
}

export default Courses
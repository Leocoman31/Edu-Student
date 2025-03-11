import React from 'react'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'


function Hero() {
  return (
    <div className='relative w-full   bg-sky-200'>
       
        <div 
             className='relative'>
        <img src='https://res.cloudinary.com/dib1opete/image/upload/v1741450254/EduStudent/d6notoch94uxph83u5jl.webp' alt="hero-image" className=' w-full' />

        </div>

        <div className='top-[120px] absolute  sm:top-[120px]  md:top-[150px] lg:top-[250px] mx-12  '>
            <div className='text-sky-50'>
            <motion.h1 variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}  
             className='font-bold  xs:text-lg sm:text-[2rem] md:text-[3rem] '> Welcome to Edu-student</motion.h1>
            <motion.h1
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }} 
             className='sm:text-lg md:text-[2rem] '>Best Online Education </motion.h1>
            <motion.h1 className='sm:text-lg md:text-[2rem]'>Expertise</motion.h1>
            </div>

            <motion.p  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }} 
            className=' text-xs  sm:text-sm md:text-lg'> Far far away, behind the word mountains</motion.p>
            <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}  className='text-xs sm:text-sm md:text-lg'> far from the countries Vokalia and Consonantia, there live the blind texts.</motion.p>
            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }} 
             className='flex gap-4 my-4'>
                <div className='bg-sky-200 px-2 py-1 sm:px-4 sm:py-2 hover:bg-sky-400'>
                <button className=' text-sm sm:text-md'>
                Get Start Now
              </button>
                </div>
              
              <div className='bg-sky-200 px-4 py-2 hover:bg-sky-400' >
              <button  className=' text-sm sm:text-md'>
                View Course
              </button>
              </div>
              
            </motion.div>

        </div>

       


    </div>
  )
}

export default Hero
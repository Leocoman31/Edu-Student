import React from 'react'
import {testimonal as listTestiomonal} from '../../data/dummydata'
import CardTestiomonial from '../common/CardTestiomonial'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'
import 'react-multi-carousel/lib/styles.css';




function Testimonial() {
  return (
    <motion.section id='courses' className='text-gray-600  m-16 space-y-8'
    variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}>
       
        <h2 className="text-center  text-sky-400 my-2 text-xl uppercase">
        Testimonial
        </h2>
        <h1 className=' text-center text-black text-[2.5rem] '>
        Our Successful Students</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
        {
            listTestiomonal.map((testimonal) =><CardTestiomonial testimonal={testimonal} key={testimonal.id}/>)
        }
       

        </div>
       
       

    </motion.section>
  )
}

export default Testimonial
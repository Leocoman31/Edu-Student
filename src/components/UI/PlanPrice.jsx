import React from 'react'
import {price as listPrice} from '../../data/dummydata'
import CardPlanPrice from '../common/CardPlanPrice'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'

function PlanPrice() {
  return (
    <motion.section id='courses' className='text-gray-600  m-24 space-y-8'
     variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }} >
       
    <h2 className="text-center  text-sky-400 my-2 text-xl uppercase">
    OUR PRICING
    </h2>
    <h1 className=' text-center text-black text-[2.5rem] '>
    Pricing & Packages</h1>

    <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-4'>
    {
        listPrice.map((planPrice) =><CardPlanPrice planPrice={planPrice} key={planPrice.name}/>)
    }
   

    </div>
   
   

</motion.section>
  )
}

export default PlanPrice
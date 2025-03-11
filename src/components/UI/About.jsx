import React from 'react'


import { LiaBookOpenSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { TbUserStar } from "react-icons/tb";
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'


function AboutUS() {

    return(
    <>
     <motion.section className='m-16'
     variants={fadeIn("up", 0.1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: false, amount: 0 }}>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
        <div>
            <img src='https://res.cloudinary.com/dib1opete/image/upload/v1741535952/EduStudent/qecwp2pvgjpk6vuqpeza.webp '    />

        </div>
        <div className=' text-center  '>
        <h3 className='text-sky-400 my-2 text-xl'>LEARN ANYTHING</h3>
        <h1 className='text-[2.5rem]  text-black'> Benefits About Online Learning Expertise</h1>

        <div className=' my-8'>
        <div className='flex  justify-center bg-white hover:bg-sky-200 px-4 my-4  text-gray-600  items-center gap-8'>

<div>
    <LiaBookOpenSolid size={60}/>
</div>
<div className=' py-4 truncate'> 
<h2 className='text-lg font-semibold '>Online Courses</h2>
<p className='truncate'> Far far away, behind the word mountains</p> 
<p className='truncate' >far from the countries Vokalia and Consonantia, there live the blind texts.</p>
</div>

</div>

<div className='flex justify-center bg-white hover:bg-sky-200 text-gray-600  px-4  my-4   items-center gap-8'>

<div>
    <GrCertificate size={60}/>
</div>
<div className='text-gray-600 py-4 truncate'> 
<h2 className='text-lg font-semibold'>
Earn A Certificates</h2>
<p className='truncate' > Far far away, behind the word mountains</p> 
<p className='truncate' >far from the countries Vokalia and Consonantia, there live the blind texts.</p>
</div>

</div>

<div className='flex justify-center bg-white hover:bg-sky-200 my-4 text-gray-600    px-4  items-center gap-8'>

<div>
    <TbUserStar size={60}/>
</div>
<div className='text-gray-600 py-4 truncate'> 
<h2 className='text-lg font-semibold'>Learn with Expert</h2>
<p className='truncate'> Far far away, behind the word mountains</p> 
<p className='truncate'>far from the countries Vokalia and Consonantia, there live the blind texts.</p>
</div>

</div>



        </div>
        
      

        
         
        </div>

    </div>
      
  </motion.section>
    </>
    )
}


export default AboutUS
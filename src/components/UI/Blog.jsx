import React from 'react'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'
import {blog as listBlog} from '../../data/dummydata'
import CardBlog from '../common/CardBlog';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';



const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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



function Blog() {
  return (
    <motion.section id='courses' className='text-gray-600  m-16 space-y-8'
    variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }} >
    <h2 className="text-center  text-sky-400 my-2 text-xl">
    OUR BLOG
    </h2>
    <h1 className=' text-center text-black text-[2.5rem] '>
    Recent From Blog
    </h1>

    <Carousel responsive={responsive}
infinite={true}
autoPlay={true}
autoPlaySpeed={3000}
arrows={false} >
    {
        listBlog.map((blog) =><CardBlog blog={blog} key={blog.id}/>)
    }
    </Carousel>
   

</motion.section>
  )
}

export default Blog
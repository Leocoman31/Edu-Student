import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Back({title}) {

    const location = useLocation();

  return (
    <section className='relative' >
        <img src='https://res.cloudinary.com/dib1opete/image/upload/v1741691578/EduStudent/xrxuklvhhtp7fkagp5yj.webp'/>
        <div className='absolute top-[40%] right-[50%]'>
        <h2 className='text-lg md:text-[1.5rem] text-center text-white font-semibold uppercase'><Link to="/">Home</Link> / {location.pathname.split("/")[1]}</h2>
        <h1  className='text-[2rem] md:text-[4rem] lg:text-[5rem] text-white text-center font-semibold'>{title}</h1>

        </div>
        
      </section>
  )
}

export default Back
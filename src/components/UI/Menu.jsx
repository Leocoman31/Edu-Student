import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className='flex gap-4' >
    <Link to="/" className='hover:text-sky-100'>Home</Link>
    <Link to="all-courses" className='hover:text-sky-100'>All  Courses</Link>
    <Link to="about" className='hover:text-sky-100'>About</Link>
    <Link to="team" className='hover:text-sky-100'>Team</Link>
    <Link to="pricing" className='hover:text-sky-100'>Pricing</Link>
    <Link to="contact" className='hover:text-sky-100'>Contact</Link>
</nav>
  )
}

export default Menu


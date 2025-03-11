import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Menu from './Menu';
import SideBar from './SideBar';
import HeaderPhone from './HeaderPhone';

function Header() {
  return (
    <>
    <div className='inline lg:hidden'>
        <HeaderPhone/>

      </div>
      
      
      <div className='hidden lg:block'>
      <header className=' p-8  z-100 w-full absolute  '>
        <div className='flex items-center justify-between  gap-4'>
        <div className='flex flex-col text-white '>
            <Link to="/" className='text-[1rem] sm:text-[2rem] font-bold '>
                Edu-Student
            </Link>
            <p className='text-sm sm:text-md'>Online Education and Learning</p>
        
       
        </div>
        <Menu/>

      
        <div id='social-media' className='flex gap-2'>
            <FaFacebook className="text-sky-50 hover:text-sky-500" size={25}/>
            <AiFillInstagram className="text-sky-50 hover:text-sky-500" size={25}/>
            <FaTelegram className="text-sky-50 hover:text-sky-500" size={25}/>
            <AiFillTikTok className="text-sky-50 hover:text-sky-500" size={25}/>

        </div>
            </div>

        
      

     
       
       
  
    </header>
        </div></>
    
  )
}

export default Header
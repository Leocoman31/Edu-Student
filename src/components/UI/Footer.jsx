import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
   <footer className="bg-gray-700">
    
    <div className="grid grid-cols-4 justify-between py-8 px-16 text-white/80">
       <div className='flex flex-col text-white '>
                  <Link to="/" className='text-[1rem] sm:text-[2rem] font-bold '>
                      Edu-Student
                  </Link>
                  <p className='text-sm sm:text-md'>Online Education and Learning</p>

            <div>
              <p className='tex-lg  text-gray-700'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
            </div>
            <div id='social-media' className='flex gap-2'>
                        <FaFacebook className="text-sky-50 hover:text-sky-500" size={25}/>
                        <AiFillInstagram className="text-sky-50 hover:text-sky-500" size={25}/>
                        <FaTelegram className="text-sky-50 hover:text-sky-500" size={25}/>
                        <AiFillTikTok className="text-sky-50 hover:text-sky-500" size={25}/>
            
                    </div>
              
             
              </div>

      <div>
        <h1>EXPLORES</h1>
        <ul className='space-y-2' >
                         <li className="text-lG">
                         <Link to="/" > Home</Link>
                         </li>
                         <li className=" text-lg">
                         <Link to="all-courses" >All Courses</Link>
                         </li>
                         <li className=" text-lg">
                         <Link to="about">About</Link>
                         </li>
                         <li className=" text-lg " >
                         <Link to="team">Team</Link>
                         </li>
       
                         <li className=" text-lg">
                             <Link to="pricing">
                             Pricing
                             </Link>
                         </li>
                         <li className=" text-lg">
                             <Link to="contact">
                             Contact
                             </Link>
                         </li>
                     </ul>
        

      </div>

      <div>
        <h1>QUICK LINKS</h1>
        <ul className='space-y-2' >
                         <li className="text-lG">
                         <Link to="/" > Home</Link>
                         </li>
                         <li className=" text-lg">
                         <Link to="all-courses" >All Courses</Link>
                         </li>
                         <li className=" text-lg">
                         <Link to="about">About</Link>
                         </li>
                         <li className=" text-lg " >
                         <Link to="team">Team</Link>
                         </li>
       
                         <li className=" text-lg">
                             <Link to="pricing">
                             Pricing
                             </Link>
                         </li>
                         <li className=" text-lg">
                             <Link to="contact">
                             Contact
                             </Link>
                         </li>
                     </ul>

      </div>

      <div>
        <h1>HAVE A QUESTIONS?</h1>
        <p> <FaPhone size={25} className='inline mr-4'/> 
       999 99 99 00</p>
        <p> <MdEmail size={25} className='inline mr-4'/> cnd3dn3n@hotmail.com</p>
        

      </div>
     
    </div>

    

      
      <hr />

      <p align="center" className='text-white text-lg p-4'>
      © Copyright Edu-Student -All rights reserved,developed by Leonardo Comendala.
      
        </p>
    
   </footer>
  )
}

export default Footer
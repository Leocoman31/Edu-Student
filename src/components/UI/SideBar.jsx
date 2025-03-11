
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FaSquareXmark } from "react-icons/fa6";
import { useContextSideBar } from '../../context/contextSideBar';
function SideBar() {
  const {openSideBar,handlerSideBar } = useContextSideBar()

return (
  <div className='h-full bg-gray-800 fixed top-0 text-sky-50 '>
      <button className='absolute bg-sky-400 text-black p-2 right-4 top-2 hover:bg-sky-800 hover:text-white' onClick={handlerSideBar}><FaSquareXmark/></button>
      <div className='flex flex-col gap-2 justify-center text-sm'>

          <div className='p-8 mt-8'>
          <h1 className='text-xl'>Hello Student</h1>
          </div>


          <div id="menu">
              <ul className='space-y-4' >
                  <li className="hover:bg-gray-700 text-lg p-2">
                  <Link to="/" className=" "> Home</Link>
                  </li>
                  <li className="hover:bg-gray-700 text-lg p-2">
                  <Link to="all-courses" >All Courses</Link>
                  </li>
                  <li className="hover:bg-gray-700 text-lg p-2">
                  <Link to="about">About</Link>
                  </li>
                  <li className="hover:bg-gray-700 text-lg p-2" >
                  <Link to="team">Team</Link>
                  </li>

                  <li className="hover:bg-gray-700 text-lg p-2">
                      <Link to="pricing">
                      Pricing
                      </Link>
                  </li>
                  <li className="hover:bg-gray-700 text-lg p-2">
                      <Link to="contact">
                      Contact
                      </Link>
                  </li>
              </ul>

          </div>

          


          


      </div>

  </div>
  )
}



export default SideBar;
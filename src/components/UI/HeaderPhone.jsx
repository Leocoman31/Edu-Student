import React from 'react'
import SideBar from './SideBar'
import { useContextSideBar } from '../../context/contextSideBar'
import { FaSquareXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";

function HeaderPhone() {

  const {openSideBar,handlerSideBar} = useContextSideBar()
  return (
    
    <>
    
     <header className='  z-100 w-full absolute'>
         <div>
        { openSideBar && <SideBar/>}
        
    </div> 
   
        <div className='flex items-center justify-between m-8  gap-4'>
        <div className='flex flex-col text-white '>
            <Link to="/" className='text-[2rem] font-bold '>
                Edu-Student
            </Link>
            <p className='text-md'>Online Education and Learning</p>
        
       
        </div>
       <div className='hover:bg-sky-100 hover:rounded- px-2 py-1 '>
        <button onClick={handlerSideBar}><IoMenuOutline  size={40}/></button>

       </div>

      
        
            </div>

        
      

     
       
       

         

           

  
    
   
    </header></>
   
  )
}

export default HeaderPhone
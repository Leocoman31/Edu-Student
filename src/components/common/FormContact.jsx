import React from 'react'
import { useForm } from 'react-hook-form'

function FormContact() {
    const{register,handleSubmit} = useForm()
  return (
    <div className='bg-white p-8 space-y-4 '>
        <h1 className='text-3xl text-black font-semibold text-center'>Contact us</h1>
       <p className='text-center text-xl'>We're open for any suggestion or just to have a chat</p> 
       <div className='flex gap-4'>
        <div>
        <h3 className='text- mdtext-black font-semibold' >
        ADDRESS:

        </h3>
        <p className='text-gray-800 '>198 West 21th Street, Suite 721 New York NY 10016</p>

        </div>
        <div>
        <h3 className='text- mdtext-black font-semibold uppercase' >
        Email:

        </h3>
        <p className='text-gray-800 '>eduStudent@gmail.com</p>

        </div>
        <div>
        <h3 className='text- mdtext-black font-semibold uppercase' >
        Phone:

        </h3>
        <p className='text-gray-800 '>999 999 99 00</p>

        </div>
       

       </div>


        <form className='space-y-8 my-4'>

    <div className='flex w-full   gap-4'>
    <input type='text' name="name" {...register("name",{required:"Campo obrigátorio*"})}  placeholder='Name' className='border px-4 py-2 w-full'/>
    <input type='email' name="email" {...register("email",{required:"Campo obrigátorio*"})}  placeholder='Email' className='border px-4 py-2 w-full'/>

    </div>
    <input type='text'name="subject" {...register("subject",{required:"Campo obrigátorio*"})}  placeholder='Subject' className='border px-4 py-2 w-full'/>
    <textarea name='message' {...register("message",{required:"Campo obrigátorio*"})} placeholder='message' className='w-full border p-4'  rows="4" cols="80"/>



    <div className='flex justify-start'>
    <button className='bg-sky-400 w-[30%] px-4 py-2' type='submit'>Send </button>

    </div>
    


           


        </form>
    </div>
  )
}

export default FormContact
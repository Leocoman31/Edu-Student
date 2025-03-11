import React from 'react'

function Newslestter() {
  return (
    <section className='bg-sky-400 p-16 my-16'   >
        <div className='flex justify-between gap-4  '>
            <div>
                <h1 className='text-[2rem]'>
                Newsletter - Stay tune and get the latest update
                </h1>
                <p className='text-lg'>
                Far far away, behind the word mountains
                </p>

            </div>
            <div>
                <form className='flex '>
                    <input type='email' className=' bg-sky-200  px-4 py-2 w-[100%] ' placeholder='Enter your Email Address'></input>
                    <div className='bg-white px-4 py-2 '>
                    <button type='submit'>Send</button>

                    </div>
                  
                </form>
            </div>

        </div>
    </section>
  )
}

export default Newslestter
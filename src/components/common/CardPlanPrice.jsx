import React from 'react'

function CardPlanPrice({planPrice}) {
  return (
    <div className='bg-white space-y-8 py-8 px-4 '>
      <div>
        <p className='text-center text-lg font-semibold'>{planPrice.name}</p>
      </div>
      <div>
        <p className='text-center text-[2.5rem] font-bold text-sky-400'>{planPrice.price}</p>
      </div>
      <div>
        <p className='text-center text-lg'>{planPrice.desc}</p>
      </div>
      <div className='mx-8 text-center    px-2 py-3 border border-sky-400 hover:bg-sky-400'>
        <button>GET STARTED</button>
      </div>
    </div>
  )
}

export default CardPlanPrice
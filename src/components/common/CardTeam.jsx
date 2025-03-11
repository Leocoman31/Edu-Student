import React from 'react'

function CardTeam({team}) {
  return (
    <div className='bg-white rounded-xl'>
        <div>
            <img src={`${team.cover}`}/>

        </div>
        <div className='text-center py-2'>
            <h1 className='text-black text-lg font-semibold'>{team.name}</h1>

        </div>
        <div  className='text-center'>
            <h2 className='text-md '>{team.work}</h2>

        </div>

    </div>
  )
}

export default CardTeam
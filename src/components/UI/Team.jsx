import React from 'react'
import {team as teamList} from '../../data/dummydata'
import CardTeam from '../common/CardTeam'

function TeamList() {
  return (

    <div className=' m-16 space-y-8'>
    <h1 className='uppercase text-lg text-center text-sky-400'> Our Team </h1>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {
            teamList.map((team => <CardTeam team={team} key={team.id}/>))
        }
    </div></div>
   
  )
}

export default TeamList
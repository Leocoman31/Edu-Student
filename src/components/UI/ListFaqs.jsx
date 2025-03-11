import React from 'react'
import {faq as listFaqs} from '../../data/dummydata'
import Faq from '../common/Faq'

function ListFaqs() {
  return (

    <div className='m-24'>

<h2 className="text-center  text-sky-400 my-2 text-xl uppercase">
        FAQS
    </h2>
    <h1 className=' text-center text-black text-[2.5rem] '>
    Frequesntly Ask Question</h1>
        
        {
            listFaqs.map((faq,index) => <Faq faq={faq} index={index} key={faq.title}/>)
            
        }
    </div>
  )
}

export default ListFaqs
import React from 'react'
import FormContact from '../common/FormContact'

function ContactUs() {
   const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <div>
      <div className='grid  lg:grid-cols-2 m-16 lg:mx-24 gap-4'>
        <div className=' hidden w-full lg:block ' >
        <iframe src={map} className='w-full h-full'></iframe>

        </div>
          
           <FormContact/>

      </div>
     
    </div>
  )
}

export default ContactUs
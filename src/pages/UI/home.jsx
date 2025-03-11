import React from 'react'
import Hero from '../../components/UI/Hero'
import AboutUS from '../../components/UI/About'
import Courses from '../../components/UI/Courses'
import Testimonial from '../../components/UI/Testimonial'
import Blog from '../../components/UI/Blog'
import PlanPrice from '../../components/UI/PlanPrice'



function Home() {
  return (
    <div>
      <Hero/>
      <main>
      <AboutUS/>
      <Courses/>
      <Testimonial/>
      <Blog/>
      <PlanPrice/>
    
      </main>
    </div>
  )
}

export default Home
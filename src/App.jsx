import { Routes,Route } from "react-router-dom"
import AppLayoult from "./components/AppLayoult"
import Home from "./pages/UI/home"
import AllCourses from "./pages/UI/allCourses"
import About from "./pages/UI/about"
import Team from "./pages/UI/team"
import Pricing from "./pages/UI/pricing"

import Contact from "./pages/UI/contact"
function App() {


  return (
    <>
     <Routes>
      <Route element ={<AppLayoult/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="all-courses" element={<AllCourses/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        
        <Route path="contact" element={<Contact/>}/>

      </Route>
     </Routes>
    </>
  )
}

export default App

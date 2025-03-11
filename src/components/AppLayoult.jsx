import { Outlet } from "react-router-dom"
import Footer from "./UI/Footer"
import Header from "./UI/Header"


function AppLayoult() {
  return (
    <>
     <Header/>
     <Outlet/>
    <Footer/>
    </>
   

  )
}

export default AppLayoult
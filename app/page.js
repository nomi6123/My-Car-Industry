import React from 'react'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Newcars from './Components/New Cars/Newcars'
import Cars from './Components/Featured Cars/Cars'
import Brands from './Components/Brands/Brands'
import Contact from './Components/Contact/Contact'

const page = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Newcars/>
      <Cars/>
      <Brands/>
      <Contact/>
    </div>
  )
}

export default page

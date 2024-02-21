import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Cards from './Cards'



function Landing() {

 

  return (
    <>
      {/* <h1>Tushar</h1> */}
      <div>
        <Navbar />
        <Home />
        <Cards />
        <Footer />
      </div>



    </>

  )
}

export default Landing
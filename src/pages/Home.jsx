import React from 'react'
import Footer from '../Components/Reuseable/Footer'
import Cvalues from '../Components/Cvalues'
import BestF from '../Components/BestF'
import Hero from '../Components/Hero'
import Trust from '../Components/Trust'
import Oursolution from '../Components/Oursolution'

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Hero/>
      <Oursolution/>
      <Cvalues/>
      <Trust/>
      <BestF/>
      <Footer/>
    </div>
    
  )
}

export default Home

import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import MapComponent from '../components/Map';

function Home() {
  return (
    <>
    <HeroSection/>
    <Cards/>
    <MapComponent/>
    <Footer/>
    </>
  )
}

export default Home
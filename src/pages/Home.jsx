/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonial />
      {/* <Gallery /> */}
      <Contact />
      <Footer />      
    </>
  )
}

export default Home
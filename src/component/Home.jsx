import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5/>
    </>
  )
}

export default Home
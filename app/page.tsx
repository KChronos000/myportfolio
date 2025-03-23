import React from 'react'
import Navbar from './components/Navbar'
import Header from './section/Header'
import type { Metadata } from 'next'
import Cardsec from './section/Cardsec'
import Footer from './components/Footer'


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Header/>
        <Cardsec/>
      </div>
      <Footer />
    </div>
  )
}

export default page
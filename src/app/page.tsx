import React from 'react'
import Header from './section/Header'
import Cardsec from './section/Cardsec'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


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
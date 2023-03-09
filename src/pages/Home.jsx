import React from 'react'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection'
import Bespoke from '../component/Bespoke'
import Achieve from '../component/Achieve'
import Solution from '../component/Solution'
import Cycle from '../component/Cycle'
import Pride from '../component/Pride'
import Footer from '../component/Footer'

const  Home = ()=> {
  return (
    <div>
    <div className="header__body">
    <Header />
    <HeroSection />
    </div>
    <Bespoke />
    <Achieve />
    <Solution />
    <Cycle />
    <Pride />
    <Footer/>
    </div>
  )
}

export default Home
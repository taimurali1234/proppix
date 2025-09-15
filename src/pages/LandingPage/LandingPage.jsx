import React from 'react'
import Hero from '../../components/pages/LandingPage/Hero'
import SellApartment from '../../components/pages/LandingPage/SellApartment'
import RentApartment from '../../components/pages/LandingPage/RentApartment'
import Testimonials from '../../components/pages/LandingPage/Testimonials'
import FAQS from '../../components/pages/LandingPage/Faqs'
import FastWay from '../../components/pages/LandingPage/FastWay'
import Footer from '../../components/layout/footer'
import ContactForm from '../../components/pages/LandingPage/Contact'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <SellApartment/>
      <RentApartment/>
      <Testimonials/>
      <FAQS/>
      <FastWay/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default LandingPage

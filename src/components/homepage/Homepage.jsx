import React from 'react'
import Header from '../header/Header'
import { useContext } from 'react'
import { Toggle } from '../../context/MenuToggleProvider'
import Banner from '../banner/Banner'
import About from '../about/About'
import Skills from '../skills/skills'
import Project from '../projects/Project'
import ContactMe from '../ContactMe/ContactMe'
import Footer from '../footer/Footer'

export default function Homepage() {

  const {isMenuToggleOpen, setIsMenuToggleOpen} = useContext(Toggle)
  return (
    <>
      <Header />
      
      <div className={`${isMenuToggleOpen? "mt-52": 0}`}> </div>
      <Banner/>
      <About/>
      <Skills />
      <Project  />
      <ContactMe />
      <Footer />
    </>
  )
}

import React from 'react'
import Banner from '../components/Banner'
import AboutMe from './AboutMe'
import { div } from 'framer-motion/client'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Home
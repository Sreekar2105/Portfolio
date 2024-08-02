import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Certificates from './Certificates'
import Contact from './Contact'

function MainPage() 
{
  return (
    <div>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Certificates/>
        <Contact/>
    </div>
  )
}

export default MainPage
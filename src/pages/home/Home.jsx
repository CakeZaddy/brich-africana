import React from 'react'
// import './home.scss'
import Hero from '../../components/hero/Hero'
import Portfolio from '../../components/portfolio/Portfolio'
import Projects from '../../components/projects/Projects'
import Services from '../../components/services/Services'

const Home = () => {
  return (
    <div>
      <section id='Home'>
        <Hero />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section id='Portfolio'>
        <Portfolio />
      </section>
      <section id='Projects'>
        <Projects />
      </section>
    </div>
  )
}

export default Home

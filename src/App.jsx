import './app.scss'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

function App() {
  return (
    <>
      <section id='Home'>
        <Hero />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section id='Portfolio'>
        <Portfolio />
      </section>
      <section>Projects</section>
      <section>Contact Us</section>
    </>
  )
}

export default App

import './app.scss'
import Hero from './components/hero/Hero'
import Services from './components/services/services'

function App() {
  return (
    <>
      <section id='Homepage'>
        <Hero />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section>Portfolio</section>
      <section>Projects</section>
      <section>Contact Us</section>
    </>
  )
}

export default App

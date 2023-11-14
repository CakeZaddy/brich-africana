import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <div className='title'>
          <h1>
            Inspiration is the most important part of our digital strategy
          </h1>
          <p>
            we build the kind of careers that are top in the labour market,{' '}
            <br /> we build it with professionals in dedicated areas.
          </p>
          <button>Contact us today</button>
        </div>
        <div className='image'>
          <div className='imageContainer'>
            <img src='/hero1.PNG' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

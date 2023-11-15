import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='wrapper'>
        <div className='creative'>
          <div className='image'>
            <div className='bg'>
              <div className='imageContainer'>
                <img src='./portfolio.PNG' alt='' />
              </div>
            </div>
          </div>
          <div className='desc'>
            <h2>
              we are creative people <br /> with big dreams
            </h2>
            <p>
              the ability of our digital agency lies in an ever-evolving set of
              core competencies nimbly combined and refined into a custom
              solution for our clients and their brands
            </p>
            <button>contact us now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

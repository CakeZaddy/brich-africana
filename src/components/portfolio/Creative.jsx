import React from 'react'

const Creative = () => {
  return (
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
          the ability of our digital agency lies in an ever-evolving set of core
          competencies nimbly combined and refined into a custom solution for
          our clients and their brands
        </p>
        <button>
          <a href='/Contact'>contact us now</a>
        </button>
      </div>
    </div>
  )
}

export default Creative

import React from 'react'
import './services.scss'

const items = [
  { id: '1', img: '/website.jpg', desc: 'website' },
  { id: '2', img: '/appDesign.jpg', desc: 'app designs' },
  { id: '3', img: '/content.jpg', desc: 'content writing' },
  { id: '4', img: '/branding.jpg', desc: 'branding' },
]

const Services = () => {
  return (
    <div className='services'>
      <div className='flier'>
        <div className='flierText'>
          <h2>The creative groups we use in building careers:</h2>
          <div className='vertical-line'></div>
        </div>
        <div className='groups'>
          <div className='logos'>
            <div className='logoContainer'>
              <img src='/microsoft.png' alt='' />
              <img src='/google.png' alt='' />
              <img src='/react.png' alt='' />
            </div>
            <div className='logoContainer'>
              <img src='/slack.png' alt='' />
              <img src='/wix.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='contents'>
          <h1 className='title'>industries we work in</h1>
          <div className='serviceContents'>
            {items.map((item) => (
              <div className='service' key={item.id}>
                <div className='imageContainer'>
                  <img src={item.img} alt='' />
                </div>
                <h2>{item.desc}</h2>
                <button>learn more</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

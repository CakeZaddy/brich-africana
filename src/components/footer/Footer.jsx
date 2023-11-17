import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <hr />
        <div className='footerContent'>
          <div className='logoFooter'>
            <h2>brich africana</h2>
            <img src='brich-logo.webp' alt='' />
          </div>
          <div className='footerDesc'>
            <div className='details'>
              <h3>about</h3>
              <a href='#Footer'>about us</a>
              <a href='#Footer'>services</a>
              <a href='#Footer'>careers</a>
              <a href='#Footer'>news</a>
              <a href='#Footer'>pricing</a>
            </div>
            <div className='details'>
              <h3>company</h3>
              <a href='#Footer'>our team</a>
              <a href='#Footer'>partner with us</a>
              <a href='#Footer'>FAQ</a>
              <a href='#Footer'>blog</a>
              <a href='#Footer'>privacy policy</a>
            </div>
            <div className='details'>
              <h3>support</h3>
              <a href='#Footer'>account</a>
              <a href='#Footer'>support center</a>
              <a href='#Footer'>contact us</a>
              <a href='#Footer'>feedback</a>
            </div>
            <div className='details'>
              <h3>contact us</h3>
              <p>whatsApp</p>
              <p>telegram</p>
              <p>brichafricana@gmail,com</p>
              <div className='socialsFooter'>
                <a href='https://facebook.com' target='_blank' rel='noopener'>
                  <img src='/facebook.png' alt='' />
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener'>
                  <img src='/instagram.png' alt='' />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noopener'>
                  <img src='/x-logo.png' alt='' />
                </a>
                <a href='https://linkedin.com' target='_blank' rel='noopener'>
                  <img src='/linkedIn.webp' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='bottom'>
          <p>&copy; copyright uncle sula all rights reserved</p>
          <div className='sula'>
            <p>made by uncle sula</p>
            <img src='UncleSula-logo.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

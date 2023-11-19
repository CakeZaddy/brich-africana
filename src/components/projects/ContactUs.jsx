import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='contactContent'>
      <h1 className='contactTitle'>
        do you have any <br /> projects?
      </h1>
      <Link to='/contact'>
        <button>contact us now</button>
      </Link>
    </div>
  )
}

export default ContactUs

import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <div className='contactDetails'>
          <div className='textContainer'>
            <h1>Contact Me</h1>
            <div className='mail'>
              <h2>Mail</h2>
              <p>brichafricana@gmail.com</p>
            </div>
            <div className='mail'>
              <h2>Phone Number</h2>
              <p>+234 801 234 5678</p>
            </div>
            <div className='mail'>
              <h2>Address</h2>
              <p>65, That street, Lagos. Nigeria.</p>
            </div>
          </div>
          <div className='formContainer'>
            <form action=''>
              <input type='text' placeholder='Full Name' />
              <input type='email' placeholder='Email' />
              <textarea rows='10' placeholder='Message'></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

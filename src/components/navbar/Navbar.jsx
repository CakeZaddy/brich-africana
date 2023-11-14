import React from 'react'
import './navbar.scss'
import Sidebar from './sidebar/Sidebar'

const items = ['Home', 'Services', 'Portfolio', 'Projects', 'Contact']

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='logo'>
        <h1>Brich Africana</h1>
      </div>
      <div className='links'>
        {items.map((item) => (
          <a href={`${item}`} className='home'>
            {item}
          </a>
        ))}
      </div>
      <div className='socials'>
        <a href='#'>
          <img src='/facebook.png' alt='' />
        </a>
        <a href='#'>
          <img src='/instagram.png' alt='' />
        </a>
        <a href='#'>
          <img src='/dribbble.png' alt='' />
        </a>
      </div>
    </div>
  )
}

export default Navbar

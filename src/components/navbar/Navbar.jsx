import React from 'react'
import './navbar.scss'
import Sidebar from './sidebar/Sidebar'

const items = [
  { title: 'Home', link: '#Home' },
  { title: 'Services', link: '#Services' },
  { title: 'Portfolio', link: '#Portfolio' },
  { title: 'Projects', link: '#Projects' },
  { title: 'Contact', link: '/Contact' },
]

const Navbar = () => {
  return (
    <div className=''>
      <Sidebar />
      <div className='navbar'>
        <div className='logo'>
          <h1>Brich Africana</h1>
        </div>
        <div className='links'>
          {items.map((item) => (
            <a href={`${item.link}`} className='home' key={item.title}>
              {item.title}
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
    </div>
  )
}

export default Navbar

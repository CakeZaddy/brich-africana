import React from 'react'
import './navbar.scss'
import Sidebar from './sidebar/Sidebar'
import { motion } from 'framer-motion'

const logoVariants = {
  initial: {
    x: -400,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const linkVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
}
const socialVariants = {
  initial: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
}

const items = [
  { title: 'Home', link: '/' },
  { title: 'Services', link: '#Services' },
  { title: 'Portfolio', link: '#Portfolio' },
  { title: 'Projects', link: '#Projects' },
  { title: 'Contact', link: '/Contact' },
]

const Navbar = () => {
  return (
    <div className=''>
      <Sidebar />
      <motion.div className='navbar' initial='initial' animate='animate'>
        <motion.div className='logo' variants={logoVariants}>
          <h1>
            {' '}
            <a href='/'>Brich Africana</a>
          </h1>
        </motion.div>
        <motion.div className='links' variants={linkVariants}>
          {items.map((item) => (
            <motion.a
              href={`${item.link}`}
              className='home'
              key={item.title}
              variants={linkVariants}
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>
        <motion.div className='socials' variants={socialVariants}>
          <motion.a
            variants={socialVariants}
            href='https://facebook.com'
            target='_blank'
            rel='noopener'
          >
            <img src='/facebook.png' alt='' />
          </motion.a>
          <motion.a
            variants={socialVariants}
            href='https://instagram.com'
            target='_blank'
            rel='noopener'
          >
            <img src='/instagram.png' alt='' />
          </motion.a>
          <motion.a
            variants={socialVariants}
            href='https://twitter.com'
            target='_blank'
            rel='noopener'
          >
            <img src='/x-logo.png' alt='' />
          </motion.a>
          <motion.a
            variants={socialVariants}
            href='https://linkedin.com'
            target='_blank'
            rel='noopener'
          >
            <img src='/linkedIn.webp' alt='' />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Navbar

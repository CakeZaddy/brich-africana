import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

const socialVariants = {
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  open: {
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

const Links = ({ setOpen }) => {
  return (
    <motion.div className='link' variants={variants}>
      {items.map((item) => (
        <motion.a
          variants={itemVariants}
          href={`${item.link}`}
          key={item}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item.title}
        </motion.a>
      ))}
      <motion.div className='social' variants={socialVariants}>
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
  )
}

export default Links

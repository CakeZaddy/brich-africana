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

const items = [
  { title: 'Home', link: '#Home' },
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
      <motion.div className='social'>
        <a href='#'>
          <img src='/facebook.png' alt='' />
        </a>
        <a href='#'>
          <img src='/instagram.png' alt='' />
        </a>
        <a href='#'>
          <img src='/dribbble.png' alt='' />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Links

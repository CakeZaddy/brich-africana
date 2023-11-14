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

const items = ['Home', 'Services', 'Portfolio', 'Projects', 'Contact']

const Links = ({ setOpen }) => {
  return (
    <motion.div className='link' variants={variants}>
      {items.map((item) => (
        <motion.a
          variants={itemVariants}
          href={`${item}`}
          key={item}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item}
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

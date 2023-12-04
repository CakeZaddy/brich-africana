import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const textVariants = {
  initial: {
    x: -400,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    },
  },
}

const Creation = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100 && !hasAnimated) {
        setHasAnimated(true)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasAnimated])

  return (
    <motion.div
      className='creation'
      initial='initial'
      animate={hasAnimated ? 'animate' : 'initial'}
    >
      <motion.div
        className='desc'
        variants={textVariants}
        whileInView={hasAnimated ? 'animate' : 'initial'}
      >
        <motion.h2
          variants={textVariants}
          // whileInView={hasAnimated ? 'animate' : 'initial'}
        >
          full of energy, drive, <br /> and passion , our team aims to deliver
          the most outstanding work in every detail
        </motion.h2>
        <motion.p
          variants={textVariants}
          // whileInView={hasAnimated ? 'animate' : 'initial'}
        >
          we believe that value-creation is the primary aim of any business and
          the execution excellence is the basis of value-creation for
          organizations and individuals
        </motion.p>
        <motion.button
          variants={textVariants}
          // whileInView={hasAnimated ? 'animate' : 'initial'}
        >
          <a href='/Contact'>contact us now</a>
        </motion.button>
      </motion.div>
      <div className='image'>
        <img src='./branding.jpg' alt='' />
      </div>
    </motion.div>
  )
}

export default Creation

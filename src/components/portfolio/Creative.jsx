import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const imgVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
}

const textVariants = {
  initial: {
    x: 500,
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

const Creative = () => {
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
      className='creative'
      initial='initial'
      animate={hasAnimated ? 'animate' : 'initial'}
      // whileInView='animate'
    >
      <div className='image'>
        <div className='bg'>
          <div className='imageContainer'>
            <img src='./portfolio.PNG' alt='' />
          </div>
        </div>
      </div>
      <motion.div
        variants={textVariants}
        className='desc'
        initial='initial'
        whileInView={hasAnimated ? 'animate' : 'initial'}
      >
        <motion.h2
          variants={textVariants}
          whileInView={hasAnimated ? 'animate' : 'initial'}
        >
          we are creative people <br /> with big dreams
        </motion.h2>
        <motion.p
          variants={textVariants}
          whileInView={hasAnimated ? 'animate' : 'initial'}
        >
          the ability of our digital agency lies in an ever-evolving set of core
          competencies nimbly combined and refined into a custom solution for
          our clients and their brands
        </motion.p>
        <motion.button
          variants={textVariants}
          whileInView={hasAnimated ? 'animate' : 'initial'}
        >
          <a href='/Contact'>contact us now</a>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Creative

import React, { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const flierVariant = {
  initial: {
    x: 400,
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

const textVariants = {
  initial: {
    x: -500,
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

const items = [
  { id: '1', img: '/website.jpg', desc: 'website' },
  { id: '2', img: '/appDesign.jpg', desc: 'app designs' },
  { id: '3', img: '/content.jpg', desc: 'content writing' },
  { id: '4', img: '/branding.jpg', desc: 'branding' },
]

const Services = () => {
  // const ref = useRef()
  // const inView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      // ref={ref}
      className='services'
      initial='initial'
      whileInView='animate'
    >
      <div className='flier'>
        <div className='flierText'>
          <motion.h2 variants={textVariants}>
            The creative groups we use in building careers:
          </motion.h2>
          <div className='vertical-line'></div>
        </div>
        <div className='groups'>
          <div className='logos'>
            <motion.div variants={flierVariant} className='logoContainer'>
              <motion.img variants={flierVariant} src='/microsoft.png' alt='' />
              <motion.img variants={flierVariant} src='/google.png' alt='' />
              <motion.img variants={flierVariant} src='/react.png' alt='' />
            </motion.div>
            <motion.div variants={flierVariant} className='logoContainer'>
              <motion.img variants={flierVariant} src='/slack.png' alt='' />
              <motion.img variants={flierVariant} src='/wix.png' alt='' />
            </motion.div>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <motion.div className='contents'>
          <motion.h1
            className='title'
            variants={textVariants}
            initial='initial'
            whileInView='animate'
          >
            industries we work in
          </motion.h1>
          <motion.div variants={flierVariant} className='serviceContents'>
            {items.map((item) => (
              <motion.div
                variants={flierVariant}
                className='service'
                key={item.id}
              >
                <motion.div className='imageContainer'>
                  <img src={item.img} alt='' />
                </motion.div>
                <motion.h2>{item.desc}</motion.h2>
                <motion.button>learn more</motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services

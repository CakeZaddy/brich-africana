import { useEffect, useState } from 'react'
import './services.scss'
import { motion } from 'framer-motion'

const flierVariant = {
  initial: {
    x: 100,
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
    x: -200,
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
      className='services'
      initial='initial'
      animate={hasAnimated ? 'animate' : 'initial'}
    >
      <div className='flier'>
        <div className='flierText'>
          <motion.h2 variants={textVariants}>
            The creative groups we use in building careers:
          </motion.h2>
          <div className='vertical-line'></div>
        </div>
        <div className='groups'>
          <div className='logos' variants={flierVariant}>
            <div className='logoContainer'>
              <motion.img variants={flierVariant} src='/microsoft.png' alt='' />
              <motion.img variants={flierVariant} src='/google.png' alt='' />
              <motion.img variants={flierVariant} src='/react.png' alt='' />
            </div>
            <div className='logoContainer'>
              <motion.img variants={flierVariant} src='/slack.png' alt='' />
              <motion.img variants={flierVariant} src='/wix.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <motion.div className='contents'>
          <motion.h1
            className='title'
            variants={textVariants}
            initial='initial'
            // whileInView='animate'

            whileInView={hasAnimated ? 'animate' : 'initial'}
          >
            industries we work in
          </motion.h1>
          <motion.div
            variants={flierVariant}
            initial='initial'
            // whileInView='animate'

            whileInView={hasAnimated ? 'animate' : 'initial'}
            className='serviceContents'
          >
            {items.map((item) => (
              <div
                // variants={flierVariant}
                // initial='initial'
                // whileInView='animate'
                // animate={hasAnimated ? 'animate' : {}}
                className='service'
                key={item.id}
              >
                <div className='imageContainer'>
                  <img src={item.img} alt='' />
                </div>
                <h2>{item.desc}</h2>
                <button>learn more</button>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services

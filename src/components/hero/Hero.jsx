import { motion } from 'framer-motion'
import './hero.scss'

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
const imgVariants = {
  initial: {
    x: 500,
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

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='title'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h1 variants={textVariants}>
            Inspiration is the most important part of our digital strategy
          </motion.h1>
          <motion.p variants={textVariants}>
            we build the kind of careers that are top in the labour market,{' '}
            <br /> we build it with professionals in dedicated areas.
          </motion.p>
          <motion.button variants={textVariants}>
            <a href='/Contact'>contact us now</a>
          </motion.button>
        </motion.div>
        <div className='image'>
          <motion.div
            className='imageContainer'
            variants={imgVariants}
            initial='initial'
            animate='animate'
          >
            <img src='/hero1.PNG' alt='' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

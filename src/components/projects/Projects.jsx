import './projects.scss'
import Project from './Project'
import ContactUs from './ContactUs'
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

const projects = [
  {
    id: '1',
    image: '/personal-branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
  {
    id: '2',
    image: '/figma.png',
    title: 'website building with CMS || twitch foods',
    desc: 'here is a website we built with CMS for twitch. our websites makes you stand out.',
  },
  {
    id: '3',
    image: '/blog.jpg',
    title: 'blog building with coding || uncle sula',
    desc: 'this is a blog we built for uncle sula to help with his branding. we also deliver top websites with codes.',
  },
  {
    id: '4',
    image: '/resume.webp',
    title: 'Refurbished resume || jack brow',
    desc: 'here we refurbished a resume for jack brow. our resume refurbishing is top notch',
  },
  {
    id: '5',
    image: '/co-working.jpg',
    title: 'co-working || uncle sula blog',
    desc: 'after building his blog, we also co-work with uncle sula to deliver top contents. our contents are well picked and grafted',
  },
  {
    id: '6',
    image: '/video.webp',
    title: 'video contents || amaka ndubisi',
    desc: 'we also make video contents. our team makes video contents that are top notch.',
  },
]

const Projects = () => {
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
      className='projects'
      initial='initial'
      animate={hasAnimated ? 'animate' : 'initial'}
    >
      <div className='wrapper'>
        <motion.div className='projectsTitle'>
          <motion.h2>our recent case studies</motion.h2>
          <motion.p>
            our team can create amazing portfolio, C.V's, beginning with deep
            market research, practical strategies and professional execution.
          </motion.p>
        </motion.div>
        <div className='projectWrap'>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
        <div className='contactUs'>
          <ContactUs />
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

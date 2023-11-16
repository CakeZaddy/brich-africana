import React from 'react'
import './projects.scss'
import Project from './Project'

const projects = [
  {
    id: '1',
    image: '/branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
  {
    id: '2',
    image: '/branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
  {
    id: '3',
    image: '/branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
  {
    id: '4',
    image: '/branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
  {
    id: '5',
    image: '/branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
  {
    id: '6',
    image: '/branding.jpg',
    title: 'personal branding || uncle sula',
    desc: 'here is the branding we did for uncle sula. our branding makes you stand out',
  },
]

const Projects = () => {
  return (
    <div className='projects'>
      <div className='wrapper'>
        <div className='projectsTitle'>
          <h2>our recent case studies</h2>
          <p>
            our team can create amazing portfolio, C.V's, beginning with deep
            market research, practical strategies and professional execution.
          </p>
        </div>
        <Project />
      </div>
    </div>
  )
}

export default Projects

import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='project' key={project.id}>
      <div className='imageWrap'>
        <img src={project.image} alt='' />
      </div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
  )
}

export default Project

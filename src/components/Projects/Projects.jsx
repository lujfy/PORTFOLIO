import React from 'react'
import { PROJECTS } from '../../data/projects'
import { getImageUrl } from '../../utils'
import ProjectCard from './ProjectCard/ProjectCard'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id='projects'>
      <div className={styles.container}>
        <h2 className={styles.title} >Dự án</h2>

        
        {PROJECTS.map((project , id) => {
          return (
            <ProjectCard key={id} project={project}/>
          )
        }
        )}
      </div>

        
    </section>
  )
}

export default Projects

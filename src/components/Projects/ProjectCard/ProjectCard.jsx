import React from 'react'
import styles from './ProjectCard.module.css'

import { getImageUrl } from '../../../utils'

const ProjectCard = ({project}) => {
  return (
    <div className={styles.box}>

                <div className={styles.left}>
                  <div className={styles.title}>
                    <h3>{project.title}</h3>
                    <h5>{project.smallTitle}</h5>
                  </div>

                  <div className={styles.projectImg}>
                    <img  src={getImageUrl(project.imageSrc)} />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.summary}>
                    <h4>Về dự án</h4>
                    <p>{project.description}</p>
                  </div>

                  <div className={styles.tech}>
                    <h4>Công nghệ được dùng :</h4>
                    <ul>
                      {
                        project.skills.map((skill , id) => {
                          return(
                            <li key={id}>{skill}</li>
                          )
                        })
                      }
                    </ul>
                  </div>

                  <div className={styles.btn}>
                    <a href={project.demo}>LIVE PREVIEW</a>
                    <a href={project.source}>VIEW CODE</a>
                  </div>
                </div>

    </div>
  )
}

export default ProjectCard


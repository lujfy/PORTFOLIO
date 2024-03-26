import React from 'react'

import { frontendToolkit , backendToolkit , UItoolkit } from '../../data/skills'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'

function Experience() {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Toolkits and skills</h2>

      <div className={styles.content}>
        <div className={styles.box}>
            <h3>Frontend</h3>

            <div className={styles.skills}>
              {frontendToolkit.map((tool , id) => {
                return (
                  <div className={styles.skill}  key={id}>
                    <div className={styles.skillImageContainer}>
                      <img style={{width : '50px' , height : '50px'}} src={getImageUrl(tool.imageSrc)} alt={tool.title}/>
                    </div>
                    <p>{tool.title}</p>
                  </div>
                )
              })
              }
            </div>

        </div>

        <div className={styles.box}>
          <h3>Backend</h3>

          <div className={styles.skills}>
            {backendToolkit.map((tool , id) => {
              return (
                <div className={styles.skill}  key={id}>
                  <div className={styles.skillImageContainer}>
                    <img style={{width : '50px' , height : '50px'}} src={getImageUrl(tool.imageSrc)} alt={tool.title}/>
                  </div>
                  <p>{tool.title}</p>
                </div>
              )
            })
            }
          </div>
          
        </div>

        <div className={styles.box}>
          <h3>UI Design</h3>

          <div className={styles.skills}>
            {UItoolkit.map((tool , id) => {
              return (
                <div className={styles.skill}  key={id}>
                  <div className={styles.skillImageContainer}>
                    <img style={{width : '50px' , height : '50px'}} src={getImageUrl(tool.imageSrc)} alt={tool.title}/>
                  </div>
                  <p>{tool.title}</p>
                </div>
              )
            })
            }
          </div>
          
        </div>

      </div>

        

    </section>
  )
}

export default Experience

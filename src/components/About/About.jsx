import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <img  src={getImageUrl('about/aboutImg.png')} alt='sitting with a laptop' className={styles.aboutImage} />
            <ul className={styles.aboutItems} >
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorImg.svg')} alt='cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend dev with experience to make beautiful and responsive website</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverImg.svg')} alt='server Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have create a lot of backend server and API</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/designImg.svg')} alt='design Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>UI design</h3>
                        <p>I'm a UI designer with experience creating and developing stylish website</p>
                    </div>
                </li>


            </ul>
        </div>
    </section>
  )
}

export default About

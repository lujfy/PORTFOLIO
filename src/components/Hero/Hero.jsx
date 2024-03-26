import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi , I'm Truong</h1>

            <p className={styles.description}>I'm a full stack developer with 1.5 years of experiences with React and NodeJS
            </p>

            <a href='#contact' className={styles.contactBtn}>Contact</a>
            
        </div>

        <img style={{ width : '252px' , height : '252px'}} src={getImageUrl("hero/hero.png")} alt='Hero Image of me' className={styles.heroImg}/>

        <div className={styles.topBlur} ></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero

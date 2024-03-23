import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Chào, tôi là Trường</h1>

            <p className={styles.description}>Tôi là full-stack developer với 2 năm kinh 
                nghiệm làm việc với React và NodeJS. Nếu bạn muốn biết thêm về tôi ↓
            </p>

            <a href='#about' className={styles.contactBtn}>Liên hệ</a>
            
        </div>

        <img style={{ width : '252px' , height : '252px'}} src={getImageUrl("hero/hero.png")} alt='Hero Image of me' className={styles.heroImg}/>

        <div className={styles.topBlur} ></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero

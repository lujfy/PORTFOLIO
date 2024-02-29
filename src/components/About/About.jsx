import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Về tôi</h2>
        <div className={styles.content}>
            <img  src={getImageUrl('about/aboutImg.png')} alt='sitting with a laptop' className={styles.aboutImage} />
            <ul className={styles.aboutItems} >
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorImg.svg')} alt='cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Tôi là 1 frontend developer với kinh nghiệm làm những trang web
                             có giao diện phù hợp và tối ưu hóa với mọi thiết bị</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverImg.svg')} alt='server Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Tôi là 1 Backend developer với kinh nghiệm tạo ra những backend server và API</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/designImg.svg')} alt='design Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>UI design</h3>
                        <p>Tôi là 1 UI designer đã thiết kế ra nhiều trang web khác nhau</p>
                    </div>
                </li>


            </ul>
        </div>
    </section>
  )
}

export default About

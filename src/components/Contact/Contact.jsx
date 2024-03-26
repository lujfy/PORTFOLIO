import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './Contact.module.css'

function Contact() {
  return (
    <footer id='contact' className={styles.container}>

      <div className={styles.text}>
        <h2>Contact</h2>
        <p>If you want to work with me!</p>
        <div className={styles.mail}>
          <img src={getImageUrl('contact/email.svg')} /> 
          <p>lujfy50@gmail.com</p>
        </div>
        
      </div>

      

      <nav className={styles.links}>
            <a href="https://www.facebook.com/profile.php?id=100070618398247" className={styles.facebook}>
                <span>Facebook</span>
                <svg  viewBox="0 0 126.22 246"><path d="M173.6,27h35.92V70.19h-29.7c-15,2.39-14,19.79-14,19.79v29.33h47.27l-7.05,47.52H166.33V273H119.19V166.09H86.89V119.31h32.3V87.74A68.5,68.5,0,0,1,127,55.49c5.27-9.87,14-20.18,28.41-25.47A53,53,0,0,1,173.6,27Z" transform="translate(-86.89 -27)"/></svg> 
            
            </a>
            <a href="https://github.com/lujfy" className={styles.github}>
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
            
            </a>
            <a href="https://www.linkedin.com/in/le-truong-6b34582b7/" className={styles.linkedin}>
                <span>Linkedin</span>
                <svg  viewBox="0 0 244.65 226.28"><path d="M35.73,81.63a24.22,24.22,0,0,1-8-18.5,24.59,24.59,0,0,1,8-18.79q8.06-7.47,20.76-7.48,12.43,0,20.48,7.48a24.59,24.59,0,0,1,8,18.79,24.22,24.22,0,0,1-8,18.5q-8,7.5-20.48,7.49Q43.79,89.12,35.73,81.63ZM80.5,105.51V263.14H32.2V105.51Z" transform="translate(-27.68 -36.86)"/><path d="M255.8,121.75q16.51,17.94,16.52,49.3v92.09h-48v-85.6q0-15.81-8.19-24.57t-22-8.76q-13.84,0-22,8.76t-8.2,24.57v85.6H115.53V105.51h48.31v20.9a51.15,51.15,0,0,1,19.78-16.53,63,63,0,0,1,28-6.07Q239.27,103.81,255.8,121.75Z" transform="translate(-27.68 -36.86)"/></svg>
            
            </a>
            
        </nav>
      
      

    </footer>
  )
}

export default Contact

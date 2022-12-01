import React from 'react'
import img_footer from '../../assets/Grupo-7610.png'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.textfooter}> <span>Con el patrocinio de</span></div>
            <img className={styles.imgFooter} src={img_footer} />
        </div>
    )
}

export default Footer
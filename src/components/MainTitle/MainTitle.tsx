import React from 'react'
import styles from './MainTitle.module.scss'
const MainTitle = () => {
    return (
        <div className={styles.headform}>
            <div className={styles.imgHead}>
                <div className={styles.floatText}>
                    <div className={styles.text1}>Recetas</div>
                    <div className={styles.text2}>para todos</div>
                </div>
            </div>
        </div>

    )
}

export default MainTitle
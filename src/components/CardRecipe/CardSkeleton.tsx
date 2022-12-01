import React from 'react'
import styles from "../MainContent/MainContent.module.scss";

const CardSkeleton = () => {

    const skeleton = [];

    for (let i = 0; i < 4; i++) {
        skeleton.push(
            <>
                <li className={`${styles.tarjet} ${styles.loading}`} >
                    <div className={styles.plate} ></div>
                    <div className={styles.content}>
                        <h4></h4>
                        <div className={styles.description}>
                        </div>
                    </div>
                </li>
            </>
        )

    }

    return (
        <>
            {skeleton}

        </>
    )
}

export default CardSkeleton
import React from 'react'
import styles from './ProductList.module.css'
import { Link } from 'react-router-dom'

export default function ProductList({ type }) {
    return (
        <div>
            <div className={styles.breadcrumb}>
                <div className={styles.breadcrumbContent}>
                    <Link to="/" className={`${styles.breadcrumbText} ${styles.link}`}>
                        Home
                    </Link>

                    <span className={styles.breadcrumbText}>{" > "}</span>

                    <p className={styles.breadcrumbText}>{type}</p>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.title1}>
                        <h1 className={styles.title}>{type}</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

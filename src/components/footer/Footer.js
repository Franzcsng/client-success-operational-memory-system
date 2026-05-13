import styles from './Footer.module.scss'

export default function Footer({resetDemo}){
    return(
        <div className={styles.footer}>
            <div className={styles['footer-child']}>
                <p className={styles['logo-text']}>CS-OMS</p>
            </div>

            <div className={styles['footer-child']}>
                <p className={styles['footer-info']}>FRANCIS NORMAN A. CAUSING</p>
                <p className={styles['footer-info']}>franzcsng23@gmail.com</p>
            </div>

            <div className={styles['footer-child']}>
                <button className={styles['reset-button']}
                    onClick={()=>{
                        resetDemo()
                    }}
                >Restart Demo</button>
            </div>
        </div>
    )
}
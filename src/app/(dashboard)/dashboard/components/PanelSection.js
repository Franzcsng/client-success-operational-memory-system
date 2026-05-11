import styles from './PanelSection.module.scss'

export default function PanelSection({title, children}){
     return(
     <div className={styles['meetings-container']}>
        <div className={styles['container-head']}>
            <h2>{title}</h2>
        </div>
        <div className={styles['container-body']}>
            {children}
        </div>
    </div>
    )
}
import styles from './PanelSection.module.scss'

export default function PanelSection({icon, title, children}){
    const Icon = icon
     return(
     <div className={styles['meetings-container']}>
        <div className={styles['container-head']}>
            <h2>{icon && <Icon className={styles['icons']}/>}{title}</h2>
        </div>
        <div className={styles['container-body']}>
            {children}
        </div>
    </div>
    )
}
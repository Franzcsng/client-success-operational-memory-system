import styles from './MeetingCard.module.scss'

export default function MeetingCard({title, date, status, onClick, generateBrief, isActive=false}){
    return(
        <div onClick={onClick} className={`${styles['meeting-card']} ${isActive && styles['active']}`}>
            <div className={styles.cardHead}>
                <p className={styles.title}>{title}</p>   
                <p className={styles.status}>{status}</p> 
            </div>
            
            
            <p className={styles.date}>{date}</p>

            <button 
                className={styles.button}
                onClick={generateBrief}
            > Generate Brief </button>
        </div>
    )
}
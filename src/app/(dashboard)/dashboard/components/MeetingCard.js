import styles from './MeetingCard.module.scss'

export default function MeetingCard({icon, title, date, status, onClick, generateBrief, isActive=false, disabled, buttonText}){
        const Icon = icon
    return(
        <div onClick={onClick} className={`${styles['meeting-card']} ${isActive && styles['active']}`}>
            <div className={styles.cardHead}>
                <p className={styles.title}>{title}</p>   
                <p className={styles.status}>{status}</p> 
            </div>
            
            
            <p className={styles.date}>{date}</p>

            <button 
                disabled={disabled}
                className={styles.button}
                onClick={(e) => {
                    e.stopPropagation()
                    generateBrief()
                    }}
            >
                <Icon className={styles['icons']}/>
                {disabled ? 'Brief Generated' : buttonText ? buttonText : 'Generate Brief'} </button>
        </div>
    )
}
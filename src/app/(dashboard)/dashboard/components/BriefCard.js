import styles from './BriefCard.module.scss'


export default function BriefCard({icon, briefData}){
    const Icon = icon
    const date = new Date(briefData.generated_at)

    const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    })


    return(
        <div className={styles['brief-container']}>
            <div className={styles['context-head']}>
                <p className={styles['title']}>{icon && <Icon className={styles['icons']}/>}AI Generated Brief </p>
            </div>


            <div className={styles['context-body']}>
                <p className={styles.section}> <span>Executive Summary</span></p>
                <p className={styles.data}> {briefData.executive_summary}</p>
            </div>

            <div className={styles['context-body']}>
                <p className={styles.section}> <span>Risks</span></p>
                {briefData.risks.map((r, i) => (
                    <p className={styles.data} key={i}>{i+1}. {r}</p>
                ))}
            </div>

             <div className={styles['context-body']}>
                <p className={styles.section}> <span>Talking Points</span></p>
                {briefData.talking_points.map((r, i) => (
                    <p className={styles.data} key={i}>{i+1}. {r}</p>
                ))}
            </div>

            <div className={styles['context-body']}>
                <p className={styles.section}> <span>Action Items</span></p>
                {briefData.action_items.map((r, i) => (
                    <p className={styles.data} key={i}>{i+1}. {r}</p>
                ))}
            </div>

            <div className={styles['context-foot']}>
                <p className={styles.date}>Generated at: {formatted} </p>
            </div>
           
        </div>
    )
}
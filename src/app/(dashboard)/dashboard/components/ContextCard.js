import styles from './ContextCard.module.scss'

export default function ContextCard({meetingContext}){
    return(
        <div className={styles['context-card']}>
            <div className={styles['context-head']}>
                <p className={styles['title']}>Slack</p>
                <p className={styles['client']}>Acme Corporations</p>
            </div>
            
            {meetingContext.slack.map((s,i) => (
                <div className={styles['context-body']} key={i}>
                    <p className={styles.data}>({i+1}) <span>From - </span> {s.sender}</p>
                    <p className={styles.data}> {s.message}</p>
                </div>
            ))}
            
             <div className={`${styles['context-head']} ${styles['center']}`}>
                <p className={styles['title']}>Email</p>
            </div>

            {meetingContext.emails.map((e ,i) => (
                <div className={styles['context-body']} key={i}>
                    <p className={styles.data}>({i+1}) <span>Subject - </span> {e.subject}</p>
                    <p className={styles.data}> {e.body}</p>
                </div>
            ))}

            <div className={`${styles['context-head']} ${styles['center']}`}>
                <p className={styles['title']}>Fathom</p>
            </div>

           
                <div className={styles['context-body']}>
                    <p className={styles.data}> <span>Summary - </span> {meetingContext.fathom.summary}</p>
                    <p className={styles.data}> Sentiments: {meetingContext.fathom.sentiment}</p>
                    <p className={styles.data}>Action items: </p>
                    {meetingContext.fathom.actionItems.map((item, i) => {
                       return <p className={styles.data} key={i}>- ({i+1}) {item}</p>
                    })}
                </div>

            <div className={`${styles['context-head']} ${styles['center']}`}>
                <p className={styles['title']}>Airtable</p>
            </div>

        
            <div className={styles['context-body']}>
                <p className={styles.data}> <span>Renewal Date - </span> {meetingContext.airtable.renewalDate}</p>
                <p className={styles.data}> Health Score: {meetingContext.airtable.healthScore} / 100</p>
                <p className={styles.data}>Contract Value: {meetingContext.airtable.contractValue} </p>
            <p className={styles.data}>Onboarding Status:  {meetingContext.airtable.onboardingStatus}</p>
               
            </div>
       
        </div>
    )
}
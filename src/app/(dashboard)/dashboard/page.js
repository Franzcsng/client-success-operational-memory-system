'use client'
import styles from './page.module.scss'

export default function Dashboard(){

    async function generateBrief() {
    const res = await fetch('/api/generate-brief', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        clientId: 2,
        }),
    })

    const data = await res.json()

    console.log(data)
    }


    return(
        <div className={styles['dashboard-main']}>
            <button onClick={generateBrief}> GENERATE BRIEF </button>
        </div>
    )
}
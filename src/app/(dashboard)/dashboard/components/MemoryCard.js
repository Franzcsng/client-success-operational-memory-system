
import styles from './MemoryCard.module.scss'

export default function MemoryCard({icon, header, clientMemory}){
    const Icon = icon
    const formatDate = (d) => {
        const date = d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })

        return date
    }

    return(
        <div className={styles['memory-container']}>
            <div className={styles['context-head']}>
                <p className={styles['title']}>{icon && <Icon className={styles['icons']}/>}{header}</p>
            </div>

            {clientMemory.map((m, i) => {
                const importanceLevel = Math.min(
                    100,
                    Math.max(0, (Number(m.importance_score) || 0) * 10)
                )
                const lastSeen = new Date(m.created_at)
                const createdAt = new Date(m.created_at)
                
                return (
                <div className={styles['table-container']} key={i}>
                    <p className={styles['memory-head']}>{formatDate(createdAt)}</p>
                    <p className={styles['content']}>{m.content}</p>
                    <table>
                        <tbody>
                            <tr>
                                <th><p>Type</p></th>
                                <th><p>Importance</p></th>
                                <th><p>Status</p></th>
                            </tr>
                            <tr>
                                <td><p>{m.memory_type}</p></td>
                                <td className={styles['level-cell']}>
                                    <div className={styles['level-bar']}>
                                        <div className={styles['level']} style={{width: `${importanceLevel}%`}}></div>
                                    </div>
                                </td>
                                <td><p>{m.status}</p></td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={styles['date']}>Last seen: <span>{formatDate(lastSeen)}</span></p>

                </div>
            )})}
        </div>
    )
}
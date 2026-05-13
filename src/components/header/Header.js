'use client'
import {useEffect, useState} from 'react' 
import styles from './Header.module.scss'

export default function Header(){
    const clientId = '11111111-1111-1111-1111-111111111111'

    const [client, setClient] = useState(null)

    useEffect(() => {
        async function fetchClient(){
            try{
                const res = await fetch('/api/get-client', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        clientId
                    }),
                })

                const data = await res.json()
                setClient(data)
            }catch(err){
                console.error(err)
            }
        }

        fetchClient()
    }, [])
    
    if(!client) return <p>Loading</p>

    return(
        <div className={styles.header}>
            <p className={styles.logo}>CS-OMS</p>
            <div className={styles['header-container']}>

                <div className={styles['header-child']}>
                    <span>Client</span>
                    <h1>{client.client.name}</h1>
                    <span>ID: {client.client.id}</span>
                </div>
                
                <p className={styles['industry']}>Industry - {client.client.industry}</p>
            </div>
        </div>
    )
}
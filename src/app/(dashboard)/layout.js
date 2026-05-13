'use client'
import styles from './layout.module.scss'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function DashboardLayout({children}){

    async function resetDemo(){
        const confirmed = window.confirm(
            "Reset all generated briefs and memory?"
        )

        if (!confirmed) return

        await fetch("/api/reset-demo", {
            method: "POST",
        })

    window.location.reload()
    }

    return(
        <div className={styles['dashboard-layout']}>
            <div className={styles['dashboard-layout-outlet']}>
                <Header/>
                <div className={styles['dashboard-outlet']}>
                    {children}
                </div>
                <Footer resetDemo={resetDemo}/>
            </div>
        </div>
    )
}
import styles from './layout.module.scss'
import Sidebar from '@/components/sidebar/Sidebar.js'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function DashboardLayout({children}){
    return(
        <div className={styles['dashboard-layout']}>
            <div className={styles['dashboard-layout-outlet']}>
                <Header/>
                <div className={styles['dashboard-outlet']}>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}
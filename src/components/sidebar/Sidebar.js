'use client'
import styles from './Sidebar.module.scss'
import { usePathname } from 'next/navigation';
import Link from 'next/link'


export default function Sidebar(){

    const pathname = usePathname();

    return(
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <p>BRIEF-AI</p>
            </div>

            <nav className={styles['sidebar-navigation']}>
                <Link 
                    href='/dashboard'
                    className={pathname === '/dashboard' || pathname === '/' ? styles['active'] : ''}
                >
                    Dashboard
                </Link>

                <Link 
                    href='/meetings'
                    className={pathname === '/meetings' ? styles['active'] : ''}
                >
                    Meetings
                </Link>
            </nav>
        </div>
    )
}
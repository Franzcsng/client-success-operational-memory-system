'use client'
import styles from './page.module.scss'
import PanelSection from './components/PanelSection'
import MeetingCard from './components/MeetingCard'
import ContextCard from './components/ContextCard'
import {useState} from 'react'
import {meetingOne} from '@/mock-data/meetingOne'
import {meetingTwo} from '@/mock-data/meetingTwo'
import {meetingThree} from '@/mock-data/meetingThree'


export const meetingContextMap = {
  "22222222-2222-2222-2222-222222222222": meetingOne,
  "33333333-3333-3333-3333-333333333333": meetingTwo,
  "44444444-4444-4444-4444-444444444444": meetingThree,
}

export default function Dashboard(){
    const [meetings, setMeetings] = useState([])
    const [selectedMeeting, setSelectedMeeting] = useState(null)
    const [selectedContext, setSelectedContext] = useState(null)
    const [selectedBrief, setSelectedBrief] = useState(null)
    const [clientMemory, setClientMemory] = useState([])

    function handleMeetingClick(meeting) {
        // setSelectedMeeting(meeting)
        const context = meetingContextMap['22222222-2222-2222-2222-222222222222']

        setSelectedContext(context)

        // fetch existing brief if processed
        // fetch client memory
    }

    async function generateBrief({clientId, meetingId, meetingContext, meetingDetails}) {

    const context = {
        ...meetingContext,
        meetingId,
        clientId,
        meeting_title: '',
        meeting_date: '',
    }

    const res = await fetch('/api/generate-brief', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        clientId,
        meetingId,
        context
        }),
    })

    const data = await res.json()
    console.log(data)
    }

    return(
        <div className={styles['dashboard-main']}>

            <div className={styles['meetings-panel']}>
               <PanelSection
                    title='Meeting Timelines'
               >
                    <MeetingCard
                        status='pending'
                        title='Meeting one'
                        date='June 20, 2026'
                        onClick={handleMeetingClick}
                    />

               </PanelSection>

               <PanelSection
                    title='Context Panel'
               >

                {selectedContext && (
                    <ContextCard
                         meetingContext={selectedContext}
                   />
                )}
                   
               </PanelSection>

               <PanelSection
                    title='Intelligence Panel'
               >

               </PanelSection>
            </div>
            {/* <button onClick={generateBrief}> GENERATE BRIEF </button> */}
        </div>
    )
}
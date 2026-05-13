'use client'
import { FaBrain } from "react-icons/fa";
import { GrGenai } from "react-icons/gr";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdDataset } from "react-icons/md";
import styles from './page.module.scss'
import PanelSection from './components/PanelSection'
import MeetingCard from './components/MeetingCard'
import ContextCard from './components/ContextCard'
import BriefCard from './components/BriefCard'
import MemoryCard from './components/MemoryCard'

import { useState, useEffect } from 'react'

import { meetingOne } from '@/mock-data/meetingOne'
import { meetingTwo } from '@/mock-data/meetingTwo'
import { meetingThree } from '@/mock-data/meetingThree'

import { getMeetingBrief } from '@/services/db/getBriefService'
import { getClientMemory, getAllClientMemory } from '@/services/db/getMemoryService'
import { getClientMeetings } from '@/services/db/getMeetings'

export const meetingContextMap = {
  '22222222-2222-2222-2222-222222222222': meetingOne,
  '33333333-3333-3333-3333-333333333333': meetingTwo,
  '44444444-4444-4444-4444-444444444444': meetingThree,
}

const CLIENT_ID = '11111111-1111-1111-1111-111111111111'

export default function Dashboard() {
  const [meetings, setMeetings] = useState([])

  const [selectedMeeting, setSelectedMeeting] = useState(null)
  const [selectedContext, setSelectedContext] = useState(null)
  const [selectedBrief, setSelectedBrief] = useState(null)
  const [selectedMemory, setSelectedMemory] = useState([])
  const [memory, setMemory] = useState([])
  const [isLoadingMeetingData, setIsLoadingMeetingData] = useState(false)
    const [isGeneratingBrief, setIsGeneratingBrief] = useState(false)

  const [briefs, setBriefs] = useState({})

  // INITIAL MEETINGS LOAD

  useEffect(() => {
    async function loadMeetings() {
      const data = await getClientMeetings(CLIENT_ID)
      setMeetings(data || [])
    }

    async function loadMemory() {
      const data = await getAllClientMemory(CLIENT_ID)
      setMemory(data || [])
    }

    loadMemory()
    loadMeetings()
  }, [])

  // LOAD BRIEF STATUS FOR TIMELINE

  useEffect(() => {
    async function fetchBriefs() {
      if (meetings.length <= 0) return

      const results = await Promise.all(
        meetings.map(async (m) => {
          const brief = await getMeetingBrief(m.id)

          return {
            meetingId: m.id,
            brief,
          }
        })
      )

      const mapped = {}

      results.forEach((r) => {
        mapped[r.meetingId] = r.brief
      })

      setBriefs(mapped)
    }

    fetchBriefs()
  }, [meetings])

  // FORMAT DATE

  function formatDate(d) {
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // SELECT MEETING

  async function handleMeetingClick(meeting) {
    try {
        setIsLoadingMeetingData(true)

        setSelectedMeeting(meeting)

        setSelectedBrief(null)
        setSelectedMemory([])

        const context = meetingContextMap[meeting.id]
        setSelectedContext(context)

        const [brief, memory] = await Promise.all([
        getMeetingBrief(meeting.id),
        getClientMemory(CLIENT_ID, meeting.id),
        ])

        setSelectedBrief(brief)
        setSelectedMemory(memory || [])

    } catch (err) {
        console.error(err)
    } finally {
        setIsLoadingMeetingData(false)
    }
    }

  // GENERATE BRIEF

  async function generateBrief(clientId, meetingId, meetingContext) {
    try {
        setIsGeneratingBrief(true)
        setIsLoadingMeetingData(true)

        const context = {
        ...meetingContext,
        meetingId,
        clientId,
        }

        const res = await fetch('/api/generate-brief', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            clientId,
            meetingId,
            context,
        }),
        })

        const data = await res.json()

        const updatedBrief = await getMeetingBrief(meetingId)
        const updateMemory = await getClientMemory(clientId, meetingId)

        setSelectedBrief(updatedBrief)
        setSelectedMemory(updateMemory)

        setBriefs((prev) => ({
        ...prev,
        [meetingId]: updatedBrief,
        }))

    } catch (err) {
        console.error(err)
    } finally {
        setIsGeneratingBrief(false)
        setIsLoadingMeetingData(false)
    }
    }

    if (meetings.length <= 0) {
        return <p>Loading meetings...</p>
    }

  return (
    <div className={styles['dashboard-main']}>

      <div className={styles['meetings-panel']}>
        <PanelSection icon={RiCalendarScheduleFill} title='Meeting Timelines'>
          {meetings.map((m) => {
            const date = new Date(m.meeting_date)
            const brief = briefs[m.id]

            return (
              <MeetingCard
                icon={GrGenai}
                key={m.id}
                meeting={m}
                status={brief ? 'processed' : 'pending'}
                title={m.title}
                date={formatDate(date)}
                isActive={selectedMeeting?.id === m.id}
                onClick={() => handleMeetingClick(m)}
                buttonText={isGeneratingBrief ? 'Generating Brief...' : null}
                disabled={brief}
                generateBrief={() =>
                    generateBrief(
                        CLIENT_ID,
                        m.id,
                        meetingContextMap[m.id]
                    )
                }
              />
            )
          })}

        </PanelSection>

        <PanelSection PanelSection icon={MdDataset} title='Context Panel'>
          {selectedContext ? (
            <ContextCard meetingContext={selectedContext} />
          ) : (
            <p>Select a meeting</p>
          )}
        </PanelSection>

        <PanelSection PanelSection icon={FaBrain} title='Intelligence Panel'>
        {isLoadingMeetingData ? (
            <p className={styles['empty-message']}>
                Loading intelligence...
            </p>
            ) : selectedBrief ? (
            <BriefCard icon={GrGenai} briefData={selectedBrief} />
            ) : (
            <p className={styles['empty-message']}>
                No brief generated for this meeting
                <br />
                <span>Generate one or select another meeting</span>
            </p>
        )}

        {isLoadingMeetingData ? (
            <p className={styles['empty-message']}>
                Loading memory...
            </p>
            ) : selectedMemory.length !== 0 ? (
            <MemoryCard icon={FaBrain} header='Meeting Memory' clientMemory={selectedMemory} />
            ) : (
            <p className={styles['empty-message']}>
                No Meeting Memory Yet
            </p>
        )}

        {isLoadingMeetingData ? (
            <p className={styles['empty-message']}>
                Loading memory...
            </p>
            ) : memory.length !== 0 ? (
            <MemoryCard icon={FaBrain} header='Client Memory Evolution' clientMemory={memory} />
            ) : (
            <p className={styles['empty-message']}>
                No Memory Yet
            </p>
        )}
          
        </PanelSection>
      </div>
    </div>
  )
}
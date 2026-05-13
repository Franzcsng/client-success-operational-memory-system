CLIENT SUCCESS OPERATIONAL MEMORY SYSTEM (CS-OMS)
=======================================
Overview

This project explores how AI can build persistent operational memory for Client Success teams with fragmented context across multiple communication sources and generating evolving meeting intelligence.

Instead of treating each meeting as an isolated event, the system accumulates longitudinal client understanding over time.

It simulates a real-world Client Success workflow using:
- Fathom (meeting transcripts)
- Slack (internal discussions)
- Email (client communication)
- Airtable (client records)

By maintaining persistent memory, the system becomes aware of:
- recurring issues
- evolving risks
- communication patterns
- relationship signals


=======================================
Setup Instructions

- Create Supabase project
- Run /sql/init.sql
- Run /sql/seed.sql
- Add environment variables
- Start development server

=======================================
Features

1. Multi-source context (mocked integrations)
2. Persistent client memory system
3. Meeting brief generation
4. Recurring issue detection
5. Memory evolution across meetings
6. Signal prioritization using AI
7. LangGraph-based orchestration workflow

=======================================
System Architecture

1. Frontend Layer
    - Meeting timeline view
    - Context inspection panel
    - Generated brief display
    - Memory evolution visualization

2. Backend Layer (Supabase)
    - Client data storage
    - Meeting records
    - Meeting briefs
    - Persistent client memory

3. Orchestration Layer (LangGraph)
    - Signal extraction
    - Signal prioritization
    - Memory updates
    - Brief generation

4. External Context Sources (Mocked)
    - Slack
    - Email
    - Airtable
    - Fathom

=======================================
AI Workflow

1. Retrieve contextual signals from multiple sources
2. Extract operational insights
3. Rank signal importance
4. Generate memory updates
5. Generate structured meeting brief
6. Persist memory + brief artifacts

=======================================
Database Schema 

1. clients
    - Stores account-level entities.

2. meetings
    - Represents individual client interactions.

3. meeting_briefs
    - Stores AI-generated executive summaries per meeting.

4. client_memory
    - Persistent longitudinal memory across meetings.

This separation enables:
- per-meeting intelligence
- cross-meeting learning
- evolving client understanding

=======================================
Scale Considerations

Current limitations:
    - prompt context growth over time
    - memory duplication risks
    - retrieval quality degradation
    - conflicting signals across sources

Future improvements:
    - Retrieval-Augmented Generation (RAG)
    - vector-based memory search
    - memory compression/summarization layers
    - confidence scoring for signals
    - event-driven ingestion pipeline

=======================================
Tech Stack

- Next.js (Frontend + API routes)
- Supabase (Database + persistence layer)
- LangGraph (AI orchestration layer)
- OpenAI / LLM (signal extraction + synthesis)

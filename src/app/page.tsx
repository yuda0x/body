'use client'

import { useState } from 'react'
import { protocols } from '@/data/protocols'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ProtocolViewer from '@/components/ProtocolViewer'
import InfoPanel from '@/components/InfoPanel'
import LearningCards from '@/components/LearningCards'

export default function Home() {
  const [selectedId, setSelectedId] = useState('ethereum')
  const protocol = protocols.find((p) => p.id === selectedId) || protocols[0]

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar selectedId={selectedId} onSelect={setSelectedId} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex flex-1 overflow-hidden">
            <ProtocolViewer protocol={protocol} />
            <InfoPanel protocol={protocol} />
          </div>
          <LearningCards protocol={protocol} />
        </div>
      </div>

      {/* Footer with Twitter */}
      <footer className="bg-white border-t border-gray-200 py-6 px-8 text-center text-sm text-gray-600">
        <p>
          Built by{' '}
          <a
            href="https://twitter.com/0xqorii"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-900 hover:text-blue-600 transition"
          >
            @0xqorii
          </a>
          {' '}• Explore Web3 protocols interactively
        </p>
      </footer>
    </div>
  )
}

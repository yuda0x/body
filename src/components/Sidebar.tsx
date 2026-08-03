'use client'

import { protocols } from '@/data/protocols'
import { Sparkles, Bookmark } from 'lucide-react'

interface SidebarProps {
  selectedId: string
  onSelect: (id: string) => void
}

export default function Sidebar({ selectedId, onSelect }: SidebarProps) {
  return (
    <aside className="w-64 bg-cream border-r border-gray-200 flex flex-col overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600">Protocol Library</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Bookmark size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {protocols.map((protocol) => (
            <button
              key={protocol.id}
              onClick={() => onSelect(protocol.id)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedId === protocol.id
                  ? 'bg-white shadow-sm border-2'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
              style={
                selectedId === protocol.id
                  ? {
                      borderColor: protocol.color,
                      backgroundColor: '#fff',
                    }
                  : {}
              }
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: protocol.color }}
                >
                  {protocol.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm">{protocol.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{protocol.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <blockquote className="text-center">
          <Sparkles size={20} className="mx-auto mb-2 text-gray-600" />
          <p className="text-sm font-serif italic text-gray-700 mb-2">
            Learning blockchain
            <br />
            is an act of curiosity.
          </p>
          <em className="text-xs text-gray-500 block">Keep exploring!</em>
        </blockquote>
      </div>
    </aside>
  )
}

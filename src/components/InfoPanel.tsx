'use client'

import { Protocol } from '@/data/protocols'
import { Stethoscope, Sparkles, Play, HelpCircle, Share2 } from 'lucide-react'

interface InfoPanelProps {
  protocol: Protocol
}

export default function InfoPanel({ protocol }: InfoPanelProps) {
  return (
    <aside className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: protocol.color }}
            />
            <span className="text-sm font-medium text-gray-600">
              {protocol.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            {protocol.name}
          </h1>
          <p className="text-gray-600 font-serif italic">{protocol.description}</p>
        </div>

        <div className="h-px bg-gray-200 my-6" />

        {/* Key Facts */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Facts</h2>
        <dl className="space-y-4 mb-8">
          {protocol.keyFacts.map((fact, i) => (
            <div key={i}>
              <dt className="text-sm font-medium text-gray-600 mb-1">
                {fact.label}
              </dt>
              <dd className="text-sm text-gray-900 font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* Medical Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Stethoscope size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-1">Key Insight</p>
              <p className="text-sm text-blue-800">{protocol.medicalNote}</p>
            </div>
          </div>
        </div>

        {/* Did You Know */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex gap-3">
            <Sparkles size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-900 mb-1">Did You Know</p>
              <p className="text-sm text-amber-800">{protocol.didYouKnow}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition mb-6">
          View Lesson
          <span className="ml-2">→</span>
        </button>

        {/* Action Grid */}
        <div className="grid grid-cols-3 gap-3">
          <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex flex-col items-center gap-2">
            <Play size={18} className="text-gray-700" />
            <span className="text-xs text-gray-700">Simulate</span>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex flex-col items-center gap-2">
            <HelpCircle size={18} className="text-gray-700" />
            <span className="text-xs text-gray-700">Quiz</span>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition flex flex-col items-center gap-2">
            <Share2 size={18} className="text-gray-700" />
            <span className="text-xs text-gray-700">Compare</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

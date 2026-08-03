'use client'

import { Protocol } from '@/data/protocols'
import { RotateCcw, Search, Circle, ScanLine, Layers, Share2 } from 'lucide-react'

interface ProtocolViewerProps {
  protocol: Protocol
}

export default function ProtocolViewer({ protocol }: ProtocolViewerProps) {
  const features = [
    { name: 'Rotate', icon: RotateCcw },
    { name: 'Zoom', icon: Search },
    { name: 'Isolate', icon: Circle },
    { name: 'Layers', icon: Layers },
    { name: 'Compare', icon: Share2 },
  ]

  return (
    <section className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute inset-0 opacity-10 blur-3xl pointer-events-none"
        style={{
          background: protocol.color,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 3D Viewer Placeholder */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="text-center z-10">
          <div
            className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl text-white font-bold shadow-2xl"
            style={{ backgroundColor: protocol.color }}
          >
            {protocol.name[0]}
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            {protocol.name}
          </h2>
          <p className="text-gray-600 mb-6">Interactive 3D Protocol Model</p>
          <button
            className="px-6 py-3 rounded-lg font-medium transition"
            style={{
              backgroundColor: protocol.color,
              color: 'white',
            }}
          >
            Load 3D Model →
          </button>
        </div>
      </div>

      {/* Tools */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 bg-white bg-opacity-90 backdrop-blur rounded-lg p-2 shadow-lg">
        {features.map((feature) => (
          <button
            key={feature.name}
            title={feature.name}
            className="p-3 hover:bg-gray-100 rounded transition flex items-center gap-2 text-sm text-gray-700"
          >
            <feature.icon size={18} />
            <span className="hidden xl:inline">{feature.name}</span>
          </button>
        ))}
      </div>

      {/* Tip Card */}
      <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 backdrop-blur rounded-lg p-4 shadow-lg max-w-xs">
        <p className="text-sm font-semibold text-gray-900 mb-2">💡 Tip</p>
        <p className="text-xs text-gray-600">
          Drag to rotate<br />
          Scroll to zoom<br />
          Click features to learn more
        </p>
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 right-6 text-right z-10">
        <p className="text-xs text-gray-600 mb-1">3D specimen · click features to explore</p>
        <strong className="text-lg font-serif text-gray-900">{protocol.name}</strong>
      </div>
    </section>
  )
}

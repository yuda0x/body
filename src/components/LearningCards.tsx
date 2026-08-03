'use client'

import { Protocol } from '@/data/protocols'
import { Sparkles, Microscope, Share2, Play, FileText, Brain } from 'lucide-react'

interface LearningCardsProps {
  protocol: Protocol
}

export default function LearningCards({ protocol }: LearningCardsProps) {
  return (
    <section className="bg-white border-t border-gray-200 overflow-x-auto">
      <div className="flex gap-4 p-8 w-full min-w-max">
        {/* Curiosity Card */}
        <article className="w-80 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8 text-center flex flex-col justify-center min-h-64">
          <Sparkles className="mx-auto mb-4 text-purple-600" size={32} />
          <p className="font-serif text-lg mb-4 text-gray-900">
            Learning blockchain
            <br />
            is an act of curiosity.
          </p>
          <em className="text-gray-600">Keep exploring!</em>
        </article>

        {/* Architecture Card */}
        <Card
          icon={<Brain size={20} />}
          category="Architecture"
          title="Protocol Design"
          description="Explore the core architecture and design decisions"
          color={protocol.color}
        />

        {/* Comparison Card */}
        <Card
          icon={<Share2 size={20} />}
          category="Compare"
          title={`${protocol.name} vs. Alternatives`}
          description="See how this protocol compares to similar solutions"
          color={protocol.color}
        />

        {/* Animation Card */}
        <Card
          icon={<Play size={20} />}
          category="Animation"
          title="Transaction Flow"
          description="Watch how transactions move through the network"
          color={protocol.color}
        />

        {/* Use Cases Card */}
        <Card
          icon={<FileText size={20} />}
          category="Use Cases"
          title="Real-World Applications"
          description="Discover what this protocol is best suited for"
          color={protocol.color}
        />
      </div>
    </section>
  )
}

function Card({
  icon,
  category,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  category: string
  title: string
  description: string
  color: string
}) {
  return (
    <article className="w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div style={{ color }} className="opacity-30">
          {icon}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-xs font-medium text-gray-500 mb-2">{category}</p>
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>
        <button
          className="text-sm font-medium flex items-center gap-2 transition"
          style={{ color }}
        >
          Learn More →
        </button>
      </div>
    </article>
  )
}

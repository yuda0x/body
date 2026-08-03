'use client'

import { Compass, Brain, BookOpen, Library, FileText, Search, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-cream border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <button className="flex flex-col gap-0.5">
          <strong className="text-lg font-serif">Web3 Explorer</strong>
          <em className="text-xs text-gray-600 font-sans">Learn blockchain like an artist</em>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <NavButton icon={<Compass size={18} />} label="Explore" active />
          <NavButton icon={<Brain size={18} />} label="Systems" />
          <NavButton icon={<BookOpen size={18} />} label="Lessons" />
          <NavButton icon={<Library size={18} />} label="Library" />
          <NavButton icon={<FileText size={18} />} label="Research" />
        </nav>

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden lg:flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 w-64">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search protocols..."
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>

          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium text-sm text-gray-700">
            MA
          </button>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

function NavButton({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        active
          ? 'bg-gray-900 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

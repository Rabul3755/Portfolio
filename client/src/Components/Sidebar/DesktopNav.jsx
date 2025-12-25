import React from 'react'
import { Home, FileText, Briefcase, BookOpen, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', icon: Home, label: 'About' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'works', icon: Briefcase, label: 'Works' },
  { id: 'blogs', icon: BookOpen, label: 'Blogs' },
  { id: 'contact', icon: Mail, label: 'Contact' }
]

export default function DesktopNav({ activeSection, onNavClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex justify-center lg:justify-start gap-1 md:gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200
              ${activeSection === item.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            <item.icon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium text-sm md:text-base">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
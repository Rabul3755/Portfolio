import React from 'react'
import { Home, FileText, Briefcase, BookOpen, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', icon: Home, label: 'About' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'works', icon: Briefcase, label: 'Works' },
  { id: 'blogs', icon: BookOpen, label: 'Blogs' },
  { id: 'contact', icon: Mail, label: 'Contact' }
]

export default function Navigation({ activeSection, onNavClick, isMobile = false, isVertical = false }) {
  if (isMobile) {
    return (
      <div className="flex justify-around w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className="flex flex-col items-center px-1"
          >
            <div className={`
              w-12 h-12 rounded-xl flex items-center justify-center mb-1
              ${activeSection === item.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600'
              }
            `}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className={`text-xs ${activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    )
  }

  // Vertical Navigation (for 2XL screens)
  if (isVertical) {
    return (
      <div className="w-full bg-white rounded-2xl shadow-lg p-4 sticky top-8">
        <div className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`
                w-full flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all duration-200
                ${activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return null
}
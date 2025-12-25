import React from 'react'
import { Menu, X, User, FileText, Briefcase, BookOpen, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', icon: User, label: 'About' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'works', icon: Briefcase, label: 'Works' },
  { id: 'blogs', icon: BookOpen, label: 'Blogs' },
  { id: 'contact', icon: Mail, label: 'Contact' }
]

export default function MobileMenu({ isOpen, onClose, onSectionClick }) {
  return (
    <>
      <button 
        onClick={() => onClose(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 w-12 h-12 bg-blue-600 text-white rounded-xl shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav className={`
        fixed lg:static top-0 right-0 h-full lg:h-auto w-64 lg:w-auto
        bg-white lg:bg-transparent shadow-2xl lg:shadow-none
        transform lg:transform-none transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        z-40 lg:z-auto p-6 lg:p-0
      `}>
        <div className="lg:flex lg:gap-2 lg:mb-8 space-y-3 lg:space-y-0 mt-16 lg:mt-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionClick(item.id)
                onClose(false)
              }}
              className="w-full lg:w-auto flex items-center gap-3 p-3 lg:px-6 lg:py-3 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => onClose(false)}
        />
      )}
    </>
  )
}
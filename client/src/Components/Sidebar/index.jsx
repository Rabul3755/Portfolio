import React from 'react'
import ProfileCard from './ProfileCard'
import Navigation from './Navigation'

export default function Sidebar({ activeSection, onNavClick }) {
  return (
    <div className="space-y-8">
      <ProfileCard />
      <Navigation activeSection={activeSection} onNavClick={onNavClick} />
    </div>
  )
}
import React, { useState } from 'react'
import ProfileCard from './Sidebar/ProfileCard'
import Navigation from './Sidebar/Navigation'
import DesktopNav from './Sidebar/DesktopNav'
import { About, Resume, Works, Blogs, Contact } from './Sections'
import backgroundImage from '../assets/page-bg.jpg'
export default function MainLayout() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = {
    about: <About />,
    resume: <Resume />,
    works: <Works />,
    blogs: <Blogs />,
    contact: <Contact />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8"style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Desktop Layout - All screen sizes */}
        <div className="hidden lg:flex gap-6 lg:gap-8">
          
          {/* Left Sidebar - Profile Card */}
          {/* LG: 4 columns, XL: 3 columns, 2XL: 3 columns */}
          <div className="w-1/3 lg:w-[33.333333%] xl:w-1/4 2xl:w-1/4">
            <ProfileCard />
          </div>
          
          {/* Main Content Area with Top Navigation */}
          {/* LG: 8 columns, XL: 9 columns, 2XL: 8 columns */}
          <div className="flex-1">
            {/* Top Navigation Bar for LG and XL screens - HIDDEN on 2XL */}
            <div className="mb-6 lg:mb-8 hidden 2xl:hidden">
              <DesktopNav 
                activeSection={activeSection}
                onNavClick={(section) => setActiveSection(section)}
              />
            </div>
            
            {/* Show DesktopNav only on LG and XL, hide on 2XL */}
            <div className="mb-6 lg:mb-8 lg:block xl:block 2xl:hidden">
              <DesktopNav 
                activeSection={activeSection}
                onNavClick={(section) => setActiveSection(section)}
              />
            </div>
            
            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {sections[activeSection]}
            </div>
          </div>
          
          {/* Right Side Navigation - Only on 2XL screens */}
          {/* 2XL: 1 column */}
          <div className="hidden 2xl:block 2xl:w-[8.333333%]">
            <Navigation 
              activeSection={activeSection}
              onNavClick={(section) => setActiveSection(section)}
              isVertical={true}
            />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          <ProfileCard />
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {sections[activeSection]}
          </div>
        </div>
        
        {/* Mobile Navigation - Fixed bottom */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 z-50 border-t border-gray-200">
          <Navigation 
            activeSection={activeSection}
            onNavClick={(section) => setActiveSection(section)}
            isMobile={true}
          />
        </div>
      </div>
    </div>
  )
}
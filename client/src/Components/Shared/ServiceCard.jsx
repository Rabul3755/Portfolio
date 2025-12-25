import React from 'react'

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
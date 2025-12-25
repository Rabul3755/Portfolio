import React from 'react'
import { Phone, Mail, MapPin, Calendar, Download, Linkedin, Code, Briefcase, Award, GraduationCap } from 'lucide-react'
import myPhoto from "../../assets/myphoto.jpg"

const contactInfo = [
  { 
    icon: <Phone className="w-4 h-4" />, 
    label: "Phone", 
    value: "+91 8668305472", 
    checked: false,
    link: "tel:+918668305472"
  },
  { 
    icon: <Mail className="w-4 h-4" />, 
    label: "Email", 
    value: "rahulbandagr54@gmail.com", 
    checked: true,
    link: "mailto:rahulbandagr54@gmail.com"
  },
  { 
    icon: <MapPin className="w-4 h-4" />, 
    label: "Location", 
    value: "Kothrud, Pune, Maharashtra, India", 
    checked: false 
  },
  { 
    icon: <Briefcase className="w-4 h-4" />, 
    label: "Experience", 
    value: "2.4 Years", 
    checked: false
  }
]

export default function ProfileCard() {
  
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Rahul_Bandgar_CV.pdf'
    link.download = 'Rahul_Bandgar_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full border border-gray-100">
      {/* Profile Image */}
      <div className="mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-50 shadow-lg">
          <img 
            src={myPhoto} 
            alt="Rahul Bandgar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Rahul Bandgar</h1>
        <p className="text-blue-600 font-medium">React Full-Stack Developer</p>
        <p className="text-gray-500 text-sm mt-1">2.4 Years Professional Experience</p>
      </div>

      {/* Professional Summary */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-gray-700 text-sm leading-relaxed">
          Highly skilled React full-stack developer with 2.4 years experience in AI-driven fintech, healthcare, retail, 
          banking, and e-commerce domains. Committed to delivering high-quality, scalable, and user-centric solutions.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mb-6">
        <a 
          href='https://linkedin.com/in/rahul-bandgar' 
          target='_blank' 
          rel='noopener noreferrer'
          className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
        </a>
        <a 
          href='https://leetcode.com/RahulBandgar3755' 
          target='_blank' 
          rel='noopener noreferrer'
          className="w-10 h-10 rounded-full bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center transition-colors"
          title="LeetCode"
        >
          <Code className="w-5 h-5 text-yellow-600" />
        </a>
        <a 
          href='https://github.com/rahulbandgar' 
          target='_blank' 
          rel='noopener noreferrer'
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          title="GitHub"
        >
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className={`w-8 h-8 rounded flex items-center justify-center ${item.checked ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'}`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-gray-800 font-medium hover:text-blue-600 transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-800 font-medium text-sm">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
          <div className="text-blue-600 font-bold text-lg">10+</div>
          <div className="text-gray-600 text-xs">Projects Built</div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
          <div className="text-green-600 font-bold text-lg">100+</div>
          <div className="text-gray-600 text-xs">LeetCode Problems</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-100">
          <div className="text-purple-600 font-bold text-lg">95%+</div>
          <div className="text-gray-600 text-xs">Browser Compatible</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center border border-orange-100">
          <div className="text-orange-600 font-bold text-lg">MERN</div>
          <div className="text-gray-600 text-xs">Stack Expert</div>
        </div>
      </div>

      {/* Download CV Button */}
      <button 
        onClick={handleDownloadCV}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <Download className="w-5 h-5" />
        Download CV
      </button>
    </div>
  )
}
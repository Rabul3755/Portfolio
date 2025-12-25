import React, { useState } from 'react'
import { Phone, Mail, MapPin, Linkedin, Code, Send, Check } from 'lucide-react'

const contactDetails = [
  { 
    icon: <Phone className="w-5 h-5" />, 
    label: "Phone", 
    value: "+91 8668305472",
    link: "tel:+918668305472",
    description: "Available for calls 9 AM - 6 PM IST"
  },
  { 
    icon: <Mail className="w-5 h-5" />, 
    label: "Email", 
    value: "rahulbandagr54@gmail.com",
    link: "mailto:rahulbandagr54@gmail.com",
    description: "Response within 24 hours"
  },
  { 
    icon: <MapPin className="w-5 h-5" />, 
    label: "Location", 
    value: "Kothrud, Pune, Maharashtra, India",
    description: "Open to remote & onsite opportunities"
  },
  { 
    icon: <Linkedin className="w-5 h-5" />, 
    label: "LinkedIn", 
    value: "linkedin.com/in/rahul-bandgar",
    link: "https://linkedin.com/in/rahul-bandgar",
    description: "Connect for professional opportunities"
  },
  { 
    icon: <Code className="w-5 h-5" />, 
    label: "LeetCode", 
    value: "leetcode.com/RahulBandgar3755",
    link: "https://leetcode.com/RahulBandgar3755",
    description: "100+ problems solved"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>
      
      {/* Introduction */}
      <div className="mb-10 bg-blue-50 rounded-xl p-6">
        <p className="text-gray-700 leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind, 
          need technical consultation, or want to discuss potential collaborations, feel free to reach out. 
          I'm particularly interested in full-stack development roles with React.js and Node.js.
        </p>
      </div>
      
      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {contactDetails.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-blue-600">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.label}</h3>
            {item.link ? (
              <a 
                href={item.link} 
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors block mb-2"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-gray-700 font-medium mb-2">{item.value}</p>
            )}
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      
      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Send className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Send Message</h3>
            <p className="text-gray-600 text-sm">I typically respond within 24 hours</p>
          </div>
        </div>
        
        {isSubmitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-green-800">Message sent successfully!</p>
              <p className="text-green-600 text-sm">I'll get back to you soon.</p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                placeholder="John Doe"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email *
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                placeholder="john@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Project Inquiry / Job Opportunity"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea 
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Tell me about your project or opportunity..."
              required
              disabled={isSubmitting}
            />
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
      
      {/* Additional Contact Info */}
      <div className="mt-10 bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Preferred Contact Methods</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Email for detailed project discussions and documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Phone calls for urgent matters or quick clarifications</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>LinkedIn for professional networking and opportunity discussions</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
import React from 'react'
import ServiceCard from '../Shared/ServiceCard'
import { Monitor, Smartphone, Globe, Cpu } from 'lucide-react'

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React.js, Redux, Tailwind CSS with 95%+ cross-browser compatibility."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Backend Development",
    description: "Developing robust RESTful APIs and server-side applications using Node.js, Express.js, and MongoDB."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    description: "Creating mobile-first, responsive web applications that work seamlessly across all devices."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "API Integration",
    description: "Integrating third-party services including Stripe payments, Shopify API, and various RESTful APIs."
  }
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>

      {/* Introduction */}
      <div className="mb-10">
        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
          Highly skilled and motivated React full-stack developer with 2.4 years of experience designing, developing, 
          and deploying web applications across AI-driven fintech, healthcare, retail, banking, and e-commerce domains.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Passionate about transforming complex problems into simple, beautiful, and functional designs. Committed to 
          delivering high-quality, scalable, and user-centric solutions while driving innovation in web development.
        </p>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-gray-200"></div>

      {/* Services Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">What I Do!</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Technologies I Work With */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Technologies & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux', 'Stripe API', 'Shopify API', 'Git', 'REST API'].map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
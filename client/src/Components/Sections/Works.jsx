import React from 'react'
import { ExternalLink, ShoppingCart, Users, Utensils } from 'lucide-react'

const projects = [
  {
    title: "Smeltt Online Store",
    domain: "Healthcare & Lifestyle",
    tech: "React.js, Tailwind CSS, Shopify API",
    year: "2024",
    description: "Developed frontend for Smeltt's e-commerce website featuring India's first natural essential oil toilet spray.",
    highlights: ["SEO-friendly structure", "Cross-browser optimization", "Shopify API integration"],
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "from-blue-100 to-blue-200"
  },
  {
    title: "Village Community Platform",
    domain: "Civic Engagement",
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    year: "2024",
    description: "Created comprehensive civic engagement platform enabling residents to report local issues and track resolution progress.",
    highlights: ["Interactive village map", "Real-time status tracking", "Political representatives directory"],
    icon: <Users className="w-6 h-6" />,
    color: "from-green-100 to-green-200",
    link: "#"
  },
  {
    title: "Full-Stack Food Delivery Website",
    domain: "E-commerce",
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe API",
    year: "2023",
    description: "Spearheaded comprehensive food delivery platform allowing users to browse menus, place orders, and complete payments.",
    highlights: ["Context API state management", "Stripe payment integration", "Published on Vercel"],
    icon: <Utensils className="w-6 h-6" />,
    color: "from-orange-100 to-orange-200",
    link: "https://hoteltomatoservices.vercel.app"
  }
]

export default function Works() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>
      
      {/* Projects Description */}
      <div className="mb-10 bg-blue-50 rounded-xl p-6">
        <p className="text-gray-700 leading-relaxed">
          I've architected and developed 3+ full-stack web applications across healthcare, e-commerce, and civic engagement domains 
          using the MERN stack. Each project demonstrates my expertise in creating responsive, user-friendly interfaces with 
          95%+ cross-browser compatibility and optimized performance.
        </p>
      </div>
      
      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Left Column - Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <div className="text-gray-800">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {project.domain}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-medium mb-4">{project.tech}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700">Key Features:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column - Live Demo Button */}
                {project.link && (
                  <div className="md:w-48 flex-shrink-0">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            {/* Technologies Used */}
            <div className="bg-gray-50 px-6 md:px-8 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-2">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Info */}
      <div className="mt-10 bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Development Approach</h3>
        <p className="text-gray-600">
          All projects follow agile development methodologies with focus on responsive design, SEO optimization, 
          and cross-browser testing. I prioritize clean code architecture, performance optimization, and user-centric design.
        </p>
      </div>
    </div>
  )
}
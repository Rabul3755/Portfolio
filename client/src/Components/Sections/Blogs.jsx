import React from 'react'
import { Calendar, Clock, BookOpen, Code, Zap, TrendingUp } from 'lucide-react'

const blogs = [
  {
    title: "Mastering React Performance Optimization",
    date: "October 15, 2024",
    readTime: "8 min read",
    category: "React.js",
    icon: <Zap className="w-5 h-5" />,
    excerpt: "Explore advanced techniques for optimizing React applications including code splitting, lazy loading, memoization, and performance monitoring.",
    tags: ["React", "Performance", "Optimization", "JavaScript"]
  },
  {
    title: "Building Scalable Full-Stack Applications with MERN",
    date: "September 28, 2024",
    readTime: "10 min read",
    category: "Full-Stack",
    icon: <Code className="w-5 h-5" />,
    excerpt: "A comprehensive guide to architecting scalable MERN stack applications with best practices for API design, state management, and deployment.",
    tags: ["MERN", "Node.js", "MongoDB", "Architecture"]
  },
  {
    title: "Responsive Design Patterns for Modern Web Apps",
    date: "August 22, 2024",
    readTime: "6 min read",
    category: "UI/UX",
    icon: <TrendingUp className="w-5 h-5" />,
    excerpt: "Learn about modern responsive design patterns, CSS Grid, Flexbox techniques, and cross-browser compatibility strategies for 95%+ coverage.",
    tags: ["CSS", "Responsive", "UI/UX", "Tailwind"]
  },
  {
    title: "API Integration Strategies: Stripe & Shopify",
    date: "July 15, 2024",
    readTime: "7 min read",
    category: "Backend",
    icon: <Code className="w-5 h-5" />,
    excerpt: "Deep dive into integrating third-party APIs like Stripe for payments and Shopify for e-commerce with security best practices.",
    tags: ["API", "Stripe", "Shopify", "Integration"]
  }
]

export default function Blogs() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tech Blog</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>
      
      {/* Introduction */}
      <div className="mb-10 bg-blue-50 rounded-xl p-6">
        <p className="text-gray-700 leading-relaxed">
          Sharing insights and lessons learned from 2.4 years of full-stack development experience. 
          These articles cover React.js optimizations, MERN stack best practices, API integrations, 
          and responsive design techniques I've implemented in production applications.
        </p>
      </div>
      
      {/* Blog Posts */}
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {/* Left Column - Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">
                      {blog.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{blog.title}</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs border border-gray-200">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              
              {/* Right Column - Stats */}
              <div className="lg:w-48 flex-shrink-0">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Tech Stack</span>
                  </div>
                  <ul className="space-y-2">
                    {blog.category === 'React.js' && (
                      <>
                        <li className="text-xs text-gray-600">• React.js & Hooks</li>
                        <li className="text-xs text-gray-600">• Performance APIs</li>
                        <li className="text-xs text-gray-600">• DevTools Optimization</li>
                      </>
                    )}
                    {blog.category === 'Full-Stack' && (
                      <>
                        <li className="text-xs text-gray-600">• MERN Architecture</li>
                        <li className="text-xs text-gray-600">• RESTful APIs</li>
                        <li className="text-xs text-gray-600">• Deployment Strategies</li>
                      </>
                    )}
                    {blog.category === 'UI/UX' && (
                      <>
                        <li className="text-xs text-gray-600">• Tailwind CSS</li>
                        <li className="text-xs text-gray-600">• Responsive Patterns</li>
                        <li className="text-xs text-gray-600">• Cross-Browser Testing</li>
                      </>
                    )}
                    {blog.category === 'Backend' && (
                      <>
                        <li className="text-xs text-gray-600">• Third-Party APIs</li>
                        <li className="text-xs text-gray-600">• Payment Integration</li>
                        <li className="text-xs text-gray-600">• Security Best Practices</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Blog Categories */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Writing Focus Areas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">React Optimization</h4>
            <p className="text-gray-600 text-sm">Performance tips, hooks, and best practices</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Code className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Full-Stack Development</h4>
            <p className="text-gray-600 text-sm">MERN stack, APIs, and deployment strategies</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">UI/UX Design</h4>
            <p className="text-gray-600 text-sm">Responsive patterns and user experience</p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">API Integration</h4>
            <p className="text-gray-600 text-sm">Third-party services and security</p>
          </div>
        </div>
      </div>
    </div>
  )
}
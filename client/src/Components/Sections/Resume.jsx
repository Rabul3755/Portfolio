import React from 'react'
import { GraduationCap, Briefcase, Code, Database, Wrench, Zap, ExternalLink, Award } from 'lucide-react'
// Added Award to the imports ^

const technicalSkills = {
  Languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
  Frontend: ['React.js', 'Redux', 'Context API', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Ajax', 'Figma'],
  Backend: ['Node.js', 'Express.js', 'RESTful API', 'Middleware', 'API Design', 'Async/Await'],
  Database: ['MongoDB', 'Firebase'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Stripe Payment Integration', 'Shopify API'],
  Practices: ['Agile Development', 'Responsive Design', 'Debugging', 'Deployment', 'SEO Optimization', 'Cross-Browser Testing']
}

const experienceItems = [
  {
    period: "Sept 2023 – Present",
    title: "Frontend Developer (React.js Full-Stack Developer)",
    company: "Codaemon Softwares Private Limited",
    location: "Pune, Maharashtra, India",
    achievements: [
      "Architected 3+ full-stack web applications serving users across healthcare, e-commerce, and civic engagement domains utilizing MERN stack",
      "Engineered responsive and user-friendly UI components with React.js and Tailwind CSS, achieving 95%+ cross-browser compatibility",
      "Integrated Stripe payment gateway for secure transaction processing with PCI-compliant flows",
      "Collaborated with backend teams to retrieve and display dynamic content through Shopify API and RESTful API integration",
      "Optimized application performance through code splitting and image compression",
      "Designed RESTful APIs to manage user authentication, order workflows, and database interactions with JWT authorization",
      "Conducted rigorous UI testing and SEO optimization, ensuring seamless performance"
    ]
  }
]

const projects = [
  {
    title: "Smeltt Online Store",
    domain: "Healthcare & Lifestyle",
    tech: "React.js, Tailwind CSS, Shopify API",
    year: "2024",
    description: "Developed frontend for Smeltt's e-commerce website featuring India's first natural essential oil toilet spray. Constructed responsive interface aligned with brand identity.",
    highlights: ["SEO-friendly structure", "Cross-browser optimization", "Shopify API integration"]
  },
  {
    title: "Village Community Platform",
    domain: "Civic Engagement",
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    year: "2024",
    description: "Created comprehensive civic engagement platform enabling residents to report local issues, track resolution progress, and connect with political representatives.",
    highlights: ["Issue reporting system with geolocation", "Interactive village map", "Real-time status tracking", "Political representatives directory"],
    link: "https://my-village-app.onrender.com"
  },
  {
    title: "Full-Stack Food Delivery Website",
    domain: "E-commerce",
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe API",
    year: "2023",
    description: "Spearheaded comprehensive food delivery platform allowing users to browse menus, place orders, and complete payments seamlessly.",
    highlights: ["Context API for state management", "Stripe payment integration", "RESTful API development", "Published on Vercel"],
    link: "https://hoteltomatoservices.vercel.app"
  }
]

const certifications = [
  "MERN Stack Web Development Course – Apna College",
  "Resolved 100+ coding problems on LeetCode",
  "Responsive Web Design Certification – freeCodeCamp.org",
  "Strong debugging expertise in React and JavaScript"
]

export default function Resume() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resume</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>

      {/* Professional Summary */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed">
            Highly skilled and motivated React full-stack developer with 2.4 years of experience designing, developing, 
            and deploying web applications. Strong background in frontend development with hands-on contributions to 
            AI-driven fintech, healthcare, retail, banking, and e-commerce domains. Committed to delivering high-quality, 
            scalable, and user-centric solutions while tackling complex challenges and driving innovation in web development.
          </p>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                {category === 'Frontend' && <Code className="w-4 h-4" />}
                {category === 'Backend' && <Database className="w-4 h-4" />}
                {category === 'Tools' && <Wrench className="w-4 h-4" />}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
        </div>
        
        <div className="space-y-6">
          {experienceItems.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-600 text-sm mb-2">{exp.location}</p>
                </div>
                <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Projects */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Key Projects</h2>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {project.domain}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium">Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-gray-600 font-medium mb-3">{project.tech}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Key Highlights:</p>
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
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Engineering in Mechanical Engineering</h4>
              <p className="text-blue-600 font-semibold mb-1">KIT's College of Engineering, Kolhapur</p>
              <p className="text-gray-600 text-sm mb-1">Kolhapur, India</p>
            </div>
            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Aug 2019 – Apr 2023
            </span>
          </div>
          <p className="text-gray-700 font-medium">CGPA: 7.28/10</p>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-yellow-600" /> {/* Now this will work */}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Certifications & Achievements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-yellow-600" /> {/* And this will work too */}
              </div>
              <p className="text-gray-700">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
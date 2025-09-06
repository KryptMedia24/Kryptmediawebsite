import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const projects = [
  {
    id: 1,
    title: "DMX Website",
    description: "UI/UX design and development for tech startup",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    caseStudy: "dmx"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    image: "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    caseStudy: "ecommerce"
  }
]

const Projects = () => {
  const [details, setDetails] = useState(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const [sliderRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    initial: 0,
  })

  const scaleStyle = (idx) => {
    if (!details) return {}
    const slide = details.slides[idx]
    const scaleSize = 0.7
    const scale = 1 - (scaleSize - scaleSize * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  const handleProjectClick = (caseStudy) => {
    setSelectedCaseStudy(caseStudy)
  }

  const handleBackToProjects = () => {
    setSelectedCaseStudy(null)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // DMX Website Case Study
  const renderDMXCaseStudy = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=1200&q=80"
          alt="DMX Website"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">DMX Website</h1>
            <p className="text-xl text-gray-300">UI/UX Design & Development Case Study</p>
          </div>
        </div>
        <button
          onClick={handleBackToProjects}
          className="absolute top-8 left-8 z-30 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
        >
          ← Back to Projects
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Project Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              DMX is a cutting-edge tech startup focused on revolutionizing digital experiences. 
              They approached us with a vision to create a website that would not only showcase 
              their innovative solutions but also reflect their forward-thinking brand identity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The challenge was to design and develop a website that would effectively communicate 
              complex technical concepts while maintaining an engaging and intuitive user experience.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Client:</span>
                <span>DMX Tech Startup</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span>8 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Services:</span>
                <span>UI/UX Design, Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Technologies:</span>
                <span>React, Node.js, Figma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Challenge</h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Complex technical concepts needed clear visualization</li>
              <li>• Brand identity had to reflect innovation and trust</li>
              <li>• Website needed to be scalable for future growth</li>
              <li>• Performance optimization for global audience</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Our Solution</h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Interactive infographics and animations</li>
              <li>• Modern, clean design with bold typography</li>
              <li>• Responsive architecture for scalability</li>
              <li>• CDN optimization and lazy loading</li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-400">Understanding client needs and target audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-400">Creating wireframes and visual designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-400">Building responsive and interactive website</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-400">Testing, optimization and deployment</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Results</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
              <p className="text-gray-300">Increase in website engagement</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">45%</div>
              <p className="text-gray-300">Faster page load times</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">200%</div>
              <p className="text-gray-300">Growth in lead generation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  )

  // E-commerce Platform Case Study
  const renderEcommerceCaseStudy = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=1200&q=80"
          alt="E-commerce Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">E-commerce Platform</h1>
            <p className="text-xl text-gray-300">Modern E-commerce Solution Case Study</p>
          </div>
        </div>
        <button
          onClick={handleBackToProjects}
          className="absolute top-8 left-8 z-30 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
        >
          ← Back to Projects
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Project Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A leading retail brand needed a comprehensive e-commerce platform that could handle 
              high traffic volumes while providing an exceptional shopping experience. The platform 
              needed to integrate with existing inventory systems and provide advanced analytics.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team developed a scalable, feature-rich e-commerce solution that transformed 
              their online business and significantly increased their digital revenue.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Client:</span>
                <span>Retail Brand</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span>12 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Services:</span>
                <span>Full-stack Development, UX Design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Technologies:</span>
                <span>Next.js, Node.js, MongoDB, AWS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/20">
            <h3 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h3>
            <ul className="text-gray-300 space-y-3">
              <li>• High traffic handling during peak seasons</li>
              <li>• Complex inventory management integration</li>
              <li>• Mobile-first responsive design requirements</li>
              <li>• Real-time analytics and reporting needs</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Our Solution</h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Microservices architecture for scalability</li>
              <li>• Advanced caching and CDN implementation</li>
              <li>• Progressive Web App (PWA) features</li>
              <li>• Real-time dashboard and analytics</li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Cart</h3>
              <p className="text-gray-400">Intelligent cart management with saved items and quick checkout</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
              <p className="text-gray-400">Fully responsive design with touch-friendly interface</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-400">Real-time insights into sales, traffic, and customer behavior</p>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Next.js for server-side rendering</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Redux for state management</li>
                <li>• Progressive Web App features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Node.js with Express</li>
                <li>• MongoDB for database</li>
                <li>• Redis for caching</li>
                <li>• AWS for hosting and CDN</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">150%</div>
              <p className="text-gray-300">Increase in online sales</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-xl border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <p className="text-gray-300">Faster checkout process</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
              <p className="text-gray-300">Mobile conversion rate</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 p-6 rounded-xl border border-orange-500/20">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime reliability</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Build Your E-commerce Platform
          </button>
        </div>
      </div>
    </div>
  )

  // Show case study if one is selected
  if (selectedCaseStudy === "dmx") {
    return renderDMXCaseStudy()
  }

  if (selectedCaseStudy === "ecommerce") {
    return renderEcommerceCaseStudy()
  }

  // Show projects carousel
  return (
    <div id="projects" className="w-full flex flex-col items-center justify-center py-12 bg-black relative scroll-mt-20">
      {/* Move the title to be naturally positioned at the top */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-lg text-gray-200 mt-2">A glimpse into some of our recent work</p>
      </div>

      {/* Slider */}
      <div className="max-w-4xl w-full">
        <div ref={sliderRef} className="keen-slider zoom-out">
          {projects.map((project, idx) => (
            <div key={project.id} className="keen-slider__slide zoom-out__slide flex justify-center">
              <div style={scaleStyle(idx)} className="transition-transform duration-50">
                <div 
                  className="cursor-pointer group"
                  onClick={() => handleProjectClick(project.caseStudy)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg max-h-[500px] object-cover group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    <p className="text-blue-400 text-sm mt-2 group-hover:text-blue-300 transition-colors">
                      Click to view case study →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WebsiteDesign = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">💻</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Website Design & Development
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Custom digital experiences designed to engage visitors and drive conversions
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Main description */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">About Our Service</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We specialize in creating stunning, high-performance websites that not only look great but also drive real business results. Our team combines cutting-edge design principles with robust development practices to deliver websites that stand out in today's competitive digital landscape.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From initial concept to final deployment, we handle every aspect of your website project with meticulous attention to detail. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to bring your vision to life.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Custom Website Design</h3>
                <p className="text-gray-300">Unique designs tailored to your brand identity and business goals.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">UI/UX Design</h3>
                <p className="text-gray-300">User-centered design that ensures excellent user experience and engagement.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Responsive Design</h3>
                <p className="text-gray-300">Websites that work perfectly on all devices and screen sizes.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">E-commerce Solutions</h3>
                <p className="text-gray-300">Full-featured online stores with secure payment processing.</p>
              </div>
            </div>
          </motion.div>

          {/* Images with external links */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Our Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <img 
                  src="/assets/serviceInfo/websiteDesign/aramesh.png" 
                  alt="Website Design Example" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <a 
                  href="https://aramesh.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
              <div className="text-center">
                <img 
                  src="/assets/serviceInfo/websiteDesign/gift.png" 
                  alt="Website Design Example" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <a 
                  href="https://customizedgift.co.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
              <div className="text-center">
                <img 
                  src="/assets/serviceInfo/websiteDesign/lifestyle.png" 
                  alt="Website Design Example" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <a 
                  href="https://goboujeelifestyle.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>

          {/* Process section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Discovery & Planning</h3>
                  <p className="text-gray-300">We start by understanding your business, goals, and target audience to create a strategic plan.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design & Prototyping</h3>
                  <p className="text-gray-300">Our designers create wireframes and mockups for your approval before development begins.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Development & Testing</h3>
                  <p className="text-gray-300">We build your website using modern technologies and thoroughly test all functionality.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Launch & Support</h3>
                  <p className="text-gray-300">We deploy your website and provide ongoing support and maintenance services.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDesign;

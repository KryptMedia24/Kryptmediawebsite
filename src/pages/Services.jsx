import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import services from "../data/services.json";
import WebsiteDesign from "./ServiceInfo/WebsiteDesign";
import SocialMediaMarketing from "./ServiceInfo/SocialMediaMarketing";
import VideoProduction from "./ServiceInfo/VideoProduction";
import DesignServices from "./ServiceInfo/DesignServices";
import ContentWriting from "./ServiceInfo/ContentWriting";
import BrandStrategy from "./ServiceInfo/BrandStrategy";

const Services = () => {
  const [currentService, setCurrentService] = useState(null);
  const [servicesScrollPosition, setServicesScrollPosition] = useState(0);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleServiceClick = (serviceTitle) => {
    // Store current scroll position before opening service
    setServicesScrollPosition(window.scrollY);
    setCurrentService(serviceTitle);
    // Scroll to the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToServices = () => {
    setCurrentService(null);
    // Scroll back to the stored position of the services section
    setTimeout(() => {
      window.scrollTo({ top: servicesScrollPosition, behavior: 'smooth' });
    }, 100); // Small delay to ensure the services section is rendered
  };

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

  const cardVariants = {
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
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  // Render individual service page if one is selected
  if (currentService) {
    const serviceComponents = {
      "Website Design & Development": WebsiteDesign,
      "Social Media Marketing": SocialMediaMarketing,
      "Video Production": VideoProduction,
      "Design Services": DesignServices,
      "Content Writing": ContentWriting,
      "Brand Strategy": BrandStrategy
    };

    const ServiceComponent = serviceComponents[currentService];
    
    return (
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={handleBackToServices}
            className="mb-8 inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </button>
        </div>
        <ServiceComponent />
      </div>
    );
  }

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Comprehensive solutions tailored to elevate your digital presence
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              className="w-full md:w-1/2 lg:w-1/4 bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image with zoom effect */}
              <div className="h-48 relative overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-gray-400 text-sm">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                {/* See More Button */}
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  See More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
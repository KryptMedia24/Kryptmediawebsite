import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialMediaMarketing = () => {
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

  // Image gallery data
  const galleryImages = [
    {
      src: "/assets/serviceInfo/socialMediaMarketing/1.jpg",
      alt: "Social Media Marketing Campaign 1",
      title: "Brand Awareness Campaign"
    },
    {
      src: "/assets/serviceInfo/socialMediaMarketing/2.png",
      alt: "Social Media Marketing Campaign 2",
      title: "Engagement Strategy"
    },
    {
      src: "/assets/serviceInfo/socialMediaMarketing/3.jpg",
      alt: "Social Media Marketing Campaign 3",
      title: "Content Creation"
    },
    {
      src: "/assets/serviceInfo/socialMediaMarketing/4.jpg",
      alt: "Social Media Marketing Campaign 4",
      title: "Community Building"
    },
    {
      src: "/assets/serviceInfo/socialMediaMarketing/5.jpg",
      alt: "Social Media Marketing Campaign 5",
      title: "Performance Analytics"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Social Media Marketing
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Strategic content and campaigns to amplify your brand's digital presence
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Main description */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">About Our Service</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              In today's digital age, social media is the heartbeat of brand communication. Our comprehensive social media marketing services help businesses build meaningful connections with their audience, increase brand awareness, and drive measurable results across all major platforms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We don't just post content – we create strategic campaigns that resonate with your target audience, build community engagement, and convert followers into loyal customers. Our data-driven approach ensures every post contributes to your business goals.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Content Strategy & Planning</h3>
                <p className="text-gray-300">Comprehensive content calendars and strategic planning aligned with your business objectives.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Creative Content Creation</h3>
                <p className="text-gray-300">Engaging visuals, videos, and copy that captures attention and drives engagement.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Community Management</h3>
                <p className="text-gray-300">Active engagement with your audience to build relationships and foster brand loyalty.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Paid Advertising</h3>
                <p className="text-gray-300">Targeted ad campaigns that maximize ROI and reach your ideal customers.</p>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Our Work Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-gray-800 break-inside-avoid mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Audience Research</h3>
                  <p className="text-gray-300">We analyze your target audience to understand their preferences, behaviors, and pain points.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Strategy Development</h3>
                  <p className="text-gray-300">We create a comprehensive social media strategy aligned with your business goals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Content Creation</h3>
                  <p className="text-gray-300">Our creative team produces engaging content that resonates with your audience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Management & Optimization</h3>
                  <p className="text-gray-300">We continuously monitor performance and optimize campaigns for better results.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DesignServices = () => {
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
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Design Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Visually compelling designs that communicate your brand identity effectively
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
              Great design is the foundation of effective brand communication. Our design services create visual assets that not only look stunning but also convey your message clearly and drive action from your audience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From print materials to digital assets, we ensure every design element aligns with your brand identity and business objectives. Our creative team combines artistic vision with strategic thinking to deliver designs that make an impact.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Print Design</h3>
                <p className="text-gray-300">Flyers, posters, brochures, and other print materials that grab attention.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Brand Identity</h3>
                <p className="text-gray-300">Logos, business cards, and stationery that represent your brand professionally.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Promotional Materials</h3>
                <p className="text-gray-300">Marketing collateral that drives engagement and conversions.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Digital Assets</h3>
                <p className="text-gray-300">Social media graphics, presentations, and digital marketing materials.</p>
              </div>
            </div>
          </motion.div>

          {/* Process section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Brief & Research</h3>
                  <p className="text-gray-300">We understand your requirements and research your industry and competitors.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Concept Development</h3>
                  <p className="text-gray-300">Our designers create multiple concepts and present them for your feedback.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design Refinement</h3>
                  <p className="text-gray-300">We refine the chosen concept based on your feedback and requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Final Delivery</h3>
                  <p className="text-gray-300">We deliver your final designs in all required formats and specifications.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignServices;

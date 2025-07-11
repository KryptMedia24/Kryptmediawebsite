import { motion } from "framer-motion";


export default function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-screen text-center px-4"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Headline */}
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-bold mb-6"
        variants={item}
      >
        Beyond Trends.<br /> 
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          variants={item}
        >
          Branding That Transcends.
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="max-w-2xl mt-4 text-lg text-gray-400 font-satoshi"
        variants={item}
      >
        Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
      </motion.p>

      {/* Optional CTA Button */}
      <motion.div variants={item}>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg transition-all">
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
}
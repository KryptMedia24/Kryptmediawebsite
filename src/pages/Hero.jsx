import { motion } from "framer-motion";

export default function Hero() {
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

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* 🔗 External video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/wavyBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-bold mb-6 text-white"
          variants={item}
        >
          Beyond Trends.<br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-400"
            variants={item}
          >
            Branding That Transcends.
          </motion.span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mt-4 text-lg text-gray-300 font-satoshi"
          variants={item}
        >
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
        </motion.p>

        <motion.div variants={item}>
          <button 
            onClick={scrollToServices}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-100 to-yellow-400 rounded-full text-black font-medium hover:shadow-lg transition-all"
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

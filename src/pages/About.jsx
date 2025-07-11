import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import team from "../data/team.json";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Founders</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            The visionary minds behind our success
          </p>
        </motion.div>

        <motion.div
          className="space-y-24"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              variants={item}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <motion.div
                  className="relative rounded-xl overflow-hidden shadow-lg aspect-square"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-3xl font-bold text-gray-200">{member.name}</h3>
                  <p className="text-green-600 text-xl font-medium">{member.role}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-200 mb-4">{member.bio}</p>
                    <div className="flex items-center space-x-4">
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-200 hover:text-green-600 transition-colors"
                      >
                        <span className="font-medium">Phone:</span> {member.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
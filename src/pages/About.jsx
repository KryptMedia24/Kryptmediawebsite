import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import team from "../data/team.json";

const About = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Founders
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            The visionary minds behind our success
          </p>
        </motion.div>

        {/* Team members */}
        <div className="space-y-24">
          {team.map((member, index) => {
            const [memberRef, memberInView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={member.name}
                ref={memberRef}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
                initial="hidden"
                animate={memberInView ? "visible" : "hidden"}
                variants={container}
              >
                {/* Image */}
                <motion.div
                  className="w-full md:w-1/3"
                  variants={fadeUp}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-lg aspect-square"
                    whileHover={{
                      scale: 1.05,
                      rotate: index % 2 === 0 ? 1.5 : -1.5,
                      boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div className="w-full md:w-2/3 space-y-4" variants={fadeUp}>
                  <h3 className="text-3xl font-bold text-gray-200">{member.name}</h3>
                  <motion.p
                    className="text-yellow-400 text-xl font-medium"
                    variants={fadeUp}
                  >
                    {member.role}
                  </motion.p>
                  <motion.div
                    className="border-t border-gray-700 pt-4 space-y-4"
                    variants={fadeUp}
                  >
                    <p className="text-gray-200">{member.bio}</p>
                    <div className="flex items-center space-x-4">
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-200 hover:text-green-600 transition-colors"
                      >
                        <span className="font-medium">Phone:</span> {member.phone}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

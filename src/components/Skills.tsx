import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PenTool as Tool, Thermometer, Rocket } from 'lucide-react';

const skills = [
  {
    category: "Core Skills",
    icon: Tool,
    color: "blue",
    items: ["Mechanical Engineering", "Aerospace Engineering", "CAD Design & Simulation"]
  },
  {
    category: "Technical Expertise",
    icon: Thermometer,
    color: "red",
    items: ["Thermodynamics", "Rocket Propulsion", "Thermal Systems Analysis"]
  },
  {
    category: "Research Areas",
    icon: Rocket,
    color: "purple",
    items: ["Electric Propulsion Systems", "Aerospike Nozzle Design", "Thermal Control Strategies"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-300">Specialized expertise in aerospace and mechanical engineering</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-${skillSet.color}-500/30 hover:border-${skillSet.color}-500 transition-colors duration-300`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="mb-6"
              >
                <skillSet.icon className={`w-12 h-12 text-${skillSet.color}-500`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4">{skillSet.category}</h3>
              <ul className="space-y-3">
                {skillSet.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className={`w-2 h-2 bg-${skillSet.color}-500 rounded-full mr-3`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
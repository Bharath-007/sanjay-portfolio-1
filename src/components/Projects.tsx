import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Cpu, Notebook as Robot } from 'lucide-react';

const projects = [
  {
    title: "CubeSat Structure Design",
    description: "Designed and fabricated a 1U CubeSat using 3D printing technology",
    icon: Rocket,
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    title: "2D Plotter Design",
    description: "Complete design and fabrication of a precision 2D plotting system",
    icon: Cpu,
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    title: "Rover Project",
    description: "Currently serving as Mechanical Lead for an innovative rover project",
    icon: Robot,
    color: "text-green-500",
    gradient: "from-green-500/20 to-transparent"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Mars-like background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9')] opacity-20 bg-cover bg-center" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300">Innovative solutions in aerospace and engineering</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="mb-6"
                >
                  <project.icon className={`w-12 h-12 ${project.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "AEROIN SPACETECH PRIVATE LIMITED",
    positions: [
      {
        title: "Research Trainee & Content Creator",
        period: "Nov 2023 - Present",
        duties: [
          "Writing and curating content on current space sector developments",
          "Conducting research on propulsion systems and aerospace advancements"
        ]
      },
      {
        title: "Research Trainee (Internship)",
        period: "June 2024- July 2024",
        duties: [
          "Conducted 2D performance analysis on an Aerospike nozzle",
          "Created and simulated nozzle contours for optimized propulsion efficiency"
        ]
      }
    ]
  },
  {
    company: "SAAM GEARS",
    positions: [
      {
        title: "Summer Intern",
        period: "April 2023 - May 2023",
        duties: [
          "Acquired hands-on experience in gears/shaft manufacturing and production processes"
        ]
      }
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Briefcase className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400">My journey in aerospace and engineering</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{exp.company}</h3>
              <div className="space-y-8">
                {exp.positions.map((pos, posIndex) => (
                  <div key={posIndex} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-xl font-semibold text-blue-400">{pos.title}</h4>
                    <p className="text-gray-400 mb-2">{pos.period}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {pos.duties.map((duty, dutyIndex) => (
                        <li key={dutyIndex}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
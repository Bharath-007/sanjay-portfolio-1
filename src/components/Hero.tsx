import { motion, useScroll, useTransform } from 'framer-motion';
import { RocketIcon, Mail, Linkedin, Download } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const planets = [
  { name: 'mercury', size: '30px', orbit: '150px', speed: 20 },
  { name: 'venus', size: '40px', orbit: '200px', speed: 25 },
  { name: 'earth', size: '45px', orbit: '250px', speed: 30 },
  { name: 'mars', size: '35px', orbit: '300px', speed: 35 }
];

function Planet({ size, orbit, speed, delay = 0 }) {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: speed * 1000 },
    delay
  });

  return (
    <animated.div
      style={{
        ...styles,
        width: orbit,
        height: orbit,
        position: 'absolute',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          position: 'absolute',
          top: 0,
          transform: `translateX(-50%)`,
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,255,255,0.2))'
        }}
      />
    </animated.div>
  );
}

function FlyingRover() {
  const styles = useSpring({
    loop: true,
    from: { translateY: 0, rotateZ: -5 },
    to: [
      { translateY: -20, rotateZ: 5 },
      { translateY: 0, rotateZ: -5 }
    ],
    config: { duration: 2000 }
  });

  return (
    <animated.div style={styles} className="fixed bottom-8 right-8 z-50">
      <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-3">
          <RocketIcon className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-white text-sm">Need help navigating?</p>
            <button className="text-blue-400 text-xs hover:text-blue-300">Click me!</button>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1f]" id="home">
      {/* Animated background with stars and nebula */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539321908154-04927596764d')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1f]/50 to-[#0a0a1f]" />
        
        {/* Rotating planets */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {planets.map((planet, index) => (
            <Planet
              key={planet.name}
              size={planet.size}
              orbit={planet.orbit}
              speed={planet.speed}
              delay={index * 1000}
            />
          ))}
        </div>
      </div>
      
      <motion.div style={{ y }} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <RocketIcon className="w-16 h-16 mx-auto text-blue-500 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            SHRI SANJAY I S
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Research Trainee at AeroinSpacetech | PSG TECH - UG 2nd Year
            <br />
            Mechanical Engineering | Aerospace Enthusiast
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Shrisanjay2918@gmail.com"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="flex items-center px-6 py-3 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </motion.a>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <FlyingRover />
    </div>
  );
}
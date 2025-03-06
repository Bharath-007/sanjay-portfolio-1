import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-xl">Sanjay I S</span>
            </div>
            <p className="text-gray-400">
              Aspiring rocket scientist passionate about aerospace innovation
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <a
                  href="mailto:Shrisanjay2918@gmail.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Shrisanjay2918@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-blue-500" />
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-blue-500" />
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Sanjay I S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

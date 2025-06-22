import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

// ✅ Define social links outside the return statement
const socialLinks = [
  { icon: FiGithub, url: "https://github.com/TerryL1971" },
  { icon: FiInstagram, url: "https://www.instagram.com/pictureitbyterry/" },
  { icon: FiLinkedin, url: "https://www.linkedin.com/in/terry-c-lombardi/" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Experience", "Contact"];

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-700 font-bold text-xl mr-3">
            L
          </div>
          <span className="text-xl font-bold text-gray-200">Terry C Lombardi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3 + i * 0.15,
              }}
              className="relative text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop Social Icons + Hire Me */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map(({ icon: Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
              className="text-gray-400 hover:text-violet-400 transition"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}

          {/* Hire Me Button (scrolls to contact) */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-500"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Burger Icon */}
        <button onClick={toggleMenu} className="lg:hidden text-gray-200">
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden bg-gray-900 overflow-hidden"
      >
        <nav className="flex flex-col px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-gray-300 font-medium"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={toggleMenu}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold text-center transition-all duration-300"
          >
            Hire Me
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass px-8 py-3 rounded-full flex items-center gap-8 pointer-events-auto"
      >
        <Link to="/" className="text-sm font-medium hover:text-brand-400 transition-colors">Home</Link>
        <Link to="/#about" className="text-sm font-medium hover:text-brand-400 transition-colors">About</Link>
        <Link to="/#experience" className="text-sm font-medium hover:text-brand-400 transition-colors">Experience</Link>
        <Link to="/#education" className="text-sm font-medium hover:text-brand-400 transition-colors">Education</Link>
        <Link to="/#skills" className="text-sm font-medium hover:text-brand-400 transition-colors">Skills</Link>
        <Link to="/#projects" className="text-sm font-medium hover:text-brand-400 transition-colors">Projects</Link>
        <Link to="/blogs" className="text-sm font-medium hover:text-brand-400 transition-colors">Blogs</Link>
        <Link to="/#contact" className="text-sm font-medium hover:text-brand-400 transition-colors">Contact</Link>
      </motion.div>
    </nav>
  );
}

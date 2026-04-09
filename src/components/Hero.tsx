import { motion } from "motion/react";
import { PROFILE } from "../constants";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-4 block"
        >
          System.Initialize(AI_ENGINEER)
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 glow-text"
        >
          {PROFILE.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-all flex items-center gap-2 group">
            View Projects
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              →
            </motion.span>
          </a>
          <a 
            href={PROFILE.resumeUrl}
            className="px-8 py-3 glass hover:bg-zinc-800 rounded-lg font-medium transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center gap-6 text-zinc-500"
        >
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors"><Github size={24} /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors"><Linkedin size={24} /></a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-brand-400 transition-colors"><Mail size={24} /></a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
      >
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-800 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PROFILE, EXPERIENCES, PROJECTS, CERTIFICATIONS, ACHIEVEMENTS, BLOGS, SKILLS, EDUCATION } from "../constants";
import { Briefcase, Code, Award, BookOpen, Mail, MapPin, ExternalLink, ChevronRight, Linkedin, GraduationCap, Cpu } from "lucide-react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && <span className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-2 block">{subtitle}</span>}
    <h2 className="text-4xl font-bold tracking-tight">{children}</h2>
    <div className="w-20 h-1 bg-brand-500 mt-4" />
  </div>
);

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle subtitle="About.Initialize()">The Architect</SectionTitle>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            {PROFILE.about}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="glass p-4 rounded-xl flex items-center gap-3">
              <MapPin className="text-brand-400" size={20} />
              <span className="text-sm font-medium">{PROFILE.location}</span>
            </div>
            <div className="glass p-4 rounded-xl flex items-center gap-3">
              <Mail className="text-brand-400" size={20} />
              <span className="text-sm font-medium">{PROFILE.email}</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-brand-500/20 rounded-2xl blur-2xl group-hover:bg-brand-500/30 transition-all" />
          <img 
            src="https://picsum.photos/seed/ai-engineer/600/600" 
            alt="AI Engineer" 
            className="relative rounded-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Experience.Log()">Professional Journey</SectionTitle>
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-2xl group hover:border-brand-500/50 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h3 className="text-2xl font-bold group-hover:text-brand-400 transition-colors">{exp.role}</h3>
                <div className="flex items-center gap-2 text-zinc-400 mt-1">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <span className="font-mono text-sm text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                {exp.period}
              </span>
            </div>
            <p className="text-zinc-400 mb-6 whitespace-pre-line">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded border border-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Education.Verify()">Academic Foundation</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl flex gap-6 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 border border-brand-500/20">
              <GraduationCap className="text-brand-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
              <p className="text-brand-400 font-medium mb-2">{edu.degree}</p>
              <span className="text-zinc-500 text-sm font-mono">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Skills.Matrix()">Technical Arsenal</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-brand-400" size={20} />
              <h3 className="text-lg font-bold tracking-tight uppercase text-zinc-300">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="text-sm px-3 py-1 bg-zinc-800/50 rounded-full border border-zinc-700/50 hover:border-brand-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Projects.Build()">Neural Works</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl overflow-hidden group"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                {project.title}
                <a href={project.link} className="text-zinc-500 hover:text-brand-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </h3>
              <p className="text-zinc-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-brand-400">#{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Certifications.Verify()">Validated Skills</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl border-l-4 border-l-brand-500"
          >
            <Award className="text-brand-400 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
            <p className="text-zinc-500 text-sm">{cert.issuer} • {cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Achievements.Rank()">Milestones</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start"
          >
            <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0 border border-brand-500/20">
              <Award className="text-brand-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{ach.title}</h3>
              <p className="text-zinc-400">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Blogs() {
  return (
    <section id="blogs" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Blogs.Read()">Technical Insights</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-brand-400" />
            Interview Experiences
          </h3>
          <div className="space-y-6">
            {BLOGS.interviewExperiences.map((blog, index) => (
              <Link 
                key={index}
                to={`/blog/${blog.id}`}
                className="block group cursor-pointer"
              >
                <motion.div whileHover={{ x: 10 }}>
                  <span className="text-xs font-mono text-zinc-500">{blog.date}</span>
                  <h4 className="text-lg font-bold group-hover:text-brand-400 transition-colors flex items-center gap-2">
                    {blog.title}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-zinc-400 text-sm mt-1">{blog.excerpt}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-brand-400" />
            Learning Blogs
          </h3>
          <div className="space-y-6">
            {BLOGS.learnings.map((blog, index) => (
              <Link 
                key={index}
                to={`/blog/${blog.id}`}
                className="block group cursor-pointer"
              >
                <motion.div whileHover={{ x: 10 }}>
                  <span className="text-xs font-mono text-zinc-500">{blog.date}</span>
                  <h4 className="text-lg font-bold group-hover:text-brand-400 transition-colors flex items-center gap-2">
                    {blog.title}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-zinc-400 text-sm mt-1">{blog.excerpt}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <SectionTitle subtitle="Contact.Connect()">Get In Touch</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-12 rounded-3xl"
      >
        <h3 className="text-3xl font-bold mb-6">Let's build something intelligent.</h3>
        <p className="text-zinc-400 mb-10 text-lg">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href={`mailto:${PROFILE.email}`}
            className="px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a 
            href="#"
            className="px-10 py-4 glass hover:bg-zinc-800 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600">
      <p className="font-mono text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Neural Precision.
      </p>
    </footer>
  );
}

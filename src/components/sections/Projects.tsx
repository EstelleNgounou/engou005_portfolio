'use client'
import { ExternalLink, GitBranch } from 'lucide-react'

import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────
// TODO: Replace with your real projects

const projects = [
  {
    title:       'AffirmBot',
    description: 'Built and deployed a conversational chatbot using Python that analyzes user input and delivers context-aware personalized affirmations through intelligent intent recognition and response mapping.',
    tags:        ['Python', 'Flask', 'Render', 'HTML', 'JavaScript', 'CSS'],
    github:      'https://github.com/EstelleNgounou/affirmbot',
    live:        'https://affirmbot.onrender.com',
  },
  {
    title:       'Rentify',
    description: 'A group project designed to connect renters with lessors, enabling users to list, request, and manage item rentals seamlessly. With dedicated functionalities for renters and lessors, the platform offers an efficient and user-friendly rental experience.',
    tags:        ['Android Studio', 'Java'],
    github:      'https://github.com/EstelleNgounou/Rentify',
    live:        '',
  },
  {
    title:       'Environmental Monitoring System',
    description: 'Engineered an IoT system to monitor critical environmental conditions (temperature, humidity, and CO2 levels) in data centers, with automated real-time alerts triggered when thresholds are exceeded.',
    tags:        ['Esp32', 'Laser Cutting', 'Sensors'],
    github:      'https://github.com/EstelleNgounou/Environmental-Monitoring-System',
    live:        '',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '6rem 1.5rem', display: 'flex', alignItems: 'center', backgroundColor: '#111318' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>03. Projects</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#E8EAF0', marginBottom: '3rem' }}>Things I&apos;ve built</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ borderColor: '#4FFFA4', scale: 1.02 }}
              transition={{ type: 'tween', duration: 0.2 }}
              style={{ backgroundColor: '#161A23', border: '1px solid #252A36', borderRadius: '0.5rem',
                padding: '1.5rem', boxShadow: '1px 2px 4px #4FFFA4' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <h3 style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: '1.1rem',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{project.title}</h3>
                <div className="flex gap-3 text-muted">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="hover:text-accent transition-colors">
                      <GitBranch size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#5A6070', fontSize: '0.875rem', padding: '0.4rem 0', marginBottom: '1.4rem'}}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

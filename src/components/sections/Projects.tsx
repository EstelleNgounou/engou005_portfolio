'use client'

import { ExternalLink, GitBranch } from 'lucide-react'
import { motion } from "framer-motion"
import { translations } from '@/data/translations'

import { type Locale } from '@/data/translations'

type ProjectsProps = {
  locale: Locale
}

export default function Projects({ locale }: ProjectsProps) {
  const t = translations[locale].projects
  // Locale passed for future translation
  return (
    <section id="projects" style={{ minHeight: '100vh', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem)', backgroundColor: '#0D0F14' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
          03. Projects
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: 'clamp(2rem, 5vw, 5rem)' }}>
          {t.heading}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 6rem)' }}>
          {t.items.map((project: any, i: number) => {
            const isEven = i % 2 === 0

            return (
              <div
                key={project.title}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}
              >
                {/* Info card — left on even, right on odd */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`order-1 md:order-${isEven ? 1 : 2}`}
                >
                  <div style={{ backgroundColor: '#161A23', border: '1px solid #252A36', borderRadius: '0.5rem', padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                    <h3 style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      {project.title}
                    </h3>

                    <p style={{ color: '#5A6072', fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.tags.map((tag: string) => (
                        <span key={tag} style={{ fontFamily: 'monospace', fontSize: 'clamp(0.65rem, 1vw, 0.75rem)', color: '#4FFFA4',
                          backgroundColor: 'rgba(79,255,164,0.08)', padding: '0.25rem 0.6rem', borderRadius: '0.25rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#5A6072', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#4FFFA4'}
                          onMouseLeave={e => e.currentTarget.style.color = '#5A6072'}
                        >
                          <GitBranch size={16} /> {t.viewCode}
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#5A6072', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#4FFFA4'}
                          onMouseLeave={e => e.currentTarget.style.color = '#5A6072'}
                        >
                          <ExternalLink size={16} /> {t.viewLive}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Image — right on even, left on odd */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                  className={`order-2 md:order-${isEven ? 2 : 1}`}
                >
                  <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid #252A36',
  backgroundColor: '#161A23' }}>
  {project.image ? (
    <img src={project.image} alt={project.title}
      style={{ width: '100%', height: 'auto', display: 'block' }} />
  ) : (
    <span style={{ color: '#252A36', fontFamily: 'monospace', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'clamp(150px, 30vw, 200px)' }}>
      screenshot coming soon
    </span>
  )}
</div>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
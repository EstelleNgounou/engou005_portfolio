'use client'
import { motion } from "framer-motion";
import { translations, type Locale } from '@/data/translations'
import { useState, useEffect } from 'react'

type AboutProps = {
  locale: Locale
}

export default function About({ locale }: AboutProps) {
  const t = translations[locale].about
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="about" style={{ minHeight: '100vh', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem)', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', width: '100%' }}>

        {/* Text */}
        <div>
          <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
            01. About me
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: '1.5rem' }}>
            {t.heading}
          </h2>
          <p style={{ color: '#5A6072', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
            {t.intro1} {t.intro2}
          </p>
          <p style={{ color: '#5A6072', lineHeight: '1.75', marginBottom: '0', fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}>
            {t.outro}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(170px, 1fr))', gap: 'clamp(0.75rem, 2.5vw, 1.25rem)', marginTop: 'clamp(2rem, 4vw, 6rem)' }}>
          {t.stats.map((stat: { value: string; label: string }, index: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ 
                borderColor: '#4FFFA4', 
                scale: 1.04,
                transition: { duration: 0.15, type: 'tween' }
              }}
              style={{
                backgroundColor: '#161A23',
                border: '1px solid #252A36',
                borderRadius: '0.75rem',
                padding: 'clamp(0.95rem, 1.8vw, 1.7rem)',
                textAlign: 'center',
                cursor: 'default',
                boxShadow: '0 0 0 1px rgba(79,255,164,0.1), 0 8px 20px rgba(0,0,0,0.25)',
                gridColumn: !isMobile && index === 0 ? '1 / -1' : undefined,
                justifySelf: !isMobile && index === 0 ? 'center' : 'stretch',
                maxWidth: !isMobile && index === 0 ? '280px' : 'auto',
                minHeight: isMobile ? '100px' : 'auto'
              }}
            >
              <span style={{display: 'block', fontSize: isMobile ? '1.5rem' : 'clamp(1.25rem, 2.5vw, 1.8rem)', fontWeight: '700', color: '#4FFFA4', marginBottom: '0.3rem', whiteSpace: 'nowrap' }}>
                {stat.value}
              </span>
              <span style={{ color: '#ACAFB8', fontSize: isMobile ? '0.8rem' : 'clamp(0.75rem, 1vw, 0.875rem)', letterSpacing: '0.05em', whiteSpace: 'nowrap', display: 'block' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
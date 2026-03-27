'use client'

import dynamic from 'next/dynamic'
import GridBackground from '@/components/three/GridBackground'
import { motion } from "framer-motion";
import { translations, type Locale } from '@/data/translations'

type HeroProps = {
  locale: Locale
}

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive 3D grid */}
      <GridBackground />

      {/* Gradient overlay so text stays readable */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-bg/30 via-transparent to-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 , once: false }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ fontSize: 'clamp(0.850rem, 2vw, 1.4rem)', color: '#4FFFA4', marginBottom: '0', fontFamily: 'monospace', marginTop: 'clamp(1.5rem, 3vw, 3rem)' }}>
          {t.greeting}
        </motion.p>

        <h1 style={{fontSize: 'clamp(1rem, 5vw, 3.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
          letterSpacing: '0.2rem', fontFamily: 'monospace', lineHeight: '1', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t.name.split("").map((letter: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false  }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7}}
              style={{ whiteSpace: 'pre' }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <h2 style={{fontSize: 'clamp(0.8rem, 3.5vw, 1.4rem)', fontWeight: '500', color: '#ACAFB8', marginBottom: '0rem',
          letterSpacing: '0.2rem', lineHeight: '1.4',  display: 'flex', justifyContent: 'center', gap: 'clamp(0.25rem, 1vw, 0.5rem)', flexWrap: 'wrap' }}>
          {t.title.split(' ').map((word: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 , once: false }}
              transition={{ delay: 1.5 + t.name.length * 0.04 + 0.3 + i * 0.15, duration: 0.9 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p initial={{ opacity: 0 }}
          viewport={{ amount: 0.3, once: false  }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 + t.name.length * 0.04 + 0.3 + t.title.split(' ').length * 0.15 + 0.3, duration: 0.6 }}
          style={{fontSize: 'clamp(0.55rem, 1.8vw, 0.8rem)', fontWeight: '500', color: '#9C9FAA', marginBottom: 'clamp(1rem, 3vw, 2.2rem)',
          letterSpacing: '0.2rem', lineHeight: '1.625', maxWidth: '36rem', marginInline: 'auto'}}>
          {t.subtitle}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up mb-6 sm:mb-8">
          <motion.a
            href="#projects"
            style={{ backgroundColor: '#4FFFA4', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', fontWeight: '600', color: '#0D0F14', borderRadius: '0.25rem',
            padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(1rem, 3vw, 2rem)', letterSpacing: '0rem', lineHeight: '1.4'}}
            transition={{ type: 'tween', duration: 0.2}}
            whileHover={{ opacity:0.65}}>
            {t.viewWork}
          </motion.a>
          <motion.a
            href="#contact"
            style={{borderWidth: '2px', borderColor: '#252A36', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', fontWeight: '600', color: '#E8EAF0', borderRadius: '0.25rem',
            padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(1rem, 3vw, 2rem)', letterSpacing: '0rem', lineHeight: '1.4'}}
            transition={{ type: 'tween', duration: 0.3}}
            whileHover={{ borderColor: '#4FFFA4', color: "#4FFFA4" }}
          >
            {t.getInTouch}
          </motion.a>
        </div>
        <a 
        href="/cv.pdf" 
        target="_blank"
        style={{color: '#5A6072', fontSize: 'clamp(0.7rem, 1vw, 0.8rem)', fontFamily: 'monospace', textDecoration: 'none',letterSpacing: '0.05em',
        borderBottom: '1px solid #252A36', paddingBottom: '1px', transition: 'color 0.2s',}}
        onMouseEnter={e => e.currentTarget.style.color = '#4FFFA4'}
        onMouseLeave={e => e.currentTarget.style.color = '#5A6072'}>
        {t.resume}
      </a>
      </div>
    </section>
  )
}

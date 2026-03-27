'use client'

import { motion } from "framer-motion"
import { translations } from '@/data/translations'

import { type Locale } from '@/data/translations'

type EducationProps = {
  locale: Locale
}

export default function Education({ locale }: EducationProps) {
  const t = translations[locale].education
  // Locale passed for future translation
  return (
    <section id="education" style={{ minHeight: '100vh', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem)', display: 'flex', alignItems: 'center', backgroundColor: '#111318' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
          04. Background
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          {t.heading}
        </h2>

        <div style={{ maxWidth: '48rem', margin: '0 auto', width: '100%' }}>       
        {/* Timeline */}
        <div style={{ position: 'relative'}}>

          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 'clamp(0.5rem, 2vw, 1rem)', top: '0.5rem', bottom: '0.5rem',
            width: '1px', backgroundColor: '#252A36' }} />

          {t.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              style={{ position: 'relative', paddingLeft: 'clamp(2rem, 4vw, 3rem)', paddingBottom: i === t.items.length - 1 ? '0' : 'clamp(1.5rem, 3vw, 3rem)' }}
            >
              {/* Dot */}
              <div style={{ position: 'absolute', left: 'clamp(0.35rem, 1.5vw, 0.6rem)', top: '0.35rem', width: '0.75rem', height: '0.75rem',
                borderRadius: '50%', backgroundColor: '#4FFFA4', border: '2px solid #111318' }} />

              {/* Badge */}
              <span style={{ fontFamily: 'monospace' , fontWeight: 'bolder',fontSize: 'clamp(0.6rem, 1vw, 0.7rem)', color: item.type === 'experience' ? '#0D0F14' : '#4FFFA4',
                backgroundColor: item.type === 'experience' ? '#4FFFA4' : 'transparent',
                border: '1px solid #4FFFA4', padding: '0.25rem 0.6rem', borderRadius: '9999px',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'inline-block' }}>
                {t.type[item.type as keyof typeof t.type]}
              </span>

              <span style={{ fontFamily: 'monospace', fontSize: 'clamp(0.65rem, 1vw, 0.75rem)', color: '#5A6072',
                letterSpacing: '0.05em', marginLeft: '0.75rem' }}>
                {item.period}
              </span>

              <h3 style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', fontWeight: '600', color: '#E8EAF0', margin: '0.4rem 0 0.2rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#4FFFA4', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', marginBottom: '0.5rem' }}>
                {item.institution}
              </p>
              <p style={{ color: '#5A6072', fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)', lineHeight: '1.75' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
          </div> 

        </div>
      </div>
    </section>
  )
}
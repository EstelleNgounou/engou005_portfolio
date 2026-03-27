'use client'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ minHeight: '100vh', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem)', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', width: '100%' }}>

        {/* Text */}
        <div>
          <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
            01. About me
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: '1.5rem' }}>
            Who I am
          </h2>
          <p style={{ color: '#5A6072', lineHeight: '1.75', marginBottom: '1rem', fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}>
            I&apos;m a recently graduated Computer Science developer, 
            eager to bring fresh perspectives and strong fundamentals to real-world challenges.
            I&apos;m actively looking for opportunities where I can contribute, grow, 
            and keep building things that matter.
          </p>
          <p style={{ color: '#5A6072', lineHeight: '1.75', fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}>
            When I&apos;m not coding, you&apos;ll find me in the kitchen baking, 
            at the gym, or spending time with my family.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(0.5rem, 2vw, 1rem)', marginTop: 'clamp(2rem, 4vw, 6rem)' }}>
          {[
            { value: '1+',  label: 'Years of experience' },
            { value: '10+', label: 'Projects completed'  },
            { value: '10+', label: 'Technologies'        },
            { value: '∞',   label: 'Coffee consumed'     },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ 
                borderColor: '#4FFFA4', 
                scale: 1.06,
                transition: { duration: 0.1, type: 'tween' }
              }}
              style={{backgroundColor: '#161A23',  border: '1px solid #252A36', borderRadius: '0.5rem',
              padding: 'clamp(1rem, 2vw, 2rem)', textAlign: 'center', cursor: 'default',  boxShadow: '1px 2px 4px #4FFFA4'}}
              >
            <span style={{display: 'block', fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', fontWeight: '700', color: '#4FFFA4', marginBottom: '0.25rem' }}>
            {stat.value}
            </span>
            <span style={{ color: '#5A6072', fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
            {stat.label}
            </span>
          </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
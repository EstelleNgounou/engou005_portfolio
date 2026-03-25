'use client'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ minHeight: '100vh', padding: '6rem 1.5rem', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>

        {/* Text */}
        <div>
          <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
            01. About me
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#E8EAF0', marginBottom: '1.5rem' }}>
            Who I am
          </h2>
          <p style={{ color: '#5A6072', lineHeight: '1.75', marginBottom: '1rem' }}>
            I&apos;m a recently graduated Computer Science developer, 
            eager to bring fresh perspectives and strong fundamentals to real-world challenges.
            I&apos;m actively looking for opportunities where I can contribute, grow, 
            and keep building things that matter.
          </p>
          <p style={{ color: '#5A6072', lineHeight: '1.75' }}>
            When I&apos;m not coding, you&apos;ll find me in the kitchen baking, 
            at the gym, or spending time with my family.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '6rem' }}>
          {[
            { value: '1+',  label: 'Years of experience' },
            { value: '10+', label: 'Projects completed'  },
            { value: '10+', label: 'Technologies'        },
            { value: '∞',   label: 'Coffee consumed'     },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ borderColor: '#4FFFA4', scale: 1.06 }}
              transition={{ type: 'tween', duration: 0.1 }}
              style={{backgroundColor: '#161A23', border: '1px solid #252A36', borderRadius: '0.5rem',
                padding: '2rem', textAlign: 'center', cursor: 'default', boxShadow: '1px 2px 4px #4FFFA4'}}
            >
              <span style={{ display: 'block', fontSize: '1.875rem', fontWeight: '700', color: '#4FFFA4', marginBottom: '0.25rem' }}>
                {stat.value}
              </span>
              <span style={{ color: '#5A6072', fontSize: '0.875rem' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
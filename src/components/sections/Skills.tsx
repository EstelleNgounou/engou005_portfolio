'use client'

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Python',                  level: 80 },
      { name: 'Java',                    level: 75 },
      { name: 'SQL',                     level: 78 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React',                level: 85 },
      { name: 'Express',              level: 78 },
      { name: 'TensorFlow / PyTorch', level: 65 },
      { name: 'Laravel',              level: 60 },
    ],
  },
  {
    category: 'Tools & Systems',
    skills: [
      { name: 'Git / GitHub',     level: 88 },
      { name: 'Visual Studio Code', level: 70 },
      { name: 'Jira / Notion',    level: 75 },
      { name: 'Android Studio',   level: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ minHeight: '100vh', padding: '6rem 1.5rem', display: 'flex', alignItems: 'center', backgroundColor: '#111318' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
          02. Skills
        </p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#E8EAF0', marginBottom: '3rem' }}>
          My tech stack
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              whileHover={{ borderColor: '#4FFFA4', scale: 1.02 }}
              transition={{ type: 'tween', duration: 0.2 }}
              style={{ backgroundColor: '#161A23', border: '1px solid #252A36', borderRadius: '0.5rem',
                padding: '1.5rem', boxShadow: '1px 2px 4px #4FFFA4' }}
            >
              <h3 style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: '1.1rem',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {group.category}
              </h3>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0 }}>
                {group.skills.map((skill) => (
                  <li key={skill.name} style={{ 
                    color: '#E8EAF0', 
                    fontSize: '0.875rem',
                    padding: '0.4rem 0',
                    borderBottom: '3px solid #4FFFA4'
                  }}>
                    {skill.name}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
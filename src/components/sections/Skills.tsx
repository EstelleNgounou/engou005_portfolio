'use client'

import { motion } from "framer-motion"
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiOpenjdk, 
  SiMysql,
  SiReact, 
  SiExpress, 
  SiTensorflow, 
  SiLaravel,
  SiGit, 
  SiJirasoftware, 
  SiAndroid 
} from 'react-icons/si'
import { DiVisualstudio } from "react-icons/di"

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript / TypeScript', icon: SiJavascript },
      { name: 'Python',                   icon: SiPython },
      { name: 'Java',                     icon: SiOpenjdk },
      { name: 'SQL',                      icon: SiMysql },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React',                 icon: SiReact },
      { name: 'Express',                icon: SiExpress },
      { name: 'TensorFlow / PyTorch',  icon: SiTensorflow },
      { name: 'Laravel',               icon: SiLaravel },
    ],
  },
  {
    category: 'Tools & Systems',
    skills: [
      { name: 'Git / GitHub',      icon: SiGit },
      { name: 'VS Code', icon: DiVisualstudio },
      { name: 'Jira / Notion',    icon: SiJirasoftware },
      { name: 'Android Studio',    icon: SiAndroid },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ minHeight: '100vh', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem)', display: 'flex', alignItems: 'center', backgroundColor: '#111318' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
          02. Skills
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }}>
          My tech stack
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 3vw, 2rem)' }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.5 }}
              whileHover={{ borderColor: '#4FFFA4', scale: 1.02, transition: { type: 'tween', duration: 0.2 } }}
              style={{ backgroundColor: '#161A23', border: '1px solid #252A36', borderRadius: '0.5rem',
                padding: 'clamp(1rem, 3vw, 1.5rem)', boxShadow: '1px 2px 4px #4FFFA4' }}
            >
              <h3 style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {group.category}
              </h3>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0 }}>
                {group.skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: i * 0.1 + index * 0.05 }}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: '#E8EAF0', 
                      fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)',
                      padding: '0.6rem 0',
                      borderBottom: '2px dotted #4FFFA4'
                    }}
                  >
                    <span>{skill.name}</span>
                    <skill.icon style={{ color: '#4FFFA4', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }} />
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
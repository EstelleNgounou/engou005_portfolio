'use client'

import { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div style={{maxWidth:'100%',marginLeft:'0', padding: '1.3rem',display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
        {/* Logo / Name */}
        <span className="font-mono text-accent text-sm tracking-widest uppercase">
          {'<Estelle Laeticia Ngounou/>'}
        </span>
        </div>

        <div style={{gap: '4rem' , display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                transition={{ type: 'spring', stiffness: 100 }}
                whileHover={{ scale:1.1, color: "#4FFFA4" }}
                style={{color: '#c5c7d0', fontSize: '1rem', textDecoration: 'none', fontFamily: 'monospace'}}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1, backgroundColor: "#2ecc71", color: "#000000" }}
          style={{fontSize: '0.875rem', border: '1px solid #4FFFA4', color: '#4FFFA4', padding: '0.5rem 1rem',
          borderRadius: '4px', textDecoration: 'none', fontFamily: 'monospace', transition: 'all 0.2s'
        }} 
        >
          HIRE ME
        </motion.a>
        </div>
      </div>
    </nav>
  )
}

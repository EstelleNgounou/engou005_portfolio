'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react'
 
const home = [{ label: 'Hero',     href: '#hero'     }]

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Background', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileMenu = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div style={{maxWidth:'100%',marginLeft:'0', padding: 'clamp(0.8rem, 2%, 1.3rem)', display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        {/* Logo / Name */}
        <a href='#hero'
          className="font-mono text-accent text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap">
          {'<Estelle/>'}
        </a>

        <div style={{gap: 'clamp(1rem, 3vw, 4rem)', display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                transition={{ type: 'spring', stiffness: 100 }}
                whileHover={{ scale:1.1, color: "#4FFFA4" }}
                style={{color: '#c5c7d0', fontSize: 'clamp(0.75rem, 1vw, 1rem)', textDecoration: 'none', fontFamily: 'monospace'}}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1, backgroundColor: "#2ecc71", color: "#000000" }}
          style={{fontSize: 'clamp(0.7rem, 1vw, 0.875rem)', border: '1px solid #4FFFA4', color: '#4FFFA4', padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.7rem, 2vw, 1rem)',
          borderRadius: '4px', textDecoration: 'none', fontFamily: 'monospace', transition: 'all 0.2s', display: 'none'}}
          className="hidden md:inline-block"
        >
          HIRE ME
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-accent z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#161A23',
              borderBottom: '1px solid #252A36',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 40
            }}
          >
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', listStyle: 'none'}}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    style={{
                      color: '#c5c7d0',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      fontFamily: 'monospace',
                      display: 'block',
                      padding: '0.75rem 0',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#4FFFA4'}
                    onMouseLeave={e => e.currentTarget.style.color = '#c5c7d0'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  style={{
                    fontSize: '0.875rem',
                    border: '1px solid #4FFFA4',
                    color: '#4FFFA4',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontFamily: 'monospace',
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#4FFFA4'
                    e.currentTarget.style.color = '#0D0F14'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#4FFFA4'
                  }}
                >
                  HIRE ME
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

'use client'

import dynamic from 'next/dynamic'
import GridBackground from '@/components/three/GridBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive 3D grid */}
      <GridBackground />

      {/* Gradient overlay so text stays readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg/30 via-transparent to-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="font-mono text-accent text-sm tracking-widest mb-4 animate-fade-in">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-text mb-4 animate-fade-up">
          Your Name
        </h1>

        <h2 className="text-xl md:text-2xl text-muted mb-8 animate-fade-up font-light">
          Full Stack Developer
        </h2>

        <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up">
          I build modern, scalable web applications — from pixel-perfect interfaces 
          to robust backend systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#projects"
            className="bg-accent text-bg font-semibold px-8 py-3 rounded 
                       hover:opacity-90 transition-opacity duration-200 w-full sm:w-auto text-center"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-border text-text px-8 py-3 rounded 
                       hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto text-center"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-muted text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  )
}
